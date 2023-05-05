const btnMenu = document.querySelector('.panel-btn');
const menuPanel = document.querySelector('.panel')
const header = document.querySelector('header')

document.addEventListener('DOMContentLoaded', ()=>{
  
  btnMenu.addEventListener('click', () => {
    menuPanel.classList.toggle('is-active')
    btnMenu.classList.toggle('is-active')
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

})