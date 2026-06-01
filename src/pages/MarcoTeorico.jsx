import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGlobe, FiBriefcase, FiUsers, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const MarcoTeorico = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const animacionScroll = { once: false, amount: 0.2, margin: "0px 0px -50px 0px" };

  // ==========================================
  // DATOS PARA EL CARRUSEL TEÓRICO
  // ==========================================
  const [slideActual, setSlideActual] = useState(0);

  const niveles = [
    {
      titulo: "Nivel Macro: Sociedad y Estado",
      icono: <FiGlobe size={40} />,
      colorIcono: "text-blue-400",
      bgIcono: "bg-blue-500/20",
      textos: [
        <p key="1" className="text-lg md:text-xl lg:text-2xl leading-relaxed text-neutral-300 text-justify">
          La educación con enfoque de derechos humanos exige superar las visiones instrumentales tradicionales, posicionando la <strong className="text-white">dignidad humana</strong> como el núcleo articulador del sistema formativo. A nivel internacional, la cultura de paz representa un proceso dinámico orientado a transformar las estructuras generadoras de violencia y desigualdad sistémica.
        </p>,
        <p key="2" className="text-lg md:text-xl lg:text-2xl leading-relaxed text-neutral-300 text-justify">
          Este paradigma global fomenta el entendimiento mutuo mediante el diálogo constructivo. Superar la simple ausencia de conflictos bélicos implica edificar ecosistemas sociales democráticos donde la resolución pacífica de controversias sea la norma imperante. Las normativas exigen al Estado diseñar marcos institucionales vigorosos que aseguren la equidad para los sectores históricamente marginados.
        </p>
      ]
    },
    {
      titulo: "Nivel Meso: La Institución Escolar",
      icono: <FiBriefcase size={40} />,
      colorIcono: "text-purple-400",
      bgIcono: "bg-purple-500/20",
      textos: [
        <p key="1" className="text-lg md:text-xl lg:text-2xl leading-relaxed text-neutral-300 text-justify">
          Para materializar las normativas internacionales, el centro escolar debe transformarse estructuralmente en una auténtica <strong className="text-white">microsociedad democrática</strong>. Esto requiere desarticular el denominado "currículo oculto", constituido por aquellos mensajes implícitos y normas jerárquicas que perpetúan asimetrías de poder.
        </p>,
        <p key="2" className="text-lg md:text-xl lg:text-2xl leading-relaxed text-neutral-300 text-justify">
          Dentro de este ecosistema formativo, los reglamentos disciplinarios deben reestructurarse garantizando la participación estudiantil. Frente a las discrepancias inherentes a la interacción humana, las metodologías impositivas tradicionales deben sustituirse por procesos de mediación y <strong className="text-white">justicia restaurativa</strong>, orientando la institución hacia la genuina reparación del daño en lugar de aplicar castigos estigmatizantes.
        </p>
      ]
    },
    {
      titulo: "Nivel Micro: El Aula de Clases",
      icono: <FiUsers size={40} />,
      colorIcono: "text-green-400",
      bgIcono: "bg-green-500/20",
      textos: [
        <p key="1" className="text-lg md:text-xl lg:text-2xl leading-relaxed text-neutral-300 text-justify">
          Transformar el aula en un ecosistema pacífico exige superar las prácticas autoritarias, adoptando metodologías que reconozcan a los estudiantes como sujetos plenos de derechos. El educador contemporáneo abandona su rol de transmisor para convertirse en facilitador, empleando la pedagogía del testimonio permanente.
        </p>,
        <p key="2" className="text-lg md:text-xl lg:text-2xl leading-relaxed text-neutral-300 text-justify">
          Consolidar una cultura del diálogo previene conductas disruptivas. El <strong className="text-white">aprendizaje cooperativo</strong> constituye una herramienta metodológica sumamente eficaz para afianzar el respeto interpersonal cotidiano, erradicando actitudes individualistas y enseñando empíricamente que el éxito académico personal está intrínsecamente vinculado al bienestar integral de la comunidad educativa.
        </p>
      ]
    }
  ];

  const siguienteSlide = () => {
    setSlideActual((prev) => (prev === niveles.length - 1 ? 0 : prev + 1));
  };

  const anteriorSlide = () => {
    setSlideActual((prev) => (prev === 0 ? niveles.length - 1 : prev - 1));
  };

  return (
    // AQUÍ SE INYECTA LA FUENTE ROBOTO A TODA LA PÁGINA
    <div className="pt-32 pb-24 px-6 md:px-20 bg-white min-h-screen font-['Roboto']">
      <div className="max-w-6xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={animacionScroll}
          className="text-center mb-16"
        >
          {/* AQUÍ PODÉS CAMBIAR EL TAMAÑO DEL SUBTÍTULO */}
          <span className="text-blue-600 font-semibold tracking-widest uppercase mb-4 block text-base md:text-lg">Fase 1 • Investigación</span>
          
          {/* AQUÍ PODÉS CAMBIAR EL TAMAÑO DEL TÍTULO PRINCIPAL */}
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">Fundamentación Teórica</h1>
          
          {/* AQUÍ PODÉS CAMBIAR EL TAMAÑO DEL PÁRRAFO DESCRIPTIVO */}
          <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-4xl mx-auto text-justify">
            El respaldo académico que sostiene nuestro manual. Exploramos cómo la educación en derechos humanos transforma la sociedad desde las políticas globales hasta las interacciones diarias en el salón de clases.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={animacionScroll}
        >
          {/* Contenedor del Carrusel Teórico */}
          <div className="relative bg-neutral-900 text-white rounded-[3rem] p-8 md:p-14 shadow-2xl overflow-hidden flex flex-col items-center justify-center min-h-[500px]">
            
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

            {/* Botones de Navegación */}
            <button 
              onClick={anteriorSlide}
              className="absolute left-4 md:left-8 z-20 bg-white/10 hover:bg-white/20 text-white p-3 md:p-4 rounded-full backdrop-blur-sm transition-all"
              aria-label="Nivel anterior"
            >
              <FiChevronLeft size={32} />
            </button>
            
            <button 
              onClick={siguienteSlide}
              className="absolute right-4 md:right-8 z-20 bg-white/10 hover:bg-white/20 text-white p-3 md:p-4 rounded-full backdrop-blur-sm transition-all"
              aria-label="Siguiente nivel"
            >
              <FiChevronRight size={32} />
            </button>

            {/* Contenido Animado del Carrusel */}
            <div className="w-full max-w-4xl px-8 md:px-16 text-center z-10">
              <AnimatePresence mode='wait'>
                <motion.div
                  key={slideActual}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex flex-col items-center"
                >
                  {/* Ícono dinámico */}
                  <div className={`${niveles[slideActual].bgIcono} p-5 rounded-2xl ${niveles[slideActual].colorIcono} mb-8`}>
                    {niveles[slideActual].icono}
                  </div>
                  
                  {/* AQUÍ PODÉS CAMBIAR EL TAMAÑO DEL TÍTULO DE CADA NIVEL (Macro, Meso, Micro) */}
                  <h3 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-8 ${niveles[slideActual].colorIcono}`}>
                    {niveles[slideActual].titulo}
                  </h3>
                  
                  {/* Textos del nivel, el tamaño se modifica en el arreglo 'niveles' de arriba */}
                  <div className="space-y-6">
                    {niveles[slideActual].textos}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Indicadores (Puntitos) */}
            <div className="absolute bottom-6 md:bottom-10 flex gap-4 z-20">
              {niveles.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setSlideActual(index)}
                  className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${slideActual === index ? 'bg-blue-400 scale-125' : 'bg-white/30 hover:bg-white/50'}`}
                  aria-label={`Ir a nivel ${index + 1}`}
                />
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default MarcoTeorico;