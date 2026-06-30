/* =============================================
   Infográfico: Letramento Digital de Matuê
   Interações e Scroll Reveal Animations
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    // ---- Scroll Reveal observer ----
    const reveals = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Deixa de observar o elemento depois de revelá-lo
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => revealObserver.observe(el));

});
