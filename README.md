# Johan Retana - Terapia Física y Rehabilitación

Sitio web profesional para servicios de terapia física, rehabilitación, masajes y clases grupales. Construido con Next.js 14, React 18 y TypeScript.

## 🚀 Características

- ⚡ **Next.js 14** con App Router
- 🎨 **Animaciones optimizadas** con GPU acceleration
- 📱 **100% Responsive** para todos los dispositivos
- 🖼️ **Optimización de imágenes** con Next.js Image
- ⚡ **Lazy loading** para mejor rendimiento
- ♿ **Accesibilidad** con soporte para prefers-reduced-motion
- 🎯 **SEO optimizado** con metadata de Next.js

## 📋 Requisitos Previos

- Node.js 18.17 o superior
- npm, yarn o pnpm

## 🛠️ Instalación

1. Instala las dependencias:

```bash
npm install
# o
yarn install
# o
pnpm install
```

2. Asegúrate de que las imágenes estén en `public/assets/`:
   - fisio.jpeg
   - sincerely-media-wGFibXDQlBI-unsplash.jpg
   - toralf-thomassen-5S40ixhBK-I-unsplash.jpg
   - rosa-rafael-cJwl8182Mjs-unsplash.jpg
   - 1.jpeg
   - WhatsApp Image 2026-02-12 at 14.43.57.jpeg
   - WhatsApp Image 2026-02-12 at 14.48.47.jpeg
   - WhatsApp Image 2026-02-12 at 14.48.48.jpeg

## 🚀 Desarrollo

Ejecuta el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📦 Build para Producción

```bash
npm run build
npm start
```

## 📁 Estructura del Proyecto

```
fsiot/
├── app/
│   ├── components/          # Componentes React
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Classes.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── ScrollProgress.tsx
│   │   └── BackToTop.tsx
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales
├── public/
│   └── assets/             # Imágenes y recursos estáticos
├── next.config.js          # Configuración de Next.js
├── tsconfig.json          # Configuración de TypeScript
└── package.json           # Dependencias del proyecto
```

## 🎨 Componentes Principales

- **Navigation**: Navegación fija con menú móvil
- **Hero**: Sección hero con animaciones
- **About**: Información sobre Johan Retana y credenciales
- **Services**: Servicios de masajes y terapia física
- **Classes**: Clases grupales disponibles
- **Contact**: Formulario de contacto
- **Footer**: Pie de página
- **ScrollProgress**: Indicador de progreso de scroll
- **BackToTop**: Botón para volver arriba

## ⚡ Optimizaciones

- **Lazy Loading**: Imágenes cargadas bajo demanda
- **GPU Acceleration**: Animaciones optimizadas con transform
- **Code Splitting**: Automático con Next.js
- **Image Optimization**: Next.js Image component
- **Font Optimization**: Inter font con next/font

## 📱 Responsive Design

El sitio está completamente optimizado para:
- Desktop (1400px+)
- Laptop (992px - 1399px)
- Tablet (768px - 991px)
- Mobile (576px - 767px)
- Small Mobile (hasta 575px)

## 🌐 Despliegue

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Otros servicios

El proyecto puede desplegarse en cualquier servicio que soporte Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📝 Licencia

Todos los derechos reservados © 2026 Johan Retana

## 🤝 Soporte

Para preguntas o soporte, contacta a través del formulario en el sitio web.
