
import { Link } from 'react-router-dom'

export default function CourseCard({ c }) {
  return (
    <article className="course-card">
      <div className="course-image" style={{ backgroundImage: `url(${c.image})` }} />
      <div className="course-body">
        <h3>{c.title}</h3>
        <p className="muted">{c.desc}</p>
        <div className="course-meta">
          <span>{c.weeks} semanas</span>
          <span>
            {Array.isArray(c.days)
              ? c.days.map((d, i) => (
                <span key={i} className="day">
                  {d}{i < c.days.length - 1 && ' • '}
                </span>
              ))
              : JSON.parse(c.days).map((d, i) => (
                <span key={i} className="day">
                  {d}{i < JSON.parse(c.days).length - 1 && ' • '}
                </span>
              ))
            }
          </span>
        </div>
        <Link className="btn btn-primary" to={`/academia/curso/${c.id}`}>Ver curso</Link>
      </div>
    </article>
  )
}
