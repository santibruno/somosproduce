import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function CursoDetalle() {
  const { id } = useParams()
  const [course, setCourse] = useState(null)
  const [error, setError] = useState(null);
  const [heroImage, setHeroImage] = useState("")

  useEffect(() => {
    fetch('/api/courses.php')
      .then(r => {
        if (!r.ok) throw new Error("Error al cargar cursos")
        return r.json()
      })
      .then(list => {
        if (!list || list.length === 0) {
          setError("NO HAY CURSOS DISPONIBLES")
          setCourse(null)
          return
        }
        const found = list.find((c) => String(c.id) === String(id))
        if (!found) {
          setError("NO HAY CURSOS DISPONIBLES")
          setCourse(null)
        } else {
          found.days = (found.days || []).map((d) =>
            d.replace(/^\[?\\?"?/, '').replace(/\\?"?\]?$/, '')
          )
          setCourse(found)
        }
      })
      .catch(err => {
        console.error("Error detalle curso:", err)
        setError("NO HAY CURSOS DISPONIBLES")
        setCourse(null)
      })
  }, [id])

  useEffect(() => {
    if (!course?.image) {
      setHeroImage("/images/not_found.png")
      return
    }
    const img = new Image()
    img.src = course.image
    img.onload = () => setHeroImage(course.image)
    img.onerror = () => setHeroImage("/images/not_found.png")
  }, [course])

  if (error) {
    return <div className="container section"><p>{error}</p></div>
  }

  if (!course) {
    return <div className="container section"><p>Cargando...</p></div>
  }

  const priceFmt =
    course.price && !isNaN(Number(course.price))
      ? new Intl.NumberFormat('es-AR').format(course.price)
      : "SIN CONTENIDO"

  return (
    <>
      <section className="hero hero-curso">
        <div className="hero-image" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="container">
          <h1 className="display">{course.title || "SIN CONTENIDO"}</h1>
          <p className="subtitle">{course.desc || "SIN CONTENIDO"}</p>
        </div>
      </section>

      <section className="container section">
        <div className="course-detail">
          <dl>
            <div><dt>Duración</dt><dd>{course.weeks ? `${course.weeks} semanas` : "SIN CONTENIDO"}</dd></div>
            <div>
              <dt>Días</dt>
              <dd>
                {course.days && course.days.length > 0
                  ? course.days.map((d, i) => (
                    <span key={i} className="day">
                      {d}{i < course.days.length - 1 && ' • '}
                    </span>
                  ))
                  : "SIN CONTENIDO"}
              </dd>
            </div>
            <div><dt>Precio</dt><dd>${priceFmt} {course.currency || ""}</dd></div>
          </dl>
          {course.payment_url ? (
            <a
              className="btn btn-primary"
              href={course.payment_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Inscribirse
            </a>
          ) : (
            <button className="btn btn-disabled" disabled>No disponible</button>
          )}
        </div>
      </section>
    </>
  )
}
