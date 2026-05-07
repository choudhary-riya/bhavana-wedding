// =============================================
//  BHAVANA & MAHENDER WEDDING INVITE
//  script.js — Countdown + Petals
// =============================================

// --- COUNTDOWN TIMER ---
const weddingDate = new Date('2026-07-01T13:51:00+05:30');

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    document.getElementById('cd-days').textContent  = '🎉';
    document.getElementById('cd-hours').textContent = '🎉';
    document.getElementById('cd-mins').textContent  = '🎉';
    document.getElementById('cd-secs').textContent  = '🎉';
    return;
  }

  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('cd-days').textContent  = String(days).padStart(2, '0');
  document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('cd-mins').textContent  = String(minutes).padStart(2, '0');
  document.getElementById('cd-secs').textContent  = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);


// --- FLOATING PETALS ---
const petalEmojis = ['🌸', '🌺', '✿', '🏵️', '🌼'];
const container   = document.getElementById('petals');

function createPetal() {
  const petal = document.createElement('span');
  petal.className   = 'petal';
  petal.textContent = petalEmojis[Math.floor(Math.random() * petalEmojis.length)];

  const left     = Math.random() * 100;
  const duration = 8 + Math.random() * 10;
  const delay    = Math.random() * 6;
  const size     = 0.7 + Math.random() * 0.8;

  petal.style.cssText = `
    left: ${left}%;
    font-size: ${size}rem;
    animation-duration: ${duration}s;
    animation-delay: ${delay}s;
  `;

  container.appendChild(petal);

  setTimeout(() => petal.remove(), (duration + delay) * 1000);
}

// Spawn petals periodically
for (let i = 0; i < 12; i++) createPetal();
setInterval(createPetal, 1200);


// --- SCROLL FADE-IN ANIMATION ---
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity    = '1';
      entry.target.style.transform  = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.event-card, .person-card').forEach(el => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  observer.observe(el);
});
