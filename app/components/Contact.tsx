'use client'

import { useEffect, useRef } from 'react'
import { Mail, MessageCircle, Instagram, type LucideIcon } from 'lucide-react'

interface ContactItem {
  icon: LucideIcon
  title: string
  text: string
  link?: string
}

const contactInfo: ContactItem[] = [
  { icon: Mail, title: 'Email', text: 'johan7v@hotmail.com', link: 'mailto:johan7v@hotmail.com' },
  { icon: MessageCircle, title: 'WhatsApp', text: '+506 8446-6067', link: 'https://wa.me/50684466067' },
  { icon: Instagram, title: 'Instagram', text: 'Abrir perfil', link: 'https://www.instagram.com/fisiotraining.johan?utm_source=qr' },
]

export default function Contact() {
  const contactItemsRef = useRef<HTMLAnchorElement[]>([])

  useEffect(() => {
    const items = contactItemsRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate')
            }, index * 100)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    items.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => {
      items.forEach((item) => {
        if (item) observer.unobserve(item)
      })
    }
  }, [])

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contacto</h2>
          <p className="section-subtitle">Agenda tu cita o consulta</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => {
                  if (el) contactItemsRef.current.push(el)
                }}
                className="contact-item"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="contact-icon"><item.icon size={24} strokeWidth={1.5} /></div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
