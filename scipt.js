(function () {
    'use strict';

    // ── ELEMENTS ──
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const pages = document.querySelectorAll('.page');

    // Gather every navigation link in one list
    const allNavLinks = document.querySelectorAll('[data-nav]');

    // ── NAVIGATE ──
    function navigateTo(id) {
        // 1. Hide every page
        pages.forEach(p => {
            p.classList.remove('active', 'entering');
        });

        // 2. Show target with entrance animation
        const target = document.getElementById('page-' + id);
        if (!target) return;
        target.classList.add('active', 'entering');

        // Remove "entering" class after animation ends so it doesn't replay
        target.addEventListener('animationend', function handler() {
            target.classList.remove('entering');
            target.removeEventListener('animationend', handler);
        });

        // 3. Update active states on every link
        allNavLinks.forEach(a => {
            if (a.getAttribute('data-nav') === id) {
                a.classList.add('active');
            } else {
                a.classList.remove('active');
            }
        });

        // 4. Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // 5. Close mobile menu if open
        closeMobile();

        // 6. Re-observe animations for new page
        setTimeout(observeAnimations, 60);
    }

    // ── LINK CLICKS ──
    allNavLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const id = this.getAttribute('data-nav');
            if (id) navigateTo(id);
        });
    });

    // ── MOBILE MENU ──
    function closeMobile() {
        menuToggle.classList.remove('open');
        mobileMenu.classList.remove('open');
    }

    menuToggle.addEventListener('click', function () {
        this.classList.toggle('open');
        mobileMenu.classList.toggle('open');
    });

    // Close mobile menu if window resizes above breakpoint
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) closeMobile();
    });

    // ── SCROLL EFFECTS ──
    window.addEventListener('scroll', function () {
        if (window.scrollY > 8) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });

    // ── INTERSECTION OBSERVER (scroll animations) ──
    let observer;

    function observeAnimations() {
        // Disconnect old observer if exists
        if (observer) observer.disconnect();

        const items = document.querySelectorAll('.anim-in:not(.show)');
        if (!items.length) return;

        observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -30px 0px'
        });

        items.forEach(function (el) {
            observer.observe(el);
        });
    }

    // ── INIT ──
    observeAnimations();
})();
