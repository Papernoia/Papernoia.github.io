document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('card-info-btn');
  var popup = document.querySelector('.card-info-popup-img');
  if(btn && popup){
    btn.addEventListener('click', function(e){
      e.stopPropagation();
      if(popup.style.display === 'none' || popup.style.display === ''){
        popup.style.display = 'block';
      }else{
        popup.style.display = 'none';
      }
    });
    document.addEventListener('click', function(){
      popup.style.display = 'none';
    });
    popup.addEventListener('click', function(e){
      e.stopPropagation();
    });
  }
});
