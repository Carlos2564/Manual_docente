import { motion } from 'framer-motion';

const InformacionManual = () => {
  // Esta es la regla mágica ajustada. amount: 0.2 fuerza a que la animación 
  // se reinicie más rápido cuando scrolleas hacia arriba o abajo.
  const animacionScroll = { once: false, amount: 0.2 };

  return (
    // AQUÍ SE INYECTA LA FUENTE ROBOTO A TODA LA SECCIÓN
    <section className="font-['Roboto'] py-24 bg-white px-6 md:px-20 border-b border-neutral-100">
      <div className="max-w-6xl mx-auto space-y-24">
        
        {/* ==========================================
            OBJETIVOS Y JUSTIFICACIÓN 
        ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={animacionScroll}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* AQUÍ PODÉS CAMBIAR EL TAMAÑO DEL TÍTULO PRINCIPAL */}
            <h2 className="text-4xl md:text-5xl font-bold text-blue-700 border-b-2 border-blue-100 pb-4">3. Objetivos</h2>
            
            <div>
              <h3 className="text-2xl font-bold text-neutral-800 mb-3">Objetivo General</h3>
              {/* AQUÍ PODÉS CAMBIAR EL TAMAÑO DE LOS PÁRRAFOS */}
              <p className="text-neutral-600 leading-relaxed text-lg md:text-xl text-justify">
                Proveer al personal docente y directivo de herramientas metodológicas prácticas fundamentadas estrictamente en el enfoque universal de derechos humanos, facilitando mediante estas estrategias inclusivas la construcción de una convivencia democrática y una auténtica cultura de paz dentro del aula garantizando el respeto mutuo y el desarrollo integral estudiantil continuo.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-neutral-800 mb-3">Objetivos Específicos</h3>
              <ul className="list-disc pl-6 text-neutral-600 leading-relaxed text-lg md:text-xl space-y-4 text-justify marker:text-blue-600">
                <li>Facilitar estrategias de mediación pacífica y justicia restaurativa que permitan a los educadores transformar los conflictos cotidianos en valiosas oportunidades formativas, abandonando definitivamente los métodos punitivos tradicionales para instaurar un clima de genuino respeto democrático que proteja la dignidad e integridad psicológica del alumnado en todo momento escolar oportuno.</li>
                <li>Brindar orientaciones pedagógicas que promuevan la inclusión social y la equidad de género garantizando que el aula funcione como un espacio seguro, reconociendo la diversidad humana como una enorme ventaja enriquecedora que permite erradicar la discriminación sistemática logrando integrar activamente a todos los sectores históricamente excluidos del sistema educativo.</li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={animacionScroll}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-700 border-b-2 border-blue-100 pb-4">4. Justificación</h2>
            <p className="text-neutral-600 leading-relaxed text-lg md:text-xl text-justify">
              El actual contexto educativo exige que las instituciones dejen de ser meros centros de transferencia de información para convertirse en verdaderos laboratorios de convivencia ciudadana, enfrentándose los docentes diariamente a aulas heterogéneas y dinámicas sociales complejas que no pueden resolverse únicamente con teoría institucional sino con acciones prácticas vivenciales.
            </p>
            <p className="text-neutral-600 leading-relaxed text-lg md:text-xl text-justify">
              Este manual se justifica como una respuesta práctica a la urgente necesidad de humanizar las estructuras formativas instaurando una cultura de paz, dotando al magisterio de herramientas concretas y aterrizadas a su realidad que utilizan el diálogo constructivo para desarticular la violencia desde sus cimientos conductuales y sociales cotidianos.
            </p>
          </motion.div>
        </div>

        {/* ==========================================
            FUNDAMENTACIÓN TEÓRICA 
        ========================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={animacionScroll}
          transition={{ duration: 0.5 }}
          className="bg-[#F9F9F7] p-8 md:p-14 lg:p-16 rounded-[3rem] border border-neutral-200 shadow-sm"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-10 border-b-2 border-blue-100 pb-4 text-center md:text-left">5. Fundamentación Teórica del Tema</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 text-neutral-600 leading-relaxed text-lg md:text-xl text-justify">
            <p>
              La educación con enfoque de derechos humanos constituye un pilar fundamental para el desarrollo de sociedades contemporáneas exigiendo superar visiones instrumentales, posicionando la dignidad humana como el núcleo articulador del sistema formativo representando la cultura de paz un proceso dinámico orientado a transformar las estructuras violentas y excluyentes tradicionales.
            </p>
            <p>
              Para materializar estos preceptos el centro escolar debe transformarse estructuralmente en una auténtica microsociedad democrática desarticulando el denominado currículo oculto, requiriendo la convivencia democrática en el aula interacciones cotidianas fundamentadas en el respeto absoluto hacia la alteridad utilizando metodologías participativas que reconozcan la pluralidad como un elemento enriquecedor constante.
            </p>
          </div>
        </motion.div>

        {/* ==========================================
            IMPORTANCIA DE LOS ROLES 
        ========================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={animacionScroll}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-700 border-b-2 border-blue-100 pb-4 inline-block mx-auto">
              6. Importancia del Rol Educativo
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-lg border border-neutral-100 hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-6 text-center">Rol del Docente</h3>
              <p className="text-neutral-600 text-lg md:text-xl leading-relaxed text-justify">
                El educador contemporáneo debe abandonar su rol de transmisor autoritario para convertirse en un facilitador estratégico y garante ineludible de los derechos humanos, radicando su importancia en su gran capacidad para nivelar asimetrías de poder y gestionar el clima escolar mediante una rigurosa coherencia ética y responsabilidad protectora inquebrantable.
              </p>
            </div>
            
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-lg border border-neutral-100 hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-6 text-center">Rol del Estudiante</h3>
              <p className="text-neutral-600 text-lg md:text-xl leading-relaxed text-justify">
                El estudiante deja de ser un receptor pasivo para reconocerse como un ciudadano con plena capacidad de agencia vital para consolidar la cultura de paz, desarrollando mediante su participación activa en acuerdos consensuados una sólida autonomía moral asumiendo la responsabilidad ética de todas sus acciones frente al colectivo estudiantil.
              </p>
            </div>
            
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-lg border border-neutral-100 hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-6 text-center">Comunidad Educativa</h3>
              <p className="text-neutral-600 text-lg md:text-xl leading-relaxed text-justify">
                La eficacia de esta transformación depende directamente del fuerte involucramiento organizado de las familias y la inmensa comunidad local, necesitando el centro educativo forjar alianzas estratégicas duraderas con todos los actores sociales circundantes para unificar los discursos éticos impartidos consolidando robustas redes de protección que blindan efectivamente al alumnado.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default InformacionManual;