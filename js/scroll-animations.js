/**
 * WebAgency - Animations de Scroll avec GSAP
 * Utilisation de GSAP et ScrollTrigger pour des animations fluides
 * Auteur: WebAgency
 * Date: 2026
 */

// ========================================
// INITIALISATION GSAP
// ========================================

// Vérifier que GSAP est disponible
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    
    // Enregistrer ScrollTrigger comme plugin GSAP
    gsap.registerPlugin(ScrollTrigger);
    
    console.log('GSAP et ScrollTrigger initialisés avec succès!');
    
    // ========================================
    // ANIMATIONS DE SCROLL
    // ========================================
    
    // Animation de fade-in pour les sections
    function initScrollAnimations() {
        
        // Animation des sections au scroll
        const sections = document.querySelectorAll('section');
        
        sections.forEach((section, index) => {
            // Animation d'entrée des sections
            gsap.fromTo(section, 
                {
                    opacity: 0,
                    y: 50
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 95%',
                        end: 'bottom 5%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });
        
        // Animation des cards (services, valeurs, équipe)
        const cards = document.querySelectorAll('.service-card, .value-card, .team-member, .contact-card');
        
        if (cards.length > 0) {
            gsap.fromTo(cards,
                {
                    opacity: 0,
                    y: 30,
                    scale: 0.95
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: cards[0],
                        start: 'top 95%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }
        
        // Animation du hero (page d'accueil)
        const hero = document.querySelector('.hero');
        if (hero) {
            gsap.fromTo(hero.querySelector('.hero-content'),
                {
                    opacity: 0,
                    x: -50
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: hero,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
            
            gsap.fromTo(hero.querySelector('.hero-image'),
                {
                    opacity: 0,
                    x: 50
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    delay: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: hero,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }
        
        // Animation de la navigation au scroll
        const header = document.querySelector('header');
        if (header) {
            gsap.fromTo(header,
                {
                    y: -100
                },
                {
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: 'body',
                        start: 'top -100',
                        end: 'top 0',
                        scrub: 1
                    }
                }
            );
        }
        
        // Animation des textes avec défilement parallèle
        const textElements = document.querySelectorAll('h1, h2, h3, .service-card h3, .value-card h3');
        
        textElements.forEach((element, index) => {
            gsap.fromTo(element,
                {
                    opacity: 0,
                    y: 20
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 95%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });
        
        // Animation des images avec effet de parallaxe subtile
        const images = document.querySelectorAll('img');
        
        images.forEach((img) => {
            gsap.fromTo(img,
                {
                    opacity: 0,
                    scale: 0.9
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: img,
                        start: 'top 95%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
            
            // Effet de parallaxe subtile
            gsap.to(img, {
                yPercent: -10,
                ease: "none",
                scrollTrigger: {
                    trigger: img.parentElement,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1
                }
            });
        });
        
        // Animation du footer
        const footer = document.querySelector('footer');
        if (footer) {
            gsap.fromTo(footer,
                {
                    opacity: 0,
                    y: 50
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: footer,
                        start: 'top 95%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }
        
        // Animation des éléments du formulaire
        const formElements = document.querySelectorAll('.form-group, .form-container h3');
        
        if (formElements.length > 0) {
            gsap.fromTo(formElements,
                {
                    opacity: 0,
                    x: -30
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: '.form-container',
                        start: 'top 95%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }
        
        console.log('Animations de scroll GSAP configurées avec succès!');
    }
    
} else {
    console.warn('GSAP ou ScrollTrigger non disponible. Les animations de scroll ne seront pas activées.');
}

// ========================================
// ANIMATIONS AU SURVOL (HOVER)
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Animation des boutons au survol
    const buttons = document.querySelectorAll('.btn-primary, .btn-submit');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (typeof gsap !== 'undefined') {
                gsap.to(this, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        });
        
        button.addEventListener('mouseleave', function() {
            if (typeof gsap !== 'undefined') {
                gsap.to(this, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        });
    });
    
    // Animation des cards au survol
    const cards = document.querySelectorAll('.service-card, .value-card, .team-member');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (typeof gsap !== 'undefined') {
                gsap.to(this, {
                    y: -10,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (typeof gsap !== 'undefined') {
                gsap.to(this, {
                    y: 0,
                    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        });
    });
    
    // Animation des liens de navigation
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            if (typeof gsap !== 'undefined') {
                gsap.to(this, {
                    scale: 1.1,
                    duration: 0.2,
                    ease: "power2.out"
                });
            }
        });
        
        link.addEventListener('mouseleave', function() {
            if (typeof gsap !== 'undefined') {
                gsap.to(this, {
                    scale: 1,
                    duration: 0.2,
                    ease: "power2.out"
                });
            }
        });
    });
});

// ========================================
// UTILITAIRES
// ========================================

/**
 * Défilement fluide vers un élément
 */
function smoothScrollTo(element) {
    if (typeof gsap !== 'undefined') {
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: element,
                offsetY: 80
            },
            ease: "power2.inOut"
        });
    } else {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Attacher la fonction aux liens de navigation
if (typeof gsap !== 'undefined' && typeof ScrollToPlugin !== 'undefined') {
    gsap.registerPlugin(ScrollToPlugin);
    
    document.addEventListener('DOMContentLoaded', function() {
        const smoothLinks = document.querySelectorAll('a[href^="#"]');
        
        smoothLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    smoothScrollTo(targetElement);
                }
            });
        });
    });
}

console.log('Animations de scroll et interactions GSAP chargées avec succès!');