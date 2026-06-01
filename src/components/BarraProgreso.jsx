import { motion, useScroll } from 'framer-motion'

const BarraProgreso = () => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

export default BarraProgreso