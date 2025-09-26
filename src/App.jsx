import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Biblioteca from './pages/Biblioteca'
import Academia from './pages/Academia'
import CursoDetalle from './pages/CursoDetalle'
import Produce from './pages/Produce'
import Footer from './components/Footer/Footer'

// IMPORTÁ los logos
import logoProduce from '../public/images/logo_produce.png'
import logoAcademia from '../public/images/logoAcademia.png'
import logoBiblioteca from '../public/images/logotipo_blanco.png'
import WhatsAppButton from './components/wpp/Wpp'

function useBrand() {
  const { pathname } = useLocation()
  const isAcademia = pathname.startsWith('/academia')
  const isProduce  = pathname.startsWith('/produce')

  if (isAcademia) {
    return { id: 'academia', href: '/academia', title: 'Somos Academia', logoSrc: logoAcademia }
  }
  if (isProduce) {
    return { id: 'produce', href: '/produce', title: 'Somos Produce', logoSrc: logoProduce }
  }
  return { id: 'biblioteca', href: '/', title: 'La Biblioteca', logoSrc: logoBiblioteca }
}

export default function App(){
  const brand = useBrand()
  const { pathname } = useLocation()

  useEffect(()=>{
    document.body.setAttribute('data-brand', brand.id)
  },[brand.id])
 useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])
  return (
    <div className="app">
      <header className="site-header">
        <div className="container nav-wrap only-brand">
          <Link to={brand.href} className={`brand brand-${brand.id}`}>
            {brand.logoSrc && (
              <img className="logo-img" src={brand.logoSrc} alt={brand.title}/>
            )}
            {!brand.logoSrc && (
              <span className="brand-text">{brand.title}</span>
            )}
          </Link>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Biblioteca/>} />
          <Route path="/academia" element={<Academia/>} />
          <Route path="/academia/curso/:id" element={<CursoDetalle/>} />
          <Route path="/produce" element={<Produce/>} />
        </Routes>
      </main>
      <WhatsAppButton /> 
      <Footer />
    </div>
  )
}
