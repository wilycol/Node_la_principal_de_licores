import React from 'react';

const NewsFeed: React.FC = () => {
  const news = [
    { 
      id: 1, 
      title: '📦 Nueva Cosecha: Reservas de Élite', 
      date: '09/05/2026', 
      summary: 'Han llegado los ejemplares más exclusivos del Valle. Disponibles solo para miembros del Neural Club.' 
    },
    { 
      id: 2, 
      title: '🥃 Catación de Whiskys Premium', 
      date: '12/05/2026', 
      summary: 'Acompáñanos este viernes en una experiencia sensorial única con etiquetas de 18+ años.' 
    },
    { 
      id: 3, 
      title: '🚚 Logística Industrial Optimizada', 
      date: '15/05/2026', 
      summary: 'Nuestros tiempos de entrega en Cúcuta se han reducido un 40% gracias a la Federación.' 
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {news.map(item => (
        <div key={item.id} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-orange-500/50 transition-all group">
          <p className="text-[10px] text-orange-500 font-black uppercase tracking-widest">{item.date}</p>
          <h3 className="text-xl font-bold text-white mt-2 group-hover:text-orange-500 transition-colors">{item.title}</h3>
          <p className="text-sm text-white/50 mt-3 leading-relaxed">{item.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
