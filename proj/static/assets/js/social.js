(function () {
  const toggle = document.querySelector('.sidebar-toggle');
  const sidebar = document.querySelector('.social-sidebar');
  const scrim = document.querySelector('.sidebar-scrim');
  const closeSidebar = () => {
    sidebar?.classList.remove('open');
    scrim?.classList.remove('open');
  };
  toggle?.addEventListener('click', () => {
    sidebar?.classList.toggle('open');
    scrim?.classList.toggle('open');
  });
  scrim?.addEventListener('click', closeSidebar);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeSidebar();
  });

  const toast = document.querySelector('.connect-toast');
  let toastTimer;
  document.querySelectorAll('[data-platform]').forEach((button) => {
    button.addEventListener('click', () => {
      if (!toast) return;
      toast.textContent = `${button.dataset.platform} connection will be available soon.`;
      toast.classList.add('visible');
      window.clearTimeout(toastTimer);
      toastTimer = window.setTimeout(() => toast.classList.remove('visible'), 2800);
    });
  });
})();
