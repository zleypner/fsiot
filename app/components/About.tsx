'use client'

import Image from 'next/image'
import { GraduationCap, Hand, Dumbbell, type LucideIcon } from 'lucide-react'

interface Credential {
  icon: LucideIcon
  text: string
}

const credentials: Credential[] = [
  { icon: GraduationCap, text: 'Licenciado en Terapia Física y Rehabilitación' },
  { icon: GraduationCap, text: 'Master en Movimiento Humano y Salud Integral' },
  { icon: Hand, text: 'Masoterapeuta' },
  { icon: Dumbbell, text: 'Instructor de Pesas y Clases Grupales' },
]

export default function About() {
  return (
    <section id="sobre-mi" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Sobre Mí</h2>
          <p className="section-subtitle">Profesional comprometido con tu salud y bienestar</p>
        </div>
        <div className="about-content">
          <div className="about-image">
            <Image
              src="/assets/fisio.jpeg"
              alt="Johan Retana - Terapeuta Físico"
              width={800}
              height={600}
              priority
              quality={100}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="about-text">
            <h3>Johan Retana</h3>
            <div className="credentials">
              {credentials.map((credential, index) => (
                <div key={index} className="credential-item">
                  <span className="credential-icon"><credential.icon size={24} strokeWidth={1.5} /></span>
                  <p>{credential.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
