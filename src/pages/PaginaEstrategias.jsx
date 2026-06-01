import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FiBook, FiTarget, FiAlignLeft, FiList, FiBox, FiCheckCircle, FiClock, FiUsers } from 'react-icons/fi';
import { motion } from 'framer-motion'; 

const PaginaEstrategias = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  // Se agregó "last:mb-0" para que el último punto no deje espacio extra al final del nuevo recuadro
  const PuntoEstrategia = ({ icono, titulo, contenido }) => (
    <div className="mb-10 last:mb-0">
      <h4 className="flex items-center gap-3 font-bold text-blue-700 mb-3 text-xl md:text-2xl">
        <span className="text-2xl md:text-3xl">{icono}</span> 
        {titulo}
      </h4>
      <div className="text-neutral-700 text-lg md:text-xl leading-relaxed text-justify">{contenido}</div>
    </div>
  );

  const animacionScroll = { once: false, amount: 0.1, margin: "0px 0px -50px 0px" };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 lg:px-24 bg-[#F9F9F7] min-h-screen font-['Roboto']">
      <div className="max-w-7xl mx-auto">
        
        <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-8 text-center tracking-tight">
          Manual Práctico Docente
        </h1>
        <p className="text-xl md:text-2xl text-neutral-600 text-center mb-20 font-normal max-w-4xl mx-auto leading-relaxed">
          Estrategias metodológicas realistas y aplicables para fomentar la cultura de paz y la resolución de conflictos en el aula.
        </p>

        <div className="space-y-24">
          
          {/* ==========================================
              ESTRATEGIA 1 
          ========================================== */}
          <section id="estrategia-1" className="scroll-mt-32">
            {/* RECUADRO GRANDE EXTERNO (BLANCO) */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={animacionScroll}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-12 lg:p-16 rounded-[3rem] border border-neutral-200 shadow-xl"
            >
              {/* SUB-RECUADRO PARA EL TÍTULO */}
              <div className="bg-neutral-50 border border-neutral-200 p-6 md:p-10 rounded-[2rem] mb-10 shadow-sm text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900">
                  1. Asamblea de Acuerdos (Transición de Reglas a Consensos)
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* SUB-RECUADRO COLUMNA IZQUIERDA */}
                <div className="bg-neutral-50 border border-neutral-200 p-8 md:p-10 rounded-[2rem] shadow-sm">
                  <PuntoEstrategia icono={<FiBook/>} titulo="Nivel Educativo" contenido={<p>Educación Básica y Tercer Ciclo.</p>} />
                  <PuntoEstrategia icono={<FiTarget/>} titulo="Objetivo Didáctico" contenido={<p>Sustituir la imposición tradicional de normas por la construcción democrática de acuerdos de convivencia, fortaleciendo el sentido de pertenencia y responsabilidad compartida.</p>} />
                  <PuntoEstrategia icono={<FiAlignLeft/>} titulo="Descripción General" contenido={<p>En lugar de dictar un reglamento el primer día, el docente utiliza su experiencia para guiar al grupo a identificar qué comportamientos necesitan para trabajar en paz, redactando un "Pacto de Aula" visible.</p>} />
                  <PuntoEstrategia icono={<FiBox/>} titulo="Recursos y Materiales" contenido={<p>Pliegos de papel bond, plumones, tirro escolar y pizarra.</p>} />
                  <PuntoEstrategia icono={<FiClock/>} titulo="Tiempo Estimado" contenido={<p>45 minutos (1 hora clase).</p>} />
                </div>
                
                {/* SUB-RECUADRO COLUMNA DERECHA */}
                <div className="bg-neutral-50 border border-neutral-200 p-8 md:p-10 rounded-[2rem] shadow-sm">
                  <PuntoEstrategia icono={<FiList/>} titulo="Procedimiento Metodológico" contenido={
                    <ol className="list-decimal pl-6 space-y-4 marker:font-bold marker:text-blue-600">
                      <li>El docente plantea la pregunta detonante: "¿Qué necesitamos para sentirnos seguros y aprender bien en esta aula?".</li>
                      <li>Lluvia de ideas donde los estudiantes proponen acciones (no prohibiciones).</li>
                      <li>El docente agrupa las ideas similares y ayuda a redactarlas en positivo (ej. en vez de "No gritar", usar "Pedir la palabra").</li>
                      <li>Todos los estudiantes y el docente firman el cartel.</li>
                      <li>Se coloca en una pared visible del salón como recordatorio permanente.</li>
                    </ol>
                  } />
                  <PuntoEstrategia icono={<FiUsers/>} titulo="Roles" contenido={<p><strong className="text-neutral-900">Docente:</strong> Facilitador experimentado que encauza las ideas sin imponerlas.<br/><br/><strong className="text-neutral-900">Estudiante:</strong> Co-creador activo de su propio entorno normativo.</p>} />
                  <PuntoEstrategia icono={<FiCheckCircle/>} titulo="Criterios de Evaluación" contenido={<p>Reducción progresiva de partes disciplinarios. Cumplimiento voluntario de los acuerdos establecidos en el papelógrafo.</p>} />
                </div>
              </div>
            </motion.div>
          </section>

          {/* ==========================================
              ESTRATEGIA 2 
          ========================================== */}
          <section id="estrategia-2" className="scroll-mt-32">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={animacionScroll}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-12 lg:p-16 rounded-[3rem] border border-neutral-200 shadow-xl"
            >
              <div className="bg-neutral-50 border border-neutral-200 p-6 md:p-10 rounded-[2rem] mb-10 shadow-sm text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900">
                  2. Círculos de Diálogo Restaurativo Exprés
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <div className="bg-neutral-50 border border-neutral-200 p-8 md:p-10 rounded-[2rem] shadow-sm">
                  <PuntoEstrategia icono={<FiBook/>} titulo="Nivel Educativo" contenido={<p>Tercer Ciclo y Educación Media (Bachillerato).</p>} />
                  <PuntoEstrategia icono={<FiTarget/>} titulo="Objetivo Didáctico" contenido={<p>Desarticular conflictos interpersonales apenas surgen, utilizando el diálogo estructurado para reparar el daño emocional sin recurrir al castigo punitivo tradicional.</p>} />
                  <PuntoEstrategia icono={<FiAlignLeft/>} titulo="Descripción General" contenido={<p>Estrategia de contención rápida para abordar faltas de respeto, burlas o conflictos de receso. Se basa en que los involucrados expresen cómo se sintieron y cómo pueden solucionarlo.</p>} />
                  <PuntoEstrategia icono={<FiBox/>} titulo="Recursos y Materiales" contenido={<p>Un espacio apartado en el aula o corredor. Un "objeto de la palabra" (un marcador, un borrador).</p>} />
                  <PuntoEstrategia icono={<FiClock/>} titulo="Tiempo Estimado" contenido={<p>15 a 20 minutos (Gestión rápida de crisis).</p>} />
                </div>
                
                <div className="bg-neutral-50 border border-neutral-200 p-8 md:p-10 rounded-[2rem] shadow-sm">
                  <PuntoEstrategia icono={<FiList/>} titulo="Procedimiento Metodológico" contenido={
                    <ol className="list-decimal pl-6 space-y-4 marker:font-bold marker:text-blue-600">
                      <li>El docente aparta a los alumnos involucrados en el conflicto formando un pequeño círculo.</li>
                      <li>Establece la regla de oro: "Solo habla quien tiene el objeto, los demás escuchan sin interrumpir".</li>
                      <li>Ronda 1: ¿Qué pasó y qué estabas pensando en ese momento?</li>
                      <li>Ronda 2: ¿Quiénes resultaron afectados y cómo? (Fomenta la empatía).</li>
                      <li>Ronda 3: ¿Qué podemos hacer para reparar el daño y que no vuelva a pasar?</li>
                    </ol>
                  } />
                  <PuntoEstrategia icono={<FiUsers/>} titulo="Roles" contenido={<p><strong className="text-neutral-900">Docente:</strong> Mediador neutral; no juzga ni impone la solución, garantiza que el turno de palabra se respete.<br/><br/><strong className="text-neutral-900">Estudiante:</strong> Asume responsabilidad directa por sus actos.</p>} />
                  <PuntoEstrategia icono={<FiCheckCircle/>} titulo="Criterios de Evaluación" contenido={<p>Resolución pacífica del conflicto evidenciada por el cese de las hostilidades y el cumplimiento del compromiso de reparación.</p>} />
                </div>
              </div>
            </motion.div>
          </section>

          {/* ==========================================
              ESTRATEGIA 3 
          ========================================== */}
          <section id="estrategia-3" className="scroll-mt-32">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={animacionScroll}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-12 lg:p-16 rounded-[3rem] border border-neutral-200 shadow-xl"
            >
              <div className="bg-neutral-50 border border-neutral-200 p-6 md:p-10 rounded-[2rem] mb-10 shadow-sm text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900">
                  3. Buzón de Convivencia y Mediación
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <div className="bg-neutral-50 border border-neutral-200 p-8 md:p-10 rounded-[2rem] shadow-sm">
                  <PuntoEstrategia icono={<FiBook/>} titulo="Nivel Educativo" contenido={<p>Educación Básica y Tercer Ciclo.</p>} />
                  <PuntoEstrategia icono={<FiTarget/>} titulo="Objetivo Didáctico" contenido={<p>Proveer un canal de comunicación seguro y discreto para que los estudiantes reporten tensiones, exclusiones o acoso que no se atreven a expresar en público.</p>} />
                  <PuntoEstrategia icono={<FiAlignLeft/>} titulo="Descripción General" contenido={<p>Una herramienta física que permite al docente tomar el pulso emocional del salón. Excelente para alumnos introvertidos y para prevenir el bullying o acoso escolar antes de que escale.</p>} />
                  <PuntoEstrategia icono={<FiBox/>} titulo="Recursos y Materiales" contenido={<p>Una caja de zapatos forrada, papelitos, lapiceros. (Opcional: Formulario de Google si el centro tiene recursos digitales).</p>} />
                  <PuntoEstrategia icono={<FiClock/>} titulo="Tiempo Estimado" contenido={<p>Permanente. (El docente lo revisa 1 vez por semana).</p>} />
                </div>
                
                <div className="bg-neutral-50 border border-neutral-200 p-8 md:p-10 rounded-[2rem] shadow-sm">
                  <PuntoEstrategia icono={<FiList/>} titulo="Procedimiento Metodológico" contenido={
                    <ol className="list-decimal pl-6 space-y-4 marker:font-bold marker:text-blue-600">
                      <li>Instalar el buzón en una zona del aula donde los alumnos puedan depositar notas discretamente.</li>
                      <li>Explicar que pueden escribir sobre algo que les preocupa del ambiente escolar, alguien que necesita ayuda, o felicitaciones a compañeros.</li>
                      <li>El docente revisa el buzón en privado cada viernes.</li>
                      <li>Según la gravedad, el maestro aborda el tema de forma general en clase (sin decir nombres) o realiza intervenciones focalizadas.</li>
                    </ol>
                  } />
                  <PuntoEstrategia icono={<FiUsers/>} titulo="Roles" contenido={<p><strong className="text-neutral-900">Docente:</strong> Gestor de la información, protector y analista del clima del aula.<br/><br/><strong className="text-neutral-900">Estudiante:</strong> Observador activo y corresponsable del bienestar grupal.</p>} />
                  <PuntoEstrategia icono={<FiCheckCircle/>} titulo="Criterios de Evaluación" contenido={<p>Identificación temprana y neutralización de casos de exclusión o burla. Aumento de la confianza hacia el maestro.</p>} />
                </div>
              </div>
            </motion.div>
          </section>

          {/* ==========================================
              ESTRATEGIA 4 
          ========================================== */}
          <section id="estrategia-4" className="scroll-mt-32">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={animacionScroll}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-12 lg:p-16 rounded-[3rem] border border-neutral-200 shadow-xl"
            >
              <div className="bg-neutral-50 border border-neutral-200 p-6 md:p-10 rounded-[2rem] mb-10 shadow-sm text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900">
                  4. Análisis de Casos: "Poniéndome en sus Zapatos"
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <div className="bg-neutral-50 border border-neutral-200 p-8 md:p-10 rounded-[2rem] shadow-sm">
                  <PuntoEstrategia icono={<FiBook/>} titulo="Nivel Educativo" contenido={<p>Tercer Ciclo y Educación Media.</p>} />
                  <PuntoEstrategia icono={<FiTarget/>} titulo="Objetivo Didáctico" contenido={<p>Desarrollar la empatía cognitiva frente a la discriminación mediante el análisis crítico de situaciones cotidianas que ocurren en las escuelas.</p>} />
                  <PuntoEstrategia icono={<FiAlignLeft/>} titulo="Descripción General" contenido={<p>Técnica de aprendizaje vivencial donde los alumnos no estudian la teoría de los derechos humanos, sino que analizan escenarios hiperrealistas (ej. un alumno nuevo, exclusión en educación física) para deconstruir prejuicios.</p>} />
                  <PuntoEstrategia icono={<FiBox/>} titulo="Recursos y Materiales" contenido={<p>Tarjetas impresas o dictadas con casos breves. Pizarra.</p>} />
                  <PuntoEstrategia icono={<FiClock/>} titulo="Tiempo Estimado" contenido={<p>45 minutos.</p>} />
                </div>
                
                <div className="bg-neutral-50 border border-neutral-200 p-8 md:p-10 rounded-[2rem] shadow-sm">
                  <PuntoEstrategia icono={<FiList/>} titulo="Procedimiento Metodológico" contenido={
                    <ol className="list-decimal pl-6 space-y-4 marker:font-bold marker:text-blue-600">
                      <li>Se divide la clase en grupos de 4 o 5 estudiantes.</li>
                      <li>El maestro entrega un caso de estudio (Ej: "A María la excluyen de jugar fútbol porque dicen que es juego de niños").</li>
                      <li>El grupo debe responder: ¿Qué derechos se están vulnerando? ¿Cómo se siente María?</li>
                      <li>Plenaria: Cada grupo expone qué solución "pacífica y justa" aplicarían si ellos fueran el docente o los compañeros.</li>
                    </ol>
                  } />
                  <PuntoEstrategia icono={<FiUsers/>} titulo="Roles" contenido={<p><strong className="text-neutral-900">Docente:</strong> Provocador intelectual que reta las ideas preconcebidas de los alumnos.<br/><br/><strong className="text-neutral-900">Estudiante:</strong> Analista crítico que cuestiona sus propios estereotipos.</p>} />
                  <PuntoEstrategia icono={<FiCheckCircle/>} titulo="Criterios de Evaluación" contenido={<p>Capacidad argumentativa en la plenaria para defender la dignidad de la persona afectada en el caso de estudio.</p>} />
                </div>
              </div>
            </motion.div>
          </section>

          {/* ==========================================
              ESTRATEGIA 5 
          ========================================== */}
          <section id="estrategia-5" className="scroll-mt-32">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={animacionScroll}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-12 lg:p-16 rounded-[3rem] border border-neutral-200 shadow-xl"
            >
              <div className="bg-neutral-50 border border-neutral-200 p-6 md:p-10 rounded-[2rem] mb-10 shadow-sm text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900">
                  5. Monitores de Paz (Liderazgo Positivo)
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <div className="bg-neutral-50 border border-neutral-200 p-8 md:p-10 rounded-[2rem] shadow-sm">
                  <PuntoEstrategia icono={<FiBook/>} titulo="Nivel Educativo" contenido={<p>Educación Básica a Educación Media.</p>} />
                  <PuntoEstrategia icono={<FiTarget/>} titulo="Objetivo Didáctico" contenido={<p>Delegar responsabilidad a los estudiantes transformando a los líderes naturales del salón (incluso a los más inquietos) en agentes activos de convivencia comunitaria.</p>} />
                  <PuntoEstrategia icono={<FiAlignLeft/>} titulo="Descripción General" contenido={<p>Rotación de responsabilidades. No se trata de "vigilantes" que acusan, sino de alumnos encargados de promover la integración, dar la bienvenida a alumnos ausentes y mediar roces menores.</p>} />
                  <PuntoEstrategia icono={<FiBox/>} titulo="Recursos y Materiales" contenido={<p>Un gafete o distintivo sencillo para el "Monitor de la Semana".</p>} />
                  <PuntoEstrategia icono={<FiClock/>} titulo="Tiempo Estimado" contenido={<p>Asignación semanal o quincenal.</p>} />
                </div>
                
                <div className="bg-neutral-50 border border-neutral-200 p-8 md:p-10 rounded-[2rem] shadow-sm">
                  <PuntoEstrategia icono={<FiList/>} titulo="Procedimiento Metodológico" contenido={
                    <ol className="list-decimal pl-6 space-y-4 marker:font-bold marker:text-blue-600">
                      <li>El maestro explica que cuidar el salón es tarea de todos y crea el rol del "Monitor de Paz".</li>
                      <li>Cada semana, se asigna este rol a dos estudiantes diferentes (mezclando afinidades para fomentar la integración).</li>
                      <li>Funciones: Ayudar a repartir material, asegurarse de que nadie se quede solo en el receso, y avisar al docente si hay un problema que no pueden manejar.</li>
                      <li>El viernes, el maestro reconoce públicamente la labor de los monitores salientes.</li>
                    </ol>
                  } />
                  <PuntoEstrategia icono={<FiUsers/>} titulo="Roles" contenido={<p><strong className="text-neutral-900">Docente:</strong> Mentor que empodera al alumnado y supervisa de manera indirecta.<br/><br/><strong className="text-neutral-900">Estudiante:</strong> Ejerce ciudadanía activa y responsabilidad cívica en la práctica.</p>} />
                  <PuntoEstrategia icono={<FiCheckCircle/>} titulo="Criterios de Evaluación" contenido={<p>Mejora en los índices de cohesión grupal. Desarrollo de la autonomía moral y habilidades de liderazgo en los alumnos rotados.</p>} />
                </div>
              </div>
            </motion.div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PaginaEstrategias;