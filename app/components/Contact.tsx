'use client'

import { useState, useEffect, useRef } from 'react'
import { Mail, Phone, MapPin, Check, MessageCircle, type LucideIcon } from 'lucide-react'

interface ContactItem {
  icon: LucideIcon
  title: string
  text: string
  link?: string
}

const contactInfo: ContactItem[] = [
  { icon: Mail, title: 'Email', text: 'johan7v@hotmail.com', link: 'mailto:johan7v@hotmail.com' },
  { icon: MessageCircle, title: 'WhatsApp', text: '8446-6067', link: 'https://wa.me/50684466067' },
  { icon: Phone, title: 'Teléfono', text: '8446-6067' },
  { icon: MapPin, title: 'Ubicación', text: 'Costa Rica' },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const contactItemsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
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

    contactItemsRef.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => {
      contactItemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item)
      })
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success')
      setIsSubmitting(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
      
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
              <div
                key={index}
                ref={(el) => {
                  if (el) contactItemsRef.current.push(el)
                }}
                className="contact-item"
              >
                <div className="contact-icon"><item.icon size={24} strokeWidth={1.5} /></div>
                <div>
                  <h4>{item.title}</h4>
                  {item.link ? (
                    <p><a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>{item.text}</a></p>
                  ) : (
                    <p>{item.text}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nombre completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Teléfono"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Mensaje"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? 'Enviando...'
                  : submitStatus === 'success'
                  ? <><Check size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Enviado</>

                  : 'Enviar Mensaje'}
              </button>
              {submitStatus === 'success' && (
                <div style={{ marginTop: '1rem', color: '#10b981', fontWeight: 500 }}>
                  ¡Gracias! Tu mensaje ha sido enviado. Te contactaremos pronto.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
