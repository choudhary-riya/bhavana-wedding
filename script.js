// =============================================
//  BHAVANA & MAHENDER · Wedding Invite
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
