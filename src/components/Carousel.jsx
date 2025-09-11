
import { useEffect, useRef, useState } from 'react'

export default function Carousel({ images = [], auto = true, interval = 4500 }){
  const [idx, setIdx] = useState(0)
  const trackRef = useRef(null)

  useEffect(()=>{
    if(!auto) return
    const id = setInterval(()=> setIdx(i => (i+1)%images.length), interval)
    return ()=> clearInterval(id)
  },[auto, interval, images.length])

  useEffect(()=>{
    if(trackRef.current){
      trackRef.current.style.transform = `translateX(-${idx*100}%)`
    }
  },[idx])

  if(images.length === 0) return null

  return (
    <div className="carousel">
      <button className="carousel-prev" onClick={()=> setIdx(i => (i-1+images.length)%images.length)}>‹</button>
      <div className="carousel-track" ref={trackRef}>
        {images.map((src,i)=>(
          <img key={i} src={src} alt={`slide-${i}`} />
        ))}
      </div>
      <button className="carousel-next" onClick={()=> setIdx(i => (i+1)%images.length)}>›</button>
    </div>
  )
}
