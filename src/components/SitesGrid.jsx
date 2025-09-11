import { Link } from 'react-router-dom'

export default function SitesGrid({ current }) {
  const tiles = [
    {
      id: 'academia',
      to: '/academia',
      label: 'CONOCÉ NUESTRA ACADEMIA',
      img: '/images/SiteGridAcademy.png'
    },
    {
      id: 'produce',
      to: '/produce',
      label: 'CONOCÉ NUESTRA PRODUCTORA',
      img: '/images/SiteGridSomosP.jpeg'
    },
    {
      id: 'biblioteca',
      to: '/',
      label: 'CONOCÉ NUESTRO ESPACIO',
      img: '/images/SiteGridLaBiblo.jpeg'
    }
  ]

  const show = tiles.filter(t => t.id !== current)

  return (
    <section className="sites-edge" aria-label="Sitios relacionados">
      <div className="row">
        {show.slice(0,2).map(t => (
          <Link key={t.id} to={t.to} className="tile" style={{ backgroundImage:`url(${t.img})` }}>
            <span className="btn btn-overlay">{t.label}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
