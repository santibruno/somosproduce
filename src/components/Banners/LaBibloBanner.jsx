export default function LaBibloBanner() {
  return (
  <section className="acad-banner" aria-label="Descubrí tu sonido" style={{ position: "relative", width: "100%", height: "550px", overflow: "hidden" }}>
      {/* Imagen responsive */}
      <picture style={{ width: "100%", height: "100%", display: "block" }}>
        <source
          media="(min-width: 900px)"
          srcSet="/images/banners/bannerLaBiblotecaDesktop.jpg"
        />
        <img
          src="/images/banners/bannerLaBiblotecaMobile.jpg"
          alt="Banner DJ Somos Academia"
          loading="eager"
          decoding="sync"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </picture>
      {/* Overlay oscuro */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.5)",
          zIndex: 1,
        }}
      />
      {/* Texto centrado */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          zIndex: 2,
          textAlign: "center",
          padding: "0 20px",
          textShadow: "0 2px 8px rgba(0,0,0,0.7)",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", margin: 0 }}>La Biblioteca</h1>
        <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
          Un espacio cultural que fusiona música, arte y gastronomía.
        </p>
      </div>
    </section>
  );
}