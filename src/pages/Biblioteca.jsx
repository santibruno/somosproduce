import { useEffect, useMemo, useRef, useState } from "react";
import EventCard from "../components/EventCard";
import Carousel from "../components/Carousel";
import SitesGrid from "../components/SitesGrid";
import LaBibloBanner from "../components/banners/LaBibloBanner";

export default function Biblioteca() {
  const [events, setEvents] = useState([]);
  const [q, setQ] = useState("");
  const [debouncedQ, setDebouncedQ] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [openSug, setOpenSug] = useState(false);
  const [highlightIdx, setHighlightIdx] = useState(-1);
  const inputRef = useRef(null);

  // fetch
  useEffect(() => {
    fetch("/events.json")
      .then((r) => r.json())
      .then((data) => {
        setEvents(data || []);
        setShowAll(false);
      });
  }, []);

  // debounce del query para no filtrar en cada keypress
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQ(q.trim().toLowerCase()), 180);
    return () => clearTimeout(t);
  }, [q]);

  // cerrar/abrir sugerencias según query
  useEffect(() => {
    setOpenSug(!!q.trim());
    setShowAll(false); // al cambiar búsqueda, colapsa la grilla
    setHighlightIdx(-1);
  }, [q]);

  // sugerencias (títulos + descripciones)
  const suggestions = useMemo(() => {
    if (!debouncedQ) return [];
    const terms = debouncedQ.split(/\s+/).filter(Boolean);
    const score = (ev) => {
      const hay = [ev.title, ev.desc, ev.category, ev.when]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      let s = 0;
      for (const t of terms) {
        if (hay.includes(t)) s += 1;
        if (ev.title?.toLowerCase().includes(t)) s += 1; // bonus por título
      }
      return s;
    };
    return events
      .map((ev) => ({ ev, s: score(ev) }))
      .filter(({ s }) => s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 6)
      .map(({ ev }) => ev);
  }, [events, debouncedQ]);

  // lista de eventos filtrados (para la grilla)
  const filtered = useMemo(() => {
    if (!debouncedQ) return events;
    const setIds = new Set(suggestions.map((e) => e.id ?? e.title));
    return events.filter((e) => setIds.has(e.id ?? e.title));
  }, [events, debouncedQ, suggestions]);

  const chooseSuggestion = (ev) => {
    setQ(ev.title || "");
    setOpenSug(false);
    setShowAll(true); // al elegir sugerencia, mostramos todos los match
    // opcional: hacer scroll a la grilla
    document.getElementById("eventos")?.scrollIntoView({ behavior: "smooth" });
  };

  const onKeyDown = (e) => {
    if (!openSug || suggestions.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightIdx((v) => (v + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightIdx((v) => (v - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === "Enter") {
      if (highlightIdx >= 0) {
        e.preventDefault();
        chooseSuggestion(suggestions[highlightIdx]);
      }
    } else if (e.key === "Escape") {
      setOpenSug(false);
    }
  };

  return (
    <>
      <section className="hero hero-biblioteca">
        <LaBibloBanner />
      </section>

      <section className="container section" id="eventos">
        <div className="flex-between">
          <h2>Próximos eventos</h2>
          <div className="predictive-wrap" style={{ position: "relative", maxWidth: 360, width: "100%" }}>
            <input
              ref={inputRef}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onKeyDown={onKeyDown}
              onFocus={() => setOpenSug(!!q.trim())}
              placeholder="Buscar eventos…"
              aria-label="Buscar eventos"
              autoComplete="off"
              className="predictive-input"
            />
            {openSug && suggestions.length > 0 && (
              <ul className="predictive-list" role="listbox" style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                marginTop: 6,
                background: "var(--surface, #111)",
                border: "1px solid var(--border, #2a2a2a)",
                borderRadius: 8,
                overflow: "hidden",
                zIndex: 20
              }}>
                {suggestions.map((s, idx) => (
                  <li
                    key={s.id ?? s.title ?? idx}
                    role="option"
                    aria-selected={idx === highlightIdx}
                    onMouseDown={(e) => { e.preventDefault(); chooseSuggestion(s); }}
                    onMouseEnter={() => setHighlightIdx(idx)}
                    className="predictive-item"
                    style={{
                      padding: "10px 12px",
                      cursor: "pointer",
                      background: idx === highlightIdx ? "var(--hover, #1b1b1f)" : "transparent"
                    }}
                  >
                    <div className="predictive-title" style={{ fontWeight: 600 }}>
                      {s.title}
                    </div>
                    {s.when && <div className="predictive-meta" style={{ opacity: 0.7, fontSize: 12 }}>{s.when}</div>}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="mt-24">No encontramos eventos para “{q}”. Probá con otro término.</p>
        ) : (
          <>
            <div className="event-list">
              {(showAll ? filtered : filtered.slice(0, 3)).map((ev, i) => (
                <EventCard key={ev?.id ?? i} ev={ev} />
              ))}
            </div>

            {!showAll && filtered.length > 3 && (
              <div className="center mt-24">
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setShowAll(true)}
                >
                  Ver todos
                </button>
              </div>
            )}

            {showAll && debouncedQ && filtered.length > 3 && (
              <div className="center mt-16">
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setShowAll(false)}
                >
                  Ver menos
                </button>
              </div>
            )}
          </>
        )}
      </section>

      <section className="section dark-gradient" style={{ position: "relative", overflow: "hidden" }}>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="grid-2 align-center">
            <div>
              <h2>Quiénes somos</h2>
              <p>
                La Biblioteca Bar es un espacio cultural que celebra la
                diversidad y la creatividad. Desde su apertura, se volvió un
                referente de la vida nocturna porteña.
              </p>
              <p>
                Ofrecemos propuestas gastronómicas y musicales, ciclos temáticos
                y una experiencia inmersiva en nuestro espacio.
              </p>
            </div>
            <div className="labibloBlanco">
              <img src="/images/isotipo_blanco.png" alt="Nuestro espacio" />
            </div>
          </div>
        </div>
        {/* Fondo isotipo solo en mobile */}
        <img
          src="/images/isotipo_blanco.png"
          alt="Fondo Biblioteca"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100%",
            objectFit: "contain",
            opacity: 0.08,
            zIndex: 1,
            pointerEvents: "none",
            display: "block",
          }}
          className="isotipo-bg-mobile"
        />
      </section>

      <SitesGrid current="biblioteca" />

      <section className="section container">
        <h2>Nuestro establecimiento</h2>
        <Carousel
          images={[
            "/images/espacio/espacio1.jpg",
            "/images/espacio/espacio2.jpg",
            "/images/espacio/espacio3.png",
            "/images/espacio/espacio4.jpeg",
          ]}
        />
      </section>
    </>
  );
}
