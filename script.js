function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Scroll-to-horizontal feature for Projects section
const projectsContainer = document.querySelector('#projects .about-containers');

if (projectsContainer) {
  projectsContainer.addEventListener('wheel', function (e) {
    e.preventDefault(); // page ko upar-neeche scroll hone se rokta hai
    projectsContainer.scrollLeft += e.deltaY * 5; // vertical scroll → horizontal convert
  }, { passive: false });
}