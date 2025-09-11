export default function AcademiaBanner() {
  return (
    <section className="acad-banner" aria-label="Descubrí tu sonido">
      <div className="acad-bg" aria-hidden="true">
        <picture>
          <source media="(min-width: 900px)" srcSet="/images/banners/bannerAcademiaDesktop.png" />
          <img
            src="/images/banners/bannerAcademiaMobile.png"
            alt="Banner DJ Somos Academia"
            loading="eager"
            decoding="sync"
          />
        </picture>
      </div>

      <div className="container acad-inner">
        <a href="#cursos" className="btn btn-primary cta-shadow cta-pill">
          Nuestros Cursos
        </a>
      </div>
    </section>
  );
}
