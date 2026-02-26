'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import {
  Droplets,
  Leaf,
  PersonStanding,
  Baby,
  Stethoscope,
  Target,
  Briefcase,
  Users,
  Brain,
  Dumbbell,
  Building2,
  type LucideIcon
} from 'lucide-react'

const classesData = [
  { name: 'HIIT', description: 'Entrenamiento de alta intensidad que combina fuerza y cardio para quemar calorías y mejorar la resistencia en menos tiempo.', image: '/assets/sincerely-media-wGFibXDQlBI-unsplash.jpg' },
  { name: 'Step', description: 'Clase cardiovascular con plataforma que mejora coordinación, resistencia y tonificación de piernas de forma dinámica.', image: '/assets/toralf-thomassen-5S40ixhBK-I-unsplash.jpg' },
  { name: 'Pilates', description: 'Entrenamiento de bajo impacto enfocado en fortalecer el core, mejorar la postura y el control corporal.', image: '/assets/rosa-rafael-cJwl8182Mjs-unsplash.jpg' },
  { name: 'Zumba', description: 'Clase de baile con ritmos latinos que mejora el cardio y quema calorías de forma divertida.', image: '/assets/Zumba.jpeg' },
  { name: 'Spinning', description: 'Entrenamiento en bicicleta fija que fortalece piernas, mejora la resistencia cardiovascular y ayuda a quemar grasa.', image: '/assets/WhatsApp Image 2026-02-12 at 14.43.57.jpeg' },
  { name: 'Mini-Bands', description: 'Ejercicios con bandas elásticas para fortalecer músculos, mejorar estabilidad y prevenir lesiones.', image: '/assets/WhatsApp Image 2026-02-12 at 14.48.47.jpeg' },
  { name: 'Baile Popular', description: 'Clases de baile con ritmos conocidos que mejoran coordinación, energía y disfrute del movimiento.', image: '/assets/1.jpeg' },
  { name: 'Cardio-Dance', description: 'Combinación de baile y cardio que eleva el ritmo cardíaco mientras entrenás de forma entretenida.', image: '/assets/fisio.jpeg' },
  { name: 'Strong Nation', description: 'Entrenamiento de alta intensidad sincronizado con música, enfocado en fuerza, resistencia y potencia.', image: '/assets/STRONG%20NATION.jpeg' },
  { name: 'Cross-Training', description: 'Rutinas variadas que combinan fuerza, cardio y ejercicios funcionales para mejorar el rendimiento general.', image: '/assets/Entrenador.jpeg' },
  { name: 'Acondicionamiento Físico', description: 'Entrenamiento integral para mejorar fuerza, resistencia, movilidad y condición física general.', image: '/assets/acondicionamiento-fisico.png' },
]

interface Service {
  icon: LucideIcon
  title: string
  description: string
}

const massageServices: Service[] = [
  { icon: Droplets, title: 'Linfático', description: 'Estimula el sistema linfático para eliminar toxinas y reducir la retención de líquidos.' },
  { icon: Leaf, title: 'Relajante', description: 'Alivia el estrés y la tensión muscular, promoviendo un estado de relajación profunda.' },
  { icon: PersonStanding, title: 'Deportivo', description: 'Preparación y recuperación muscular para atletas y personas activas.' },
  { icon: Baby, title: 'Embarazo', description: 'Masaje especializado para aliviar molestias durante el embarazo.' },
  { icon: Stethoscope, title: 'Terapéutico', description: 'Tratamiento dirigido a condiciones específicas y lesiones.' },
  { icon: Target, title: 'Descontracturante', description: 'Liberación de contracturas y puntos de tensión muscular.' },
]

const therapyServices: Service[] = [
  { icon: Briefcase, title: 'Laboral', description: 'Prevención y tratamiento de lesiones relacionadas con el trabajo.' },
  { icon: Users, title: 'Adulto Mayor', description: 'Atención especializada para mantener la movilidad y calidad de vida.' },
  { icon: Brain, title: 'Derrame Cerebral', description: 'Rehabilitación neurológica para recuperación funcional.' },
  { icon: Dumbbell, title: 'Lesiones Deportivas', description: 'Tratamiento y recuperación de lesiones relacionadas con el deporte.' },
  { icon: Building2, title: 'Rehabilitación Postoperatoria', description: 'Recuperación guiada después de procedimientos quirúrgicos.' },
]

export default function Services() {
  const serviceCardsRef = useRef<HTMLDivElement[]>([])
  const classCardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const cards = [...serviceCardsRef.current, ...classCardsRef.current]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate')
            }, index * 50)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    cards.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      cards.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])

  return (
    <section id="servicios" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Servicios</h2>
          <p className="section-subtitle">Soluciones integrales para tu salud</p>
        </div>
        <div className="service-category">
          <h3 className="category-title">Masaje y Terapia Física</h3>
          <div className="therapy-section-images-row">
            <div className="therapy-section-image-box">
              <Image
                src="/assets/Terapia%20f%C3%ADsica%20y%20masajes.jpeg"
                alt="Consultorio de terapia física"
                width={600}
                height={450}
                className="therapy-section-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              />
            </div>
          </div>
          <h4 className="category-subtitle">Masaje</h4>
          <div className="service-grid">
            {massageServices.map((service, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) serviceCardsRef.current.push(el)
                }}
                className="service-card"
              >
                <div className="service-icon"><service.icon size={32} strokeWidth={1.5} /></div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
          <h4 className="category-subtitle">Terapia Física</h4>
          <div className="service-grid">
            {therapyServices.map((service, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) serviceCardsRef.current.push(el)
                }}
                className="service-card"
              >
                <div className="service-icon"><service.icon size={32} strokeWidth={1.5} /></div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="clases-grupales" className="service-category">
          <h3 className="category-title">Clases Grupales</h3>
          <p className="classes-intro">Entrená en grupo, mantené la motivación y mejorá tu condición física de forma guiada y dinámica.</p>
          <div className="service-grid">
            {classesData.map((classItem, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) serviceCardsRef.current.push(el)
                }}
                className="service-card"
              >
                <div className="service-icon"><Dumbbell size={32} strokeWidth={1.5} /></div>
                <h4>{classItem.name}</h4>
                <p>{classItem.description}</p>
              </div>
            ))}
          </div>
          <h4 className="classes-gallery-title">Galería</h4>
          <div className="classes-grid">
            {classesData.map((classItem, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) classCardsRef.current.push(el)
                }}
                className={`class-card ${classItem.name === 'Acondicionamiento Físico' ? 'class-card--full-image' : ''}`}
              >
                <div className="class-image">
                  <Image
                    src={classItem.image}
                    alt={classItem.name}
                    width={500}
                    height={350}
                    loading="lazy"
                    quality={100}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: classItem.name === 'Acondicionamiento Físico' ? 'contain' : 'cover',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
