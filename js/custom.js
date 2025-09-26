document.addEventListener('DOMContentLoaded', function() {
  const authorBtn = document.getElementById('card-info-btn-author');
  if (authorBtn) {
    authorBtn.onclick = function() {
      var popup = document.querySelector('.card-widget .card-info-popup-img');
      if (popup) {
        const rect = authorBtn.getBoundingClientRect();
        popup.style.display = popup.style.display === 'none' || popup.style.display === '' ? 'block' : 'none';
        if (popup.style.display === 'block') {
          popup.style.left = rect.left + (rect.width / 2) + 'px';
          popup.style.top = (rect.bottom + 10) + 'px';
          popup.style.position = 'absolute';
        }
      }
    };
  }

  const sidebarBtn = document.getElementById('card-info-btn-sidebar');
  if (sidebarBtn) {
    sidebarBtn.onclick = function() {
      var popup = document.querySelector('#sidebar .card-info-popup-img');
      if (popup) {
        const rect = sidebarBtn.getBoundingClientRect();
        popup.style.display = popup.style.display === 'none' || popup.style.display === '' ? 'block' : 'none';
        if (popup.style.display === 'block') {
          popup.style.left = rect.left + (rect.width / 2) + 'px';
          popup.style.top = (rect.bottom + 10) + 'px';
          popup.style.position = 'absolute';
        }
      }
    };
  }
});