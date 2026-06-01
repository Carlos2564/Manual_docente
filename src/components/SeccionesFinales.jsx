import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiBookOpen, FiChevronLeft, FiChevronRight, FiCheckCircle } from 'react-icons/fi'
import Recursos from './Recursos'

const SeccionesFinales = () => {
  const animacionScroll = { once: false, amount: 0.1, margin: "0px 0px -50px 0px" }

  // ==========================================
  // DATOS PARA EL CARRUSEL DE RECOMENDACIONES
  // ==========================================
  const [slideActual, setSlideActual] = useState(0)
  const recomendaciones = [
    {
      titulo: "Rol de Garante",
      texto: "Es fundamental que el docente reconozca su rol como garante de los derechos humanos dentro del aula de clases, transformando el espacio educativo en un entorno seguro donde cada estudiante se sienta valorado y respetado sin importar su origen o condición social para prevenir cualquier forma de discriminación sistemática."
    },
    {
      titulo: "Participación Democrática",
      texto: "Resulta indispensable fomentar una participación democrática genuina al momento de establecer las normas de convivencia, permitiendo que los jóvenes construyan los acuerdos de manera colectiva para que asuman una verdadera autonomía moral en lugar de simplemente obedecer reglas impuestas desde una figura de autoridad tradicional y punitiva."
    },
    {
      titulo: "Justicia Restaurativa",
      texto: "Se recomienda aplicar técnicas de mediación pacífica y justicia restaurativa frente a cualquier conflicto interpersonal que surja durante la jornada escolar, utilizando el diálogo constructivo para reparar el daño emocional y enseñar a los estudiantes a gestionar sus emociones evitando los castigos estigmatizantes que fracturan la comunidad."
    },
    {
      titulo: "Adaptabilidad Inclusiva",
      texto: "El educador debe adaptar sus estrategias pedagógicas para acoger la diversidad sociocultural y cognitiva de sus alumnos, diseñando actividades de aprendizaje cooperativo que fomenten la interdependencia positiva y neutralicen los prejuicios tempranos demostrando empíricamente que la pluralidad es una enorme ventaja enriquecedora para todo el grupo estudiantil."
    },
    {
      titulo: "Evaluación Formativa",
      texto: "Es necesario modificar los esquemas de evaluación tradicionales adoptando criterios formativos y transparentes que sirvan como indicadores constructivos de mejora, manteniendo siempre un lenguaje respetuoso que valide el esfuerzo del estudiante y convierta el aula en un verdadero laboratorio cívico orientado a consolidar una auténtica cultura de paz."
    }
  ]

  const siguienteSlide = () => {
    setSlideActual((prev) => (prev === recomendaciones.length - 1 ? 0 : prev + 1))
  }

  const anteriorSlide = () => {
    setSlideActual((prev) => (prev === 0 ? recomendaciones.length - 1 : prev - 1))
  }

  return (
    // AQUÍ SE INYECTA LA FUENTE ROBOTO A TODA LA SECCIÓN
    <div className="flex flex-col w-full font-['Roboto']">
      
      {/* SECCIÓN 8: TÍTULO Y RECURSOS INCRUSTADOS */}
      <section className="pt-24 pb-8 bg-white px-6 md:px-20 border-t border-neutral-100">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={animacionScroll}
          >
            {/* AQUÍ PODÉS CAMBIAR EL TAMAÑO DEL TÍTULO */}
            <h2 className="text-4xl md:text-5xl font-bold text-blue-700 border-b-2 border-blue-100 pb-4 ml-4 md:ml-10">
              8. Sección de Recursos Complementarios
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Componente de Recursos */}
      <div className="w-full">
        <Recursos />
      </div>

      {/* SECCIONES 9, 10 Y 11 */}
      <section className="py-24 bg-white px-6 md:px-20">
        <div className="max-w-5xl mx-auto space-y-24">
          
          {/* ==========================================
              SECCIÓN 9: CARRUSEL DE RECOMENDACIONES
          ========================================== */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={animacionScroll}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-700 border-b-2 border-blue-100 pb-4 mb-10 text-center md:text-left">
              9. Recomendaciones para la Práctica Docente
            </h2>
            
            {/* Contenedor del Carrusel */}
            <div className="relative bg-neutral-900 text-white rounded-[3rem] p-8 md:p-14 shadow-2xl overflow-hidden flex flex-col items-center justify-center min-h-[400px]">
              
              {/* Elementos decorativos de fondo */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

              {/* Botones de Navegación (Izquierda y Derecha) */}
              <button 
                onClick={anteriorSlide}
                className="absolute left-4 md:left-8 z-20 bg-white/10 hover:bg-white/20 text-white p-3 md:p-4 rounded-full backdrop-blur-sm transition-all"
                aria-label="Recomendación anterior"
              >
                <FiChevronLeft size={32} />
              </button>
              
              <button 
                onClick={siguienteSlide}
                className="absolute right-4 md:right-8 z-20 bg-white/10 hover:bg-white/20 text-white p-3 md:p-4 rounded-full backdrop-blur-sm transition-all"
                aria-label="Siguiente recomendación"
              >
                <FiChevronRight size={32} />
              </button>

              {/* Contenido Animado del Carrusel */}
              <div className="w-full max-w-3xl px-10 text-center z-10">
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={slideActual}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="flex flex-col items-center"
                  >
                    <div className="bg-blue-500/20 p-4 rounded-2xl text-blue-400 mb-6">
                      <FiCheckCircle size={40} />
                    </div>
                    {/* TÍTULO DEL SLIDE */}
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-blue-300">
                      {recomendaciones[slideActual].titulo}
                    </h3>
                    {/* TEXTO DEL SLIDE (Letra grande para docentes) */}
                    <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-neutral-300">
                      {recomendaciones[slideActual].texto}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Indicadores (Puntitos) */}
              <div className="absolute bottom-6 md:bottom-10 flex gap-3 z-20">
                {recomendaciones.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setSlideActual(index)}
                    className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${slideActual === index ? 'bg-blue-400 scale-125' : 'bg-white/30 hover:bg-white/50'}`}
                    aria-label={`Ir a recomendación ${index + 1}`}
                  />
                ))}
              </div>

            </div>
          </motion.div>

          {/* ==========================================
              SECCIÓN 10: REFLEXIÓN FINAL
          ========================================== */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={animacionScroll}
            className="bg-[#F9F9F7] p-8 md:p-14 lg:p-16 rounded-[3rem] border border-neutral-200"
          >
            {/* AQUÍ PODÉS CAMBIAR EL TAMAÑO DEL TÍTULO */}
            <h2 className="text-4xl md:text-5xl font-bold text-blue-700 border-b-2 border-blue-100 pb-4 mb-10">
              10. Reflexión Final del Grupo de Trabajo
            </h2>
            
            {/* AQUÍ PODÉS CAMBIAR EL TAMAÑO DEL TEXTO DE LAS REFLEXIONES */}
            <div className="space-y-8 text-neutral-600 leading-relaxed text-lg md:text-xl text-justify italic">
              <p>
                "Como equipo investigador y futuros docentes de la Licenciatura en Informática Educativa, hemos llegado a la profunda conclusión de que la verdadera innovación en nuestro campo profesional no consiste en digitalizar contenidos de forma mecánica, sino en utilizar las herramientas tecnológicas como un puente estratégico para humanizar los procesos de enseñanza y promover el respeto irrestricto a la dignidad humana.
</p>
<p>
Durante la construcción de este manual comprendimos colectivamente que la escuela contemporánea salvadoreña debe romper de manera definitiva con las lógicas autoritarias y punitivas tradicionales, entendiendo que la paz en el aula no es la simple obediencia silenciosa o la ausencia de gritos, sino la presencia activa de justicia, equidad, diálogo constructivo y participación democrática donde cada estudiante se sienta plenamente valorado.
</p>
<p>
Esta experiencia de investigación nos ha dejado la firme convicción de que debemos asumir nuestro futuro rol no solo como facilitadores de conocimiento, sino como mediadores éticos y garantes de derechos, comprometiéndonos a aplicar estas estrategias pedagógicas para transformar nuestros salones de clase en microsociedades inclusivas que erradiquen la discriminación y cultiven una auténtica cultura de paz en El Salvador."
              </p>
            </div>
          </motion.div>

          {/* ==========================================
              SECCIÓN 11: REFERENCIAS BIBLIOGRÁFICAS
          ========================================== */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={animacionScroll}
            className="bg-neutral-50 p-8 md:p-14 lg:p-16 rounded-[3rem] border border-neutral-200"
          >
            <div className="flex items-center gap-5 mb-10 border-b-2 border-blue-100 pb-4">
              <div className="bg-blue-100 p-4 rounded-2xl text-blue-700">
                <FiBookOpen size={36} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800">11. Referencias Bibliográficas</h2>
            </div>
            
            {/* Formato APA Oficial con Sangría Francesa y Letra más grande */}
            <div className="space-y-6 text-neutral-600 text-base md:text-lg break-words text-justify">
              <p className="pl-8 indent-[-2rem]">
                Asamblea Legislativa de la República de El Salvador. (2022). <em>Ley Crecer Juntos para la Protección Integral de la Primera Infancia, Niñez y Adolescencia</em>.
              </p>
              <p className="pl-8 indent-[-2rem]">
                Bolívar, L. (2010). El derecho a la educación. <em>Revista IIDH</em>, 52, 194-212.
              </p>
              <p className="pl-8 indent-[-2rem]">
                López, J. A. (2017). Movilización y acción colectiva por los derechos humanos en la paradoja de la institucionalización. <em>Estudios Políticos</em>, 51, 57-78.
              </p>
              <p className="pl-8 indent-[-2rem]">
                Løkke Rasmussen, M. (2013). <em>Guía del educador para la planificación y gestión de la educación en derechos humanos</em>. Instituto Danés de Derechos Humanos.
              </p>
              <p className="pl-8 indent-[-2rem]">
                Ministerio de Educación de El Salvador. (2016). <em>Política de Equidad e Igualdad de Género</em>.
              </p>
              <p className="pl-8 indent-[-2rem]">
                Ministerio de Educación de El Salvador. (2018). <em>Política Nacional para la Convivencia Escolar y Cultura de Paz</em>.
              </p>
              <p className="pl-8 indent-[-2rem]">
                Montanchez Torres, M. L. (2015). La educación como derecho en los tratados internacionales: Una lectura desde la educación inclusiva. <em>Revista de Paz y Conflictos</em>, 8(2), 243-265.
              </p>
              <p className="pl-8 indent-[-2rem]">
                Pérez Pérez, C., & López Francés, I. (2010). Educar para la convivencia en los centros escolares. <em>Edetania</em>, 38, 73-94.
              </p>
              <p className="pl-8 indent-[-2rem]">
                Rodino, A. M. (2015). La educación con enfoque de derechos humanos como práctica constructora de inclusión social. <em>Revista IIDH</em>, 61, 201-224.
              </p>
              <p className="pl-8 indent-[-2rem]">
                Serrano García, S. L., & Vázquez Valencia, L. D. (2015). <em>Fundamentos teóricos de los derechos humanos. Características y principios</em> (2.ª ed.). Comisión de Derechos Humanos del Distrito Federal.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  )
}

export default SeccionesFinales