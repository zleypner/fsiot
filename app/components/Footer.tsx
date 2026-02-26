import { Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p>&copy; 2026 Johan Retana - Terapia Física y Rehabilitación. Todos los derechos reservados.</p>
          <a 
            href="https://www.instagram.com/fisiotraining.johan?utm_source=qr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-social-link"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              color: 'inherit', 
              textDecoration: 'none',
              transition: 'opacity 0.3s'
            }}
          >
            <Instagram size={20} />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
