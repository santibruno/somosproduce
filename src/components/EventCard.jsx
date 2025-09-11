export default function EventCard({ ev }) {
  return (
    <article className="event-card">
      <div className="event-image" style={{ backgroundImage:`url(${ev.image})` }}>
        <div className="event-overlay">
          <div className="event-copy">
            <h3>{ev.title}</h3>
            <p>{ev.datetime}</p>
          </div>
          <a className="btn btn-buy" href={ev.passline} target="_blank" rel="noopener">
            Comprar
          </a>
        </div>
      </div>
    </article>
  )
}
