const navbar =  document.querySelector('.navbar'),
      humberger = document.querySelector('.hum');

humberger.addEventListener('click',()=>{
    navbar.classList.toggle('open');
    humberger.classList.toggle('ex')
})