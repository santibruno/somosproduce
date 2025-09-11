import SitesGrid from "../components/SitesGrid";
import YouTubeEmbed from "../components/YouTubeEmbed/YouTubeEmbed";
import styles from "./Produce.module.css";

export default function Produce() {
  return (
    <>
      {/* HERO */}
      <section className={`${styles.hero} hero hero-produce`}>
        <div className="container">
          <h1 className="display">Creamos experiencias memorables</h1>
          <p className="subtitle">
            Producción integral de eventos, booking de artistas, sonido & iluminación, streaming y más.
          </p>
        </div>
      </section>

      {/* MANIFIESTO */}
      <section className="container section">
        <div className={styles.manifesto}>
          <p className={styles.manifestoLead}>
            Somos Produce se dedica a la creación de eventos sensitivos, donde el foco está en que el público
            conecte mediante múltiples estímulos.
          </p>
          <p>
            Desde esos estímulos nace <strong>“SOMOS”</strong> con el lema:
            <em> “Somos muchas cosas, somos experiencias, somos sensaciones, somos compañía, somos música, somos talento”.</em>
          </p>
          <p>
            Prometemos compartir a quienes nos acompañan un espectáculo que mantenga siempre nuestro amor por la
            producción musical y la producción artística.
          </p>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="container section" id="servicios">
        <h2 className={styles.sectionTitle}>Nuestros servicios</h2>
        <div className={`${styles.serviceGrid} grid-4`}>
          <article className={styles.service}>
            <div className={styles.serviceIcon} aria-hidden>🎛️</div>
            <h3>Producción de eventos</h3>
            <p>Planificación integral: curaduría, logística, permisos, catering y staff.</p>
          </article>
          <article className={styles.service}>
            <div className={styles.serviceIcon} aria-hidden>🎤</div>
            <h3>Booking & management</h3>
            <p>Conexión con artistas y prensa. Gestión de riders y hospitality.</p>
          </article>
          <article className={styles.service}>
            <div className={styles.serviceIcon} aria-hidden>🔊</div>
            <h3>Sonido & iluminación</h3>
            <p>Equipamiento profesional, operadores y diseño de puesta en escena.</p>
          </article>
          <article className={styles.service}>
            <div className={styles.serviceIcon} aria-hidden>📡</div>
            <h3>Streaming & contenido</h3>
            <p>Transmisiones en vivo, grabación multicámara y piezas para redes.</p>
          </article>
        </div>
      </section>

      {/* GRID DE VINCULACIÓN */}
      <SitesGrid current="produce" />

      {/* ENTREVISTAS / VIDEOS */}
      <section className={`section ${styles.darkGradient}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Entrevistas & contenidos</h2>
            <p className={styles.sectionKicker}>Charlas, highlights y piezas audiovisuales</p>
          </div>

          <div className={styles.videoGrid}>
            <YouTubeEmbed url="https://www.youtube.com/watch?v=-s_HA-ozHzg" title="Entrevista" />
            <YouTubeEmbed url="https://www.youtube.com/watch?v=YahEdPAIXq0" title="Video destacado" />
          </div>
        </div>
      </section>

    </>
  );
}
