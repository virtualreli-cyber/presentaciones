import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { scanCurriculum } from './scan.mjs';

console.log('🚀 Iniciando compilación global del portal y presentaciones...\n');

// 1. Aplicar parche de Slidev si es necesario
try {
  execSync('node scripts/patch-slidev.mjs', { stdio: 'inherit' });
} catch (e) {
  console.warn('Advertencia al aplicar parche:', e.message);
}

// 2. Escanear presentaciones y regenerar catálogo
console.log('🔍 Escaneando presentaciones...');
const curriculum = await scanCurriculum();
const portalDataDir = path.resolve('portal/data');
fs.mkdirSync(portalDataDir, { recursive: true });
fs.writeFileSync(path.join(portalDataDir, 'curriculum.json'), JSON.stringify(curriculum, null, 2), 'utf8');

// 3. Preparar carpeta dist
const distDir = path.resolve('dist');
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// 4. Copiar portal a dist
console.log('📦 Copiando aplicación web del portal a dist/...');
fs.cpSync(path.resolve('portal'), distDir, { recursive: true });
// Asegurar que GitHub Pages no use Jekyll para procesar assets
fs.writeFileSync(path.join(distDir, '.nojekyll'), '', 'utf8');

// 5. Localizar binario de slidev
let slidevBin = 'npx slidev';
if (fs.existsSync(path.resolve('node_modules/.bin/slidev'))) {
  slidevBin = path.resolve('node_modules/.bin/slidev');
} else if (fs.existsSync(path.resolve('Slidev/plantilla/node_modules/.bin/slidev'))) {
  slidevBin = path.resolve('Slidev/plantilla/node_modules/.bin/slidev');
}

// 6. Compilar cada deck
const allTemas = curriculum.flatMap(c => c.temas);
console.log(`\n📚 Compilando ${allTemas.length} presentaciones con Slidev:`);

// En GitHub Pages, el sitio se aloja en /<nombre-repo>/ (ej: /presentaciones/)
const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : '';
const basePrefix = process.env.BASE_PREFIX || (repoName ? `/${repoName}` : '');
if (basePrefix) {
  console.log(`ℹ️ Prefijo base detectado para subpath: ${basePrefix}`);
}

for (let i = 0; i < allTemas.length; i++) {
  const tema = allTemas[i];
  const deckOut = path.join(distDir, 'decks', tema.id);
  const baseParam = `${basePrefix}/decks/${tema.id}/`;

  console.log(`\n[${i + 1}/${allTemas.length}] Compilando: ${tema.id} (${tema.titulo})...`);
  const cmd = `"${slidevBin}" build "${tema.rutaRelativa}" --base "${baseParam}" --out "${deckOut}" --router-mode hash`;

  try {
    execSync(cmd, { stdio: 'inherit', cwd: process.cwd() });
    console.log(`✅ ${tema.id} compilado con éxito en dist/decks/${tema.id}/`);
  } catch (error) {
    console.error(`❌ Error al compilar ${tema.id}:`, error.message);
    process.exit(1);
  }
}

console.log('\n🎉 ¡Compilación completada con éxito!');
console.log('📁 Carpeta dist/ lista para desplegar en Netlify o GitHub Pages.');

