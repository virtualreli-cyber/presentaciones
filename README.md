# 📖 Portal de Presentaciones Didácticas · Religión Católica
> Portal web de aula y catálogo interactivo de presentaciones en **Slidev** para Educación Secundaria Obligatoria (**1º a 4º de ESO**) y **1º de Bachillerato**.

Diseñado para proyectarse en aulas, pizarras digitales y proyectores, con soporte **bilingüe completo (Castellano y Valencià AVL)** y selector instantáneo de sesión.

---

## 🚀 Inicio Rápido

### 1. Previsualizar el Portal en Local
Para abrir el portal docente en tu ordenador y probar las presentaciones:
```bash
npm run dev
```
Abre tu navegador en: **`http://localhost:8080`**

### 2. Compilar todo para Producción (Netlify / GitHub)
Para compilar todas las presentaciones de todos los cursos y el portal web en la carpeta `dist/`:
```bash
npm run build
```

---

## 📁 Estructura del Proyecto: ¿Dónde colocar cada nuevo tema?

Toda la organización de contenidos se encuentra dentro de la carpeta **`presentaciones/`**:

```text
Presentaciones/
├── presentaciones/              <-- 📂 AQUÍ COLOCAS TUS TEMAS EN FORMATO MARKDOWN
│   ├── 1eso/
│   │   ├── tema-01/
│   │   │   └── slides.md        <-- Presentación del Tema 1 de 1º ESO
│   │   └── tema-02/             <-- ¡Para añadir el Tema 2, crea esta carpeta!
│   │       └── slides.md
│   ├── 2eso/
│   │   └── tema-01/
│   │       └── slides.md
│   ├── 3eso/
│   │   └── tema-01/
│   │       └── slides.md
│   ├── 4eso/
│   │   └── tema-01/
│   │       └── slides.md
│   └── 1bach/
│       └── tema-01/
│           └── slides.md
│
├── portal/                      <-- 🌐 Aplicación web del Portal (Dashboard)
│   ├── index.html               <-- Interfaz de usuario
│   ├── app.js                   <-- Lógica del catálogo y modales
│   ├── styles.css               <-- Estilos visuales
│   └── data/
│       └── curriculum.json      <-- Catálogo indexado automáticamente
│
├── scripts/                     <-- ⚙️ Automatizaciones y utilidades
│   ├── scan.mjs                 <-- Escanea presentaciones y genera curriculum.json
│   ├── build.mjs                <-- Compila todas las presentaciones para Netlify
│   ├── dev.mjs                  <-- Servidor local de desarrollo
│   └── patch-slidev.mjs         <-- Parche de compatibilidad de estilos
│
├── Slidev/
│   └── plantilla/               <-- Plantilla y temas originales de Slidev
│
├── netlify.toml                 <-- Configuración lista para Netlify
└── .github/workflows/deploy.yml <-- Workflow listo para GitHub Pages
```

---

## 📝 Cómo Crear un Nuevo Tema Paso a Paso

Cuando quieras crear un nuevo tema (por ejemplo, el **Tema 2 de 2º de ESO**):

### Paso 1: Crea la carpeta del tema
Crea una carpeta dentro del curso correspondiente:
```bash
mkdir -p presentaciones/2eso/tema-02
```

### Paso 2: Crea el archivo `slides.md`
Crea el archivo `presentaciones/2eso/tema-02/slides.md` siguiendo la plantilla bilingüe estructurada.

### Paso 3: Estructura interna de cada `slides.md`

Cada tema debe seguir la siguiente estructura:

1. **Frontmatter inicial:**
   ```markdown
   ---
   theme: default
   layout: default
   title: "Título de la Unidad Didáctica"
   class: "text-slate-800 bg-white"
   ---
   ```

2. **Sesión 1 (Castellano):**
   - Portada con clase `p-8 text-center bg-white`, título `#ea580c`, `Sesión 1` y subtítulo.
   - Diapositivas de contenido de la sesión 1 (con badges, tarjetas coloreadas, viñetas y `v-click`).

3. **Sesión 2 (Castellano):**
   - Portada idéntica con el mismo título de la unidad, `Sesión 2` y su nuevo subtítulo.
   - Diapositivas de contenido de la sesión 2.

4. **Proyecto / Trabajo Final (Castellano):**
   - Portada con el mismo título de la unidad, `Proyecto Final` y subtítulo con el título del proyecto.
   - **3 o 4 diapositivas** explicando:
     - Objetivos y número de sesiones necesarias (ej. 3 sesiones).
     - Planificación y qué se hace en cada sesión de trabajo.
     - Tareas prácticas y entregables de los alumnos.
     - Criterios de evaluación y rúbrica ponderada.

5. **Diapositiva Separadora de Idioma en color Ámbar:**
   ```markdown
   ---
   layout: default
   class: "bg-amber-500 text-white flex flex-col justify-center items-center h-full"
   ---

   <div class="text-center">
     <div class="text-xs uppercase tracking-widest font-bold opacity-80 mb-2">
       Bloc Lingüístic Oficial
     </div>
     <div class="text-4xl font-extrabold tracking-tight">
       VERSIÓ EN VALENCIÀ (AVL)
     </div>
     <div class="text-sm mt-3 opacity-90 font-medium">
       Unitat Didàctica · [Curs]: [Títol del Tema]
     </div>
   </div>
   ```

6. **Bloque íntegro en Valenciano (AVL):**
   - Portada `Sessió 1` + diapositivas en valenciano.
   - Portada `Sessió 2` + diapositivas en valenciano.
   - Portada `Projecte Final` + las 3-4 diapositivas de proyecto y rúbrica en valenciano.

---

## ⚡ ¿Cómo se actualiza el portal tras crear o modificar un tema?

**¡No tienes que tocar ninguna línea de código de la web!** El sistema cuenta con un escáner inteligente:

- Para actualizar el catálogo localmente en un segundo:
  ```bash
  npm run scan
  ```
  *El escáner detectará el nuevo tema, contará las diapositivas de cada sesión y registrará el punto de inicio tanto en castellano como en valenciano.*

- Para compilar el proyecto completo para subir a internet:
  ```bash
  npm run build
  ```

---

## 🌐 Cómo Alojar en Netlify y GitHub

### Opción A: Despliegue en Netlify (Recomendado)
1. Sube tu proyecto a un repositorio en **GitHub**.
2. Entra en [Netlify](https://app.netlify.com/) y pulsa **"Add new site" > "Import an existing project"**.
3. Selecciona tu repositorio de GitHub.
4. Netlify detectará automáticamente el archivo `netlify.toml` con la siguiente configuración:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Pulsa **"Deploy site"**. ¡Listo! Cada vez que hagas `git push` a GitHub con nuevos temas, Netlify compilará y actualizará el portal automáticamente.

### Opción B: Despliegue en GitHub Pages
El proyecto ya incluye el flujo automatizado en `.github/workflows/deploy.yml`:
1. Sube el proyecto a tu repositorio de GitHub.
2. En GitHub, ve a **Settings > Pages**.
3. En **Source**, selecciona **"GitHub Actions"**.
4. Cada vez que hagas `git push`, GitHub Actions compilará Slidev y publicará la web en tu enlace de GitHub Pages.

---

## 🎯 Temas de Prueba Incluidos en este Proyecto

| Curso | Unidad Didáctica | Sesiones | Proyecto Final | Idiomas |
| :--- | :--- | :---: | :--- | :---: |
| **1º ESO** | *La Creación y la Casa Común* | 2 Sesiones | Campaña «Guardianes de la Creación» (Huerto/Sostenibilidad) | ES + VAL (AVL) |
| **2º ESO** | *Los Siete Sacramentos* | 2 Sesiones | Guía Multimedia «Signos Sagrados en Nuestra Comunidad» | ES + VAL (AVL) |
| **3º ESO** | *Dignidad Humana y Compromiso Social* | 2 Sesiones | Pódcast Escolar «Voces que Transforman: Voluntariado y Cáritas» | ES + VAL (AVL) |
| **4º ESO** | *Fe y Razón: El Diálogo Contemporáneo* | 2 Sesiones | Torneo de Debate Académico «Ciencia, Ética y Trascendencia» | ES + VAL (AVL) |
| **1º Bachillerato** | *El Sentido de la Existencia y el Mal* | 2 Sesiones | Seminario Académico «Disertación Crítica: El Sentido y el Dolor» | ES + VAL (AVL) |
