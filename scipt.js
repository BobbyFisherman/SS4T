// Page navigation
function showPage(page) {
    // Hide all pages
    document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active'));
    // Show target
    document.getElementById('page-' + page).classList.add('active');

    // Update nav links
    document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
        a.classList.remove('active');
        if (a.dataset.page === page) a.classList.add('active');
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Re-trigger fade-in animations
    setTimeout(() => {
        observeFadeIns();
    }, 100);
}

// Mobile menu
function toggleMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const nav = document.getElementById('mobileNav');
    btn.classList.toggle('open');
    nav.classList.toggle('open');
}

function closeMobileMenu() {
    document.querySelector('.mobile-menu-btn').classList.remove('open');
    document.getElementById('mobileNav').classList.remove('open');
}

// Nav scroll effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 10) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Intersection observer for fade-in
function observeFadeIns() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const el = entry.target;
                // Stagger siblings
                const parent = el.parentElement;
                const siblings = Array.from(parent.querySelectorAll('.fade-in'));
                const i = siblings.indexOf(el);
                setTimeout(() => {
                    el.classList.add('visible');
                }, i * 80);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
        observer.observe(el);
    });
}

// Init
observeFadeIns();
