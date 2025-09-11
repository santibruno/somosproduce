import React from "react";

const items = [
  { t: "Cursada", d: "1 vez por semana" },
  { t: "Horas x clase", d: "2 horas por clase" },
  { t: "Duración del curso", d: "3 meses en total" },
  { t: "Grupos reducidos", d: "6 personas por comisión" },
  { t: "Material incluido", d: "Presentaciones animadas + Apuntes exclusivos" },
];

export default function FocusSpecs() {
  return (
    <section className="container section">
      <div className="focus-wrap">
        <div className="focus-badge">Tu cursada, más enfocada</div>

        {items.map((it, i) => (
          <article key={i} className="focus-item">
            <span className="focus-stick" />
            <div className="focus-copy">
              <h4>{it.t}</h4>
              <p>{it.d}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
