const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Providence Ranch inquiry: ${data.get('topic')}`);
  const body = encodeURIComponent(
    `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nTopic: ${data.get('topic')}\n\n${data.get('message')}`
  );
  // Replace the placeholder below with the ranch's real contact email before publishing.
  const ranchEmail = 'REPLACE_WITH_YOUR_EMAIL';
  const status = document.getElementById('form-status');
  if (ranchEmail === 'REPLACE_WITH_YOUR_EMAIL') {
    status.textContent = 'Almost ready to publish: open script.js and replace REPLACE_WITH_YOUR_EMAIL with your ranch email address.';
    return;
  }
  status.textContent = 'Opening your email app…';
  window.location.href = `mailto:${ranchEmail}?subject=${subject}&body=${body}`;
});
