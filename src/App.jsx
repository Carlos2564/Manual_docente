import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BarraProgreso from './components/BarraProgreso'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Indice from './components/Indice'
import InformacionManual from './components/InformacionManual' 
import Objetivos from './components/Objetivos'
import Estrategias from './components/Estrategias'
import SeccionesFinales from './components/SeccionesFinales'
import PaginaEstrategias from './pages/PaginaEstrategias' 
import MarcoTeorico from './pages/MarcoTeorico'
import Footer from './components/Footer'

const Inicio = () => (
  <>
    <Hero />
    <Indice />
    <InformacionManual /> 
    <Objetivos />
    <Estrategias />
    <SeccionesFinales /> 
    <BarraProgreso />
  </>
)

function App() {
  return (
    <Router>
      {/* 1. font-['Roboto'] aplica tu nueva fuente a todo el proyecto.
        2. flex flex-col y min-h-screen preparan la página para que el Footer 
           siempre se quede al fondo, sin importar el tamaño de la pantalla.
      */}
      <div className="min-h-screen font-['Roboto'] text-neutral-900 bg-[#F9F9F7] flex flex-col">
        <Navbar />
        
        {/* flex-grow empuja el footer hacia abajo */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/marco-teorico" element={<MarcoTeorico />} />
            <Route path="/estrategias" element={<PaginaEstrategias />} />
          </Routes>
        </main>

        {/* Aquí entra tu nuevo Footer premium */}
        <Footer />
      </div>
    </Router>
  )
}

export default App