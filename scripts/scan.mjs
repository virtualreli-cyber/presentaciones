import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Localizar el parser de Slidev de forma dinámica
const possibleParserPaths = [
  path.resolve('node_modules/@slidev/parser/dist/core.mjs'),
  path.resolve('Slidev/plantilla/node_modules/@slidev/parser/dist/core.mjs')
];

let parseFunc = null;
for (const p of possibleParserPaths) {
  if (fs.existsSync(p)) {
    const mod = await import(p);
    parseFunc = mod.parse;
    break;
  }
}

if (!parseFunc) {
  try {
    const mod = await import('@slidev/parser');
    parseFunc = mod.parse;
  } catch (err) {
    console.warn('[scan] @slidev/parser no disponible, usando analizador integrado.');
  }
}

const CURSOS_CONFIG = [
  { id: '1eso', nombre: '1º de ESO', etapa: 'Educación Secundaria Obligatoria', orden: 1, color: '#f97316', icon: '🌱' },
  { id: '2eso', nombre: '2º de ESO', etapa: 'Educación Secundaria Obligatoria', orden: 2, color: '#ea580c', icon: '🕊️' },
  { id: '3eso', nombre: '3º de ESO', etapa: 'Educación Secundaria Obligatoria', orden: 3, color: '#c2410c', icon: '🤝' },
  { id: '4eso', nombre: '4º de ESO', etapa: 'Educación Secundaria Obligatoria', orden: 4, color: '#9a3412', icon: '🔭' },
  { id: '1bach', nombre: '1º de Bachillerato', etapa: 'Bachillerato', orden: 5, color: '#7c2d12', icon: '🏛️' }
];

function nativeParse(content) {
  const norm = content.replace(/\r\n/g, '\n');
  const rawParts = norm.split(/\n---\n/);
  const slides = [];
  for (let i = 0; i < rawParts.length; i++) {
    const part = rawParts[i];
    if (i === 0 && part.startsWith('---')) continue;
    slides.push({ content: part });
  }
  return { slides };
}

export async function parseSlidesWithSlidev(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const parsedDeck = parseFunc ? await parseFunc(content) : nativeParse(content);

  const totalSlides = parsedDeck.slides.length;
  let separatorSlide = -1;

  // Localizar la diapositiva separadora oficial en ámbar
  for (let i = 0; i < totalSlides; i++) {
    const s = parsedDeck.slides[i];
    if (s.content.includes('VERSIÓ EN VALENCIÀ') || s.content.includes('Bloc Lingüístic Oficial')) {
      separatorSlide = i + 1; // 1-based para URLs
      break;
    }
  }

  const sessionsES = [];
  const sessionsVAL = [];

  for (let i = 0; i < totalSlides; i++) {
    const s = parsedDeck.slides[i];
    const slideNumber = i + 1; // Slidev URLs usan 1-based: #1, #2, ...
    const text = s.content;

    // Reconocer sólo portadas reales de sesión/proyecto (tienen el contenedor de portada p-8 text-center)
    const isCover = text.includes('p-8 text-center bg-white');
    if (!isCover) continue;

    const isValenciano = separatorSlide !== -1 && slideNumber > separatorSlide;

    // Detectar si es sesión numerada
    const sesionMatch = text.match(/<div class="[^"]*font-bold[^"]*">\s*(?:Sesión|Sessió)\s+(\d+)\s*<\/div>/i) ||
                        text.match(/(?:Sesión|Sessió)\s+(\d+)/i);

    // Detectar si es proyecto/trabajo final
    const isProject = /(?:Proyecto\s+Final|Projecte\s+Final|Trabajo\s+Final|Treball\s+Final|Trabajo\s+de\s+Aprendizaje)/i.test(text);

    // Extraer subtítulo
    let subtitle = '';
    const subtitleMatch = text.match(/<p class="[^"]*font-medium[^"]*">([\s\S]*?)<\/p>/i);
    if (subtitleMatch) {
      subtitle = subtitleMatch[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    }

    if (sesionMatch && !isProject) {
      const numSesion = parseInt(sesionMatch[1], 10);
      const item = {
        num: numSesion,
        tipo: 'sesion',
        titulo: isValenciano ? `Sessió ${numSesion}` : `Sesión ${numSesion}`,
        subtitulo: subtitle,
        slideNumber
      };
      if (isValenciano) {
        sessionsVAL.push(item);
      } else {
        sessionsES.push(item);
      }
    } else if (isProject) {
      const item = {
        num: 99,
        tipo: 'proyecto',
        titulo: isValenciano ? 'Projecte Final' : 'Proyecto Final',
        subtitulo: subtitle,
        slideNumber
      };
      if (isValenciano) {
        sessionsVAL.push(item);
      } else {
        sessionsES.push(item);
      }
    }
  }

  return {
    totalSlides,
    separatorSlide,
    castellano: {
      sessions: sessionsES,
      startSlide: 1
    },
    valenciano: {
      sessions: sessionsVAL,
      startSlide: separatorSlide !== -1 ? separatorSlide + 1 : 1
    }
  };
}

export async function scanCurriculum() {
  const baseDir = path.resolve('presentaciones');
  if (!fs.existsSync(baseDir)) {
    console.error('El directorio presentaciones/ no existe.');
    return [];
  }

  const result = [];

  for (const cursoConfig of CURSOS_CONFIG) {
    const cursoPath = path.join(baseDir, cursoConfig.id);
    const temas = [];

    if (fs.existsSync(cursoPath)) {
      const entries = fs.readdirSync(cursoPath, { withFileTypes: true });
      for (const entry of entries) {
        const foundFiles = [];

        if (entry.isDirectory()) {
          const temaDir = path.join(cursoPath, entry.name);
          const dirFiles = fs.readdirSync(temaDir);
          // Obtener todos los archivos .md (excluyendo README)
          const mdFiles = dirFiles.filter(f => f.endsWith('.md') && !f.toLowerCase().startsWith('readme'));

          for (const file of mdFiles) {
            const fileSlug = file.replace(/\.md$/i, '');
            // Si solo hay un archivo .md en la carpeta, el slug es el nombre de la carpeta (ej. tema-01)
            // Si hay varios, se combinan para que cada presentación tenga su ID y tarjeta única
            const slug = mdFiles.length === 1
              ? entry.name
              : (file.toLowerCase() === 'slides.md' ? entry.name : `${entry.name}-${fileSlug}`);

            foundFiles.push({
              filePath: path.join(temaDir, file),
              slug,
              fileName: file
            });
          }
        } else if (entry.isFile() && entry.name.endsWith('.md') && !entry.name.toLowerCase().startsWith('readme')) {
          const fileSlug = entry.name.replace(/\.md$/i, '');
          foundFiles.push({
            filePath: path.join(cursoPath, entry.name),
            slug: fileSlug,
            fileName: entry.name
          });
        }

        for (const item of foundFiles) {
          const slidesFile = item.filePath;
          const temaSlug = item.slug;
          const parsed = await parseSlidesWithSlidev(slidesFile);

          const temaMatch = temaSlug.match(/tema-(\d+)/i) || item.fileName.match(/tema-(\d+)/i) || item.fileName.match(/^(\d+)/);
          const numTema = temaMatch ? parseInt(temaMatch[1], 10) : 1;

          const fileContent = fs.readFileSync(slidesFile, 'utf8');
          const h1Match = fileContent.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
          let tituloH1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : '';
          if (!tituloH1) {
            const mdH1 = fileContent.match(/^#\s+(.+)$/m);
            tituloH1 = mdH1 ? mdH1[1].trim() : item.slug.replace(/[-_]/g, ' ');
          }

          temas.push({
            id: `${cursoConfig.id}-${temaSlug}`,
            slug: temaSlug,
            numeroTema: numTema,
            titulo: tituloH1,
            rutaRelativa: path.relative(process.cwd(), slidesFile),
            deckBase: `decks/${cursoConfig.id}-${temaSlug}/`,
            deckUrl: `decks/${cursoConfig.id}-${temaSlug}/index.html`,
            totalSlides: parsed.totalSlides,
            separatorSlide: parsed.separatorSlide,
            castellano: parsed.castellano,
            valenciano: parsed.valenciano
          });
        }
      }
    }

    temas.sort((a, b) => a.numeroTema - b.numeroTema);

    result.push({
      ...cursoConfig,
      totalTemas: temas.length,
      temas
    });
  }

  return result;
}

// Generar portal/data/curriculum.json
const curriculum = await scanCurriculum();
const outDir = path.resolve('portal/data');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'curriculum.json'), JSON.stringify(curriculum, null, 2), 'utf8');
console.log(`[scan] Catálogo verificado y guardado en portal/data/curriculum.json (${curriculum.reduce((acc, c) => acc + c.temas.length, 0)} temas encontrados)`);
