---
theme: default
layout: default
title: "La Creación y la Casa Común - 1º ESO"
info: "Unidad Didáctica de Religión Católica - 1º de ESO"
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
<span class="px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 rounded-full">1º ESO · Unidad Didáctica 1</span>
</div>
<div class="my-auto">
<h1 class="!text-5xl font-extrabold tracking-tight text-[#ea580c] mb-3">
La Creación y la Casa Común
</h1>
<div class="text-xl font-bold text-slate-700 mb-2">
Sesión 1
</div>
<p class="text-sm font-medium text-slate-500 max-w-xl mx-auto">
¿Casualidad o Don? El asombro ante la belleza del cosmos y el origen de la vida
</p>
</div>
<div class="flex items-center justify-center gap-3 opacity-30 pb-4">
<div class="w-16 h-px bg-slate-400"></div>
<svg class="w-3.5 h-3.5 text-slate-500" viewBox="0 0 24 24" fill="currentColor"><path d="M11 2h2v7h7v2h-7v11h-2v-11h-7v-2h7v-7z"/></svg>
<div class="w-16 h-px bg-slate-400"></div>
</div>
</div>

<!--
**Pautas pedagógicas para el docente:**
- Activar la curiosidad del alumnado preguntando qué sienten al contemplar el cielo estrellado o un paisaje natural.
- Diferenciar entre el "cómo" científico y el "por qué / para qué" teológico.
-->

---

<!-- SLIDE 02 · DIALÉCTICA: DOS MIRADAS AL MUNDO -->
<div class="flex flex-col h-full p-6 bg-white justify-between">
<div>
<div class="mb-2">
<span class="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-rose-100 text-rose-800 rounded-full">Comparación y Dialéctica</span>
</div>
<h2 class="text-2xl font-bold text-[#ea580c]">¿Cómo miramos la naturaleza que nos rodea?</h2>
</div>
<div class="grid grid-cols-2 gap-5 my-auto">
<div v-click="1" class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between">
<div>
<div class="flex items-center gap-2 mb-2">
<span class="w-6 h-6 rounded-full bg-rose-200 text-rose-700 flex items-center justify-center font-bold text-xs">✕</span>
<h3 class="font-bold text-slate-700 text-base">Mirada Utilitarista y de Consumo</h3>
</div>
<p v-click="2" class="text-xs text-slate-500 mb-2 italic">"La naturaleza es solo un almacén de recursos para explotar."</p>
<p v-click="3" class="text-xs text-slate-600 leading-relaxed mb-2">
Reducir el mundo a objetos de usar y tirar sin pensar en las consecuencias ni en las generaciones venideras.
</p>
<div class="space-y-1 text-xs text-slate-600">
<div v-click="4" class="flex items-start">
<span class="text-rose-500 font-bold mr-1.5 leading-none mt-0.5">•</span>
<span>Contaminación, deforestación y pérdida de biodiversidad.</span>
</div>
<div v-click="5" class="flex items-start">
<span class="text-rose-500 font-bold mr-1.5 leading-none mt-0.5">•</span>
<span>Desconexión espiritual y egoísmo ante los más vulnerables.</span>
</div>
</div>
</div>
<div v-click="6" class="mt-2 pt-2 border-t border-slate-200 text-[11px] font-semibold text-rose-700">
Consecuencia: Crisis climática y degradación humana.
</div>
</div>
<div v-click="7" class="p-4 bg-amber-50/60 border border-amber-200 rounded-xl flex flex-col justify-between">
<div>
<div class="flex items-center gap-2 mb-2">
<span class="w-6 h-6 rounded-full bg-emerald-200 text-emerald-700 flex items-center justify-center font-bold text-xs">✓</span>
<h3 class="font-bold text-slate-800 text-base">Mirada Creyente: La Creación como Don</h3>
</div>
<p v-click="8" class="text-xs text-slate-500 mb-2 italic">"El mundo es un regalo confiado a nuestras manos con amor."</p>
<p v-click="9" class="text-xs text-slate-700 leading-relaxed mb-2">
El relato del Génesis revela que todo lo creado es esencialmente bueno. El ser humano no es dueño despótico, sino jardinero y protector.
</p>
<div class="space-y-1 text-xs text-slate-700">
<div v-click="10" class="flex items-start">
<span class="text-emerald-600 font-bold mr-1.5 leading-none mt-0.5">•</span>
<span>Gratitud constante ante la belleza de cada ser vivo.</span>
</div>
<div v-click="11" class="flex items-start">
<span class="text-emerald-600 font-bold mr-1.5 leading-none mt-0.5">•</span>
<span>Responsabilidad ética y fraternidad con toda la creación.</span>
</div>
</div>
</div>
<div v-click="12" class="mt-2 pt-2 border-t border-amber-200 text-[11px] font-semibold text-emerald-700">
Consecuencia: Armonía con Dios, con el prójimo y con la tierra.
</div>
</div>
</div>
<div v-click="13" class="p-2.5 bg-orange-50 rounded-lg text-xs text-slate-700 border-l-4 border-[#ea580c]">
<strong>Principio bíblico:</strong> «Vio Dios todo lo que había hecho, y era muy bueno» (Génesis 1, 31).
</div>
</div>

---

<!-- SLIDE 03 · CONCEPTOS CLAVE EN 3 COLUMNAS -->
<div class="flex flex-col h-full p-6 bg-white justify-between">
<div>
<div class="mb-2">
<span class="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-sky-100 text-sky-800 rounded-full">Fundamentos Teológicos</span>
</div>
<h2 class="text-2xl font-bold text-[#ea580c]">Los Tres Mensajes del Relato de la Creación</h2>
</div>
<div class="grid grid-cols-3 gap-4 my-auto">
<div v-click="1" class="p-4 bg-sky-50/50 border border-sky-100 rounded-xl">
<div class="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-sm mb-2">1</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">Fruto del Amor Libre</h3>
<p v-click="2" class="text-xs text-slate-600 leading-relaxed mb-2">
Dios no crea por necesidad ni por soledad, sino por pura sobreabundancia de amor. El universo tiene sentido e intención.
</p>
<span v-click="3" class="text-[10px] uppercase font-bold text-sky-700 tracking-wider">No somos producto del absurdo</span>
</div>
<div v-click="4" class="p-4 bg-sky-50/50 border border-sky-100 rounded-xl">
<div class="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-sm mb-2">2</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">Dignidad de la Persona</h3>
<p v-click="5" class="text-xs text-slate-600 leading-relaxed mb-2">
Creados a imagen y semejanza de Dios. Cada ser humano posee un valor sagrado inviolable desde el primer instante.
</p>
<span v-click="6" class="text-[10px] uppercase font-bold text-sky-700 tracking-wider">Capacidad de amar y decidir</span>
</div>
<div v-click="7" class="p-4 bg-sky-50/50 border border-sky-100 rounded-xl">
<div class="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-sm mb-2">3</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">Misión de Custodia</h3>
<p v-click="8" class="text-xs text-slate-600 leading-relaxed mb-2">
El mandato de «cultivar y cuidar el jardín» implica administrar con justicia y preservar la belleza para los que vendrán.
</p>
<span v-click="9" class="text-[10px] uppercase font-bold text-sky-700 tracking-wider">Responsabilidad intergeneracional</span>
</div>
</div>
<div v-click="10" class="text-center text-xs text-slate-400 font-medium">
San Francisco de Asís: «Alabado seas, mi Señor, por la hermana nuestra madre tierra».
</div>
</div>

---

<!-- SLIDE 04 · PORTADA SESIÓN 2 -->
<div class="flex flex-col justify-between h-full p-8 text-center bg-white">
<div class="flex justify-between items-center text-xs font-semibold uppercase tracking-widest text-slate-400 pt-2">
<span>Departamento de Religión Católica</span>
<span class="px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 rounded-full">1º ESO · Unidad Didáctica 1</span>
</div>
<div class="my-auto">
<h1 class="!text-5xl font-extrabold tracking-tight text-[#ea580c] mb-3">
La Creación y la Casa Común
</h1>
<div class="text-xl font-bold text-slate-700 mb-2">
Sesión 2
</div>
<p class="text-sm font-medium text-slate-500 max-w-xl mx-auto">
Custodios de la Tierra: La encíclica Laudato Si' y la ecología integral en nuestra vida diaria
</p>
</div>
<div class="flex items-center justify-center gap-3 opacity-30 pb-4">
<div class="w-16 h-px bg-slate-400"></div>
<svg class="w-3.5 h-3.5 text-slate-500" viewBox="0 0 24 24" fill="currentColor"><path d="M11 2h2v7h7v2h-7v11h-2v-11h-7v-2h7v-7z"/></svg>
<div class="w-16 h-px bg-slate-400"></div>
</div>
</div>

<!--
**Pautas pedagógicas para el docente:**
- Conectar la doctrina de Laudato Si' con los hábitos reales de consumo del alumnado (plásticos, ropa, energía).
-->

---

<!-- SLIDE 05 · ECOLOGÍA INTEGRAL: LAUDATO SI' -->
<div class="flex flex-col h-full p-6 bg-white justify-between">
<div>
<div class="mb-2">
<span class="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 rounded-full">Magisterio y Actualidad</span>
</div>
<h2 class="text-2xl font-bold text-[#ea580c]">¿Qué propone la Ecología Integral del Papa Francisco?</h2>
</div>
<div class="grid grid-cols-3 gap-4 my-auto">
<div v-click="1" class="p-4 bg-emerald-50/50 border border-emerald-100 rounded-xl">
<div class="text-2xl mb-1">🌍</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">El Clamor de la Tierra</h3>
<p v-click="2" class="text-xs text-slate-600 leading-relaxed mb-2">
No hay dos crisis separadas (una ambiental y otra social), sino una sola y compleja crisis socio-ambiental.
</p>
<span v-click="3" class="text-[10px] font-bold text-emerald-700">Todo está conectado</span>
</div>
<div v-click="4" class="p-4 bg-emerald-50/50 border border-emerald-100 rounded-xl">
<div class="text-2xl mb-1">🤝</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">El Clamor de los Pobres</h3>
<p v-click="5" class="text-xs text-slate-600 leading-relaxed mb-2">
Los efectos más graves del cambio climático los sufren las poblaciones más empobrecidas, que menos contaminan.
</p>
<span v-click="6" class="text-[10px] font-bold text-emerald-700">Justicia social y climática</span>
</div>
<div v-click="7" class="p-4 bg-emerald-50/50 border border-emerald-100 rounded-xl">
<div class="text-2xl mb-1">🌱</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">Conversión Ecológica</h3>
<p v-click="8" class="text-xs text-slate-600 leading-relaxed mb-2">
Cambiar nuestro estilo de vida: menos consumo compulsivo, más sobriedad solidaria y comunión con la naturaleza.
</p>
<span v-click="9" class="text-[10px] font-bold text-emerald-700">Acción concreta en el aula</span>
</div>
</div>
<div v-click="10" class="p-2.5 bg-amber-50 rounded-lg text-xs text-slate-700 border-l-4 border-amber-500">
<strong>Frase clave:</strong> «El ambiente humano y el ambiente natural se degradan juntos» (Laudato Si', 48).
</div>
</div>

---

<!-- SLIDE 06 · PORTADA PROYECTO FINAL -->
<div class="flex flex-col justify-between h-full p-8 text-center bg-white">
<div class="flex justify-between items-center text-xs font-semibold uppercase tracking-widest text-slate-400 pt-2">
<span>Departamento de Religión Católica</span>
<span class="px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-800 bg-indigo-100 rounded-full">1º ESO · Trabajo de Aprendizaje y Servicio</span>
</div>
<div class="my-auto">
<h1 class="!text-5xl font-extrabold tracking-tight text-[#ea580c] mb-3">
La Creación y la Casa Común
</h1>
<div class="text-xl font-bold text-indigo-700 mb-2">
Proyecto Final
</div>
<p class="text-sm font-medium text-slate-600 max-w-xl mx-auto">
Campaña «Guardianes de la Creación: Nuestro Instituto Sostenible y Fraterno»
</p>
</div>
<div class="flex items-center justify-center gap-3 opacity-30 pb-4">
<div class="w-16 h-px bg-slate-400"></div>
<svg class="w-3.5 h-3.5 text-slate-500" viewBox="0 0 24 24" fill="currentColor"><path d="M11 2h2v7h7v2h-7v11h-2v-11h-7v-2h7v-7z"/></svg>
<div class="w-16 h-px bg-slate-400"></div>
</div>
</div>

<!--
**Pautas pedagógicas para el docente:**
- Presentar el reto a la clase y formar equipos cooperativos de 4 alumnos heterogéneos.
-->

---

<!-- SLIDE 07 · PROYECTO: OBJETIVOS Y CRONOGRAMA -->
<div class="flex flex-col h-full p-6 bg-white justify-between">
<div>
<div class="mb-2">
<span class="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 rounded-full">Proyecto Final · Estructura</span>
</div>
<h2 class="text-2xl font-bold text-[#ea580c]">Objetivos y Cronograma de Trabajo</h2>
</div>
<div class="grid grid-cols-3 gap-4 my-auto">
<div v-click="1" class="p-4 bg-indigo-50/50 border border-indigo-100 rounded-xl">
<div class="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs mb-2">1</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">Duración Total</h3>
<p class="text-xs text-slate-600 mb-2">
Se utilizarán <strong>3 sesiones de aula</strong> completas para investigar, diseñar y exponer el producto final.
</p>
<div class="text-[11px] text-indigo-700 font-semibold">• 100% de trabajo en equipo en el aula.</div>
</div>
<div v-click="2" class="p-4 bg-indigo-50/50 border border-indigo-100 rounded-xl">
<div class="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs mb-2">2</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">El Reto Escolar</h3>
<p class="text-xs text-slate-600 mb-2">
Detectar 3 focos de desperdicio en el instituto (residuos, energía, papel) y crear una propuesta cristiana de solución.
</p>
<div class="text-[11px] text-indigo-700 font-semibold">• Diagnóstico real y medible.</div>
</div>
<div v-click="3" class="p-4 bg-indigo-50/50 border border-indigo-100 rounded-xl">
<div class="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs mb-2">3</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">Impacto Comunitario</h3>
<p class="text-xs text-slate-600 mb-2">
Difundir la campaña mediante carteles creativos y un decálogo digital compartido con el resto del centro escolar.
</p>
<div class="text-[11px] text-indigo-700 font-semibold">• Aprendizaje-Servicio activo.</div>
</div>
</div>
<div v-click="4" class="p-2.5 bg-slate-50 rounded-lg text-xs text-slate-600 border-l-4 border-indigo-500">
<strong>Organización:</strong> Equipos cooperativos de 4 alumnos (Coordinador, Secretario, Diseñador y Portavoz).
</div>
</div>

---

<!-- SLIDE 08 · PROYECTO: PLAN SESIÓN A SESIÓN -->
<div class="flex flex-col h-full p-6 bg-white justify-between">
<div>
<div class="mb-2">
<span class="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 rounded-full">Proyecto Final · Fases</span>
</div>
<h2 class="text-2xl font-bold text-[#ea580c]">¿Qué haremos en cada sesión de trabajo?</h2>
</div>
<div class="grid grid-cols-3 gap-4 my-auto">
<div v-click="1" class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
<div class="text-xs font-bold uppercase text-amber-700 mb-1">Sesión 1 de Proyecto</div>
<h3 class="font-bold text-slate-800 text-sm mb-2">Auditoría Ecológica</h3>
<ul class="text-xs text-slate-600 space-y-1.5 leading-snug">
<li>• Recorrido breve por el centro para observar contenedores y patios.</li>
<li>• Registro fotográfico de puntos de mejora.</li>
<li>• Selección del problema que abordará el grupo.</li>
</ul>
</div>
<div v-click="2" class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
<div class="text-xs font-bold uppercase text-sky-700 mb-1">Sesión 2 de Proyecto</div>
<h3 class="font-bold text-slate-800 text-sm mb-2">Elaboración Creativa</h3>
<ul class="text-xs text-slate-600 space-y-1.5 leading-snug">
<li>• Redacción del «Decálogo de Laudato Si' para el Aula».</li>
<li>• Diseño del cartel físico o infografía digital.</li>
<li>• Vinculación con un versículo bíblico motivador.</li>
</ul>
</div>
<div v-click="3" class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
<div class="text-xs font-bold uppercase text-emerald-700 mb-1">Sesión 3 de Proyecto</div>
<h3 class="font-bold text-slate-800 text-sm mb-2">Exposición y Compromiso</h3>
<ul class="text-xs text-slate-600 space-y-1.5 leading-snug">
<li>• Presentación oral de 3 minutos por cada equipo.</li>
<li>• Pegada de carteles en los pasillos autorizados.</li>
<li>• Rúbrica de coevaluación entre compañeros.</li>
</ul>
</div>
</div>
<div v-click="4" class="text-center text-xs text-slate-400">
El profesor tutorizará cada mesa resolviendo dudas técnicas y teológicas durante las 3 sesiones.
</div>
</div>

---

<!-- SLIDE 09 · PROYECTO: CRITERIOS DE EVALUACIÓN Y RÚBRICA -->
<div class="flex flex-col h-full p-6 bg-white justify-between">
<div>
<div class="mb-2">
<span class="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 rounded-full">Proyecto Final · Calificación</span>
</div>
<h2 class="text-2xl font-bold text-[#ea580c]">Criterios de Evaluación y Rúbrica</h2>
</div>
<div class="grid grid-cols-4 gap-3 my-auto">
<div v-click="1" class="p-3 bg-amber-50/60 border border-amber-200 rounded-xl text-center">
<div class="text-xl font-bold text-amber-700 mb-1">30%</div>
<h3 class="font-bold text-slate-800 text-xs mb-1">Rigor Doctrinal</h3>
<p class="text-[11px] text-slate-600">
Uso correcto de conceptos bíblicos (Creación, don, dignidad) y citas de Laudato Si'.
</p>
</div>
<div v-click="2" class="p-3 bg-sky-50/60 border border-sky-200 rounded-xl text-center">
<div class="text-xl font-bold text-sky-700 mb-1">30%</div>
<h3 class="font-bold text-slate-800 text-xs mb-1">Creatividad y Calidad</h3>
<p class="text-[11px] text-slate-600">
Claridad visual del cartel o infografía, lemas originales y mensaje transformador.
</p>
</div>
<div v-click="3" class="p-3 bg-emerald-50/60 border border-emerald-200 rounded-xl text-center">
<div class="text-xl font-bold text-emerald-700 mb-1">20%</div>
<h3 class="font-bold text-slate-800 text-xs mb-1">Trabajo en Equipo</h3>
<p class="text-[11px] text-slate-600">
Participación activa de todos los miembros, respeto mutuo y cumplimiento del rol.
</p>
</div>
<div v-click="4" class="p-3 bg-indigo-50/60 border border-indigo-200 rounded-xl text-center">
<div class="text-xl font-bold text-indigo-700 mb-1">20%</div>
<h3 class="font-bold text-slate-800 text-xs mb-1">Defensa Oral</h3>
<p class="text-[11px] text-slate-600">
Claridad expositiva, convicción existencial y respuesta a las preguntas del grupo.
</p>
</div>
</div>
<div v-click="5" class="p-2 bg-slate-100 rounded text-center text-xs text-slate-600">
Instrumentos: Rúbrica del profesor (70%) + Coevaluación del equipo (20%) + Autoevaluación personal (10%).
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
Unitat Didàctica · 1r d'ESO: La Creació i la Casa Comuna
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
<span class="px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 rounded-full">1r d'ESO · Unitat Didàctica 1</span>
</div>
<div class="my-auto">
<h1 class="!text-5xl font-extrabold tracking-tight text-[#ea580c] mb-3">
La Creació i la Casa Comuna
</h1>
<div class="text-xl font-bold text-slate-700 mb-2">
Sessió 1
</div>
<p class="text-sm font-medium text-slate-500 max-w-xl mx-auto">
Casualitat o Do? La sorpresa davant la bellesa del cosmos i l'origen de la vida
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
<span class="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-rose-100 text-rose-800 rounded-full">Comparació i Dialèctica</span>
</div>
<h2 class="text-2xl font-bold text-[#ea580c]">Com mirem la naturalesa que ens envolta?</h2>
</div>
<div class="grid grid-cols-2 gap-5 my-auto">
<div v-click="1" class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between">
<div>
<div class="flex items-center gap-2 mb-2">
<span class="w-6 h-6 rounded-full bg-rose-200 text-rose-700 flex items-center justify-center font-bold text-xs">✕</span>
<h3 class="font-bold text-slate-700 text-base">Mirada Utilitarista i de Consum</h3>
</div>
<p v-click="2" class="text-xs text-slate-500 mb-2 italic">"La naturalesa és només un magatzem de recursos per a explotar."</p>
<p v-click="3" class="text-xs text-slate-600 leading-relaxed mb-2">
Reduir el món a objectes d'usar i tirar sense pensar en les conseqüències ni en les generacions futures.
</p>
<div class="space-y-1 text-xs text-slate-600">
<div v-click="4" class="flex items-start">
<span class="text-rose-500 font-bold mr-1.5 leading-none mt-0.5">•</span>
<span>Contaminació, desforestació i pèrdua de biodiversitat.</span>
</div>
<div v-click="5" class="flex items-start">
<span class="text-rose-500 font-bold mr-1.5 leading-none mt-0.5">•</span>
<span>Desconnexió espiritual i egoisme davant les persones vulnerables.</span>
</div>
</div>
</div>
<div v-click="6" class="mt-2 pt-2 border-t border-slate-200 text-[11px] font-semibold text-rose-700">
Conseqüència: Crisi climàtica i degradació humana.
</div>
</div>
<div v-click="7" class="p-4 bg-amber-50/60 border border-amber-200 rounded-xl flex flex-col justify-between">
<div>
<div class="flex items-center gap-2 mb-2">
<span class="w-6 h-6 rounded-full bg-emerald-200 text-emerald-700 flex items-center justify-center font-bold text-xs">✓</span>
<h3 class="font-bold text-slate-800 text-base">Mirada Creient: La Creació com a Do</h3>
</div>
<p v-click="8" class="text-xs text-slate-500 mb-2 italic">"El món és un regal confiat a les nostres mans amb amor."</p>
<p v-click="9" class="text-xs text-slate-700 leading-relaxed mb-2">
El relat del Gènesi revela que tot allò creat és bo per naturalesa. L'ésser humà no és amo despòtic, sinó jardiner i custodi.
</p>
<div class="space-y-1 text-xs text-slate-700">
<div v-click="10" class="flex items-start">
<span class="text-emerald-600 font-bold mr-1.5 leading-none mt-0.5">•</span>
<span>Gratitud constant davant la bellesa de cada ésser viu.</span>
</div>
<div v-click="11" class="flex items-start">
<span class="text-emerald-600 font-bold mr-1.5 leading-none mt-0.5">•</span>
<span>Responsabilitat ètica i fraternitat amb tota la creació.</span>
</div>
</div>
</div>
<div v-click="12" class="mt-2 pt-2 border-t border-amber-200 text-[11px] font-semibold text-emerald-700">
Conseqüència: Harmonia amb Déu, amb els altres i amb la terra.
</div>
</div>
</div>
<div v-click="13" class="p-2.5 bg-orange-50 rounded-lg text-xs text-slate-700 border-l-4 border-[#ea580c]">
<strong>Principi bíblic:</strong> «I veié Déu tot el que havia fet, i era molt bo» (Gènesi 1, 31).
</div>
</div>

---

<!-- SLIDE 13 · CONCEPTES CLAU EN 3 COLUMNES (VALENCIÀ) -->
<div class="flex flex-col h-full p-6 bg-white justify-between">
<div>
<div class="mb-2">
<span class="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-sky-100 text-sky-800 rounded-full">Fonaments Teològics</span>
</div>
<h2 class="text-2xl font-bold text-[#ea580c]">Els Tres Missatges del Relat de la Creació</h2>
</div>
<div class="grid grid-cols-3 gap-4 my-auto">
<div v-click="1" class="p-4 bg-sky-50/50 border border-sky-100 rounded-xl">
<div class="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-sm mb-2">1</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">Fruit de l'Amor Lliure</h3>
<p v-click="2" class="text-xs text-slate-600 leading-relaxed mb-2">
Déu no crea per necessitat ni per soledat, sinó per pura sobreabundància d'amor. L'univers té sentit i intenció profunda.
</p>
<span v-click="3" class="text-[10px] uppercase font-bold text-sky-700 tracking-wider">No som fruit de l'absurd</span>
</div>
<div v-click="4" class="p-4 bg-sky-50/50 border border-sky-100 rounded-xl">
<div class="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-sm mb-2">2</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">Dignitat de la Persona</h3>
<p v-click="5" class="text-xs text-slate-600 leading-relaxed mb-2">
Creats a imatge i semblança de Déu. Cada persona posseïx un valor sagrat inviolable des del primer instant.
</p>
<span v-click="6" class="text-[10px] uppercase font-bold text-sky-700 tracking-wider">Capacitat d'estimar i decidir</span>
</div>
<div v-click="7" class="p-4 bg-sky-50/50 border border-sky-100 rounded-xl">
<div class="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-sm mb-2">3</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">Missió de Custòdia</h3>
<p v-click="8" class="text-xs text-slate-600 leading-relaxed mb-2">
El manament de «cultivar i guardar el jardí» implica administrar amb justícia i preservar la creació per al futur.
</p>
<span v-click="9" class="text-[10px] uppercase font-bold text-sky-700 tracking-wider">Responsabilitat intergeneracional</span>
</div>
</div>
<div v-click="10" class="text-center text-xs text-slate-400 font-medium">
Sant Francesc d'Assís: «Lloat sigueu, Senyor meu, per la germana nostra mare terra».
</div>
</div>

---

<!-- SLIDE 14 · PORTADA SESSIÓ 2 (VALENCIÀ) -->
<div class="flex flex-col justify-between h-full p-8 text-center bg-white">
<div class="flex justify-between items-center text-xs font-semibold uppercase tracking-widest text-slate-400 pt-2">
<span>Departament de Religió Catòlica</span>
<span class="px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 rounded-full">1r d'ESO · Unitat Didàctica 1</span>
</div>
<div class="my-auto">
<h1 class="!text-5xl font-extrabold tracking-tight text-[#ea580c] mb-3">
La Creació i la Casa Comuna
</h1>
<div class="text-xl font-bold text-slate-700 mb-2">
Sessió 2
</div>
<p class="text-sm font-medium text-slate-500 max-w-xl mx-auto">
Custodis de la Terra: L'encíclica Laudato Si' i l'ecologia integral en la nostra vida diària
</p>
</div>
<div class="flex items-center justify-center gap-3 opacity-30 pb-4">
<div class="w-16 h-px bg-slate-400"></div>
<svg class="w-3.5 h-3.5 text-slate-500" viewBox="0 0 24 24" fill="currentColor"><path d="M11 2h2v7h7v2h-7v11h-2v-11h-7v-2h7v-7z"/></svg>
<div class="w-16 h-px bg-slate-400"></div>
</div>
</div>

---

<!-- SLIDE 15 · ECOLOGIA INTEGRAL: LAUDATO SI' (VALENCIÀ) -->
<div class="flex flex-col h-full p-6 bg-white justify-between">
<div>
<div class="mb-2">
<span class="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 rounded-full">Magisteri i Actualitat</span>
</div>
<h2 class="text-2xl font-bold text-[#ea580c]">Què proposa l'Ecologia Integral del Papa Francesc?</h2>
</div>
<div class="grid grid-cols-3 gap-4 my-auto">
<div v-click="1" class="p-4 bg-emerald-50/50 border border-emerald-100 rounded-xl">
<div class="text-2xl mb-1">🌍</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">El Clam de la Terra</h3>
<p v-click="2" class="text-xs text-slate-600 leading-relaxed mb-2">
No hi ha dues crisis separades (una ambiental i una altra social), sinó una sola i complexa crisi socioambiental.
</p>
<span v-click="3" class="text-[10px] font-bold text-emerald-700">Tot està connectat</span>
</div>
<div v-click="4" class="p-4 bg-emerald-50/50 border border-emerald-100 rounded-xl">
<div class="text-2xl mb-1">🤝</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">El Clam dels Pobres</h3>
<p v-click="5" class="text-xs text-slate-600 leading-relaxed mb-2">
Els efectes més greus del canvi climàtic els patixen les poblacions més vulnerables, que menys contaminen.
</p>
<span v-click="6" class="text-[10px] font-bold text-emerald-700">Justícia social i climàtica</span>
</div>
<div v-click="7" class="p-4 bg-emerald-50/50 border border-emerald-100 rounded-xl">
<div class="text-2xl mb-1">🌱</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">Conversió Ecològica</h3>
<p v-click="8" class="text-xs text-slate-600 leading-relaxed mb-2">
Canviar el nostre estil de vida: menys consum compulsiu, més sobrietat solidària i comunió amb la natura.
</p>
<span v-click="9" class="text-[10px] font-bold text-emerald-700">Acció concreta a l'aula</span>
</div>
</div>
<div v-click="10" class="p-2.5 bg-amber-50 rounded-lg text-xs text-slate-700 border-l-4 border-amber-500">
<strong>Frase clau:</strong> «L'ambient humà i l'ambient natural es degraden junts» (Laudato Si', 48).
</div>
</div>

---

<!-- SLIDE 16 · PORTADA PROJECTE FINAL (VALENCIÀ) -->
<div class="flex flex-col justify-between h-full p-8 text-center bg-white">
<div class="flex justify-between items-center text-xs font-semibold uppercase tracking-widest text-slate-400 pt-2">
<span>Departament de Religió Catòlica</span>
<span class="px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-800 bg-indigo-100 rounded-full">1r d'ESO · Treball d'Aprenentatge i Servici</span>
</div>
<div class="my-auto">
<h1 class="!text-5xl font-extrabold tracking-tight text-[#ea580c] mb-3">
La Creació i la Casa Comuna
</h1>
<div class="text-xl font-bold text-indigo-700 mb-2">
Projecte Final
</div>
<p class="text-sm font-medium text-slate-600 max-w-xl mx-auto">
Campanya «Guardians de la Creació: El Nostre Institut Sostenible i Fratern»
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
<h2 class="text-2xl font-bold text-[#ea580c]">Objectius i Cronograma de Treball</h2>
</div>
<div class="grid grid-cols-3 gap-4 my-auto">
<div v-click="1" class="p-4 bg-indigo-50/50 border border-indigo-100 rounded-xl">
<div class="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs mb-2">1</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">Duració Total</h3>
<p class="text-xs text-slate-600 mb-2">
S'utilitzaran <strong>3 sessions d'aula</strong> completes per a investigar, dissenyar i exposar el producte final.
</p>
<div class="text-[11px] text-indigo-700 font-semibold">• 100% treball cooperatiu en classe.</div>
</div>
<div v-click="2" class="p-4 bg-indigo-50/50 border border-indigo-100 rounded-xl">
<div class="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs mb-2">2</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">El Repte Escolar</h3>
<p class="text-xs text-slate-600 mb-2">
Detectar 3 punts de millora a l'institut (residus, energia, paper) i crear una proposta cristiana de solució.
</p>
<div class="text-[11px] text-indigo-700 font-semibold">• Diagnòstic real i mesurable.</div>
</div>
<div v-click="3" class="p-4 bg-indigo-50/50 border border-indigo-100 rounded-xl">
<div class="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs mb-2">3</div>
<h3 class="font-bold text-slate-800 text-sm mb-1">Impacte Comunitari</h3>
<p class="text-xs text-slate-600 mb-2">
Difondre la campanya mitjançant cartells creatius i un decàleg digital compartit amb tot el centre escolar.
</p>
<div class="text-[11px] text-indigo-700 font-semibold">• Aprenentatge-Servici actiu.</div>
</div>
</div>
<div v-click="4" class="p-2.5 bg-slate-50 rounded-lg text-xs text-slate-600 border-l-4 border-indigo-500">
<strong>Organització:</strong> Equips cooperatius de 4 alumnes (Coordinador, Secretari, Dissenyador i Portaveu).
</div>
</div>

---

<!-- SLIDE 18 · PROJECTE: SESSIÓ A SESSIÓ (VALENCIÀ) -->
<div class="flex flex-col h-full p-6 bg-white justify-between">
<div>
<div class="mb-2">
<span class="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 rounded-full">Projecte Final · Fases</span>
</div>
<h2 class="text-2xl font-bold text-[#ea580c]">Què farem en cada sessió de treball?</h2>
</div>
<div class="grid grid-cols-3 gap-4 my-auto">
<div v-click="1" class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
<div class="text-xs font-bold uppercase text-amber-700 mb-1">Sessió 1 de Projecte</div>
<h3 class="font-bold text-slate-800 text-sm mb-2">Auditoria Ecològica</h3>
<ul class="text-xs text-slate-600 space-y-1.5 leading-snug">
<li>• Recorregut breu pel centre per a observar contenidors i patis.</li>
<li>• Registre fotogràfic de punts crítics.</li>
<li>• Selecció del problema que abordarà l'equip.</li>
</ul>
</div>
<div v-click="2" class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
<div class="text-xs font-bold uppercase text-sky-700 mb-1">Sessió 2 de Projecte</div>
<h3 class="font-bold text-slate-800 text-sm mb-2">Elaboració Creativa</h3>
<ul class="text-xs text-slate-600 space-y-1.5 leading-snug">
<li>• Redacció del «Decàleg de Laudato Si' per a l'Aula».</li>
<li>• Disseny del cartell físic o infografia digital.</li>
<li>• Vinculació amb un verset bíblic motivador.</li>
</ul>
</div>
<div v-click="3" class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
<div class="text-xs font-bold uppercase text-emerald-700 mb-1">Sessió 3 de Projecte</div>
<h3 class="font-bold text-slate-800 text-sm mb-2">Exposició i Compromís</h3>
<ul class="text-xs text-slate-600 space-y-1.5 leading-snug">
<li>• Presentació oral de 3 minuts per cada equip.</li>
<li>• Penjada de cartells als corredors autoritzats.</li>
<li>• Rúbrica de coavaluació entre companys.</li>
</ul>
</div>
</div>
<div v-click="4" class="text-center text-xs text-slate-400">
El professor tutoritzarà cada taula resolent dubtes tècnics i teològics durant les 3 sessions.
</div>
</div>

---

<!-- SLIDE 19 · PROJECTE: CRITERIS D'AVALUACIÓ I RÚBRICA (VALENCIÀ) -->
<div class="flex flex-col h-full p-6 bg-white justify-between">
<div>
<div class="mb-2">
<span class="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 rounded-full">Projecte Final · Qualificació</span>
</div>
<h2 class="text-2xl font-bold text-[#ea580c]">Criteris d'Avaluació i Rúbrica</h2>
</div>
<div class="grid grid-cols-4 gap-3 my-auto">
<div v-click="1" class="p-3 bg-amber-50/60 border border-amber-200 rounded-xl text-center">
<div class="text-xl font-bold text-amber-700 mb-1">30%</div>
<h3 class="font-bold text-slate-800 text-xs mb-1">Rigor Doctrinal</h3>
<p class="text-[11px] text-slate-600">
Ús correcte dels conceptes bíblics (Creació, do, dignitat) i cites de Laudato Si'.
</p>
</div>
<div v-click="2" class="p-3 bg-sky-50/60 border border-sky-200 rounded-xl text-center">
<div class="text-xl font-bold text-sky-700 mb-1">30%</div>
<h3 class="font-bold text-slate-800 text-xs mb-1">Creativitat i Qualitat</h3>
<p class="text-[11px] text-slate-600">
Claredat visual del cartell o infografia, lemes originals i missatge transformador.
</p>
</div>
<div v-click="3" class="p-3 bg-emerald-50/60 border border-emerald-200 rounded-xl text-center">
<div class="text-xl font-bold text-emerald-700 mb-1">20%</div>
<h3 class="font-bold text-slate-800 text-xs mb-1">Treball en Equip</h3>
<p class="text-[11px] text-slate-600">
Participació activa de tots els membres, respecte mutu i compliment del rol assignat.
</p>
</div>
<div v-click="4" class="p-3 bg-indigo-50/60 border border-indigo-200 rounded-xl text-center">
<div class="text-xl font-bold text-indigo-700 mb-1">20%</div>
<h3 class="font-bold text-slate-800 text-xs mb-1">Defensa Oral</h3>
<p class="text-[11px] text-slate-600">
Claredat expositiva, convicció existencial i resposta a les preguntes del grup.
</p>
</div>
</div>
<div v-click="5" class="p-2 bg-slate-100 rounded text-center text-xs text-slate-600">
Instruments: Rúbrica del professor (70%) + Coavaluació de l'equip (20%) + Autoavaluació personal (10%).
</div>
</div>
