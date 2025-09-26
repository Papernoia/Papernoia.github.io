document.getElementById('card-info-btn').onclick = function() {
  var popup = document.querySelector('.card-info-popup-img');
  if (popup.style.display === 'none' || popup.style.display === '') {
    popup.style.display = 'block';
  } else {
    popup.style.display = 'none';
  }
};
