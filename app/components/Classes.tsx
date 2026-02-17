'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const classes = [
  { name: 'HIIT', image: '/assets/sincerely-media-wGFibXDQlBI-unsplash.jpg' },
  { name: 'Step', image: '/assets/toralf-thomassen-5S40ixhBK-I-unsplash.jpg' },
  { name: 'Pilates', image: '/assets/rosa-rafael-cJwl8182Mjs-unsplash.jpg' },
  { name: 'Zumba', image: '/assets/1.jpeg' },
  { name: 'Spinning', image: '/assets/WhatsApp Image 2026-02-12 at 14.43.57.jpeg' },
  { name: 'Mini-Bands', image: '/assets/WhatsApp Image 2026-02-12 at 14.48.47.jpeg' },
  { name: 'Baile Popular', image: '/assets/WhatsApp Image 2026-02-12 at 14.48.48.jpeg' },
  { name: 'Cardio-Dance', image: '/assets/sincerely-media-wGFibXDQlBI-unsplash.jpg' },
  { name: 'Strong Nation', image: '/assets/toralf-thomassen-5S40ixhBK-I-unsplash.jpg' },
  { name: 'Cross-Training', image: '/assets/rosa-rafael-cJwl8182Mjs-unsplash.jpg' },
  { name: 'Acondicionamiento Físico', image: '/assets/1.jpeg' },
]

export default function Classes() {
  const classCardsRef = useRef<HTMLDivElement[]>([])

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

    classCardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      classCardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])

  return (
    <section id="clases" className="classes">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Clases Grupales</h2>
          <p className="section-subtitle">Ejercita en grupo y alcanza tus objetivos</p>
        </div>
        <div className="classes-grid">
          {classes.map((classItem, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) classCardsRef.current.push(el)
              }}
              className="class-card"
            >
              <div className="class-image">
                <Image
                  src={classItem.image}
                  alt={classItem.name}
                  width={500}
                  height={350}
                  loading="lazy"
                  quality={100}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h4>{classItem.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
