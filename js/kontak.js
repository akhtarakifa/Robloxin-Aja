const form = document.getElementById('contactForm');
const button = document.querySelector('.submit-btn');

form.addEventListener('input', () => {
  if (form.checkValidity()) {
    button.disabled = false;
    button.classList.add('active');
  } else {
    button.disabled = true;
    button.classList.remove('active');
  }
});

form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Terima kasih! Pesan Anda telah terkirim.');
  form.reset();
  button.disabled = true;
  button.classList.remove('active');
});