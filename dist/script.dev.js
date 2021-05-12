"use strict";

var navbar = document.querySelector('.navbar'),
    humberger = document.querySelector('.hum');
humberger.addEventListener('click', function () {
  navbar.classList.toggle('open');
  humberger.classList.toggle('ex');
});