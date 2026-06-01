import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav className="w-full py-4 px-6 md:px-10 flex justify-between items-center absolute top-0 z-50 bg-white/90 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none">
      <Link to="/" className="text-xl font-serif font-bold text-neutral-800 tracking-widest uppercase cursor-pointer z-50">
        DERECHOS<span className="text-blue-600">HUMANOS</span>
      </Link>
      
      {/* Botón de hamburguesa visible solo en teléfonos */}
      <button 
        className="md:hidden text-neutral-800 z-50 p-2"
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        {menuAbierto ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      {/* Menú de enlaces que se convierte en pantalla completa en móvil */}
      <ul className={`flex flex-col md:flex-row gap-8 text-lg md:text-sm uppercase tracking-widest text-neutral-600 font-medium absolute md:relative top-0 left-0 w-full md:w-auto h-screen md:h-auto bg-white md:bg-transparent items-center justify-center transition-transform duration-300 ${menuAbierto ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} z-40`}>
        <li>
          <Link to="/" onClick={() => setMenuAbierto(false)} className="hover:text-blue-600 transition-colors">Inicio</Link>
        </li>
        <li>
          <Link to="/marco-teorico" onClick={() => setMenuAbierto(false)} className="hover:text-blue-600 transition-colors">Teoría</Link>
        </li>
        <li>
          <Link to="/estrategias" onClick={() => setMenuAbierto(false)} className="hover:text-blue-600 transition-colors">Estrategias</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;