import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiShield, FiArrowRight } from 'react-icons/fi';

// =========================================
// IMPORTACIÓN DE LOGOS 
// =========================================
import minervaLogo from '../assets/logo_minerva.png';
import escuelaMatematicaLogo from '../assets/escuela_matematica_logo.png';
import facultadMatematicaLogo from '../assets/facultad_matematica_logo.png';

const Hero = () => {
  return (
    // AQUÍ SE INYECTA LA FUENTE ROBOTO A TODA LA SECCIÓN
    <div className="font-['Roboto']">
      
      {/* =========================================================
          1. SECCIÓN DE PORTADA FORMAL 
      ========================================================= */}
      <section className="pt-32 pb-20 px-6 md:px-20 bg-white flex flex-col items-center text-black border-b-8 border-neutral-100 shadow-sm relative z-10">
        <div className="w-full max-w-5xl mx-auto">
          
          <div className="flex justify-between items-center mb-20 gap-4">
            <img src={minervaLogo} alt="Universidad de El Salvador" className="h-24 sm:h-32 md:h-40 object-contain" />
            <img src={escuelaMatematicaLogo} alt="Escuela de Matemática" className="h-24 sm:h-32 md:h-40 object-contain" />
            <img src={facultadMatematicaLogo} alt="Facultad de Ciencias Naturales y Matemática" className="h-24 sm:h-32 md:h-40 object-contain" />
          </div>

          {/* AQUÍ ESTÁN LAS NEGRITAS INTERCALADAS EXACTAMENTE COMO PEDISTE Y TEXTO MÁS GRANDE */}
          <div className="flex flex-col items-center text-center space-y-10 text-xl md:text-2xl leading-snug">
            
            <div className="space-y-4 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider">Universidad de El Salvador</h2>
              <h3 className="text-2xl md:text-3xl font-bold">Facultad de Ciencias Naturales y Matemática</h3>
              <h4 className="text-xl md:text-2xl font-bold">Escuela de Matemática</h4>
            </div>

            <div className="space-y-3">
              <p className="font-bold">Asignatura:</p>
              <p className="font-normal">Derechos Humanos.</p>
            </div>

            <div className="space-y-3">
              <p className="font-bold">Nombre de la tarea:</p>
              <p className="font-normal">Proyecto Final</p>
            </div>

            <div className="space-y-4">
              <p className="font-bold">Nombre de estudiante:</p>
              <div className="space-y-3 font-normal">
                <p>Carlos Antonio Salgado Romero SR22061</p>
                <p>Enoc Aviles Portillo AP22014</p>
                <p>Julio Alberto Tobías González TG22007</p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-bold">Tutor:</p>
              <p className="font-normal">Lic. Walter Enrique Banderas</p>
            </div>

            <div className="space-y-3">
              <p className="font-bold">Grupo:</p>
              <p className="font-normal">GT-02</p>
            </div>

            <div className="pt-10 space-y-5">
              <p className="font-bold">Ciclo I-2026</p>
              <p className="font-bold">Ciudad Universitaria, 1 de Junio del 2026</p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          2. SECCIÓN HERO ORIGINAL 
      ========================================================= */}
      <section className="pt-24 pb-24 px-6 md:px-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 space-y-8 text-center md:text-left flex flex-col items-center md:items-start"
        >
          <span className="bg-blue-100 text-blue-700 py-2 px-4 rounded-full text-base md:text-lg font-semibold tracking-wide">
            Manual Docente Interactivo
          </span>
          {/* AQUÍ PODÉS HACER LA LETRA DEL TÍTULO MÁS GRANDE */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight text-neutral-900">
            Convivencia Democrática y Cultura de Paz
          </h1>
          {/* AQUÍ PODÉS HACER LA LETRA DEL PÁRRAFO MÁS GRANDE */}
          <p className="text-lg md:text-xl lg:text-2xl text-neutral-600 leading-relaxed">
            Una herramienta metodológica práctica, fundamentada en el enfoque de derechos humanos, para facilitar la construcción de aulas seguras y erradicar la violencia desde sus cimientos.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row w-full sm:w-auto gap-4">
            <Link to="/marco-teorico" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg md:text-xl font-medium transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
              Leer Teoría <FiArrowRight />
            </Link>
            <Link to="/estrategias" className="bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-200 px-8 py-4 rounded-full text-lg md:text-xl font-medium transition-all shadow-sm flex items-center justify-center">
              Ver Estrategias
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.1, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 relative w-full max-w-md md:max-w-none mx-auto mt-10 md:mt-0"
        >
          <div className="aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative border-4 md:border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80" 
              alt="Estudiantes en convivencia pacífica" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
          </div>
          
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-2 md:-bottom-8 md:-left-8 bg-white p-5 md:p-8 rounded-2xl shadow-xl border border-neutral-100 max-w-[250px] md:max-w-sm"
          >
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 md:p-4 rounded-full text-green-600">
                <FiShield className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div>
                <p className="font-bold text-neutral-800 text-base md:text-lg">Aula Segura</p>
                <p className="text-sm md:text-base text-neutral-500">Garante de derechos</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;