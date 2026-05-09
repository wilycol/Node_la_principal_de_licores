import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SalesAdvisorWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <motion.button
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full fixed bottom-4 right-4 z-10"
        animate={{ scale: isOpen ? 1.2 : 1 }}
        onClick={handleToggle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 flex justify-end items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 bg-opacity-50 shadow-lg rounded-2xl p-4 w-96 h-screen glassmorphism blur-2xl border-2 border-orange-500"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-orange-500">La Principal de Licores</h2>
              <button
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={handleToggle}
              >
                Cerrar
              </button>
            </div>
            <p className="text-lg text-gray-200 mb-4">
              Ubicación: Mz T, trigal del norte, lote 7, Cúcuta, Norte de Santander, Colombia
            </p>
            <p className="text-lg text-gray-200 mb-4">
              WhatsApp: 3219061209
            </p>
            <p className="text-lg text-gray-200 mb-4">
              ADN: # EXPEDIENTE DE INTELIGENCIA: La principal de licores
            </p>
            <h3 className="text-xl font-bold text-orange-500 mb-2">Beneficios de la Colmena Neural</h3>
            <ul className="list-disc text-lg text-gray-200 mb-4">
              <li>Ampliar la oferta de productos</li>
              <li>Mejorar la experiencia del cliente</li>
              <li>Crear un ambiente acogedor</li>
              <li>Implementar estrategias de marketing efectivas</li>
            </ul>
            <h3 className="text-xl font-bold text-orange-500 mb-2">Estructura Neural Sugerida</h3>
            <ul className="list-disc text-lg text-gray-200 mb-4">
              <li>Sección de Productos</li>
              <li>Sección de Promociones</li>
              <li>Sección de Contacto</li>
            </ul>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default SalesAdvisorWidget;