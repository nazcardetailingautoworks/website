document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.navbar-toggle');
  const menu = document.querySelector('.navbar ul');
  toggle.addEventListener('click', function() {
    menu.classList.toggle('active');
  });
});