// Intersection Observer for Scroll Reveal Animations
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1
});

revealElements.forEach(el => revealObserver.observe(el));

// Custom Cursor Glow effect
const glow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', (e) => {
    if (glow) {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    }
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form Submission Handling (Visual feedback)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = contactForm.querySelector('button');
        const originalText = submitBtn.innerText;
        
        submitBtn.innerText = 'Message Sent!';
        submitBtn.style.background = '#10b981';
        
        contactForm.reset();
        
        setTimeout(() => {
            submitBtn.innerText = originalText;
            submitBtn.style.background = '#3b82f6';
        }, 3000);
    });
}

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(12, 15, 23, 0.95)';
        nav.style.padding = '1rem 0';
    } else {
        nav.style.background = 'rgba(12, 15, 23, 0.8)';
        nav.style.padding = '1.5rem 0';
    }
});

// Log for Devs
console.log('%c Systems Online. Portfolio Loaded. ', 'background: #3b82f6; color: #fff; font-weight: bold;');
