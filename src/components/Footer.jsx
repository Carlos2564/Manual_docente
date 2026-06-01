import { Link } from 'react-router-dom';
import { FiAward, FiBook, FiInfo, FiCode, FiHeart, FiMail, FiGithub, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  // Función para volver arriba suavemente
  const volverArriba = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="font-['Roboto'] bg-slate-900 text-slate-300 pt-20 pb-10 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      
      {/* Elementos decorativos sutiles en el fondo */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-amber-500 opacity-80"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-10"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* GRID PRINCIPAL DE 4 COLUMNAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* COLUMNA 1: UNIVERSIDAD */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-3 border-b border-slate-700 pb-3">
              <FiAward className="text-blue-400" size={24} /> Universidad
            </h3>
            <ul className="space-y-4 text-sm md:text-base">
              <li className="flex items-start gap-3 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 hover:bg-slate-800 transition-colors">
                <span className="text-blue-400 font-bold mt-0.5">•</span>
                Universidad de El Salvador
              </li>
              <li className="flex items-start gap-3 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 hover:bg-slate-800 transition-colors">
                <span className="text-purple-400 font-bold mt-0.5">•</span>
                Facultad de Ciencias Naturales y Matemática
              </li>
              <li className="flex items-start gap-3 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 hover:bg-slate-800 transition-colors">
                <span className="text-amber-400 font-bold mt-0.5">•</span>
                Escuela de Matemática
              </li>
              <li className="flex items-start gap-3 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 hover:bg-slate-800 transition-colors">
                <span className="text-green-400 font-bold mt-0.5">•</span>
                Licenciatura en Informática Educativa
              </li>
            </ul>
          </div>

          {/* COLUMNA 2: ASIGNATURA */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-3 border-b border-slate-700 pb-3">
              <FiBook className="text-blue-400" size={24} /> Asignatura
            </h3>
            <ul className="space-y-4 text-sm md:text-base">
              <li className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                <span className="text-blue-400 font-bold">📚</span>
                Derechos Humanos
              </li>
              <li className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                <span className="text-purple-400 font-bold">📅</span>
                Ciclo I - 2026
              </li>
              <li className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                <span className="text-amber-400 font-bold">👨‍🏫</span>
                Tutor: Lic. Walter Banderas
              </li>
              <li className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                <span className="text-green-400 font-bold">👥</span>
                Grupo: GT-02
              </li>
            </ul>
          </div>

          {/* COLUMNA 3: INFORMACIÓN Y ENLACES */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-3 border-b border-slate-700 pb-3">
              <FiInfo className="text-purple-400" size={24} /> Información
            </h3>
            <div className="flex flex-col space-y-3 text-sm md:text-base">
              <Link to="/" onClick={volverArriba} className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 hover:bg-blue-600/20 hover:text-white transition-all flex items-center gap-3">
                <span>🎯</span> Manual Docente Interactivo
              </Link>
              <Link to="/marco-teorico" onClick={volverArriba} className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 hover:bg-blue-600/20 hover:text-white transition-all flex items-center gap-3">
                <span>📖</span> Fundamentación Teórica
              </Link>
              <Link to="/estrategias" onClick={volverArriba} className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 hover:bg-blue-600/20 hover:text-white transition-all flex items-center gap-3">
                <span>✨</span> Estrategias Pedagógicas
              </Link>
            </div>
          </div>

          {/* COLUMNA 4: DESARROLLADORES (TARJETA DESTACADA) */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-3 border-b border-slate-700 pb-3">
              <FiCode className="text-amber-400" size={24} /> Desarrollado por
            </h3>
            <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 p-6 rounded-2xl border border-slate-700 shadow-lg text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 text-blue-400 text-2xl border border-blue-500/30">
                👨‍💻
              </div>
              <h4 className="text-white font-bold mb-1">Equipo Investigador</h4>
              <p className="text-xs text-blue-400 mb-4 uppercase tracking-wider">Estudiantes UES</p>
              
              <div className="space-y-2 text-sm text-slate-300 w-full text-left bg-slate-900/50 p-3 rounded-xl">
                <p className="border-b border-slate-700/50 pb-2">Carlos Antonio Salgado Romero</p>
                <p className="border-b border-slate-700/50 pb-2">Enoc Aviles Portillo</p>
                <p>Julio Alberto Tobías González</p>
              </div>

              <div className="flex gap-4 mt-6">
                <button className="bg-slate-700 hover:bg-slate-600 p-2.5 rounded-full text-white transition-colors" aria-label="Correo">
                  <FiMail size={18} />
                </button>
                <button className="bg-slate-700 hover:bg-slate-600 p-2.5 rounded-full text-white transition-colors" aria-label="GitHub">
                  <FiGithub size={18} />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* LÍNEA FINAL (COPYRIGHT Y BOTÓN DE SUBIR) */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left text-sm md:text-base text-slate-400">
            <p>© 2026 Universidad de El Salvador • Proyecto Final Derechos Humanos</p>
            <p className="mt-1 flex items-center justify-center md:justify-start gap-1">
              Hecho para la educación
            </p>
          </div>
          
          <button 
            onClick={volverArriba}
            className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full shadow-lg shadow-blue-900/50 transition-all hover:-translate-y-1"
            aria-label="Volver arriba"
          >
            <FiArrowUp size={24} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;