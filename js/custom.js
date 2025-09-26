


document.addEventListener('DOMContentLoaded', function(){
  var btn = document.getElementById('card-info-btn');
  var img = document.getElementById('author-qrcode');
  if(btn && img){
    btn.addEventListener('click', function(e){
      e.preventDefault(); // 防止跳转
      if(img.style.display === 'none' || img.style.display === ''){
        img.style.display = 'block';
      }else{
        img.style.display = 'none';
      }
    });
  }
});