// src/components/WhatsAppButton.jsx
export default function WhatsAppButton() {
  const phone = "5491137599619"
  const message = "Hola, quiero más información" 

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/images/wpp.png"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  )
}
