// =============================================
//  BHAVANA & MAHENDER · Premium Wedding Invite
//  script.js
// =============================================

// --- COUNTDOWN TIMER ---
const weddingDate = new Date('2026-07-01T13:51:00+05:30');

function updateCountdown() {
  const diff = weddingDate - new Date();

  if (diff <= 0) {
    ['cd-days','cd-hours','cd-mins','cd-secs'].forEach(id =>
      document.getElementById(id).textContent = '00'
    );
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


// --- FLOATING SVG PETALS (Marigold + Lotus) ---
const SVG_NS = 'http://www.w3.org/2000/svg';
const container = document.getElementById('petals');

// Two SVG petal designs — marigold orange and lotus pink/gold
const petalDesigns = [
  // Marigold (gold/orange)
  `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
     <g fill="#d4a346" stroke="#a17e1a" stroke-width="0.4" opacity="0.85">
       <ellipse cx="10" cy="10" rx="3" ry="6" transform="rotate(0 10 10)"/>
       <ellipse cx="10" cy="10" rx="3" ry="6" transform="rotate(45 10 10)"/>
       <ellipse cx="10" cy="10" rx="3" ry="6" transform="rotate(90 10 10)"/>
       <ellipse cx="10" cy="10" rx="3" ry="6" transform="rotate(135 10 10)"/>
       <circle cx="10" cy="10" r="2" fill="#8b1a1a"/>
     </g>
   </svg>`,
  // Lotus petal (rose/maroon)
  `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
     <g fill="#c2185b" stroke="#6b0f1a" stroke-width="0.4" opacity="0.75">
       <path d="M10 2 Q14 8 10 18 Q6 8 10 2 Z"/>
       <path d="M10 2 Q12 8 10 16 Q8 8 10 2 Z" fill="#e8c87a" opacity="0.5"/>
     </g>
   </svg>`,
  // Small flower (gold)
  `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
     <g fill="#e8c87a" stroke="#a17e1a" stroke-width="0.3" opacity="0.8">
       <circle cx="10" cy="5"  r="2.5"/>
       <circle cx="15" cy="10" r="2.5"/>
       <circle cx="10" cy="15" r="2.5"/>
       <circle cx="5"  cy="10" r="2.5"/>
       <circle cx="10" cy="10" r="2" fill="#8b1a1a"/>
     </g>
   </svg>`
];

function createPetal() {
  const wrapper = document.createElement('div');
  wrapper.className = 'petal-svg';
  wrapper.innerHTML = petalDesigns[Math.floor(Math.random() * petalDesigns.length)];

  const left     = Math.random() * 100;
  const duration = 9 + Math.random() * 11;
  const delay    = Math.random() * 5;
  const size     = 12 + Math.random() * 14;

  wrapper.style.cssText = `
    left: ${left}%;
    width: ${size}px;
    height: ${size}px;
    animation-duration: ${duration}s;
    animation-delay: ${delay}s;
  `;

  container.appendChild(wrapper);
  setTimeout(() => wrapper.remove(), (duration + delay) * 1000);
}

for (let i = 0; i < 10; i++) createPetal();
setInterval(createPetal, 1400);


// --- SCROLL FADE-IN ANIMATION ---
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity   = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.event-card, .person-card').forEach(el => {
  el.style.opacity    = '0';
  el.style.transform  = 'translateY(28px)';
  el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  observer.observe(el);
});
