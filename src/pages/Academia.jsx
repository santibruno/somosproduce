import { useEffect, useMemo, useState } from "react";
import CourseCard from "../components/CourseCard";
import SitesGrid from "../components/SitesGrid";
import FocusSpecs from "../components/FocusSpecs";
import AcademiaBanner from "../components/Banners/AcademiaBanner";

export default function Academia() {
  const [courses, setCourses] = useState([]);
  const [q, setQ] = useState("");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/courses.json")
      .then((r) => r.json())
      .then(setCourses);
  }, []);

  useEffect(() => {
    setShowAll(false);
  }, [q]);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return courses;
    return courses.filter((c) =>
      [c.title, c.level, c.style, c.desc]
        .filter(Boolean)
        .some((v) => v.toLowerCase().includes(term))
    );
  }, [courses, q]);

  return (
    <>
      <section className="hero hero-academia">
        <AcademiaBanner />
      </section>
      <FocusSpecs />

      <section className="container section" id="cursos">
        <div className="flex-between">
          <h2>Nuestros cursos</h2>
          <div className="filters">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar cursos..."
              aria-label="Buscar cursos"
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="mt-24">No encontramos cursos para “{q}”. Probá con otro término.</p>
        ) : (
          <>
            <div className="course-grid">
              {(showAll ? filtered : filtered.slice(0, 3)).map((c) => (
                <CourseCard key={c.id} c={c} />
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
          </>
        )}
      </section>

      <SitesGrid current="academia" />
    </>
  );
}
