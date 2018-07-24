const hamburger = document.getElementById('hamburger');
const close = document.getElementById('close');
const menu = document.getElementById('Sidenav');
hamburger.addEventListener('click', function(){
    menu.style.width = '250px';
  })
close.addEventListener('click', function(){
menu.style.width = 0;
})