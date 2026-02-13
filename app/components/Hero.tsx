'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Terapia Física y Rehabilitación</h1>
          <p className="hero-subtitle">Bienestar integral para tu cuerpo y mente</p>
          <Link href="#contacto" className="btn btn-primary">
            Contáctame
          </Link>
        </div>
      </div>
    </section>
  )
}
