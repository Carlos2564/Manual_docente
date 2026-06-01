import { motion } from 'framer-motion'
import { FiList } from 'react-icons/fi'

const Indice = () => {
  const animacionScroll = { once: false, amount: 0.2, margin: "0px 0px -50px 0px" }

  const itemsIndice = [
    { numero: "3", titulo: "Objetivos" },
    { numero: "4", titulo: "Justificación" },
    { numero: "5", titulo: "Fundamentación Teórica" },
    { numero: "6", titulo: "Importancia del Rol Educativo" },
    { numero: "7", titulo: "Estrategias Pedagógicas" },
    { numero: "8", titulo: "Recursos Complementarios" },
    { numero: "9", titulo: "Recomendaciones para la Práctica Docente" },
    { numero: "10", titulo: "Reflexión Final" }
  ]

  return (
    <section className="font-['Roboto'] py-20 bg-neutral-50 px-6 md:px-20 border-b border-neutral-100">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={animacionScroll}
          className="bg-white p-8 md:p-14 rounded-[2rem] shadow-sm border border-neutral-200"
        >
          <div className="flex items-center gap-5 mb-10 border-b-2 border-blue-100 pb-6">
            <div className="bg-blue-100 p-4 rounded-2xl text-blue-700">
              {/* AQUÍ SE HIZO MÁS GRANDE EL ÍCONO */}
              <FiList size={36} />
            </div>
            {/* AQUÍ PODÉS CAMBIAR EL TAMAÑO DEL TÍTULO DEL ÍNDICE */}
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-800">2. Índice de Contenidos</h2>
          </div>
          
          {/* AQUÍ SE AUMENTÓ EL ESPACIO ENTRE LOS ITEMS (space-y-6) */}
          <ul className="space-y-6">
            {itemsIndice.map((item, index) => (
              <li key={index} className="flex items-center gap-4 group">
                {/* AQUÍ PODÉS CAMBIAR EL TAMAÑO DE LOS NÚMEROS DEL ÍNDICE */}
                <span className="text-blue-600 font-bold w-10 text-xl md:text-2xl">{item.numero}.</span>
                <div className="flex-grow border-b-2 border-dashed border-neutral-300 group-hover:border-blue-300 transition-colors"></div>
                {/* AQUÍ PODÉS CAMBIAR EL TAMAÑO DE LOS TÍTULOS DEL ÍNDICE */}
                <span className="text-neutral-700 font-medium group-hover:text-blue-700 transition-colors text-xl md:text-2xl">
                  {item.titulo}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default Indice