const toggle = document.querySelector('.menu-toggle');
  const body = document.body;
  const sidebarLinks = document.querySelectorAll('.sidebar a');

  if (toggle) {
    toggle.addEventListener('click', () => {
      const open = body.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 980) {
        body.classList.remove('menu-open');
        toggle && toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });