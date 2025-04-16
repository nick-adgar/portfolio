// Future enhancements can go here

// Example: Smooth scroll to top
document.addEventListener('DOMContentLoaded', () => {
  const toTop = document.createElement('button');
  toTop.innerText = '⬆️ Back to Top';
  toTop.style.position = 'fixed';
  toTop.style.bottom = '20px';
  toTop.style.right = '20px';
  toTop.style.padding = '0.5rem 1rem';
  toTop.style.border = 'none';
  toTop.style.borderRadius = '8px';
  toTop.style.backgroundColor = '#333';
  toTop.style.color = '#fff';
  toTop.style.cursor = 'pointer';

  toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.body.appendChild(toTop);
});
