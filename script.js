// Performance optimization: Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Utility: Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Utility: Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Smooth Scrolling with reduced motion support
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: prefersReducedMotion ? 'auto' : 'smooth'
            });
        }
    });
});

// Navbar Background on Scroll - Optimized with requestAnimationFrame
const navbar = document.querySelector('.navbar');
let lastScroll = 0;
let ticking = false;

const updateNavbar = () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        navbar.style.backdropFilter = 'blur(15px)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
    
    // Hide/show navbar on scroll (only if not reduced motion)
    if (!prefersReducedMotion) {
        if (currentScroll > lastScroll && currentScroll > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
    }
    
    lastScroll = currentScroll;
    ticking = false;
};

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
    }
}, { passive: true });

// Active Navigation Link - Optimized
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const highlightNav = throttle(() => {
    const scrollY = window.pageYOffset + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, 100);

window.addEventListener('scroll', highlightNav, { passive: true });

// Contact Form Handler
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.textContent = '✓ Enviado';
            submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            submitBtn.style.color = 'white';
            
            const successMsg = document.createElement('div');
            successMsg.textContent = `¡Gracias ${name}! Tu mensaje ha sido enviado. Te contactaremos pronto.`;
            successMsg.className = 'success-message';
            successMsg.style.cssText = `
                position: fixed;
                top: 100px;
                right: 20px;
                background: linear-gradient(135deg, #10b981, #059669);
                color: white;
                padding: 1.5rem 2rem;
                border-radius: 12px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
                z-index: 10000;
                max-width: 300px;
                transform: translateX(100%);
                transition: transform 0.3s ease;
            `;
            document.body.appendChild(successMsg);
            
            requestAnimationFrame(() => {
                successMsg.style.transform = 'translateX(0)';
            });
            
            setTimeout(() => {
                successMsg.style.transform = 'translateX(100%)';
                setTimeout(() => successMsg.remove(), 300);
            }, 5000);
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
                submitBtn.style.color = '';
                submitBtn.disabled = false;
                contactForm.reset();
            }, 2000);
        }, 1000);
    });
}

// Advanced Lazy Loading for Images with Intersection Observer
const lazyImageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            const dataSrc = img.getAttribute('data-src');
            
            if (dataSrc) {
                // Create a new image to preload
                const imageLoader = new Image();
                imageLoader.src = dataSrc;
                
                imageLoader.onload = () => {
                    img.src = dataSrc;
                    img.classList.add('loaded');
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                };
                
                imageLoader.onerror = () => {
                    img.classList.add('error');
                    observer.unobserve(img);
                };
            } else {
                // Image already has src, just add loaded class
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        }
    });
}, {
    rootMargin: '50px',
    threshold: 0.01
});

// Observe all images with lazy loading
document.querySelectorAll('img[loading="lazy"], img[data-src]').forEach(img => {
    // Add placeholder blur effect
    if (!img.src && img.getAttribute('data-src')) {
        img.style.filter = 'blur(5px)';
        img.style.transition = 'filter 0.3s ease';
    }
    lazyImageObserver.observe(img);
});

// Intersection Observer for Animations - Optimized
const animationObserverOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Only animate if user doesn't prefer reduced motion
            if (!prefersReducedMotion) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 50); // Reduced stagger delay for better performance
            } else {
                entry.target.classList.add('animate');
            }
            animationObserver.unobserve(entry.target);
        }
    });
}, animationObserverOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .class-card').forEach(card => {
    animationObserver.observe(card);
});

document.querySelectorAll('.credential-item, .contact-item').forEach((item, index) => {
    if (!prefersReducedMotion) {
        item.style.transitionDelay = `${index * 0.05}s`;
    }
    animationObserver.observe(item);
});

// Parallax Effect for Hero Section - Optimized and conditional
const hero = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');

if (hero && heroContent && !prefersReducedMotion) {
    const updateParallax = throttle(() => {
        const scrolled = window.pageYOffset;
        if (scrolled < window.innerHeight) {
            const parallaxValue = scrolled * 0.3;
            heroContent.style.transform = `translate3d(0, ${parallaxValue}px, 0)`;
            heroContent.style.opacity = Math.max(0.5, 1 - (scrolled / window.innerHeight) * 0.5);
        }
    }, 16);
    
    window.addEventListener('scroll', updateParallax, { passive: true });
}

// Ripple effect for buttons - Only on non-touch devices
if (window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                left: ${x}px;
                top: ${y}px;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
    }
    .nav-link.active::after {
        width: 100%;
    }
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    img[data-src] {
        opacity: 0;
        transition: opacity 0.3s ease, filter 0.3s ease;
    }
    img.loaded {
        opacity: 1;
        filter: blur(0);
    }
    img.error {
        opacity: 0.5;
    }
`;
document.head.appendChild(style);

// 3D Card Effect - Only on hover-capable devices
if (window.matchMedia('(hover: hover)').matches && !prefersReducedMotion) {
    document.querySelectorAll('.service-card, .class-card').forEach(card => {
        let isHovering = false;
        
        const handleMouseMove = throttle((e) => {
            if (!isHovering) return;
            
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const moveX = (x - centerX) / 15;
            const moveY = (y - centerY) / 15;
            
            card.style.transform = `perspective(1000px) rotateY(${moveX}deg) rotateX(${-moveY}deg) translateZ(10px)`;
        }, 16);
        
        card.addEventListener('mouseenter', () => {
            isHovering = true;
        });
        
        card.addEventListener('mousemove', handleMouseMove);
        
        card.addEventListener('mouseleave', () => {
            isHovering = false;
            card.style.transform = '';
        });
    });
}

// Scroll Progress Indicator - Optimized
const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress';
scrollProgress.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    z-index: 10000;
    transform-origin: left;
    width: 100%;
    transform: scaleX(0);
    transition: transform 0.1s ease;
`;
document.body.appendChild(scrollProgress);

const updateScrollProgress = throttle(() => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = windowHeight > 0 ? (window.pageYOffset / windowHeight) * 100 : 0;
    scrollProgress.style.transform = `scaleX(${scrolled / 100})`;
}, 16);

window.addEventListener('scroll', updateScrollProgress, { passive: true });

// Back to Top Button
const backToTop = document.createElement('div');
backToTop.className = 'back-to-top';
backToTop.innerHTML = '↑';
backToTop.setAttribute('aria-label', 'Volver arriba');
backToTop.setAttribute('role', 'button');
backToTop.setAttribute('tabindex', '0');
document.body.appendChild(backToTop);

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
});

backToTop.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });
    }
});

const updateBackToTop = throttle(() => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}, 100);

window.addEventListener('scroll', updateBackToTop, { passive: true });

// Smooth reveal for sections - Only if not reduced motion
if (!prefersReducedMotion) {
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                sectionObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        sectionObserver.observe(section);
    });
}

// Cleanup will-change after animations complete
setTimeout(() => {
    document.querySelectorAll('[style*="will-change"]').forEach(el => {
        el.style.willChange = 'auto';
    });
}, 3000);

// Performance: Preload critical images
if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
        const criticalImages = document.querySelectorAll('img[src]:not([loading="lazy"])');
        criticalImages.forEach(img => {
            if (img.complete) {
                img.classList.add('loaded');
            } else {
                img.addEventListener('load', () => {
                    img.classList.add('loaded');
                });
            }
        });
    });
}

console.log('Website optimized and loaded! 🚀');
