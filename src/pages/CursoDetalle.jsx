
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function CursoDetalle() {
  const { id } = useParams()
  const [course, setCourse] = useState(null)

  useEffect(() => {
    fetch('/api/courses.php').then(r => r.json()).then(list => {
      setCourse(list.find(c => String(c.id) === String(id)))
    })
  }, [id])

  if (!course) return <div className="container section"><p>Cargando...</p></div>

  const priceFmt = new Intl.NumberFormat('es-AR').format(course.price)

  return (
    <>
      <section className="hero hero-curso">
        <div className="hero-image" style={{ backgroundImage: `url(${course.image})` }} />
        <div className="container">
          <h1 className="display">{course.title}</h1>
          <p className="subtitle">{course.desc}</p>
        </div>
      </section>

      <section className="container section">
        <div className="course-detail">
          <dl>
            <div><dt>Duración</dt><dd>{course.weeks} semanas</dd></div>
            <div><dt>Días</dt><dd>{course.days.join(', ')}</dd></div>
            <div><dt>Precio</dt><dd>${priceFmt} {course.currency}</dd></div>
          </dl>
          <a
            className="btn btn-primary"
            href={course.payment_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Inscribirse
          </a>
        </div>
      </section>

      <section className="section dark-gradient" id="inscripcion">
        <div className="container">
          <h2>Inscripción</h2>
          <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('En producción, este form debe postear a tu backend PHP (ej. /api/enroll.php).'); }}>
            <div className="grid-2">
              <input required name="name" placeholder="Nombre y apellido" />
              <input required type="email" name="email" placeholder="Email" />
            </div>
            <div className="grid-2">
              <input required name="phone" placeholder="Teléfono" />
              <input name="notes" placeholder="Comentarios (opcional)" />
            </div>
            <button className="btn btn-primary" type="submit">Enviar</button>
          </form>
        </div>
      </section>
    </>
  )
}
