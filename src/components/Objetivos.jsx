import { motion } from 'framer-motion'
import { FiHeart, FiUsers, FiShield } from 'react-icons/fi'

const Objetivos = () => {
  const viewportSettings = { once: false, amount: 0.1, margin: "0px 0px -50px 0px" }

  return (
    // AQUÍ SE INYECTA LA FUENTE ROBOTO A TODA LA SECCIÓN
    <section className="font-['Roboto'] py-16 md:py-24 bg-white px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSettings}
          className="text-center mb-12 md:mb-20"
        >
          {/* AQUÍ PODÉS CAMBIAR EL TAMAÑO DEL TÍTULO PRINCIPAL */}
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">Nuestros Pilares Fundamentales</h2>
          
          {/* AQUÍ PODÉS CAMBIAR EL TAMAÑO DEL PÁRRAFO DESCRIPTIVO */}
          <p className="text-neutral-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Basados en la investigación teórica, este manual se sostiene en tres enfoques clave para transformar la dinámica escolar salvadoreña.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            { icono: <FiUsers size={32} className="w-8 h-8 md:w-10 md:h-10" />, color: "blue", titulo: "Mediación Pacífica", desc: "Estrategias de justicia restaurativa para transformar los conflictos cotidianos en valiosas oportunidades formativas sin castigos punitivos." },
            { icono: <FiHeart size={32} className="w-8 h-8 md:w-10 md:h-10" />, color: "purple", titulo: "Inclusión y Equidad", desc: "Orientaciones para garantizar un espacio seguro, reconociendo la diversidad humana como ventaja enriquecedora para erradicar la discriminación." },
            { icono: <FiShield size={32} className="w-8 h-8 md:w-10 md:h-10" />, color: "amber", titulo: "Autonomía Moral", desc: "Empoderamiento estudiantil mediante participación activa, logrando que asuman protagonismo en la creación de acuerdos de convivencia." }
          ].map((pilar, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportSettings}
              transition={{ delay: index * 0.15 }}
              className="p-8 md:p-10 rounded-[2rem] bg-neutral-50 border border-neutral-100 hover:shadow-xl transition-shadow"
            >
              {/* SE AUMENTÓ EL TAMAÑO DEL CONTENEDOR DEL ÍCONO PARA MANTENER PROPORCIÓN */}
              <div className={`bg-${pilar.color}-100 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-${pilar.color}-600 mb-6 md:mb-8`}>
                {pilar.icono}
              </div>
              
              {/* AQUÍ PODÉS CAMBIAR EL TAMAÑO DEL TÍTULO DE CADA PILAR */}
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">{pilar.titulo}</h3>
              
              {/* AQUÍ PODÉS CAMBIAR EL TAMAÑO DEL TEXTO DE CADA PILAR */}
              <p className="text-neutral-600 leading-relaxed text-lg md:text-xl text-justify">{pilar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Objetivos