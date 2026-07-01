// Pitch Deck — EcoVoz Navigation Script

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const total = slides.length;

function updateUI() {
    const fill = ((currentSlide + 1) / total) * 100;
    document.getElementById('progressFill').style.width = fill + '%';
    document.getElementById('slideCounter').textContent = `${currentSlide + 1} / ${total}`;
    document.getElementById('btnPrev').disabled = currentSlide === 0;
    document.getElementById('btnNext').disabled = currentSlide === total - 1;
}

function changeSlide(dir) {
    const next = currentSlide + dir;
    if (next < 0 || next >= total) return;

    const current = slides[currentSlide];
    const target = slides[next];

    current.classList.remove('active');
    current.classList.add(dir > 0 ? 'exit-left' : 'exit-right');

    setTimeout(() => current.classList.remove('exit-left', 'exit-right'), 500);

    target.classList.add('active');
    currentSlide = next;
    updateUI();
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); changeSlide(1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); changeSlide(-1); }
});

// Touch / swipe support
let touchStartX = 0;
document.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; });
document.addEventListener('touchend', (e) => {
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 60) changeSlide(delta > 0 ? 1 : -1);
});

// Initialize
updateUI();
