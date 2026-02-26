'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section id="inicio" className="hero-split">
      <Link href="#servicios" className="hero-split-panel hero-split-panel--terapia" aria-label="Ver servicios de terapia">
        <div className="hero-split-overlay hero-split-overlay--terapia" />
        <div className="hero-split-content">
          <h1 className="hero-split-title">Terapia Física y Rehabilitación</h1>
          <p className="hero-split-subtitle">Bienestar integral para tu cuerpo y mente</p>
          <span className="hero-split-cta">Ver servicios de terapia</span>
        </div>
      </Link>
      <Link href="#clases-grupales" className="hero-split-panel hero-split-panel--entrenamiento" aria-label="Ver entrenamientos">
        <div className="hero-split-overlay hero-split-overlay--entrenamiento" />
        <div className="hero-split-content">
          <h1 className="hero-split-title">Entrenamiento Personal y Clases Grupales</h1>
          <p className="hero-split-subtitle">Fuerza, movimiento y resultados reales</p>
          <span className="hero-split-cta">Ver entrenamientos</span>
        </div>
      </Link>
    </section>
  )
}
