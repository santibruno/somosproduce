
import { Link } from 'react-router-dom'

export default function CourseCard({ c }){
  return (
    <article className="course-card">
      <div className="course-image" style={{ backgroundImage:`url(${c.image})` }} />
      <div className="course-body">
        <h3>{c.title}</h3>
        <p className="muted">{c.desc}</p>
        <div className="course-meta">
          <span>{c.weeks} semanas</span>
          <span>{c.days.join(', ')}</span>
        </div>
        <Link className="btn btn-primary" to={`/academia/curso/${c.id}`}>Ver curso</Link>
      </div>
    </article>
  )
}
