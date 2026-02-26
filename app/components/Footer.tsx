import { Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <p>&copy; 2026 Fisio Training. Todos los derechos reservados.</p>
          </div>
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
        <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.85rem', opacity: 0.7 }}>
          <a
            href="https://www.yieldge.com/cr"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            Desarrollado por Yieldge
          </a>
        </div>
      </div>
    </footer>
  )
}
