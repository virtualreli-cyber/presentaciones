---
theme: default
layout: default
title: "El Sentido de la Existencia y el Mal - 1º Bachillerato"
info: "Unidad Didáctica de Religión Católica - 1º de Bachillerato"
class: "text-slate-800 bg-white"
highlighter: shiki
drawings:
  persist: false
transition: none
mdc: true
---

<style>
ul > li::before, li::before {
  display: none !important;
  content: none !important;
}
</style>

<!-- ===================================================================== -->
<!-- BLOQUE 1: VERSIÓN EN CASTELLANO                                      -->
<!-- ===================================================================== -->

<!-- SLIDE 01 · PORTADA SESIÓN 1 -->
<div class="flex flex-col justify-between h-full p-8 text-center bg-white">
<div class="flex justify-between items-center text-xs font-semibold uppercase tracking-widest text-slate-400 pt-2">
<span>Departamento de Religión Católica</span>
<span class="px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 rounded-full">1º Bachillerato · Unidad Didáctica 1</span>
</div>
<div class="my-auto">
<h1 class="!text-5xl font-extrabold tracking-tight text-[#ea580c] mb-3">
El Sentido de la Existencia y el Mal
</h1>
<div class="text-xl font-bold text-slate-700 mb-2">
Sesión 1
</div>
<p class="text-sm font-medium text-slate-500 max-w-xl mx-auto">
La Búsqueda de Sentido y el Vacío Existencial: Viktor Frankl, la angustia contemporánea y la apertura al Absoluto
</p>
</div>
<div class="flex items-center justify-center gap-3 opacity-30 pb-4">
<div class="w-16 h-px bg-slate-400"></div>
<svg class="w-3.5 h-3.5 text-slate-500" viewBox="0 0 24 24" fill="currentColor"><path d="M11 2h2v7h7v2h-7v11h-2v-11h-7v-2h7v-7z"/></svg>
<div class="w-16 h-px bg-slate-400"></div>
</div>
</div>

---

<!-- SLIDE 02 · DIALÉCTICA: NIHILISMO VS TRASCENDENCIA -->
<div class="flex flex-col h-full p-6 bg-white justify-between">
<div>
<div class="mb-2">
<span class="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-rose-100 text-rose-800 rounded-full">Antropología Filosófica</span>
</div>
<h2 class="text-2xl font-bold text-[#ea580c]">¿Es la existencia absurda o una vocación con sentido?</h2>
</div>
<div class="grid grid-cols-2 gap-5 my-auto">
<div v-click="1" class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between">
<div>
<div class="flex items-center gap-2 mb-2">
<span class="w-6 h-6 rounded-full bg-rose-200 text-rose-700 flex items-center justify-center font-bold text-xs">✕</span>
<h3 class="font-bold text-slate-700 text-base">Nihilismo Existencial</h3>
</div>
<p v-click="2" class="text-xs text-slate-500 mb-2 italic">"Nacemos por azar biológico, vivimos sin meta y morimos en la nada."</p>
<p v-click="3" class="text-xs text-slate-600 leading-relaxed mb-2">
La pérdida de horizontes de trascendencia desemboca en la «náusea» de Sartre o en el hedonismo de evasión pasajera.
</p>
<div class="space-y-1 text-xs text-slate-600">
<div v-click="4" class="flex items-start">
<span class="text-rose-500 font-bold mr-1.5 leading-none mt-0.5">•</span>
<span>El sufrimiento carece de todo valor redentor.</span>
</div>
<div v-click="5" class="flex items-start">
<span class="text-rose-500 font-bold mr-1.5 leading-none mt-0.5">•</span>
<span>Vacío existencial encubierto por el consumo acelerado.</span>
</div>
</div>
</div>
<div v-click="6" class="mt-2 pt-2 border-t border-slate-200 text-[11px] font-semibold text-rose-700">
Consecuencia: Desesperanza y aislamiento interior.
</div>
</div>
<div v-click="7" class="p-4 bg-amber-50/60 border border-amber-200 rounded-xl flex flex-col justify-between">
<div>
<div class="flex items-center gap-2 mb-2">
<span class="w-6 h-6 rounded-full bg-emerald-200 text-emerald-700 flex items-center justify-center font-bold text-xs">✓</span>
<h3 class="font-bold text-slate-800 text-base">Logoterapia y Revelación Cristiana</h3>
</div>
<p v-click="8" class="text-xs text-slate-500 mb-2 italic">"Quien tiene un porqué para vivir, puede soportar casi cualquier cómo."</p>
<p v-click="9" class="text-xs text-slate-700 leading-relaxed mb-2">
Viktor Frankl descubrió en los campos de exterminio que la dignidad humana reside en la libertad insobornable de elegir una actitud y amar.
</p>
<div class="space-y-1 text-xs text-slate-700">
<div v-click="10" class="flex items-start">
<span class="text-emerald-600 font-bold mr-1.5 leading-none mt-0.5">•</span>
<span>El anhelo de infinito revela que fuimos creados para Dios.</span>
</div>
<div v-click="11" class="flex items-start">
<span class="text-emerald-600 font-bold mr-1.5 leading-none mt-0.5">•</span>
<span>La entrega generosa confiere sentido pleno al dolor.</span>
</div>
</div>
</div>
<div v-click="12" class="mt-2 pt-2 border-t border-amber-200 text-[11px] font-semibold text-emerald-700">
Consecuencia: Esperanza inquebrantable y madurez del espíritu.
</div>
</div>
</div>
<div v-click="13" class="p-2.5 bg-orange-50 rounded-lg text-xs text-slate-700 border-l-4 border-[#ea580c]">
<strong>San Agustín (Confesiones I, 1):</strong> «Nos hiciste, Señor, para ti, y nuestro corazón está inquieto hasta que descanse en ti».
</div>
</div>

---

<!-- SLIDE 03 · TRES RUTAS HACIA EL SENTIDO (FRANKL) -->
<div class="flex flex-col h-full p-6 bg-white justify-between">
<div>
<div class="mb-2">
<span class="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-sky-100 text-sky-800 rounded-full">Psicología y Humanismo</span>
</div>
<h2 class="text-2xl font-bold text-[#ea580c]">Las Tres Vías del Sentido Vital (Viktor Frankl)</h2>
</div>
<div class="grid grid-cols-3 gap-4 my-auto">
<div v-click="1" class="p-4 bg-sky-50/50 border border-sky-100 rounded-xl">
<div class="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-sm mb-2">🎨</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">Valores Creativos</h3>
<p class="text-xs text-slate-600 leading-relaxed mb-2">
Lo que entregamos al mundo a través del trabajo vocacional, el arte, la ciencia o el servicio activo a los demás.
</p>
<span class="text-[10px] uppercase font-bold text-sky-700 tracking-wider">Crear y transformar la realidad</span>
</div>
<div v-click="2" class="p-4 bg-sky-50/50 border border-sky-100 rounded-xl">
<div class="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-sm mb-2">🤝</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">Valores Vivenciales</h3>
<p class="text-xs text-slate-600 leading-relaxed mb-2">
Lo que recibimos del mundo: el asombro ante la belleza de la naturaleza, el arte y, sobre todo, el encuentro en el amor con otra persona.
</p>
<span class="text-[10px] uppercase font-bold text-sky-700 tracking-wider">Amor, contemplación y comunión</span>
</div>
<div v-click="3" class="p-4 bg-sky-50/50 border border-sky-100 rounded-xl">
<div class="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-sm mb-2">🛡️</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">Valores de Actitud</h3>
<p class="text-xs text-slate-600 leading-relaxed mb-2">
La postura que adoptamos ante una situación inevitable de sufrimiento: transformar la tragedia personal en triunfo moral y entrega.
</p>
<span class="text-[10px] uppercase font-bold text-sky-700 tracking-wider">La suprema libertad interior</span>
</div>
</div>
<div v-click="4" class="text-center text-xs text-slate-400 font-medium">
«El hombre en busca de sentido»: Incluso en la máxima precariedad, la vida conserva un sentido potencial inagotable.
</div>
</div>

---

<!-- SLIDE 04 · PORTADA SESIÓN 2 -->
<div class="flex flex-col justify-between h-full p-8 text-center bg-white">
<div class="flex justify-between items-center text-xs font-semibold uppercase tracking-widest text-slate-400 pt-2">
<span>Departamento de Religión Católica</span>
<span class="px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 rounded-full">1º Bachillerato · Unidad Didáctica 1</span>
</div>
<div class="my-auto">
<h1 class="!text-5xl font-extrabold tracking-tight text-[#ea580c] mb-3">
El Sentido de la Existencia y el Mal
</h1>
<div class="text-xl font-bold text-slate-700 mb-2">
Sesión 2
</div>
<p class="text-sm font-medium text-slate-500 max-w-xl mx-auto">
El Escándalo del Mal y la Respuesta de la Cruz: Teodicea, libertad humana y compasión redentora
</p>
</div>
<div class="flex items-center justify-center gap-3 opacity-30 pb-4">
<div class="w-16 h-px bg-slate-400"></div>
<svg class="w-3.5 h-3.5 text-slate-500" viewBox="0 0 24 24" fill="currentColor"><path d="M11 2h2v7h7v2h-7v11h-2v-11h-7v-2h7v-7z"/></svg>
<div class="w-16 h-px bg-slate-400"></div>
</div>
</div>

---

<!-- SLIDE 05 · TEODICEA Y LA CRUZ -->
<div class="flex flex-col h-full p-6 bg-white justify-between">
<div>
<div class="mb-2">
<span class="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 rounded-full">Teodicea y Misterio Cristiano</span>
</div>
<h2 class="text-2xl font-bold text-[#ea580c]">Si Dios es bueno y todopoderoso, ¿por qué existe el mal?</h2>
</div>
<div class="grid grid-cols-3 gap-4 my-auto">
<div v-click="1" class="p-4 bg-indigo-50/50 border border-indigo-100 rounded-xl">
<div class="text-2xl mb-1">⚖️</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">El Precio de la Libertad</h3>
<p class="text-xs text-slate-600 leading-relaxed mb-2">
El mal moral procede del libre albedrío. Dios prefiere crear seres libres capaces de amar auténticamente antes que marionetas programadas sin capacidad de pecar.
</p>
<span class="text-[10px] font-bold text-indigo-700">Misterio de iniquidad moral</span>
</div>
<div v-click="2" class="p-4 bg-indigo-50/50 border border-indigo-100 rounded-xl">
<div class="text-2xl mb-1">✝️</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">Un Dios que Padece</h3>
<p class="text-xs text-slate-600 leading-relaxed mb-2">
La respuesta cristiana al mal no es una teoría fría, sino un acontecimiento: en la Cruz, Dios no explica el dolor, sino que lo abraza y lo llena de presencia divina.
</p>
<span class="text-[10px] font-bold text-indigo-700">Solidaridad con el crucificado</span>
</div>
<div v-click="3" class="p-4 bg-indigo-50/50 border border-indigo-100 rounded-xl">
<div class="text-2xl mb-1">🌅</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">La Última Palabra</h3>
<p class="text-xs text-slate-600 leading-relaxed mb-2">
La Resurrección revela que la muerte y la injusticia no tienen la victoria definitiva. La esperanza cristiana es promesa de justicia escatológica y vida eterna.
</p>
<span class="text-[10px] font-bold text-indigo-700">Pascua: Triunfo del Amor</span>
</div>
</div>
<div v-click="4" class="p-2.5 bg-slate-50 rounded-lg text-xs text-slate-700 border-l-4 border-indigo-500">
<strong>Jürgen Moltmann («El Dios crucificado»):</strong> «Un Dios que no pudiera padecer no podría amar».
</div>
</div>

---

<!-- SLIDE 06 · PORTADA PROYECTO FINAL -->
<div class="flex flex-col justify-between h-full p-8 text-center bg-white">
<div class="flex justify-between items-center text-xs font-semibold uppercase tracking-widest text-slate-400 pt-2">
<span>Departamento de Religión Católica</span>
<span class="px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-800 bg-indigo-100 rounded-full">1º Bachillerato · Coloquio Filosófico-Teológico</span>
</div>
<div class="my-auto">
<h1 class="!text-5xl font-extrabold tracking-tight text-[#ea580c] mb-3">
El Sentido de la Existencia y el Mal
</h1>
<div class="text-xl font-bold text-indigo-700 mb-2">
Proyecto Final
</div>
<p class="text-sm font-medium text-slate-600 max-w-xl mx-auto">
Seminario Académico «Disertación Crítica: Respuestas Contemporáneas al Problema del Mal y del Sentido»
</p>
</div>
<div class="flex items-center justify-center gap-3 opacity-30 pb-4">
<div class="w-16 h-px bg-slate-400"></div>
<svg class="w-3.5 h-3.5 text-slate-500" viewBox="0 0 24 24" fill="currentColor"><path d="M11 2h2v7h7v2h-7v11h-2v-11h-7v-2h7v-7z"/></svg>
<div class="w-16 h-px bg-slate-400"></div>
</div>
</div>

---

<!-- SLIDE 07 · PROYECTO: OBJETIVOS Y CRONOGRAMA -->
<div class="flex flex-col h-full p-6 bg-white justify-between">
<div>
<div class="mb-2">
<span class="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 rounded-full">Proyecto Final · Estructura</span>
</div>
<h2 class="text-2xl font-bold text-[#ea580c]">Objetivos y Planificación del Seminario</h2>
</div>
<div class="grid grid-cols-3 gap-4 my-auto">
<div v-click="1" class="p-4 bg-indigo-50/50 border border-indigo-100 rounded-xl">
<div class="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs mb-2">1</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">Duración</h3>
<p class="text-xs text-slate-600 mb-2">
Se desarrollará durante <strong>3 sesiones de aula</strong> con nivel preuniversitario de fundamentación teórica y dialéctica.
</p>
<div class="text-[11px] text-indigo-700 font-semibold">• Metodología de seminario socrático.</div>
</div>
<div v-click="2" class="p-4 bg-indigo-50/50 border border-indigo-100 rounded-xl">
<div class="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs mb-2">2</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">Ensayo Monográfico</h3>
<p class="text-xs text-slate-600 mb-2">
Elaboración de una disertación escrita (1.500 palabras) comparando autores (Dostoievski, Camus, Frankl, Benedicto XVI).
</p>
<div class="text-[11px] text-indigo-700 font-semibold">• Diálogo fe y pensamiento moderno.</div>
</div>
<div v-click="3" class="p-4 bg-indigo-50/50 border border-indigo-100 rounded-xl">
<div class="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs mb-2">3</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">Mesa Redonda</h3>
<p class="text-xs text-slate-600 mb-2">
Defensa oral de las tesis con réplica de los compañeros de mesa y formulación de síntesis personal sobre la propia vocación.
</p>
<div class="text-[11px] text-indigo-700 font-semibold">• Madurez humana y espiritual.</div>
</div>
</div>
<div v-click="4" class="p-2.5 bg-slate-50 rounded-lg text-xs text-slate-600 border-l-4 border-indigo-500">
<strong>Organización:</strong> Parejas de investigación con roles complementarios (Tesis y Antítesis).
</div>
</div>

---

<!-- SLIDE 08 · PROYECTO: PLAN SESIÓN A SESIÓN -->
<div class="flex flex-col h-full p-6 bg-white justify-between">
<div>
<div class="mb-2">
<span class="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 rounded-full">Proyecto Final · Fases</span>
</div>
<h2 class="text-2xl font-bold text-[#ea580c]">Fases de Investigación y Disertación</h2>
</div>
<div class="grid grid-cols-3 gap-4 my-auto">
<div v-click="1" class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
<div class="text-xs font-bold uppercase text-amber-700 mb-1">Sesión 1 de Proyecto</div>
<h3 class="font-bold text-slate-800 text-sm mb-2">Análisis de Textos Clásicos</h3>
<ul class="text-xs text-slate-600 space-y-1.5 leading-snug">
<li>• Lectura guiada de fragmentos: «Los hermanos Karamázov» y «Spe Salvi».</li>
<li>• Definición de la pregunta nuclear del ensayo.</li>
<li>• Redacción del esquema de citas y marco conceptual.</li>
</ul>
</div>
<div v-click="2" class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
<div class="text-xs font-bold uppercase text-sky-700 mb-1">Sesión 2 de Proyecto</div>
<h3 class="font-bold text-slate-800 text-sm mb-2">Redacción y Revisión Cruzada</h3>
<ul class="text-xs text-slate-600 space-y-1.5 leading-snug">
<li>• Escritura de la introducción, argumentos y conclusión del ensayo.</li>
<li>• Revisión por pares ciegos para contrastar la solidez del razonamiento.</li>
<li>• Preparación de las diapositivas sintéticas de defensa oral.</li>
</ul>
</div>
<div v-click="3" class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
<div class="text-xs font-bold uppercase text-emerald-700 mb-1">Sesión 3 de Proyecto</div>
<h3 class="font-bold text-slate-800 text-sm mb-2">Defensa en Mesa Redonda</h3>
<ul class="text-xs text-slate-600 space-y-1.5 leading-snug">
<li>• Presentación de 5 minutos por autor estudiado.</li>
<li>• Rueda de preguntas dialécticas entre ponentes.</li>
<li>• Evaluación mediante rúbrica académica universitaria.</li>
</ul>
</div>
</div>
<div v-click="4" class="text-center text-xs text-slate-400">
El profesor modera la mesa promoviendo el rigor ontológico y la empatía existencial.
</div>
</div>

---

<!-- SLIDE 09 · PROYECTO: CRITERIOS Y RÚBRICA -->
<div class="flex flex-col h-full p-6 bg-white justify-between">
<div>
<div class="mb-2">
<span class="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 rounded-full">Proyecto Final · Calificación</span>
</div>
<h2 class="text-2xl font-bold text-[#ea580c]">Criterios de Evaluación y Calificación</h2>
</div>
<div class="grid grid-cols-4 gap-3 my-auto">
<div v-click="1" class="p-3 bg-amber-50/60 border border-amber-200 rounded-xl text-center">
<div class="text-xl font-bold text-amber-700 mb-1">40%</div>
<h3 class="font-bold text-slate-800 text-xs mb-1">Ensayo Académico</h3>
<p class="text-[11px] text-slate-600">
Profundidad filosófico-teológica, referencias bibliográficas rigurosas y madurez expresiva.
</p>
</div>
<div v-click="2" class="p-3 bg-sky-50/60 border border-sky-200 rounded-xl text-center">
<div class="text-xl font-bold text-sky-700 mb-1">30%</div>
<h3 class="font-bold text-slate-800 text-xs mb-1">Defensa en Coloquio</h3>
<p class="text-[11px] text-slate-600">
Capacidad de réplica, claridad conceptual, convicción dialéctica y respeto al interlocutor.
</p>
</div>
<div v-click="3" class="p-3 bg-emerald-50/60 border border-emerald-200 rounded-xl text-center">
<div class="text-xl font-bold text-emerald-700 mb-1">15%</div>
<h3 class="font-bold text-slate-800 text-xs mb-1">Revisión Crítica</h3>
<p class="text-[11px] text-slate-600">
Calidad de las correcciones aportadas al borrador de los compañeros.
</p>
</div>
<div v-click="4" class="p-3 bg-indigo-50/60 border border-indigo-200 rounded-xl text-center">
<div class="text-xl font-bold text-indigo-700 mb-1">15%</div>
<h3 class="font-bold text-slate-800 text-xs mb-1">Síntesis Existencial</h3>
<p class="text-[11px] text-slate-600">
Aplicación sincera a la propia vida y vocación del alumno ante el futuro.
</p>
</div>
</div>
<div v-click="5" class="p-2 bg-slate-100 rounded text-center text-xs text-slate-600">
Ponderación Bachillerato: 70% Calificación docente del ensayo y coloquio + 30% Evaluación formativa procesual.
</div>
</div>

---
layout: default
class: "bg-amber-500 text-white flex flex-col justify-center items-center h-full"
---

<!-- ===================================================================== -->
<!-- SLIDE SEPARADORA DE IDIOMA                                            -->
<!-- ===================================================================== -->

<div class="text-center">
<div class="text-xs uppercase tracking-widest font-bold opacity-80 mb-2">
Bloc Lingüístic Oficial
</div>
<div class="text-4xl font-extrabold tracking-tight">
VERSIÓ EN VALENCIÀ (AVL)
</div>
<div class="text-sm mt-3 opacity-90 font-medium">
Unitat Didàctica · 1r de Batxillerat: El Sentit de l'Existència i el Mal
</div>
</div>

<!--
**Nota tècnica per al docent:**
Diapositiva de transició visual de llengua per a centres plurilingües de la Comunitat Valenciana.
-->

---

<!-- ===================================================================== -->
<!-- BLOQUE 2: VERSIÓN EN VALENCIANO (NORMATIVA AVL)                       -->
<!-- ===================================================================== -->

<!-- SLIDE 11 · PORTADA SESSIÓ 1 (VALENCIÀ) -->
<div class="flex flex-col justify-between h-full p-8 text-center bg-white">
<div class="flex justify-between items-center text-xs font-semibold uppercase tracking-widest text-slate-400 pt-2">
<span>Departament de Religió Catòlica</span>
<span class="px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 rounded-full">1r de Batxillerat · Unitat Didàctica 1</span>
</div>
<div class="my-auto">
<h1 class="!text-5xl font-extrabold tracking-tight text-[#ea580c] mb-3">
El Sentit de l'Existència i el Mal
</h1>
<div class="text-xl font-bold text-slate-700 mb-2">
Sessió 1
</div>
<p class="text-sm font-medium text-slate-500 max-w-xl mx-auto">
La Recerca de Sentit i el Buit Existencial: Viktor Frankl, l'angoixa contemporània i l'obertura a l'Absolut
</p>
</div>
<div class="flex items-center justify-center gap-3 opacity-30 pb-4">
<div class="w-16 h-px bg-slate-400"></div>
<svg class="w-3.5 h-3.5 text-slate-500" viewBox="0 0 24 24" fill="currentColor"><path d="M11 2h2v7h7v2h-7v11h-2v-11h-7v-2h7v-7z"/></svg>
<div class="w-16 h-px bg-slate-400"></div>
</div>
</div>

---

<!-- SLIDE 12 · DIALÈCTICA (VALENCIÀ) -->
<div class="flex flex-col h-full p-6 bg-white justify-between">
<div>
<div class="mb-2">
<span class="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-rose-100 text-rose-800 rounded-full">Antropologia Filosòfica</span>
</div>
<h2 class="text-2xl font-bold text-[#ea580c]">És l'existència absurda o una vocació amb sentit?</h2>
</div>
<div class="grid grid-cols-2 gap-5 my-auto">
<div v-click="1" class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between">
<div>
<div class="flex items-center gap-2 mb-2">
<span class="w-6 h-6 rounded-full bg-rose-200 text-rose-700 flex items-center justify-center font-bold text-xs">✕</span>
<h3 class="font-bold text-slate-700 text-base">Nihilisme Existencial</h3>
</div>
<p v-click="2" class="text-xs text-slate-500 mb-2 italic">"Naixem per atzar biològic, vivim sense meta i morim en el no-res."</p>
<p v-click="3" class="text-xs text-slate-600 leading-relaxed mb-2">
La pèrdua d'horitzons de transcendència desemboca en la «nàusea» de Sartre o en l'hedonisme d'evasió fugaç.
</p>
<div class="space-y-1 text-xs text-slate-600">
<div v-click="4" class="flex items-start">
<span class="text-rose-500 font-bold mr-1.5 leading-none mt-0.5">•</span>
<span>El sofriment no té cap valor redemptor.</span>
</div>
<div v-click="5" class="flex items-start">
<span class="text-rose-500 font-bold mr-1.5 leading-none mt-0.5">•</span>
<span>Buit existencial disfressat de consumisme compulsiu.</span>
</div>
</div>
</div>
<div v-click="6" class="mt-2 pt-2 border-t border-slate-200 text-[11px] font-semibold text-rose-700">
Conseqüència: Desesperança i aïllament interior.
</div>
</div>
<div v-click="7" class="p-4 bg-amber-50/60 border border-amber-200 rounded-xl flex flex-col justify-between">
<div>
<div class="flex items-center gap-2 mb-2">
<span class="w-6 h-6 rounded-full bg-emerald-200 text-emerald-700 flex items-center justify-center font-bold text-xs">✓</span>
<h3 class="font-bold text-slate-800 text-base">Logoteràpia i Revelació Cristiana</h3>
</div>
<p v-click="8" class="text-xs text-slate-500 mb-2 italic">"Qui té un per què viure pot suportar quasi qualsevol com."</p>
<p v-click="9" class="text-xs text-slate-700 leading-relaxed mb-2">
Viktor Frankl descobrí als camps d'extermini que la dignitat humana rau en la llibertat incorruptible de triar una actitud i estimar.
</p>
<div class="space-y-1 text-xs text-slate-700">
<div v-click="10" class="flex items-start">
<span class="text-emerald-600 font-bold mr-1.5 leading-none mt-0.5">•</span>
<span>L'anhel d'infinit manifesta que fórem creats per a Déu.</span>
</div>
<div v-click="11" class="flex items-start">
<span class="text-emerald-600 font-bold mr-1.5 leading-none mt-0.5">•</span>
<span>L'entrega als altres conferix sentit ple al dolor.</span>
</div>
</div>
</div>
<div v-click="12" class="mt-2 pt-2 border-t border-amber-200 text-[11px] font-semibold text-emerald-700">
Conseqüència: Esperança infrangible i maduresa espiritual.
</div>
</div>
</div>
<div v-click="13" class="p-2.5 bg-orange-50 rounded-lg text-xs text-slate-700 border-l-4 border-[#ea580c]">
<strong>Sant Agustí (Confessions I, 1):</strong> «Ens féreu, Senyor, per a vós, i el nostre cor està inquiet fins que descanse en vós».
</div>
</div>

---

<!-- SLIDE 13 · TRES VIES CAP AL SENTIT (VALENCIÀ) -->
<div class="flex flex-col h-full p-6 bg-white justify-between">
<div>
<div class="mb-2">
<span class="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-sky-100 text-sky-800 rounded-full">Psicologia i Humanisme</span>
</div>
<h2 class="text-2xl font-bold text-[#ea580c]">Les Tres Vies del Sentit Vital (Viktor Frankl)</h2>
</div>
<div class="grid grid-cols-3 gap-4 my-auto">
<div v-click="1" class="p-4 bg-sky-50/50 border border-sky-100 rounded-xl">
<div class="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-sm mb-2">🎨</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">Valors Creatius</h3>
<p class="text-xs text-slate-600 leading-relaxed mb-2">
Allò que donem al món a través del treball vocacional, l'art, la ciència o el servici actiu a la comunitat.
</p>
<span class="text-[10px] uppercase font-bold text-sky-700 tracking-wider">Crear i transformar la realitat</span>
</div>
<div v-click="2" class="p-4 bg-sky-50/50 border border-sky-100 rounded-xl">
<div class="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-sm mb-2">🤝</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">Valors Vivencials</h3>
<p class="text-xs text-slate-600 leading-relaxed mb-2">
Allò que rebem del món: la sorpresa davant la bellesa de la natura, de l'art i, sobretot, l'encontre d'amor amb l'altre.
</p>
<span class="text-[10px] uppercase font-bold text-sky-700 tracking-wider">Amor, contemplació i comunió</span>
</div>
<div v-click="3" class="p-4 bg-sky-50/50 border border-sky-100 rounded-xl">
<div class="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-sm mb-2">🛡️</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">Valors d'Actitud</h3>
<p class="text-xs text-slate-600 leading-relaxed mb-2">
La postura lliure que adoptem davant una situació inevitable de sofriment: transformar la tragèdia en triomf moral.
</p>
<span class="text-[10px] uppercase font-bold text-sky-700 tracking-wider">La suprema llibertat interior</span>
</div>
</div>
<div v-click="4" class="text-center text-xs text-slate-400 font-medium">
«L'home a la recerca de sentit»: Fins i tot en la màxima vulnerabilitat, la vida conserva un sentit potencial indefugible.
</div>
</div>

---

<!-- SLIDE 14 · PORTADA SESSIÓ 2 (VALENCIÀ) -->
<div class="flex flex-col justify-between h-full p-8 text-center bg-white">
<div class="flex justify-between items-center text-xs font-semibold uppercase tracking-widest text-slate-400 pt-2">
<span>Departament de Religió Catòlica</span>
<span class="px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 rounded-full">1r de Batxillerat · Unitat Didàctica 1</span>
</div>
<div class="my-auto">
<h1 class="!text-5xl font-extrabold tracking-tight text-[#ea580c] mb-3">
El Sentit de l'Existència i el Mal
</h1>
<div class="text-xl font-bold text-slate-700 mb-2">
Sessió 2
</div>
<p class="text-sm font-medium text-slate-500 max-w-xl mx-auto">
L'Escàndol del Mal i la Resposta de la Creu: Teodicea, llibertat humana i compassió redemptora
</p>
</div>
<div class="flex items-center justify-center gap-3 opacity-30 pb-4">
<div class="w-16 h-px bg-slate-400"></div>
<svg class="w-3.5 h-3.5 text-slate-500" viewBox="0 0 24 24" fill="currentColor"><path d="M11 2h2v7h7v2h-7v11h-2v-11h-7v-2h7v-7z"/></svg>
<div class="w-16 h-px bg-slate-400"></div>
</div>
</div>

---

<!-- SLIDE 15 · TEODICEA I LA CREU (VALENCIÀ) -->
<div class="flex flex-col h-full p-6 bg-white justify-between">
<div>
<div class="mb-2">
<span class="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 rounded-full">Teodicea i Misteri Cristià</span>
</div>
<h2 class="text-2xl font-bold text-[#ea580c]">Si Déu és bo i totpoderós, per què existix el mal?</h2>
</div>
<div class="grid grid-cols-3 gap-4 my-auto">
<div v-click="1" class="p-4 bg-indigo-50/50 border border-indigo-100 rounded-xl">
<div class="text-2xl mb-1">⚖️</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">El Preu de la Llibertat</h3>
<p class="text-xs text-slate-600 leading-relaxed mb-2">
El mal moral procedix del lliure albir. Déu preferix crear éssers lliures capaços d'estimar que no titelles programades incapaces de pecar.
</p>
<span class="text-[10px] font-bold text-indigo-700">Misteri d'iniquitat moral</span>
</div>
<div v-click="2" class="p-4 bg-indigo-50/50 border border-indigo-100 rounded-xl">
<div class="text-2xl mb-1">✝️</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">Un Déu que Patix</h3>
<p class="text-xs text-slate-600 leading-relaxed mb-2">
La resposta cristiana no és una teoria freda sinó un esdeveniment: a la Creu, Déu no explica el dolor, sinó que l'abraça i l'ompli de presència divina.
</p>
<span class="text-[10px] font-bold text-indigo-700">Solidaritat amb el crucificat</span>
</div>
<div v-click="3" class="p-4 bg-indigo-50/50 border border-indigo-100 rounded-xl">
<div class="text-2xl mb-1">🌅</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">L'Última Paraula</h3>
<p class="text-xs text-slate-600 leading-relaxed mb-2">
La Resurrecció revela que la mort i la injustícia no tenen la victòria definitiva. L'esperança cristiana és promesa de justícia escatològica i vida eterna.
</p>
<span class="text-[10px] font-bold text-indigo-700">Pasqua: Triomf de l'Amor</span>
</div>
</div>
<div v-click="4" class="p-2.5 bg-slate-50 rounded-lg text-xs text-slate-700 border-l-4 border-indigo-500">
<strong>Jürgen Moltmann («El Déu crucificat»):</strong> «Un Déu que no poguera patir no podria estimar».
</div>
</div>

---

<!-- SLIDE 16 · PORTADA PROJECTE FINAL (VALENCIÀ) -->
<div class="flex flex-col justify-between h-full p-8 text-center bg-white">
<div class="flex justify-between items-center text-xs font-semibold uppercase tracking-widest text-slate-400 pt-2">
<span>Departament de Religió Catòlica</span>
<span class="px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-800 bg-indigo-100 rounded-full">1r de Batxillerat · Col·loqui Filosòfic-Teològic</span>
</div>
<div class="my-auto">
<h1 class="!text-5xl font-extrabold tracking-tight text-[#ea580c] mb-3">
El Sentit de l'Existència i el Mal
</h1>
<div class="text-xl font-bold text-indigo-700 mb-2">
Projecte Final
</div>
<p class="text-sm font-medium text-slate-600 max-w-xl mx-auto">
Seminari Acadèmic «Dissertació Crítica: Respostes Contemporànies al Problema del Mal i del Sentit»
</p>
</div>
<div class="flex items-center justify-center gap-3 opacity-30 pb-4">
<div class="w-16 h-px bg-slate-400"></div>
<svg class="w-3.5 h-3.5 text-slate-500" viewBox="0 0 24 24" fill="currentColor"><path d="M11 2h2v7h7v2h-7v11h-2v-11h-7v-2h7v-7z"/></svg>
<div class="w-16 h-px bg-slate-400"></div>
</div>
</div>

---

<!-- SLIDE 17 · PROJECTE: OBJECTIUS I CRONOGRAMA (VALENCIÀ) -->
<div class="flex flex-col h-full p-6 bg-white justify-between">
<div>
<div class="mb-2">
<span class="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 rounded-full">Projecte Final · Estructura</span>
</div>
<h2 class="text-2xl font-bold text-[#ea580c]">Objectius i Planificació del Seminari</h2>
</div>
<div class="grid grid-cols-3 gap-4 my-auto">
<div v-click="1" class="p-4 bg-indigo-50/50 border border-indigo-100 rounded-xl">
<div class="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs mb-2">1</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">Duració</h3>
<p class="text-xs text-slate-600 mb-2">
Es desenvoluparà durant <strong>3 sessions d'aula</strong> amb nivell preuniversitari de fonamentació teòrica i dialèctica.
</p>
<div class="text-[11px] text-indigo-700 font-semibold">• Metodologia de seminari socràtic.</div>
</div>
<div v-click="2" class="p-4 bg-indigo-50/50 border border-indigo-100 rounded-xl">
<div class="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs mb-2">2</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">Assaig Monogràfic</h3>
<p class="text-xs text-slate-600 mb-2">
Elaboració d'una dissertació escrita (1.500 paraules) comparant autors (Dostoievski, Camus, Frankl, Benet XVI).
</p>
<div class="text-[11px] text-indigo-700 font-semibold">• Diàleg fe i pensament modern.</div>
</div>
<div v-click="3" class="p-4 bg-indigo-50/50 border border-indigo-100 rounded-xl">
<div class="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs mb-2">3</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">Taula Redona</h3>
<p class="text-xs text-slate-600 mb-2">
Defensa oral de les tesis amb rèplica dels companys i formulació de síntesi personal sobre la pròpia vocació.
</p>
<div class="text-[11px] text-indigo-700 font-semibold">• Maduresa humana i espiritual.</div>
</div>
</div>
<div v-click="4" class="p-2.5 bg-slate-50 rounded-lg text-xs text-slate-600 border-l-4 border-indigo-500">
<strong>Organització:</strong> Parelles d'investigació amb rols complementaris (Tesi i Antítesi).
</div>
</div>

---

<!-- SLIDE 18 · PROJECTE: SESSIÓ A SESSIÓ (VALENCIÀ) -->
<div class="flex flex-col h-full p-6 bg-white justify-between">
<div>
<div class="mb-2">
<span class="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 rounded-full">Projecte Final · Fases</span>
</div>
<h2 class="text-2xl font-bold text-[#ea580c]">Fases d'Investigació i Dissertació</h2>
</div>
<div class="grid grid-cols-3 gap-4 my-auto">
<div v-click="1" class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
<div class="text-xs font-bold uppercase text-amber-700 mb-1">Sessió 1 de Projecte</div>
<h3 class="font-bold text-slate-800 text-sm mb-2">Anàlisi de Textos Clàssics</h3>
<ul class="text-xs text-slate-600 space-y-1.5 leading-snug">
<li>• Lectura guiada de fragments: «Els germans Karamàzov» i «Spe Salvi».</li>
<li>• Definició de la pregunta nuclear de l'assaig.</li>
<li>• Redacció de l'esquema de cites i marc conceptual.</li>
</ul>
</div>
<div v-click="2" class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
<div class="text-xs font-bold uppercase text-sky-700 mb-1">Sessió 2 de Projecte</div>
<h3 class="font-bold text-slate-800 text-sm mb-2">Redacció i Revisió Creuada</h3>
<ul class="text-xs text-slate-600 space-y-1.5 leading-snug">
<li>• Escriptura de la introducció, arguments i conclusió de l'assaig.</li>
<li>• Revisió entre iguals a cegues per a contrastar la solidesa del raonament.</li>
<li>• Preparació de les diapositives sintètiques de defensa oral.</li>
</ul>
</div>
<div v-click="3" class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
<div class="text-xs font-bold uppercase text-emerald-700 mb-1">Sessió 3 de Projecte</div>
<h3 class="font-bold text-slate-800 text-sm mb-2">Defensa en Taula Redona</h3>
<ul class="text-xs text-slate-600 space-y-1.5 leading-snug">
<li>• Presentació de 5 minuts per autor estudiat.</li>
<li>• Roda de preguntes dialèctiques entre ponents.</li>
<li>• Avaluació mitjançant rúbrica acadèmica universitària.</li>
</ul>
</div>
</div>
<div v-click="4" class="text-center text-xs text-slate-400">
El professor modera la taula promovent el rigor ontològic i l'empatia existencial.
</div>
</div>

---

<!-- SLIDE 19 · PROJECTE: CRITERIS I RÚBRICA (VALENCIÀ) -->
<div class="flex flex-col h-full p-6 bg-white justify-between">
<div>
<div class="mb-2">
<span class="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 rounded-full">Projecte Final · Qualificació</span>
</div>
<h2 class="text-2xl font-bold text-[#ea580c]">Criteris d'Avaluació i Qualificació</h2>
</div>
<div class="grid grid-cols-4 gap-3 my-auto">
<div v-click="1" class="p-3 bg-amber-50/60 border border-amber-200 rounded-xl text-center">
<div class="text-xl font-bold text-amber-700 mb-1">40%</div>
<h3 class="font-bold text-slate-800 text-xs mb-1">Assaig Acadèmic</h3>
<p class="text-[11px] text-slate-600">
Profunditat filosòfica i teològica, referències bibliogràfiques rigoroses i maduresa expressiva.
</p>
</div>
<div v-click="2" class="p-3 bg-sky-50/60 border border-sky-200 rounded-xl text-center">
<div class="text-xl font-bold text-sky-700 mb-1">30%</div>
<h3 class="font-bold text-slate-800 text-xs mb-1">Defensa en Col·loqui</h3>
<p class="text-[11px] text-slate-600">
Capacitat de rèplica, claredat conceptual, convicció dialèctica i respecte a l'interlocutor.
</p>
</div>
<div v-click="3" class="p-3 bg-emerald-50/60 border border-emerald-200 rounded-xl text-center">
<div class="text-xl font-bold text-emerald-700 mb-1">15%</div>
<h3 class="font-bold text-slate-800 text-xs mb-1">Revisió Crítica</h3>
<p class="text-[11px] text-slate-600">
Qualitat de les esmenes i aportacions fetes a l'esborrany dels companys.
</p>
</div>
<div v-click="4" class="p-3 bg-indigo-50/60 border border-indigo-200 rounded-xl text-center">
<div class="text-xl font-bold text-indigo-700 mb-1">15%</div>
<h3 class="font-bold text-slate-800 text-xs mb-1">Síntesi Existencial</h3>
<p class="text-[11px] text-slate-600">
Aplicació sincera a la pròpia vida i vocació de l'alumne davant del futur.
</p>
</div>
</div>
<div v-click="5" class="p-2 bg-slate-100 rounded text-center text-xs text-slate-600">
Ponderació Batxillerat: 70% Qualificació docent de l'assaig i col·loqui + 30% Avaluació formativa processual.
</div>
</div>
