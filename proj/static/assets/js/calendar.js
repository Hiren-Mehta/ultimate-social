(function () {
  const grid = document.getElementById('calendar-grid');
  const title = document.getElementById('calendar-month');
  if (!grid || !title) return;

  const today = new Date(2026, 10, 11);
  let shownMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const events = {
    '2026-11-12': [{ platform: 'messenger', icon: 'bx bxl-messenger', title: 'A little inspiration ✨' }, { platform: 'telegram', icon: 'bx bxl-telegram', title: 'Building in public' }],
    '2026-11-13': [{ platform: 'x', icon: 'bx bxl-twitter', title: 'Small steps, big things' }, { platform: 'whatsapp', icon: 'bx bxl-whatsapp', title: 'Behind the scenes' }],
    '2026-11-14': [{ platform: 'email', icon: 'bi bi-envelope-fill', title: 'Weekend ideas' }],
    '2026-11-16': [{ platform: 'telegram', icon: 'bx bxl-telegram', title: 'A note from our team' }],
    '2026-11-18': [{ platform: 'messenger', icon: 'bx bxl-messenger', title: 'Midweek moments' }, { platform: 'x', icon: 'bx bxl-twitter', title: 'What are you creating?' }],
    '2026-11-20': [{ platform: 'whatsapp', icon: 'bx bxl-whatsapp', title: 'Community spotlight' }],
    '2026-11-23': [{ platform: 'telegram', icon: 'bx bxl-telegram', title: 'Monday inspiration' }],
    '2026-11-25': [{ platform: 'email', icon: 'bi bi-envelope-fill', title: 'A little gratitude' }],
  };
  const keyFor = (date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

  function renderCalendar() {
    title.textContent = shownMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    grid.replaceChildren();
    weekdays.forEach((weekday) => {
      const heading = document.createElement('div');
      heading.className = 'calendar-weekday';
      heading.textContent = weekday.slice(0, 3).toUpperCase();
      grid.append(heading);
    });

    const firstDay = new Date(shownMonth.getFullYear(), shownMonth.getMonth(), 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    for (let index = 0; index < 42; index += 1) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + index);
      const cell = document.createElement('div');
      cell.className = 'calendar-day';
      if (date.getMonth() !== shownMonth.getMonth()) cell.classList.add('muted');
      if (keyFor(date) === keyFor(today)) cell.classList.add('today');

      const dateLabel = document.createElement('span');
      dateLabel.className = 'calendar-date';
      dateLabel.textContent = date.getDate();
      cell.append(dateLabel);

      (events[keyFor(date)] || []).forEach((event) => {
        const item = document.createElement('div');
        item.className = `calendar-event ${event.platform}`;
        const icon = document.createElement('i');
        icon.className = event.icon;
        icon.setAttribute('aria-hidden', 'true');
        const label = document.createElement('span');
        label.textContent = event.title;
        item.append(icon, label);
        item.title = event.title;
        cell.append(item);
      });
      grid.append(cell);
    }
  }

  document.querySelectorAll('[data-calendar-step]').forEach((button) => {
    button.addEventListener('click', () => {
      shownMonth.setMonth(shownMonth.getMonth() + Number(button.dataset.calendarStep));
      renderCalendar();
    });
  });
  document.querySelector('[data-calendar-today]')?.addEventListener('click', () => {
    shownMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    renderCalendar();
  });
  renderCalendar();
})();
