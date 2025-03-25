window.addEventListener('scroll', function() {
  const barra2 = document.querySelector('.second-nav');
  
  if (window.scrollY > 50) {
    barra2.style.position = "fixed";
    barra2.style.top = '0px'; // Mueve la segunda barra al bajar
  } else {
    barra2.style.position = "absolute";
    barra2.style.top = "50px"
  }
});

