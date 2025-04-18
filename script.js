// Future scripts or features go here
function filterProjects(category) {
  const projects = document.querySelectorAll('.project');
  projects.forEach(project => {
    if (category === 'all' || project.classList.contains(category)) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
}
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === slideIndex) {
      slide.classList.add('active');
    }
  });
  slideIndex = (slideIndex + 1) % slides.length;
}

setInterval(showSlides, 3500); // Change every 3.5 seconds

function toggleProjects() {
  const moreSection = document.getElementById('more-projects');
  const button = document.querySelector('.show-more-container button');

  if (moreSection.classList.contains('hidden')) {
    moreSection.classList.remove('hidden');
    button.textContent = "Show Less";
  } else {
    moreSection.classList.add('hidden');
    button.textContent = "Show More";
  }
}
