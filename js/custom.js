document.addEventListener('DOMContentLoaded', function() {
  // 为 cardauthor.pug 的按钮绑定事件
  document.getElementById('card-info-btn-author').onclick = function() {
    var popup = document.querySelector('.card-widget .card-info-popup-img');
    if (popup.style.display === 'none' || popup.style.display === '') {
      popup.style.display = 'block';
    } else {
      popup.style.display = 'none';
    }
  };

  // 为 sidebar.pug 的头像绑定事件
  document.getElementById('card-info-btn-sidebar').onclick = function() {
    var popup = document.querySelector('#sidebar .card-info-popup-img');
    if (popup.style.display === 'none' || popup.style.display === '') {
      popup.style.display = 'block';
    } else {
      popup.style.display = 'none';
    }
  };
});