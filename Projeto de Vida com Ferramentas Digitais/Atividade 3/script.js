/* =============================================
   Marketing Pessoal — Marentropico
   Script: progress bar + scroll reveal
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    // ---- Barra de progresso de leitura ----
    const bar = document.getElementById('readProgress');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        if (bar) bar.style.width = pct + '%';
    }, { passive: true });

    // ---- Scroll Reveal ----
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    reveals.forEach(el => observer.observe(el));

    // ---- Smooth scroll para links âncora ----
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

});
