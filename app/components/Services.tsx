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
  MessageCircle,
  type LucideIcon
} from 'lucide-react'

const groupClassesServices = [
  { name: 'HIIT', description: 'Entrenamiento de intervalos de alta intensidad que alterna ejercicios explosivos con descansos cortos para maximizar la quema de calorías.' },
  { name: 'Step', description: 'Ejercicios aeróbicos con plataforma que mejoran la coordinación, resistencia y tonifican piernas y glúteos.' },
  { name: 'Pilates', description: 'Método de ejercicios que fortalece el core, mejora la postura y aumenta la flexibilidad corporal.' },
  { name: 'Zumba', description: 'Clase de baile con ritmos latinos que mejora el cardio y quema calorías de forma divertida.' },
  { name: 'Spinning', description: 'Entrenamiento en bicicleta fija que fortalece piernas, mejora la resistencia cardiovascular y ayuda a quemar grasa.' },
  { name: 'Mini-Bands', description: 'Ejercicios con bandas elásticas para fortalecer músculos, mejorar estabilidad y prevenir lesiones.' },
  { name: 'Baile Popular', description: 'Clases de baile con ritmos populares que mejoran la coordinación, el ritmo y la expresión corporal.' },
  { name: 'Strong Nation', description: 'Entrenamiento de alta intensidad sincronizado con música, enfocado en fuerza, resistencia y potencia.' },
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

const therapyGalleryImages = [
  { name: 'Terapia Física', image: '/assets/sincerely-media-wGFibXDQlBI-unsplash.jpg' },
  { name: 'Consultorio', image: '/assets/Terapia.jpeg' },
  { name: 'Rehabilitación', image: '/assets/toralf-thomassen-5S40ixhBK-I-unsplash.jpg' },
]

const classesGalleryImages = [
  { name: 'Mini-Bands', image: '/assets/WhatsApp Image 2026-02-12 at 14.48.47.jpeg' },
  { name: 'Zumba', image: '/assets/Zumba.jpeg' },
  { name: 'Strong Nation', image: '/assets/STRONG NATION.jpeg' },
  { name: 'Entrenamiento', image: '/assets/1.jpeg' },
]

export default function Services() {
  const serviceCardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const cards = serviceCardsRef.current
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
          <div className="classes-grid">
            {therapyGalleryImages.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) serviceCardsRef.current.push(el)
                }}
                className="class-card"
              >
                <div className="class-image">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={500}
                    height={350}
                    loading="lazy"
                    quality={100}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>
            ))}
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
          <div className="cta-section">
            <a href="https://wa.me/50684466067" target="_blank" rel="noopener noreferrer" className="cta-whatsapp">
              <MessageCircle size={24} />
              <span>Agenda tu cita por WhatsApp</span>
            </a>
          </div>
        </div>

        <div id="clases-grupales" className="service-category">
          <h3 className="category-title">Clases Grupales</h3>
          <div className="classes-grid">
            {classesGalleryImages.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) serviceCardsRef.current.push(el)
                }}
                className="class-card"
              >
                <div className="class-image">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={500}
                    height={350}
                    loading="lazy"
                    quality={100}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="classes-intro">Entrená en grupo, mantené la motivación y mejorá tu condición física de forma guiada y dinámica.</p>
          <div className="service-grid">
            {groupClassesServices.map((classItem, index) => (
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
          <div className="cta-section">
            <a href="https://wa.me/50684466067" target="_blank" rel="noopener noreferrer" className="cta-whatsapp">
              <MessageCircle size={24} />
              <span>Reserva tu clase por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
