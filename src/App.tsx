import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import NewsFeed from './components/NewsFeed';
import SalesAdvisorWidget from './components/SalesAdvisorWidget';

interface Testimonio {
  id: number;
  texto: string;
  calificacion: number;
}

function App() {
  const [gallery, setGallery] = useState<string[]>([
    "https://lkctxyoyajqrhaavnzrv.supabase.co/storage/v1/object/public/business-assets/la_principal_de_licores/gallery/evidencia_1.jpg",
  ]);

  const [testimonios, setTestimonios] = useState<Testimonio[]>([
    {
      id: 1,
      texto: "Excelente servicio y variedad de productos",
      calificacion: 5,
    },
    {
      id: 2,
      texto: "Me encantó la atención y la calidad de los licores",
      calificacion: 5,
    },
  ]);

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <div className={styles.app}>
      <section className={styles.hero}>
        <img
          src={gallery[0]}
          alt="Imagen de la galería"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>La Principal de Licores</h1>
              <p className={styles.heroSubtitle}>El arte de la licorería</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.experiencia}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>El Arte de la Licorería</h2>
          <div className={styles.tarjetas}>
            <div className={styles.tarjeta}>
              <h3 className={styles.tarjetaTitle}>Nuestra historia</h3>
              <p className={styles.tarjetaTexto}>
                Con más de 10 años de experiencia en la industria de los licores,
                nos hemos consolidado como una de las principales opciones para
                aquellos que buscan la mejor calidad y variedad.
              </p>
            </div>
            <div className={styles.tarjeta}>
              <h3 className={styles.tarjetaTitle}>Nuestros productos</h3>
              <p className={styles.tarjetaTexto}>
                Ofrecemos una amplia variedad de licores y bebidas espirituosas,
                desde clásicos como el whisky y el ron, hasta opciones más
                innovadoras y exclusivas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.galeria}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Galería de Élite</h2>
          {gallery.length > 0 && (
            <div className={styles.masonryLayout}>
              {gallery.map((imagen, index) => (
                <div key={index} className={styles.masonryItem}>
                  <img src={imagen} alt={`Imagen ${index + 1}`} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className={styles.testimonios}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Testimonios</h2>
          {testimonios.length > 0 && (
            <div className={styles.tarjetas}>
              {testimonios.map((testimonial, index) => (
                <div key={testimonial.id} className={styles.tarjeta}>
                  <h3 className={styles.tarjetaTitle}>Testimonio {testimonial.id}</h3>
                  <p className={styles.tarjetaTexto}>{testimonial.texto}</p>
                  <p className={styles.tarjetaCalificacion}>
                    Calificación: {testimonial.calificacion} estrellas
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className={styles.newsfeed}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>NewsFeed Neural</h2>
          <NewsFeed />
        </div>
      </section>

      <section className={styles.contacto}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Búnker de Contacto</h2>
          <div className={styles.contactoForm}>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre"
                className={styles.input}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className={styles.input}
              />
              <textarea
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder="Mensaje"
                className={styles.textarea}
              />
              <button type="submit" className={styles.button}>
                Enviar
              </button>
              {enviado && <p className={styles.enviado}>Mensaje enviado con éxito</p>}
            </form>
          </div>
          <div className={styles.contactoInfo}>
            <p className={styles.contactoDireccion}>
              Mz T, trigal del norte, lote 7, Cúcuta, Norte de Santander, Colombia
            </p>
            <p className={styles.contactoWhatsapp}>
              WhatsApp: 3219061209
            </p>
            <p className={styles.contactoEmail}>
              Email: <a href="mailto:info@laprincipaldelicores.com">info@laprincipaldelicores.com</a>
            </p>
            <p className={styles.contactoRedes}>
              Redes sociales:
              <a href="https://www.instagram.com/laprincipaldelicores" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="https://www.facebook.com/laprincipaldelicores" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </p>
          </div>
        </div>
      </section>

      <SalesAdvisorWidget />
    </div>
  );
}

export default App;