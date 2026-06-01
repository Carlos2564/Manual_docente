import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlay, FiImage, FiExternalLink, FiDownload, FiMaximize2, FiX } from 'react-icons/fi'
import infografiaSVG from '../assets/ECOSISTEMA_DE_PAZ_EN_EL_AULA.svg'

const Recursos = () => {
  // Estado para controlar si la ventana de la imagen está abierta o cerrada
  const [modalAbierto, setModalAbierto] = useState(false)
  const viewportSettings = { once: false, amount: 0.1, margin: "0px 0px -50px 0px" }

  return (
    <section className="py-16 md:py-24 px-6 md:px-10 lg:px-20 bg-neutral-900 text-white relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Encabezado */}
        <div className="mb-12 md:mb-16 text-center">
          <p className="text-blue-400 font-semibold tracking-widest uppercase mb-2 text-xs md:text-sm">Material de Apoyo</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white">Recursos y Juegos</h2>
        </div>

        {/* SECCIÓN 1: Infografía Horizontal (Arriba) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSettings}
          className="w-full bg-neutral-800 rounded-[2rem] p-6 md:p-10 mb-12 shadow-xl border border-neutral-700/50"
        >
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
            <FiImage className="text-2xl md:text-3xl text-blue-400" />
            <h3 className="text-2xl md:text-3xl font-serif font-bold">Infografía: Ecosistema de Paz</h3>
          </div>
          
          <div className="bg-neutral-700/50 w-full rounded-2xl p-4 md:p-6 flex flex-col items-center border border-neutral-600/30">
            {/* Imagen principal */}
            <img 
              src={infografiaSVG} 
              alt="Ecosistema de Paz en el Aula" 
              className="w-full h-auto max-h-[60vh] object-contain rounded-xl shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setModalAbierto(true)}
            />
            
            {/* Botones de acción */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <button 
                onClick={() => setModalAbierto(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-blue-500/25"
              >
                <FiMaximize2 size={20} /> Ampliar Imagen
              </button>
              <a 
                href={infografiaSVG} 
                download="Ecosistema_de_Paz_en_el_Aula.svg" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-neutral-600 hover:bg-neutral-500 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg"
              >
                <FiDownload size={20} /> Descargar SVG
              </a>
            </div>
          </div>
        </motion.div>

        {/* SECCIÓN 2: Actividades Digitales (Abajo, lado a lado) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSettings}
          className="w-full"
        >
          <div className="flex items-center justify-center md:justify-start gap-3 mb-8">
            <FiPlay className="text-2xl md:text-3xl text-blue-400" />
            <h3 className="text-2xl md:text-3xl font-serif font-bold">Actividades Digitales</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Actividad 1: Educaplay */}
            <div className="bg-neutral-800 rounded-[2rem] p-6 md:p-8 flex flex-col shadow-xl border border-neutral-700/50 hover:border-blue-500/30 transition-colors">
              <div className="mb-4">
                <h4 className="text-xl font-bold mb-1">1. Conexión de Palabras</h4>
                <p className="text-neutral-400 text-sm">Demuestra lo aprendido sobre mediación con Educaplay</p>
              </div>
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-neutral-700 mt-auto">
                <iframe 
                  allow="fullscreen; autoplay; allow-top-navigation-by-user-activation" 
                  allowFullScreen 
                  className="w-full h-full" 
                  frameBorder="0" 
                  src="https://es.educaplay.com/juego/29014745-conexion_palabras_y_significados.html">
                </iframe>
              </div>
            </div>

            {/* Actividad 2: Kahoot */}
            <div className="bg-neutral-800 rounded-[2rem] p-6 md:p-8 flex flex-col shadow-xl border border-neutral-700/50 hover:border-purple-500/30 transition-colors">
              <div className="mb-4">
                <h4 className="text-xl font-bold mb-1">2. Escuela Justa e Inclusiva</h4>
                <p className="text-neutral-400 text-sm">Compite y evalúa tus conocimientos sobre cultura de paz en Kahoot</p>
              </div>
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#46178f] flex flex-col items-center justify-center relative mt-auto group">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#260c4f] rounded-full opacity-50 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute top-6 left-6 w-12 h-12 bg-[#ff3355] rounded-sm opacity-80 transform rotate-12"></div>
                <div className="absolute bottom-8 left-12 w-8 h-8 bg-[#ffb800] rounded-full opacity-80"></div>
                <div className="absolute top-12 right-12 w-10 h-10 bg-[#00e8b1] transform rotate-45 opacity-80"></div>
                
                <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 z-10 drop-shadow-lg text-center px-4">Kahoot!</h3>
                <a 
                  href="https://create.kahoot.it/share/construyendo-una-escuela-justa-e-inclusiva/d0604a3f-9fb0-4e95-b13a-6065ea64918b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-[#46178f] hover:bg-neutral-200 font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-xl z-10"
                >
                  <FiExternalLink /> Jugar ahora
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* VENTANA EMERGENTE (MODAL) PARA AMPLIAR LA INFOGRAFÍA */}
      <AnimatePresence>
        {modalAbierto && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 backdrop-blur-sm"
          >
            {/* Botón de cerrar (La X) */}
            <button 
              onClick={() => setModalAbierto(false)}
              className="absolute top-4 right-4 md:top-8 md:right-8 bg-neutral-800 hover:bg-red-600 text-white p-3 md:p-4 rounded-full transition-colors z-50 shadow-2xl border border-neutral-700"
              aria-label="Cerrar imagen"
            >
              <FiX size={28} />
            </button>

            {/* Imagen ampliada */}
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={infografiaSVG} 
              className="max-w-full max-h-full object-contain rounded-xl" 
              alt="Infografía Ampliada" 
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}

export default Recursos