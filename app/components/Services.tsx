'use client'

import { useEffect, useRef } from 'react'

const massageServices = [
  { icon: '💆', title: 'Linfático', description: 'Estimula el sistema linfático para eliminar toxinas y reducir la retención de líquidos.' },
  { icon: '🌿', title: 'Relajante', description: 'Alivia el estrés y la tensión muscular, promoviendo un estado de relajación profunda.' },
  { icon: '🏃', title: 'Deportivo', description: 'Preparación y recuperación muscular para atletas y personas activas.' },
  { icon: '🤰', title: 'Embarazo', description: 'Masaje especializado para aliviar molestias durante el embarazo.' },
  { icon: '⚕️', title: 'Terapéutico', description: 'Tratamiento dirigido a condiciones específicas y lesiones.' },
  { icon: '🎯', title: 'Descontracturante', description: 'Liberación de contracturas y puntos de tensión muscular.' },
]

const therapyServices = [
  { icon: '💼', title: 'Laboral', description: 'Prevención y tratamiento de lesiones relacionadas con el trabajo.' },
  { icon: '👴', title: 'Adulto Mayor', description: 'Atención especializada para mantener la movilidad y calidad de vida.' },
  { icon: '🧠', title: 'Derrame Cerebral', description: 'Rehabilitación neurológica para recuperación funcional.' },
  { icon: '⚽', title: 'Lesiones Deportivas', description: 'Tratamiento y recuperación de lesiones relacionadas con el deporte.' },
  { icon: '🏥', title: 'Rehabilitación Postoperatoria', description: 'Recuperación guiada después de procedimientos quirúrgicos.' },
]

export default function Services() {
  const serviceCardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
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

    serviceCardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      serviceCardsRef.current.forEach((card) => {
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
          <h3 className="category-title">Masaje</h3>
          <div className="service-grid">
            {massageServices.map((service, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) serviceCardsRef.current.push(el)
                }}
                className="service-card"
              >
                <div className="service-icon">{service.icon}</div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="service-category">
          <h3 className="category-title">Terapia Física</h3>
          <div className="service-grid">
            {therapyServices.map((service, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) serviceCardsRef.current.push(el)
                }}
                className="service-card"
              >
                <div className="service-icon">{service.icon}</div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
