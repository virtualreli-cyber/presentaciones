---
theme: default
title: Plantilla Maestra Didáctica
info: Plantilla pedagógica de alta visibilidad para proyección en aula (ESO y Bachillerato).
class: text-slate-800 bg-white
drawings:
  persist: false
transition: slide-left
mdc: true
---

<script setup>
import { ref } from 'vue'

// Estado reactivo Slide 08 (Semáforo)
const votosRojo = ref(0)
const votosAmbar = ref(0)
const votosVerde = ref(0)

function reiniciarVotos() {
  votosRojo.value = 0
  votosAmbar.value = 0
  votosVerde.value = 0
}

// Estado reactivo Slide 09 (Laboratorio de clasificación)
const estadoCaso1 = ref('pendiente')
const estadoCaso2 = ref('pendiente')
const estadoCaso3 = ref('pendiente')

function clasificar(caso, zona) {
  if (caso === 1) estadoCaso1.value = zona
  if (caso === 2) estadoCaso2.value = zona
  if (caso === 3) estadoCaso3.value = zona
}

function resetLaboratorio() {
  estadoCaso1.value = 'pendiente'
  estadoCaso2.value = 'pendiente'
  estadoCaso3.value = 'pendiente'
}

// Estado reactivo Slide 16 (Debate de 4 esquinas)
const esquinaActiva = ref(0)
</script>

<style>
.slidev-layout {
  background-color: #ffffff !important;
  color: #0f172a !important;
  padding: 1.35rem 2.5rem !important;
}

.slidev-layout h1,
.slidev-layout h2,
.slide-title {
  color: #ea580c !important; /* Naranja en todos los títulos */
}

.slide-header {
  height: 3.1rem;
  margin-bottom: 0.9rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom: 2px solid #f1f5f9;
  padding-bottom: 0.35rem;
}

.slide-title {
  font-size: 1.6rem !important;
  font-weight: 800 !important;
  line-height: 1.15 !important;
  letter-spacing: -0.02em !important;
}

.slide-badge {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.15rem 0.55rem;
  border-radius: 9999px;
  margin-bottom: 0.2rem;
}

.slide-meta {
  font-size: 0.82rem;
  font-weight: 600;
  color: #64748b;
}
</style>

<!-- SLIDE 01: PORTADA TIPO -->
<div class="h-full flex flex-col justify-between py-2 text-center">
<div class="flex items-center justify-between border-b border-orange-100 pb-2 mb-8">
<span class="text-xs font-bold tracking-wider uppercase text-orange-600">Departamento de Religión Católica</span>
<span class="text-xs font-bold px-3 py-0.5 rounded-full bg-orange-50 text-orange-700 border border-orange-200">Unidad 00</span>
</div>

<div class="my-auto px-4">
<h1 class="text-4xl font-extrabold text-orange-600 tracking-tight leading-snug mb-3">
Título del Tema o Pregunta Detonante
</h1>
<p class="text-xl font-medium text-slate-600 max-w-xl mx-auto leading-relaxed">
Subtítulo breve que define el propósito vital o antropológico de la unidad
</p>
</div>

<div class="mt-auto text-xs text-slate-400 font-medium pb-2">
Nivel Educativo · Curso Escolar
</div>
</div>

<!--
Notas de la plantilla:
- Proyectar al recibir al alumnado en el aula.
-->

---

<!-- SLIDE 02: CONCEPTOS NUCLEARES EN 3 COLUMNAS -->
<header class="slide-header">
<div>
<span class="slide-badge bg-sky-100 text-sky-800">TEORÍA Y CONCEPTOS</span>
<h2 class="slide-title">Conceptos Teóricos Nucleares</h2>
</div>
<span class="slide-meta">Slide Tipo 02 · 3 Columnas</span>
</header>

<div class="grid grid-cols-3 gap-4">
<div v-click class="p-4 rounded-xl bg-sky-50 border border-sky-200 flex flex-col justify-between">
<div>
<div class="w-8 h-8 rounded-lg bg-sky-200 text-sky-900 font-extrabold flex items-center justify-center text-sm mb-2">
01
</div>
<h3 class="text-base font-bold text-slate-900 mb-1.5">Pilar Principal</h3>
<p class="text-xs text-slate-800 leading-relaxed">
Escribe aquí la tesis o definición nuclear. Ideal para presentar el principio básico que fundamenta toda la explicación teórica de la sesión.
</p>
</div>
<div class="mt-3 pt-2 border-t border-sky-200 text-xs font-bold text-sky-900">
Punto de partida conceptual
</div>
</div>

<div v-click class="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col justify-between">
<div>
<div class="w-8 h-8 rounded-lg bg-emerald-200 text-emerald-900 font-extrabold flex items-center justify-center text-sm mb-2">
02
</div>
<h3 class="text-base font-bold text-slate-900 mb-1.5">Dimensión Relacional</h3>
<p class="text-xs text-slate-800 leading-relaxed">
Desarrolla aquí el segundo concepto complementario. Suele emplearse para conectar la idea base con la sociedad, la comunidad o la relación con el prójimo.
</p>
</div>
<div class="mt-3 pt-2 border-t border-emerald-200 text-xs font-bold text-emerald-900">
Aplicación comunitaria
</div>
</div>

<div v-click class="p-4 rounded-xl bg-amber-50 border border-amber-200 flex flex-col justify-between">
<div>
<div class="w-8 h-8 rounded-lg bg-amber-200 text-amber-900 font-extrabold flex items-center justify-center text-sm mb-2">
03
</div>
<h3 class="text-base font-bold text-slate-900 mb-1.5">Proyección Ética</h3>
<p class="text-xs text-slate-800 leading-relaxed">
Añade aquí la consecuencia práctica, la libertad moral o el sentido existencial que se deduce de los dos conceptos presentados anteriormente.
</p>
</div>
<div class="mt-3 pt-2 border-t border-amber-200 text-xs font-bold text-amber-900">
Consecuencia moral
</div>
</div>
</div>

<!--
Notas de la plantilla:
- Cada clic revela una tarjeta secuencialmente.
-->

---

<!-- SLIDE 03: PROSA EXPLICATIVA CON CAJETÍN LATERAL -->
<header class="slide-header">
<div>
<span class="slide-badge bg-sky-100 text-sky-800">TEORÍA Y CONCEPTOS</span>
<h2 class="slide-title">Desarrollo Teórico en Prosa</h2>
</div>
<span class="slide-meta">Slide Tipo 03 · Texto Continuo</span>
</header>

<div class="grid grid-cols-12 gap-5">
<div class="col-span-8 flex flex-col justify-between">
<v-clicks>
<p class="text-sm text-slate-800 leading-relaxed mb-3">
<strong>1. Planteamiento de la tesis:</strong> Redacta aquí el primer párrafo explicativo sin necesidad de recuadros. Este formato permite que la teoría fluya de manera natural y con rigor narrativo.
</p>
<p class="text-sm text-slate-800 leading-relaxed mb-3">
<strong>2. Argumentación central:</strong> Desarrolla el núcleo de la lección con los matices necesarios. Al revelarse mediante clics sucesivos, el alumnado lee al ritmo de tu explicación oral.
</p>
<p class="text-sm text-slate-800 leading-relaxed">
<strong>3. Conclusión del argumento:</strong> Cierra el razonamiento con la implicación principal del concepto para enlazar con la siguiente actividad o reflexión.
</p>
</v-clicks>
</div>

<div class="col-span-4 p-4 rounded-xl bg-sky-50 border border-sky-200 flex flex-col justify-between">
<div>
<span class="text-xs font-bold px-2 py-0.5 rounded bg-sky-200 text-sky-900 uppercase">Idea Clave</span>
<h3 class="text-base font-bold text-slate-900 mt-2 mb-2">Cajetín de Soporte</h3>
<p class="text-xs text-slate-700 leading-relaxed">
Coloca en esta columna lateral una cita textual, una definición técnica o un esquema sintético que acompañe y refuerce la lectura del texto principal.
</p>
</div>
<div class="p-2 bg-white rounded border border-sky-200 text-xs text-sky-950 font-bold text-center mt-3">
Foco de fijación visual
</div>
</div>
</div>

<!--
Notas de la plantilla:
- Úsala cuando necesites rigor expositivo sin fragmentar excesivamente el contenido en tarjetas.
-->

---

<!-- SLIDE 04: CONTRAPOSICIÓN DIALÉCTICA -->
<header class="slide-header">
<div>
<span class="slide-badge bg-rose-100 text-rose-800">COMPARACIÓN Y DIALÉCTICA</span>
<h2 class="slide-title">Comparativa y Contraposición</h2>
</div>
<span class="slide-meta">Slide Tipo 04 · Dos Bloques</span>
</header>

<div class="grid grid-cols-2 gap-5">
<div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
<div>
<span class="inline-block px-2 py-0.5 rounded bg-slate-200 text-slate-800 text-xs font-bold mb-2">
PERSPECTIVA A (TESIS / CRÍTICA)
</span>
<h3 class="text-base font-bold text-slate-900 mb-2">Modelo o Postura 1</h3>
<div class="space-y-2 text-xs text-slate-800">
<p v-click class="flex items-start gap-2">
<span class="text-rose-600 font-bold">✕</span>
<span><strong>Premisa 1:</strong> Describe el primer rasgo limitante, reduccionista o la postura contraria a examinar.</span>
</p>
<p v-click class="flex items-start gap-2">
<span class="text-rose-600 font-bold">✕</span>
<span><strong>Premisa 2:</strong> Señala la consecuencia negativa o el punto débil de este planteamiento.</span>
</p>
</div>
</div>
<div class="p-2 bg-white rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 mt-3">
Efecto: Señala el impacto social o personal de esta visión.
</div>
</div>

<div class="p-4 rounded-xl bg-sky-50 border border-sky-200 flex flex-col justify-between">
<div>
<span class="inline-block px-2 py-0.5 rounded bg-sky-200 text-sky-900 text-xs font-bold mb-2">
PERSPECTIVA B (ANTÍTESIS / PROPUESTA)
</span>
<h3 class="text-base font-bold text-slate-900 mb-2">Modelo o Postura 2</h3>
<div class="space-y-2 text-xs text-slate-800">
<p v-click class="flex items-start gap-2">
<span class="text-sky-700 font-bold">✓</span>
<span><strong>Principio 1:</strong> Plantea la alternativa enriquecedora, la propuesta humanizadora o la visión cristiana.</span>
</p>
<p v-click class="flex items-start gap-2">
<span class="text-sky-700 font-bold">✓</span>
<span><strong>Principio 2:</strong> Subraya el valor constructivo y la dignidad que aporta esta postura.</span>
</p>
</div>
</div>
<div class="p-2 bg-white rounded-lg border border-sky-200 text-xs font-semibold text-sky-900 mt-3">
Aportación: Síntesis positiva y constructiva.
</div>
</div>
</div>

<!--
Notas de la plantilla:
- Ideal para contraponer corrientes éticas o visiones antropológicas contrapuestas.
-->

---

<!-- SLIDE 05: EXPOSICIÓN DE HECHOS HISTÓRICOS -->
<header class="slide-header">
<div>
<span class="slide-badge bg-amber-100 text-amber-800">HISTORIA Y NARRATIVA</span>
<h2 class="slide-title">Evolución Histórica y Cronología</h2>
</div>
<span class="slide-meta">Slide Tipo 05 · 4 Hitos</span>
</header>

<div class="grid grid-cols-4 gap-3">
<div v-click class="p-3.5 rounded-xl bg-amber-50 border border-amber-200 flex flex-col justify-between">
<div>
<span class="text-xs font-bold px-2 py-0.5 rounded bg-amber-200 text-amber-900">ETAPA 1</span>
<h3 class="text-base font-bold text-slate-900 mt-1 mb-0.5">Orígenes / Contexto</h3>
<p class="text-xs text-slate-600 font-semibold mb-1.5">Fecha o Período</p>
<p class="text-xs text-slate-800 leading-relaxed">
Explica el detonante histórico, el reto social o el acontecimiento original que motivó la respuesta.
</p>
</div>
<div class="mt-2.5 p-1.5 bg-white rounded border border-amber-200 text-xs font-bold text-amber-900 text-center">
Punto de partida
</div>
</div>

<div v-click class="p-3.5 rounded-xl bg-sky-50 border border-sky-200 flex flex-col justify-between">
<div>
<span class="text-xs font-bold px-2 py-0.5 rounded bg-sky-200 text-sky-900">ETAPA 2</span>
<h3 class="text-base font-bold text-slate-900 mt-1 mb-0.5">Desarrollo</h3>
<p class="text-xs text-slate-600 font-semibold mb-1.5">Fecha o Concilio</p>
<p class="text-xs text-slate-800 leading-relaxed">
Detalla el paso intermedio, la evolución doctrinal o el primer documento oficial de respuesta.
</p>
</div>
<div class="mt-2.5 p-1.5 bg-white rounded border border-sky-200 text-xs font-bold text-sky-900 text-center">
Consolidación
</div>
</div>

<div v-click class="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col justify-between">
<div>
<span class="text-xs font-bold px-2 py-0.5 rounded bg-emerald-200 text-emerald-900">ETAPA 3</span>
<h3 class="text-base font-bold text-slate-900 mt-1 mb-0.5">Maduración</h3>
<p class="text-xs text-slate-600 font-semibold mb-1.5">Época Moderna</p>
<p class="text-xs text-slate-800 leading-relaxed">
Muestra cómo se amplió la mirada incorporando nuevas sensibilidades, diálogo social o ecología.
</p>
</div>
<div class="mt-2.5 p-1.5 bg-white rounded border border-emerald-200 text-xs font-bold text-emerald-900 text-center">
Actualización
</div>
</div>

<div v-click class="p-3.5 rounded-xl bg-violet-50 border border-violet-200 flex flex-col justify-between">
<div>
<span class="text-xs font-bold px-2 py-0.5 rounded bg-violet-200 text-violet-900">ETAPA 4</span>
<h3 class="text-base font-bold text-slate-900 mt-1 mb-0.5">Reto Presente</h3>
<p class="text-xs text-slate-600 font-semibold mb-1.5">Actualidad</p>
<p class="text-xs text-slate-800 leading-relaxed">
Aterriza el proceso en los desafíos de hoy: qué respuestas concretas se ofrecen al siglo XXI.
</p>
</div>
<div class="mt-2.5 p-1.5 bg-white rounded border border-violet-200 text-xs font-bold text-violet-900 text-center">
Frontera de futuro
</div>
</div>
</div>

<!--
Notas de la plantilla:
- Cada tarjeta avanza cronológicamente.
-->

---

<!-- SLIDE 06: NARRATIVA EN TRES ACTOS -->
<header class="slide-header">
<div>
<span class="slide-badge bg-amber-100 text-amber-800">HISTORIA Y NARRATIVA</span>
<h2 class="slide-title">Estructura Narrativa y Testimonial</h2>
</div>
<span class="slide-meta">Slide Tipo 06 · 3 Actos</span>
</header>

<div class="grid grid-cols-3 gap-4">
<div v-click class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
<div>
<span class="text-xs font-bold text-slate-700 uppercase">Acto 1 · Planteamiento</span>
<h3 class="text-base font-bold text-slate-900 mt-1 mb-1.5">El Contexto y el Conflicto</h3>
<p class="text-xs text-slate-800 leading-relaxed">
Presenta al protagonista, su entorno y la situación límite o dilema que desencadena la acción narrativa.
</p>
</div>
<div class="p-2 bg-white rounded-lg border border-slate-200 text-xs text-slate-700 italic mt-3">
Plantea la tensión de partida.
</div>
</div>

<div v-click class="p-4 rounded-xl bg-violet-50 border border-violet-200 flex flex-col justify-between">
<div>
<span class="text-xs font-bold text-violet-800 uppercase">Acto 2 · El Nudo</span>
<h3 class="text-base font-bold text-slate-900 mt-1 mb-1.5">La Decisión Transformadora</h3>
<p class="text-xs text-slate-800 leading-relaxed">
Muestra el paso al frente, la respuesta valiente o el sacrificio moral que rompe con la inercia del ambiente.
</p>
</div>
<div class="p-2 bg-white rounded-lg border border-violet-200 text-xs text-violet-950 font-bold mt-3">
Clímax de la acción testimonial.
</div>
</div>

<div v-click class="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col justify-between">
<div>
<span class="text-xs font-bold text-emerald-800 uppercase">Acto 3 · Desenlace</span>
<h3 class="text-base font-bold text-slate-900 mt-1 mb-1.5">El Significado Permanente</h3>
<p class="text-xs text-slate-800 leading-relaxed">
Sintetiza la huella dejada: qué lección universal o principio de fe se desprende para nuestra vida hoy.
</p>
</div>
<div class="p-2 bg-white rounded-lg border border-emerald-200 text-xs text-emerald-950 font-bold mt-3">
Fruto vital y trascendencia.
</div>
</div>
</div>

<!--
Notas de la plantilla:
- Ideal para biografías testimoniales o parábolas.
-->

---

<!-- SLIDE 07: DILEMA ÉTICO MORAL -->
<header class="slide-header">
<div>
<span class="slide-badge bg-red-100 text-red-800">DILEMAS Y CASOS ÉTICOS</span>
<h2 class="slide-title">Deliberación Moral y Estudio de Caso</h2>
</div>
<span class="slide-meta">Slide Tipo 07 · Caso y Preguntas</span>
</header>

<div class="grid grid-cols-12 gap-4">
<div class="col-span-7 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
<div>
<span class="text-xs font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-800 uppercase">Situación Real</span>
<h3 class="text-lg font-bold text-slate-900 mt-1.5 mb-1.5">Descripción del Caso Límite</h3>
<p class="text-xs text-slate-800 leading-relaxed mb-2.5">
Plantea una situación verídica o plausible donde colisionen dos valores morales legítimos o donde no exista una solución obvia:
</p>
<div class="space-y-1.5 text-xs text-slate-800 bg-white p-2.5 rounded-lg border border-slate-200">
<div><strong>Opción A:</strong> Argumento o vía de resolución basada en la utilidad o presión práctica.</div>
<div><strong>Opción B:</strong> Argumento centrado en la persona individual y su dignidad irrenunciable.</div>
</div>
</div>
<div class="p-2 bg-red-50 rounded-lg border border-red-200 text-xs text-red-950 font-semibold mt-2.5">
Interrogante central: ¿Qué principio ético debe primar en esta decisión y por qué?
</div>
</div>

<div class="col-span-5 flex flex-col justify-between gap-2.5">
<div v-click class="p-3 rounded-lg bg-sky-50 border border-sky-200">
<span class="text-xs font-bold text-sky-900 uppercase block mb-0.5">Paso 1 · Análisis</span>
<p class="text-xs text-slate-900 font-medium">Pregunta para identificar las consecuencias directas e indirectas de cada opción.</p>
</div>
<div v-click class="p-3 rounded-lg bg-amber-50 border border-amber-200">
<span class="text-xs font-bold text-amber-900 uppercase block mb-0.5">Paso 2 · Contraste</span>
<p class="text-xs text-slate-900 font-medium">Pregunta para detectar qué valores o derechos humanos quedan en segundo plano.</p>
</div>
<div v-click class="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
<span class="text-xs font-bold text-emerald-900 uppercase block mb-0.5">Paso 3 · Criterio Moral</span>
<p class="text-xs text-slate-900 font-semibold">Síntesis fundamentada: qué aporta la ética católica para orientar la deliberación.</p>
</div>
</div>
</div>

<!--
Notas de la plantilla:
- Proyectar el caso y dar 3 minutos de debate en parejas.
-->

---

<!-- SLIDE 08: ACTIVIDAD PRÁCTICA POR FASES -->
<header class="slide-header">
<div>
<span class="slide-badge bg-emerald-100 text-emerald-800">ACTIVIDAD COOPERATIVA</span>
<h2 class="slide-title">Actividad Cooperativa por Fases (1-2-4)</h2>
</div>
<span class="slide-meta">Slide Tipo 08 · Trabajo en Aula</span>
</header>

<div class="flex flex-col justify-between gap-3">
<div class="grid grid-cols-3 gap-4">
<div class="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-2">
<span class="text-xs font-bold px-2 py-0.5 bg-emerald-200 text-emerald-900 rounded">1. Individual</span>
<span class="text-xs font-bold text-emerald-800">3 Minutos</span>
</div>
<h3 class="text-base font-bold text-slate-900 mb-1">Reflexión Propia</h3>
<p class="text-xs text-slate-800 leading-relaxed">
Consigna para que cada alumno anote en su cuaderno sus respuestas iniciales sin influencia de otros compañeros.
</p>
</div>
<div class="p-1.5 bg-white rounded border border-emerald-200 text-xs text-emerald-900 text-center font-semibold mt-3">
Silencio y producción individual
</div>
</div>

<div class="p-4 rounded-xl bg-sky-50 border border-sky-200 flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-2">
<span class="text-xs font-bold px-2 py-0.5 bg-sky-200 text-sky-900 rounded">2. En Parejas</span>
<span class="text-xs font-bold text-sky-800">4 Minutos</span>
</div>
<h3 class="text-base font-bold text-slate-900 mb-1">Contraste Mutuo</h3>
<p class="text-xs text-slate-800 leading-relaxed">
Consigna para poner en común las ideas con la pareja de mesa: buscar coincidencias, discrepancias y raíces del problema.
</p>
</div>
<div class="p-1.5 bg-white rounded border border-sky-200 text-xs text-sky-900 text-center font-semibold mt-3">
Escucha activa y diálogo
</div>
</div>

<div class="p-4 rounded-xl bg-amber-50 border border-amber-200 flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-2">
<span class="text-xs font-bold px-2 py-0.5 bg-amber-200 text-amber-900 rounded">3. Grupo de 4</span>
<span class="text-xs font-bold text-amber-800">5 Minutos</span>
</div>
<h3 class="text-base font-bold text-slate-900 mb-1">Síntesis Común</h3>
<p class="text-xs text-slate-800 leading-relaxed">
Consigna para consensuar una propuesta única, un resumen o una medida práctica factible para presentar al grupo.
</p>
</div>
<div class="p-1.5 bg-white rounded border border-amber-200 text-xs text-amber-900 text-center font-semibold mt-3">
Consenso y portavoz
</div>
</div>
</div>

<div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="text-lg">📋</span>
<span class="text-xs text-slate-700 font-medium"><strong>Entregable o cierre:</strong> Especifica aquí el producto final (puesta en común oral, ficha recogida o votación en asamblea).</span>
</div>
<span class="text-xs font-bold px-2.5 py-0.5 bg-emerald-600 text-white rounded">Evaluación Formativa</span>
</div>
</div>

<!--
Notas de la plantilla:
- Mantener los tiempos fijados con el cronómetro.
-->

---

<!-- SLIDE 09: LABORATORIO DE CLASIFICACIÓN INTERACTIVO (100% ESTABLE EN VUE) -->
<header class="slide-header">
<div>
<span class="slide-badge bg-emerald-100 text-emerald-800">ACTIVIDAD COOPERATIVA</span>
<h2 class="slide-title">Laboratorio: Clasificación Dinámica</h2>
</div>
<div class="flex items-center gap-2">
<span class="slide-meta">Haz clic en los botones para clasificar</span>
<button @click="resetLaboratorio" class="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded text-xs font-bold border border-slate-300">
Reiniciar
</button>
</div>
</header>

<div class="flex flex-col justify-between gap-3">
<!-- 3 Casos interactivos -->
<div class="space-y-2">
<!-- Caso 1 -->
<div class="p-3 rounded-xl border flex items-center justify-between transition-all"
     :class="estadoCaso1 === 'A' ? 'bg-emerald-50 border-emerald-300' : estadoCaso1 === 'B' ? 'bg-rose-50 border-rose-300' : 'bg-slate-50 border-slate-200'">
<div>
<span class="text-xs font-bold text-slate-500 uppercase mr-2">Caso 1</span>
<span class="text-xs font-semibold text-slate-800">«Defender públicamente al compañero al que todos aíslan en el recreo»</span>
</div>
<div class="flex items-center gap-1.5">
<button @click="clasificar(1, 'A')" class="px-2.5 py-1 rounded text-xs font-bold transition-colors"
        :class="estadoCaso1 === 'A' ? 'bg-emerald-600 text-white' : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'">
✓ Zona A (Humaniza)
</button>
<button @click="clasificar(1, 'B')" class="px-2.5 py-1 rounded text-xs font-bold transition-colors"
        :class="estadoCaso1 === 'B' ? 'bg-rose-600 text-white' : 'bg-rose-100 text-rose-800 hover:bg-rose-200'">
✕ Zona B (Descarte)
</button>
</div>
</div>

<!-- Caso 2 -->
<div class="p-3 rounded-xl border flex items-center justify-between transition-all"
     :class="estadoCaso2 === 'A' ? 'bg-emerald-50 border-emerald-300' : estadoCaso2 === 'B' ? 'bg-rose-50 border-rose-300' : 'bg-slate-50 border-slate-200'">
<div>
<span class="text-xs font-bold text-slate-500 uppercase mr-2">Caso 2</span>
<span class="text-xs font-semibold text-slate-800">«Reenviar una captura de pantalla privada para reírse de alguien en un grupo»</span>
</div>
<div class="flex items-center gap-1.5">
<button @click="clasificar(2, 'A')" class="px-2.5 py-1 rounded text-xs font-bold transition-colors"
        :class="estadoCaso2 === 'A' ? 'bg-emerald-600 text-white' : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'">
✓ Zona A (Humaniza)
</button>
<button @click="clasificar(2, 'B')" class="px-2.5 py-1 rounded text-xs font-bold transition-colors"
        :class="estadoCaso2 === 'B' ? 'bg-rose-600 text-white' : 'bg-rose-100 text-rose-800 hover:bg-rose-200'">
✕ Zona B (Descarte)
</button>
</div>
</div>

<!-- Caso 3 -->
<div class="p-3 rounded-xl border flex items-center justify-between transition-all"
     :class="estadoCaso3 === 'A' ? 'bg-emerald-50 border-emerald-300' : estadoCaso3 === 'B' ? 'bg-rose-50 border-rose-300' : 'bg-slate-50 border-slate-200'">
<div>
<span class="text-xs font-bold text-slate-500 uppercase mr-2">Caso 3</span>
<span class="text-xs font-semibold text-slate-800">«Ignorar una situación injusta por temor a perder la aprobación del grupo»</span>
</div>
<div class="flex items-center gap-1.5">
<button @click="clasificar(3, 'A')" class="px-2.5 py-1 rounded text-xs font-bold transition-colors"
        :class="estadoCaso3 === 'A' ? 'bg-emerald-600 text-white' : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'">
✓ Zona A (Humaniza)
</button>
<button @click="clasificar(3, 'B')" class="px-2.5 py-1 rounded text-xs font-bold transition-colors"
        :class="estadoCaso3 === 'B' ? 'bg-rose-600 text-white' : 'bg-rose-100 text-rose-800 hover:bg-rose-200'">
✕ Zona B (Descarte)
</button>
</div>
</div>
</div>

<div class="grid grid-cols-2 gap-4 mt-1 text-xs">
<div class="p-2.5 bg-emerald-50/70 rounded-xl border border-emerald-200 text-emerald-950">
<strong>Zona A:</strong> Acciones que afirman la dignidad inviolable y construyen bien común.
</div>
<div class="p-2.5 bg-rose-50/70 rounded-xl border border-rose-200 text-rose-950">
<strong>Zona B:</strong> Actitudes que reducen a la persona a un objeto o la desprecian.
</div>
</div>
</div>

<!--
Notas de la plantilla:
- Pregunta a la clase y pulsa en directo para clasificar con retroalimentación de color.
-->

---

<!-- SLIDE 10: RUTINA 1 - EL SEMÁFORO INTERACTIVO -->
<header class="slide-header">
<div>
<span class="slide-badge bg-violet-100 text-violet-800">RUTINA DE PENSAMIENTO</span>
<h2 class="slide-title">Rutina del Semáforo con Votación en Vivo</h2>
</div>
<div class="flex items-center gap-2">
<span class="slide-meta">Votación interactiva</span>
<button @click="reiniciarVotos" class="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded text-xs font-bold border border-slate-300">
Reiniciar
</button>
</div>
</header>

<div class="grid grid-cols-3 gap-4">
<!-- Rojo -->
<div class="p-4 rounded-xl bg-rose-50 border-2 border-rose-200 flex flex-col justify-between">
<div>
<div class="flex items-center gap-2 mb-2">
<span class="w-3.5 h-3.5 rounded-full bg-rose-500 inline-block"></span>
<span class="text-xs font-bold text-rose-800 uppercase">Luz Roja · Parar</span>
</div>
<h3 class="text-base font-bold text-slate-900 mb-1">Lo Inadmisible</h3>
<p class="text-xs text-slate-800 leading-relaxed mb-2">
Indica aquí las conductas o premisas que atentan directamente contra la dignidad humana y deben ser rechazadas sin matices.
</p>
</div>
<div class="mt-3 pt-2 border-t border-rose-200 flex items-center justify-between">
<div class="flex items-center gap-1">
<button @click="votosRojo++" class="px-2 py-0.5 bg-rose-600 hover:bg-rose-700 text-white rounded text-xs font-bold">+1</button>
<button @click="votosRojo > 0 ? votosRojo-- : 0" class="px-2 py-0.5 bg-rose-200 hover:bg-rose-300 text-rose-900 rounded text-xs font-bold">-1</button>
</div>
<span class="text-xs font-extrabold text-rose-900">Votos: {{ votosRojo }}</span>
</div>
</div>

<!-- Ámbar -->
<div class="p-4 rounded-xl bg-amber-50 border-2 border-amber-200 flex flex-col justify-between">
<div>
<div class="flex items-center gap-2 mb-2">
<span class="w-3.5 h-3.5 rounded-full bg-amber-400 inline-block"></span>
<span class="text-xs font-bold text-amber-800 uppercase">Luz Ámbar · Cuidado</span>
</div>
<h3 class="text-base font-bold text-slate-900 mb-1">Atención y Límite</h3>
<p class="text-xs text-slate-800 leading-relaxed mb-2">
Indica aquí las actitudes cotidianas ambiguas, de riesgo o que exigen discernimiento crítico y moderación consciente.
</p>
</div>
<div class="mt-3 pt-2 border-t border-amber-200 flex items-center justify-between">
<div class="flex items-center gap-1">
<button @click="votosAmbar++" class="px-2 py-0.5 bg-amber-600 hover:bg-amber-700 text-white rounded text-xs font-bold">+1</button>
<button @click="votosAmbar > 0 ? votosAmbar-- : 0" class="px-2 py-0.5 bg-amber-200 hover:bg-amber-300 text-amber-900 rounded text-xs font-bold">-1</button>
</div>
<span class="text-xs font-extrabold text-amber-900">Votos: {{ votosAmbar }}</span>
</div>
</div>

<!-- Verde -->
<div class="p-4 rounded-xl bg-emerald-50 border-2 border-emerald-200 flex flex-col justify-between">
<div>
<div class="flex items-center gap-2 mb-2">
<span class="w-3.5 h-3.5 rounded-full bg-emerald-500 inline-block"></span>
<span class="text-xs font-bold text-emerald-800 uppercase">Luz Verde · Avanzar</span>
</div>
<h3 class="text-base font-bold text-slate-900 mb-1">Práctica Virtuosa</h3>
<p class="text-xs text-slate-800 leading-relaxed mb-2">
Indica aquí las conductas solidarias, creativas y constructivas que encarnan plenamente el bien y la fraternidad.
</p>
</div>
<div class="mt-3 pt-2 border-t border-emerald-200 flex items-center justify-between">
<div class="flex items-center gap-1">
<button @click="votosVerde++" class="px-2 py-0.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-bold">+1</button>
<button @click="votosVerde > 0 ? votosVerde-- : 0" class="px-2 py-0.5 bg-emerald-200 hover:bg-emerald-300 text-emerald-900 rounded text-xs font-bold">-1</button>
</div>
<span class="text-xs font-extrabold text-emerald-900">Votos: {{ votosVerde }}</span>
</div>
</div>
</div>

<!--
Notas de la plantilla:
- Pregunta a mano alzada y pulsa en directo los botones para ver el conteo de la clase en pantalla.
-->

---

<!-- SLIDE 11: RUTINA 2 - VEO, PIENSO, ME PREGUNTO -->
<header class="slide-header">
<div>
<span class="slide-badge bg-violet-100 text-violet-800">RUTINA DE PENSAMIENTO</span>
<h2 class="slide-title">Rutina: Veo, Pienso, Me Pregunto</h2>
</div>
<span class="slide-meta">Slide Tipo 11 · Pensamiento Visual</span>
</header>

<div class="grid grid-cols-12 gap-4">
<div class="col-span-5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
<div class="h-40 rounded-lg bg-slate-200 flex items-center justify-center text-center p-2 text-slate-600 text-xs font-semibold border border-slate-300">
[Inserta aquí la imagen,<br>obra de arte sacro o gráfico a analizar]
</div>
<div class="mt-2.5 p-2 bg-sky-50 rounded border border-sky-200 text-xs text-sky-900 font-bold">
Ficha del estímulo visual: autor, fecha y detalle en el que fijarse.
</div>
</div>

<div class="col-span-7 flex flex-col justify-between gap-2">
<div v-click class="p-2.5 rounded-lg bg-sky-50 border border-sky-200">
<span class="text-xs font-bold text-sky-900 uppercase block">1. VEO (Solo hechos objetivos)</span>
<p class="text-xs text-slate-800 leading-snug">
Pide a los alumnos que describan únicamente lo que sus ojos ven físicamente, sin interpretar todavía ni emitir juicios de valor.
</p>
</div>

<div v-click class="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200">
<span class="text-xs font-bold text-emerald-900 uppercase block">2. PIENSO (Interpretación y sentido)</span>
<p class="text-xs text-slate-800 leading-snug">
Guía al aula a deducir el significado teológico, simbólico o emocional: ¿qué quiso transmitir el autor con esos detalles?
</p>
</div>

<div v-click class="p-2.5 rounded-lg bg-violet-50 border border-violet-200">
<span class="text-xs font-bold text-violet-900 uppercase block">3. ME PREGUNTO (Cuestionamiento propio)</span>
<p class="text-xs text-slate-800 leading-snug">
Abre el espacio para interrogantes vitales personales: ¿qué preguntas sin resolver o desafíos me suscita esta imagen hoy?
</p>
</div>
</div>
</div>

<!--
Notas de la plantilla:
- Respeta la separación estricta entre el 'Veo' y el 'Pienso'.
-->

---

<!-- SLIDE 12: RUTINA 3 - ESCALERA DE LA METACOGNICIÓN -->
<header class="slide-header">
<div>
<span class="slide-badge bg-violet-100 text-violet-800">RUTINA DE PENSAMIENTO</span>
<h2 class="slide-title">La Escalera de la Metacognición</h2>
</div>
<span class="slide-meta">Slide Tipo 12 · 4 Peldaños</span>
</header>

<div class="grid grid-cols-4 gap-3">
<div v-click class="p-3.5 rounded-xl bg-slate-50 border-2 border-slate-200 flex flex-col justify-between">
<div>
<span class="text-xs font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-800">Peldaño 1</span>
<h3 class="text-sm font-bold text-slate-900 mt-1.5 mb-1">¿Qué he aprendido?</h3>
<p class="text-xs text-slate-700 leading-relaxed">
Invita al alumno a definir con rigor el concepto o contenido nuclear asimilado en la sesión.
</p>
</div>
<div class="mt-2.5 p-1.5 bg-white rounded border border-slate-200 text-xs font-bold text-slate-800 text-center">
Contenido asimilado
</div>
</div>

<div v-click class="p-3.5 rounded-xl bg-sky-50 border-2 border-sky-200 flex flex-col justify-between">
<div>
<span class="text-xs font-bold px-2 py-0.5 rounded bg-sky-200 text-sky-800">Peldaño 2</span>
<h3 class="text-sm font-bold text-slate-900 mt-1.5 mb-1">¿Cómo lo he aprendido?</h3>
<p class="text-xs text-slate-700 leading-relaxed">
Identificar los procesos mentales y las dinámicas que hicieron posible comprender la idea.
</p>
</div>
<div class="mt-2.5 p-1.5 bg-white rounded border border-sky-200 text-xs font-bold text-sky-900 text-center">
Proceso y método
</div>
</div>

<div v-click class="p-3.5 rounded-xl bg-emerald-50 border-2 border-emerald-200 flex flex-col justify-between">
<div>
<span class="text-xs font-bold px-2 py-0.5 rounded bg-emerald-200 text-emerald-800">Peldaño 3</span>
<h3 class="text-sm font-bold text-slate-900 mt-1.5 mb-1">¿Para qué me sirve?</h3>
<p class="text-xs text-slate-700 leading-relaxed">
Descubrir la utilidad existencial o ética del tema más allá de la nota académica del examen.
</p>
</div>
<div class="mt-2.5 p-1.5 bg-white rounded border border-emerald-200 text-xs font-bold text-emerald-900 text-center">
Sentido vital
</div>
</div>

<div v-click class="p-3.5 rounded-xl bg-amber-50 border-2 border-amber-200 flex flex-col justify-between">
<div>
<span class="text-xs font-bold px-2 py-0.5 rounded bg-amber-200 text-amber-800">Peldaño 4</span>
<h3 class="text-sm font-bold text-slate-900 mt-1.5 mb-1">¿Dónde lo aplicaré?</h3>
<p class="text-xs text-slate-700 leading-relaxed">
Transferir el aprendizaje a la convivencia real: en la familia, el aula, el patio o las redes.
</p>
</div>
<div class="mt-2.5 p-1.5 bg-white rounded border border-amber-200 text-xs font-bold text-amber-900 text-center">
Transferencia práctica
</div>
</div>
</div>

<!--
Notas de la plantilla:
- Rutina óptima para los últimos 5-7 minutos de sesión.
-->

---

<!-- SLIDE 13: RUTINA 4 - EL PUENTE DIALÓGICO -->
<header class="slide-header">
<div>
<span class="slide-badge bg-violet-100 text-violet-800">RUTINA DE PENSAMIENTO</span>
<h2 class="slide-title">Puente Reflexivo: Doctrina y Opinión</h2>
</div>
<span class="slide-meta">Slide Tipo 13 · Puente 3-2-1</span>
</header>

<div class="grid grid-cols-3 gap-4">
<div class="p-4 rounded-xl bg-sky-50 border border-sky-200 flex flex-col justify-between">
<div>
<span class="text-xs font-bold px-2 py-0.5 rounded bg-sky-200 text-sky-900">Paso 1</span>
<h3 class="text-base font-bold text-slate-900 mt-1.5 mb-1.5">Qué Enseña la Fe</h3>
<p class="text-xs text-slate-800 leading-relaxed mb-2">
Expón aquí con claridad la postura oficial del Magisterio o el principio teológico objetivo.
</p>
</div>
<div class="p-2 bg-white rounded border border-sky-200 text-xs text-sky-950 font-bold">
Cita bíblica o magisterial base
</div>
</div>

<div v-click class="p-4 rounded-xl bg-amber-50 border border-amber-200 flex flex-col justify-between">
<div>
<span class="text-xs font-bold px-2 py-0.5 rounded bg-amber-200 text-amber-900">Paso 2</span>
<h3 class="text-base font-bold text-slate-900 mt-1.5 mb-1.5">Qué Pienso Yo</h3>
<p class="text-xs text-slate-800 leading-relaxed mb-2">
Espacio para la honestidad del alumno: dificultades espontáneas, objeciones o reservas del grupo.
</p>
</div>
<div class="p-2 bg-white rounded border border-amber-200 text-xs text-amber-950 font-bold">
Voz auténtica del estudiante
</div>
</div>

<div v-click class="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col justify-between">
<div>
<span class="text-xs font-bold px-2 py-0.5 rounded bg-emerald-200 text-emerald-900">Paso 3 · El Puente</span>
<h3 class="text-base font-bold text-slate-900 mt-1.5 mb-1.5">Reflexión de Síntesis</h3>
<p class="text-xs text-slate-800 leading-relaxed mb-2">
Construye el puente: cómo madurar la postura inicial descubriendo la profundidad del principio de fe.
</p>
</div>
<div class="p-2 bg-white rounded border border-emerald-200 text-xs text-emerald-950 font-bold">
Maduración y pensamiento crítico
</div>
</div>
</div>

<!--
Notas de la plantilla:
- Valida siempre las objeciones del Paso 2.
-->

---

<!-- SLIDE 14: EXÉGESIS Y ANÁLISIS DE FUENTES -->
<header class="slide-header">
<div>
<span class="slide-badge bg-sky-100 text-sky-800">TEORÍA Y CONCEPTOS</span>
<h2 class="slide-title">Análisis Textual y Hermenéutica</h2>
</div>
<span class="slide-meta">Slide Tipo 14 · Texto y Glosa</span>
</header>

<div class="grid grid-cols-12 gap-4">
<div class="col-span-7 p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
<div class="space-y-1.5 text-xs text-slate-850 leading-relaxed font-serif">
<p>
«Escribe aquí el texto sagrado, histórico o encíclica que se va a desgranar. Puedes resaltar palabras usando la etiqueta mark para centrar la mirada en <mark class="bg-amber-200 px-1 rounded font-sans font-bold">términos clave</mark> de la narración.»
</p>
<p>
«Añade el segundo versículo o fragmento relevante destacando los giros pedagógicos o las palabras con <mark class="bg-emerald-200 px-1 rounded font-sans font-bold">fuerza teológica</mark>.»
</p>
</div>
<div class="p-2 bg-white rounded border border-slate-200 text-xs font-bold text-slate-900 mt-2">
Pregunta hermenéutica: ¿Qué revela este pasaje sobre el ser humano y sobre Dios?
</div>
</div>

<div class="col-span-5 flex flex-col justify-between gap-2">
<div v-click class="p-2.5 rounded-lg bg-amber-50 border border-amber-200">
<h4 class="text-xs font-bold text-amber-900 uppercase">1. Clave Histórica</h4>
<p class="text-xs text-slate-800">Explica qué significaba esa palabra o costumbre para los oyentes originales de la época.</p>
</div>
<div v-click class="p-2.5 rounded-lg bg-sky-50 border border-sky-200">
<h4 class="text-xs font-bold text-sky-900 uppercase">2. Ruptura Teológica</h4>
<p class="text-xs text-slate-800">Muestra qué esquema religioso o social rompe el mensaje de Jesús en este relato.</p>
</div>
<div v-click class="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200">
<h4 class="text-xs font-bold text-emerald-900 uppercase">3. Actualización</h4>
<p class="text-xs text-slate-800">Traduce el reto al contexto del alumno: ¿quién encarna hoy a los personajes del texto?</p>
</div>
</div>
</div>

<!--
Notas de la plantilla:
- Excelente para exégesis bíblica o lectura guiada de encíclicas.
-->

---

<!-- SLIDE 15: SÍNTESIS VISUAL Y MAPA CONCEPTUAL -->
<header class="slide-header">
<div>
<span class="slide-badge bg-teal-100 text-teal-800">SÍNTESIS Y CIERRE</span>
<h2 class="slide-title">Síntesis Gráfica y Red de Conceptos</h2>
</div>
<span class="slide-meta">Slide Tipo 15 · Mapa de Ideas</span>
</header>

<div class="flex flex-col justify-between gap-3">
<div class="grid grid-cols-3 gap-4">
<div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
<div>
<span class="text-xs font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-800 uppercase">El Desafío</span>
<h3 class="text-base font-bold text-slate-900 mt-1.5 mb-1">Pregunta Central</h3>
<p class="text-xs text-slate-700 leading-relaxed">
Sintetiza aquí el problema antropológico o vital que se planteó al inicio de la unidad didáctica.
</p>
</div>
<div class="p-1.5 bg-white rounded border border-slate-200 text-xs font-semibold text-slate-800 text-center mt-3">
Reto de partida
</div>
</div>

<div class="p-4 rounded-xl bg-rose-50 border border-rose-200 flex flex-col justify-between">
<div>
<span class="text-xs font-bold px-2 py-0.5 rounded bg-rose-200 text-rose-900 uppercase">Falsas Respuestas</span>
<h3 class="text-base font-bold text-slate-900 mt-1.5 mb-1">Salidas Erróneas</h3>
<p class="text-xs text-slate-700 leading-relaxed">
Recapitula las respuestas insuficientes (individualismo, pasividad, fatalismo o resignación).
</p>
</div>
<div class="p-1.5 bg-white rounded border border-rose-200 text-xs font-bold text-rose-900 text-center mt-3">
✕ Salidas incompletas
</div>
</div>

<div class="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col justify-between">
<div>
<span class="text-xs font-bold px-2 py-0.5 rounded bg-emerald-200 text-emerald-900 uppercase">Propuesta Cristiana</span>
<h3 class="text-base font-bold text-slate-900 mt-1.5 mb-1">Respuesta Integral</h3>
<p class="text-xs text-slate-700 leading-relaxed">
Enuncia la aportación nuclear del Evangelio: amor redentor, justicia social y esperanza viva.
</p>
</div>
<div class="p-1.5 bg-white rounded border border-emerald-200 text-xs font-bold text-emerald-900 text-center mt-3">
✓ Horizonte de plenitud
</div>
</div>
</div>

<div class="grid grid-cols-3 gap-3 text-xs font-semibold">
<div class="p-2 bg-rose-50 border border-rose-200 rounded-lg text-center text-rose-950">
✕ Descarte / Fatalismo
</div>
<div class="p-2 bg-sky-50 border border-sky-200 rounded-lg text-center text-sky-950">
✝️ Gracia y acompañamiento
</div>
<div class="p-2 bg-emerald-50 border border-emerald-200 rounded-lg text-center text-emerald-950">
🤝 Compromiso comunitario
</div>
</div>
</div>

<!--
Notas de la plantilla:
- Empléala antes de la evaluación formativa.
-->

---

<!-- SLIDE 16: DEBATE DE LAS CUATRO ESQUINAS (SELECTOR REACTIVO ESTABLE) -->
<header class="slide-header">
<div>
<span class="slide-badge bg-emerald-100 text-emerald-800">ACTIVIDAD COOPERATIVA</span>
<h2 class="slide-title">Dinámica de Cuatro Esquinas</h2>
</div>
<span class="slide-meta">Slide Tipo 16 · Debate en Asamblea</span>
</header>

<div class="flex flex-col justify-between gap-3">
<div class="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-center">
<span class="text-xs font-bold uppercase text-amber-900">Afirmación Polémica Detonante</span>
<p class="text-base font-bold text-slate-900 mt-0.5">
«Escribe aquí una frase controvertida y abierta que obligue a los alumnos a posicionarse con argumentos».
</p>
</div>

<div class="grid grid-cols-4 gap-3">
<!-- Esquina 1 -->
<div class="p-3 rounded-xl border-2 text-center cursor-pointer transition-all"
     :class="esquinaActiva === 1 ? 'bg-emerald-100 border-emerald-500 shadow-md scale-102' : 'bg-emerald-50 border-emerald-200'"
     @click="esquinaActiva = 1">
<span class="text-xs font-bold px-2 py-0.5 bg-emerald-200 text-emerald-900 rounded">Esquina 1</span>
<h4 class="text-sm font-bold text-slate-900 mt-1 mb-0.5">Total Acuerdo</h4>
<p class="text-xs text-slate-600">Espacio para quienes defienden la tesis con rigor estricto.</p>
<span v-if="esquinaActiva === 1" class="inline-block mt-2 text-xs font-extrabold text-emerald-800 bg-white px-2 py-0.5 rounded-full border border-emerald-300">
📍 Postura elegida
</span>
</div>

<!-- Esquina 2 -->
<div class="p-3 rounded-xl border-2 text-center cursor-pointer transition-all"
     :class="esquinaActiva === 2 ? 'bg-sky-100 border-sky-500 shadow-md scale-102' : 'bg-sky-50 border-sky-200'"
     @click="esquinaActiva = 2">
<span class="text-xs font-bold px-2 py-0.5 bg-sky-200 text-sky-900 rounded">Esquina 2</span>
<h4 class="text-sm font-bold text-slate-900 mt-1 mb-0.5">Parcial Acuerdo</h4>
<p class="text-xs text-slate-600">Espacio para posturas con matices o condiciones.</p>
<span v-if="esquinaActiva === 2" class="inline-block mt-2 text-xs font-extrabold text-sky-800 bg-white px-2 py-0.5 rounded-full border border-sky-300">
📍 Postura elegida
</span>
</div>

<!-- Esquina 3 -->
<div class="p-3 rounded-xl border-2 text-center cursor-pointer transition-all"
     :class="esquinaActiva === 3 ? 'bg-amber-100 border-amber-500 shadow-md scale-102' : 'bg-amber-50 border-amber-200'"
     @click="esquinaActiva = 3">
<span class="text-xs font-bold px-2 py-0.5 bg-amber-200 text-amber-900 rounded">Esquina 3</span>
<h4 class="text-sm font-bold text-slate-900 mt-1 mb-0.5">Parcial Desacuerdo</h4>
<p class="text-xs text-slate-600">Espacio para discrepancias moderadas con excepciones.</p>
<span v-if="esquinaActiva === 3" class="inline-block mt-2 text-xs font-extrabold text-amber-800 bg-white px-2 py-0.5 rounded-full border border-amber-300">
📍 Postura elegida
</span>
</div>

<!-- Esquina 4 -->
<div class="p-3 rounded-xl border-2 text-center cursor-pointer transition-all"
     :class="esquinaActiva === 4 ? 'bg-rose-100 border-rose-500 shadow-md scale-102' : 'bg-rose-50 border-rose-200'"
     @click="esquinaActiva = 4">
<span class="text-xs font-bold px-2 py-0.5 bg-rose-200 text-rose-900 rounded">Esquina 4</span>
<h4 class="text-sm font-bold text-slate-900 mt-1 mb-0.5">Total Desacuerdo</h4>
<p class="text-xs text-slate-600">Espacio para el rechazo frontal basado en principios firmes.</p>
<span v-if="esquinaActiva === 4" class="inline-block mt-2 text-xs font-extrabold text-rose-800 bg-white px-2 py-0.5 rounded-full border border-rose-300">
📍 Postura elegida
</span>
</div>
</div>

<div class="p-2 bg-slate-50 border border-slate-200 rounded-lg text-center text-xs text-slate-600 font-medium">
Dinámica: Haz clic sobre la esquina votada mayoritariamente para marcarla en pantalla.
</div>
</div>

<!--
Notas de la plantilla:
- Los alumnos se desplazan físicamente por el aula.
-->

---

<!-- SLIDE 17: TICKET DE SALIDA FORMATIVO -->
<header class="slide-header">
<div>
<span class="slide-badge bg-teal-100 text-teal-800">SÍNTESIS Y CIERRE</span>
<h2 class="slide-title">Ticket de Salida y Evaluación Formativa</h2>
</div>
<span class="slide-meta">Slide Tipo 17 · 3 Preguntas Clave</span>
</header>

<div class="flex flex-col justify-between gap-3">
<div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
<span class="text-xs font-bold text-slate-900">Responde en tu ficha personal individual antes de que suene el timbre</span>
<span class="text-xs font-bold px-2.5 py-0.5 bg-rose-600 text-white rounded">3 Minutos Restantes</span>
</div>

<div class="grid grid-cols-3 gap-4">
<div class="p-4 rounded-xl bg-sky-50 border border-sky-200 flex flex-col justify-between">
<div>
<span class="text-xs font-bold px-2 py-0.5 rounded bg-sky-200 text-sky-900">1. Comprensión</span>
<h3 class="text-sm font-bold text-slate-900 mt-2 mb-1">Concepto Clave</h3>
<p class="text-xs text-slate-700">
Formula aquí la pregunta para verificar si han asimilado la idea nuclear de la sesión.
</p>
</div>
<div class="p-1.5 bg-white rounded border border-sky-200 text-xs font-bold text-sky-900 text-center mt-3">
Control de asimilación
</div>
</div>

<div class="p-4 rounded-xl bg-amber-50 border border-amber-200 flex flex-col justify-between">
<div>
<span class="text-xs font-bold px-2 py-0.5 rounded bg-amber-200 text-amber-900">2. Duda / Pregunta</span>
<h3 class="text-sm font-bold text-slate-900 mt-2 mb-1">Punto a Revisar</h3>
<p class="text-xs text-slate-700">
Pregunta qué aspecto les ha generado más dudas o discrepancias para retomar el próximo día.
</p>
</div>
<div class="p-1.5 bg-white rounded border border-amber-200 text-xs font-bold text-amber-900 text-center mt-3">
Diagnóstico docente
</div>
</div>

<div class="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col justify-between">
<div>
<span class="text-xs font-bold px-2 py-0.5 rounded bg-emerald-200 text-emerald-900">3. Aplicación</span>
<h3 class="text-sm font-bold text-slate-900 mt-2 mb-1">Compromiso Real</h3>
<p class="text-xs text-slate-700">
Pide un compromiso concreto y observable para aplicar esta semana en su vida diaria.
</p>
</div>
<div class="p-1.5 bg-white rounded border border-emerald-200 text-xs font-bold text-emerald-900 text-center mt-3">
Acción práctica
</div>
</div>
</div>

<div class="text-center text-xs text-slate-500 font-medium">
Entrega en mano al profesor al salir del aula para adaptar la siguiente sesión.
</div>
</div>

<!--
Notas de la plantilla:
- Recoge los tickets para conocer el grado de asimilación real.
-->

---

<!-- SLIDE 18: CONCLUSIONES Y COMPROMISO VITAL -->
<header class="slide-header">
<div>
<span class="slide-badge bg-teal-100 text-teal-800">SÍNTESIS Y CIERRE</span>
<h2 class="slide-title">Síntesis Final y Compromiso Ético</h2>
</div>
<span class="slide-meta">Slide Tipo 18 · Cierre de Unidad</span>
</header>

<div class="grid grid-cols-12 gap-4">
<div class="col-span-8 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col justify-between">
<div>
<span class="text-xs font-bold px-2 py-0.5 rounded bg-emerald-200 text-emerald-900">COMPROMISO VITAL</span>
<h3 class="text-xl font-extrabold text-slate-900 mt-1.5 mb-1.5">Trascendencia y Vida Real</h3>
<p class="text-sm text-slate-800 leading-relaxed mb-2.5">
Resume aquí el mensaje final de la unidad: cómo el conocimiento adquirido debe traducirse en coherencia moral, servicio a los vulnerables y mirada esperanzada sobre el mundo.
</p>
<div class="p-2.5 bg-white rounded-lg border border-emerald-200 text-xs text-emerald-950 font-bold italic">
«Inserta una cita bíblica o magisterial luminosa que sirva de lema vital para cerrar la unidad».
</div>
</div>
<div class="text-xs font-bold text-emerald-800 pt-2 border-t border-emerald-200 mt-2">
Próxima sesión: Aplicación en proyectos o inicio de la siguiente unidad didáctica.
</div>
</div>

<div class="col-span-4 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
<div>
<span class="text-xs font-bold text-slate-500 uppercase">Criterios Evaluados</span>
<h4 class="text-sm font-bold text-slate-900 mt-1 mb-1.5">Competencias</h4>
<div class="space-y-1 text-xs text-slate-700">
<div>✔️ Argumentación ética razonada.</div>
<div>✔️ Escucha activa y respeto al otro.</div>
<div>✔️ Análisis de fuentes en su contexto.</div>
<div>✔️ Compromiso vital individual.</div>
</div>
</div>
<div class="p-1.5 bg-sky-100 rounded text-center text-xs font-bold text-sky-900 mt-2">
Unidad Completada
</div>
</div>
</div>

<!--
Notas de la plantilla:
- Cierre pedagógico solemne con minuto de silencio o breve oración reflexiva.
-->

---

<!-- SLIDE 19: RECURSO 1 - SABÍAS QUÉ -->
<header class="slide-header">
<div>
<span class="slide-badge bg-indigo-100 text-indigo-800">BANCO DE RECURSOS</span>
<h2 class="slide-title">Recurso Tipo: Sabías Qué</h2>
</div>
<span class="slide-meta">Dato Curioso / Arqueología</span>
</header>

<div class="flex flex-col justify-between gap-4">
<p class="text-xs text-slate-600">
Este recurso introduce un dato histórico, científico, arqueológico o lingüístico sorprendente para despertar la curiosidad del grupo.
</p>

<div class="p-5 rounded-2xl bg-sky-50 border-2 border-sky-200 flex items-start gap-4">
<div class="w-12 h-12 rounded-xl bg-sky-200 text-sky-900 flex items-center justify-center text-2xl font-bold flex-shrink-0">
💡
</div>
<div>
<div class="flex items-center gap-2 mb-1.5">
<span class="text-xs font-bold px-2 py-0.5 rounded bg-sky-200 text-sky-900">SABÍAS QUÉ...</span>
<span class="text-xs text-slate-500 font-semibold">Arqueología / Historia de la Iglesia</span>
</div>
<h3 class="text-lg font-bold text-slate-900 mb-2">Título de la Curiosidad o Hallazgo</h3>
<p class="text-sm text-slate-800 leading-relaxed mb-3">
Explica el dato en 3 o 4 líneas: el descubrimiento de un manuscrito antiguo, el origen insólito de una palabra teológica o un dato científico que respalda el relato histórico.
</p>
<div class="text-xs text-sky-950 font-bold bg-white p-2.5 rounded-lg border border-sky-200">
Impacto en clase: Desmonta mitos populares y aporta rigor documental tangible.
</div>
</div>
</div>

<div class="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600">
<strong>Cómo usarlo:</strong> Cópialo y pégalo como apertura de sesión o como nota al pie de una diapositiva teórica.
</div>
</div>

<!--
Notas de la plantilla:
- Diseñado para enganchar la atención en los primeros 5 minutos de clase.
-->

---

<!-- SLIDE 20: RECURSO 2 - DEFINICIÓN CANÓNICA -->
<header class="slide-header">
<div>
<span class="slide-badge bg-indigo-100 text-indigo-800">BANCO DE RECURSOS</span>
<h2 class="slide-title">Recurso Tipo: Definición Canónica y Glosario</h2>
</div>
<span class="slide-meta">Glosario Teológico / Ético</span>
</header>

<div class="flex flex-col justify-between gap-4">
<p class="text-xs text-slate-600">
Este recurso acota un término técnico para evitar confusiones semánticas (por ejemplo: Gracia, Dogma, Sacramento, Dignidad, Libertad).
</p>

<div class="p-5 rounded-2xl bg-emerald-50 border-2 border-emerald-200 flex flex-col justify-between">
<div class="flex items-center justify-between mb-3">
<div class="flex items-center gap-2">
<span class="text-xs font-bold px-2 py-0.5 rounded bg-emerald-200 text-emerald-900">DEFINICIÓN FORMAL</span>
<span class="text-xs text-slate-500 font-semibold">Fuente: Catecismo (CIC) / Magisterio</span>
</div>
<span class="text-xs font-bold text-emerald-800">Término Clave</span>
</div>

<h3 class="text-2xl font-extrabold text-slate-900 mb-2">Término a Definir</h3>

<p class="text-sm text-slate-800 leading-relaxed mb-4">
<strong>Definición técnica:</strong> Redacta la definición canónica o filosófica precisa, explicando su etimología y el contenido esencial que la Iglesia o la tradición le atribuyen.
</p>

<div class="grid grid-cols-2 gap-3 text-xs">
<div class="bg-white p-3 rounded-xl border border-emerald-200">
<span class="font-bold text-emerald-950 block mb-1">Lo que significa:</span>
El núcleo positivo y la verdad que afirma este concepto.
</div>
<div class="bg-white p-3 rounded-xl border border-emerald-200">
<span class="font-bold text-rose-950 block mb-1">Lo que NO significa:</span>
El error o confusión frecuente que suele tener el alumnado.
</div>
</div>
</div>

<div class="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600">
<strong>Cómo usarlo:</strong> Inserción ideal cuando un concepto aparece por primera vez en la programación.
</div>
</div>

<!--
Notas de la plantilla:
- Evita malentendidos conceptuales desde el primer instante de la lección.
-->

---

<!-- SLIDE 21: RECURSO 3 - CONTEXTO HISTÓRICO Y SOCIOCULTURAL -->
<header class="slide-header">
<div>
<span class="slide-badge bg-indigo-100 text-indigo-800">BANCO DE RECURSOS</span>
<h2 class="slide-title">Recurso Tipo: Contexto Histórico</h2>
</div>
<span class="slide-meta">Marco Social y Político</span>
</header>

<div class="flex flex-col justify-between gap-4">
<p class="text-xs text-slate-600">
Este recurso sitúa al alumnado en la época, geografía, leyes y costumbres sociales del pasaje o documento analizado.
</p>

<div class="p-5 rounded-2xl bg-amber-50 border-2 border-amber-200 flex flex-col justify-between">
<div class="flex items-center justify-between mb-2">
<span class="text-xs font-bold px-2 py-0.5 rounded bg-amber-200 text-amber-900">CONTEXTO SOCIOCULTURAL</span>
<span class="text-xs text-slate-500 font-semibold">Época · Geografía · Mentalidad</span>
</div>

<h3 class="text-xl font-bold text-slate-900 mb-2">El Mundo en Tiempos de...</h3>

<p class="text-sm text-slate-800 leading-relaxed mb-4">
Describe las condiciones de vida, los grupos sociales (romanos, fariseos, publicanos, siervos, burguesía, etc.) y la mentalidad dominante para entender por qué las palabras del mensaje resultaban tan revolucionarias.
</p>

<div class="grid grid-cols-3 gap-3 text-xs">
<div class="bg-white p-2.5 rounded-lg border border-amber-200">
<strong>Poder Político:</strong> Quién gobernaba y qué leyes regían la vida pública.
</div>
<div class="bg-white p-2.5 rounded-lg border border-amber-200">
<strong>Estructura Social:</strong> Cómo se dividía la población y quiénes eran marginados.
</div>
<div class="bg-white p-2.5 rounded-lg border border-amber-200">
<strong>Mentalidad Religiosa:</strong> Creencias populares y ritos dominantes del momento.
</div>
</div>
</div>

<div class="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600">
<strong>Cómo usarlo:</strong> Imprescindible antes de acometer cualquier lectura bíblica para evitar interpretaciones anacrónicas.
</div>
</div>

<!--
Notas de la plantilla:
- Desactiva juicios anacrónicos del alumnado contemporáneo.
-->

---

<!-- SLIDE 22: RECURSO 4 - TESTIMONIO VIVO -->
<header class="slide-header">
<div>
<span class="slide-badge bg-indigo-100 text-indigo-800">BANCO DE RECURSOS</span>
<h2 class="slide-title">Recurso Tipo: Testimonio Vivo</h2>
</div>
<span class="slide-meta">Biografía y Voz Real</span>
</header>

<div class="flex flex-col justify-between gap-4">
<p class="text-xs text-slate-600">
Este recurso da voz a una persona real (santa, mártir, misionero o laico contemporáneo) cuya vida encarna la teoría explicada.
</p>

<div class="p-5 rounded-2xl bg-violet-50 border-2 border-violet-200 flex flex-col justify-between">
<div class="flex items-center justify-between mb-2">
<span class="text-xs font-bold px-2 py-0.5 rounded bg-violet-200 text-violet-900">TESTIMONIO VIVO</span>
<span class="text-xs text-slate-500 font-semibold">Siglo XX / Siglo XXI</span>
</div>

<div class="my-auto">
<blockquote class="text-base text-slate-900 font-serif italic mb-3 pl-4 border-l-4 border-violet-400">
«Escribe aquí una declaración contundente, carta o frase célebre del testigo que conmueva y plantee interrogantes al aula».
</blockquote>
<div class="text-xs font-bold text-violet-900">
— Nombre del Testigo (Lugar, Año · Breve reseña de su entrega o martirio)
</div>
</div>

<div class="mt-4 p-3 bg-white rounded-xl border border-violet-200 text-xs text-slate-700">
<strong>Lección pedagógica:</strong> La fe no es una idea abstracta, sino una fuerza capaz de transformar la realidad en situaciones extremas.
</div>
</div>

<div class="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600">
<strong>Cómo usarlo:</strong> Como cierre inspirador de una unidad teórica o como provocación previa a un debate ético.
</div>
</div>

<!--
Notas de la plantilla:
- Dota de credibilidad existencial al contenido de la sesión.
-->

---

<!-- SLIDE 23: RECURSO 5 - CITA DE AUTORIDAD Y MAGISTERIO -->
<header class="slide-header">
<div>
<span class="slide-badge bg-indigo-100 text-indigo-800">BANCO DE RECURSOS</span>
<h2 class="slide-title">Recurso Tipo: Cita de Autoridad</h2>
</div>
<span class="slide-meta">Escritura / Concilio / Filosofía</span>
</header>

<div class="flex flex-col justify-between gap-4">
<p class="text-xs text-slate-600">
Formato tipográfico de alto impacto para proyectar versículos de la Sagrada Escritura, textos conciliares o sentencias filosóficas.
</p>

<div class="p-6 rounded-2xl bg-rose-50 border-2 border-rose-200 flex flex-col justify-between text-center">
<span class="text-xs font-bold px-3 py-1 rounded bg-rose-200 text-rose-900 mx-auto mb-3">
SAGRADA ESCRITURA / MAGISTERIO DE LA IGLESIA
</span>

<div class="my-auto py-2">
<p class="text-xl font-serif font-bold text-slate-900 italic max-w-2xl mx-auto leading-relaxed mb-3">
«Escribe aquí el versículo o fragmento doctrinal con letra grande, clara y visible desde el fondo del aula escolar».
</p>
<span class="text-sm font-bold text-rose-800">
Referencia exacta (ej. Evangelio según San Mateo 5, 14-16)
</span>
</div>

<div class="mt-4 p-2 bg-white rounded-lg border border-rose-200 text-xs text-slate-600 max-w-lg mx-auto">
Principio rector que fundamenta el criterio ético y teológico de la lección.
</div>
</div>

<div class="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600">
<strong>Cómo usarlo:</strong> Proyección destacada a pantalla completa para memorizar o comentar versículo a versículo.
</div>
</div>

<!--
Notas de la plantilla:
- Diseñado para proyectar citas con solemnidad y nitidez absoluta.
-->

---

<!-- SLIDE 24: INTEGRACIÓN MODULAR DE RECURSOS (SLOT INTERCAMBIABLE) -->
<header class="slide-header">
<div>
<span class="slide-badge bg-indigo-100 text-indigo-800">BANCO DE RECURSOS</span>
<h2 class="slide-title">Integración Modular de un Recurso</h2>
</div>
<span class="slide-meta">Slide Tipo 24 · Teoría + Recurso Integrado</span>
</header>

<div class="grid grid-cols-12 gap-5 h-[76%]">
<!-- Columna izquierda: Teoría en prosa -->
<div class="col-span-7 flex flex-col justify-between">
<div>
<h3 class="text-base font-bold text-slate-900 mb-2">Explicación Doctrinal o Histórica</h3>
<p class="text-xs text-slate-800 leading-relaxed mb-3">
En lugar de saturar la pantalla amontonando cuatro cajas pequeñas, el método limpio consiste en dedicar el espacio principal al desarrollo del tema curricular.
</p>
<p class="text-xs text-slate-800 leading-relaxed mb-3">
Aquí desarrollas la teoría en dos o tres párrafos bien legibles, mientras que la columna derecha queda reservada exclusivamente para el recurso de apoyo que mejor dialogue con esta lección.
</p>
</div>
<div class="p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 font-medium">
<strong>Regla de oro:</strong> Una sola idea principal acompañada de un único recurso de alto impacto por diapositiva.
</div>
</div>

<!-- Columna derecha: Ranura donde sustituyes cualquier recurso -->
<div class="col-span-5 p-4 rounded-xl bg-violet-50 border-2 border-violet-200 flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-2">
<span class="text-xs font-bold px-2 py-0.5 rounded bg-violet-200 text-violet-900">RECURSO INTEGRADO</span>
<span class="text-xs text-slate-500 font-semibold">Ranura Modular</span>
</div>
<h4 class="text-sm font-bold text-slate-900 mb-1.5">Sustituye esta caja por:</h4>
<ul class="text-xs text-slate-700 space-y-1.5 leading-relaxed">
<li>• Un bloque de <strong>Sabías qué</strong> (Slide 19).</li>
<li>• Una <strong>Definición Canónica</strong> (Slide 20).</li>
<li>• El <strong>Contexto Histórico</strong> (Slide 21).</li>
<li>• Un <strong>Testimonio Vivo</strong> (Slide 22).</li>
<li>• Una <strong>Cita de Autoridad</strong> (Slide 23).</li>
</ul>
</div>
<div class="p-2 bg-white rounded-lg border border-violet-200 text-xs font-bold text-violet-950 text-center">
Encaja sin recortes ni desbordamientos
</div>
</div>
</div>

<!--
Notas de la plantilla:
- Muestra el patrón estándar de integración limpia para evitar amontonar recursos.
-->