import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMessageCircle, FiUsers, FiInbox, FiBookOpen, FiAward, FiArrowRight } from 'react-icons/fi';

const Estrategias = () => {
  // Aumenté el tamaño de los íconos de 24 a 32 para que guarden proporción con la nueva letra grande
  const estrategiasList = [
    { id: "estrategia-1", titulo: "1. Asamblea de Acuerdos", desc: "Sustituir la imposición tradicional de normas por la construcción democrática de acuerdos de convivencia en el aula.", icono: <FiUsers size={32} /> },
    { id: "estrategia-2", titulo: "2. Círculos Restaurativos", desc: "Desarticular conflictos interpersonales apenas surgen utilizando el diálogo estructurado y la reparación del daño.", icono: <FiMessageCircle size={32} /> },
    { id: "estrategia-3", titulo: "3. Buzón de Convivencia", desc: "Proveer un canal de comunicación seguro y discreto para reportar tensiones o exclusiones que el alumno no se atreve a decir en público.", icono: <FiInbox size={32} /> },
    { id: "estrategia-4", titulo: "4. Análisis Vivencial de Casos", desc: "Desarrollar la empatía cognitiva frente a la discriminación mediante el análisis crítico de situaciones cotidianas y realistas.", icono: <FiBookOpen size={32} /> },
    { id: "estrategia-5", titulo: "5. Monitores de Paz", desc: "Delegar responsabilidad a los estudiantes transformándolos en agentes activos de convivencia comunitaria y liderazgo positivo.", icono: <FiAward size={32} /> }
  ];

  const animacionScroll = { once: false, amount: 0.2, margin: "0px 0px -50px 0px" };

  return (
    // AQUÍ SE INYECTA LA FUENTE ROBOTO A TODA LA SECCIÓN: font-['Roboto']
    <section className="py-16 md:py-24 bg-[#F9F9F7] px-6 md:px-20 font-['Roboto']">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={animacionScroll}
          className="text-center mb-10 md:mb-16"
        >
          {/* AQUÍ CAMBIÁS EL TAMAÑO DEL SUBTÍTULO PEQUEÑO (actual: text-base md:text-lg) */}
          <span className="text-blue-600 font-semibold tracking-widest uppercase mb-4 block text-base md:text-lg">Fase 2 • Práctica</span>
          
          {/* AQUÍ CAMBIÁS EL TAMAÑO DEL TÍTULO PRINCIPAL (actual: text-3xl sm:text-4xl md:text-5xl) */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-6">Estrategias Pedagógicas Aplicables</h2>
          
          {/* AQUÍ CAMBIÁS EL TAMAÑO DEL PÁRRAFO DESCRIPTIVO (actual: text-lg md:text-xl) */}
          <p className="text-neutral-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Cinco metodologías realistas diseñadas para nuestro contexto educativo, enfocadas en la participación democrática y la resolución pacífica de conflictos sin recurrir al método punitivo tradicional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {estrategiasList.map((estrategia, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={animacionScroll}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 md:p-10 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>

              <div className="bg-blue-100 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-blue-600 mb-6 md:mb-8 group-hover:scale-110 transition-transform relative z-10">
                {estrategia.icono}
              </div>
              
              {/* AQUÍ CAMBIÁS EL TAMAÑO DEL TÍTULO DE CADA ESTRATEGIA (actual: text-xl md:text-2xl) */}
              <h3 className="text-xl md:text-2xl font-bold text-neutral-800 mb-4 relative z-10 leading-snug">{estrategia.titulo}</h3>
              
              {/* AQUÍ CAMBIÁS EL TAMAÑO DEL TEXTO DE CADA ESTRATEGIA (actual: text-base md:text-lg) */}
              <p className="text-neutral-600 text-base md:text-lg mb-8 flex-grow relative z-10 leading-relaxed">{estrategia.desc}</p>
              
              {/* AQUÍ CAMBIÁS EL TAMAÑO DEL ENLACE "Ver detalles" (actual: text-base md:text-lg) */}
              <Link 
                to={`/estrategias#${estrategia.id}`} 
                className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors mt-auto relative z-10 text-base md:text-lg"
              >
                Ver detalles <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Estrategias;