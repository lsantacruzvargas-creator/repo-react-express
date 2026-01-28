// $(document).ready(function(){
//     // optimizar el rendimiento
//     let optimizar = false;
//     // efecto parallax
//     function parallaxEfecto(){
//     // capturar la posicion del scroll
//     let scrollTop = $(window).scrollTop();
//     // ver el elemento SUN
//     $(".imagen_logo2").css("transform","translateX(" + scrollTop * 8 + "px)");
//     // CREAR UNA CONDICIONANTE PARA QUE LA IMAGEN SE DETENGA AL LLEGAR AL FINAL
//     if(scrollTop >= 300){
//         $(".imagen_logo2").css("transform","translateX(" + 2500 + "px)"); 

//     }}

    
//     // llamar a la funcion parallaxEfecto al hacer scroll
//     $(window).on("scroll",function(){
//         if(!optimizar){
//             requestAnimationFrame(function(){
//                 parallaxEfecto();
//                 optimizar = false;
//             });
//             optimizar = true;
//         }
//         else{
//             console.log("no optoimizado");
//         }
//         parallaxEfecto();
//     });
// });


// Animar los cards de clientes al cargar
window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.client_card');
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.classList.add('visible');
    }, 800 * i);
  });
});

// Animar los cards de servicios al hacer scroll
document.addEventListener('scroll', function () {
  document.querySelectorAll('.row .card').forEach(function(card) {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      if (!card.classList.contains('rotate')) {
        card.classList.add('rotate');
        setTimeout(() => card.classList.remove('rotate'), 700); // Remove after animation
      }
    }
  });
});

window.addEventListener('DOMContentLoaded', function () {
  const services = document.querySelectorAll('.service');
  services.forEach((card, i) => {
    setTimeout(() => {
      card.classList.add('elevate');
    }, i * 300); // 300ms de diferencia entre cada card
  });
});

// IntersectionObserver: añadir clase 'in-view' a #carousel_services cuando entra en viewport
window.addEventListener('DOMContentLoaded', function () {
  const targets = document.querySelectorAll('#carousel_services, #multi_rows');
if (!targets.length) return;

const io = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('in-view'), 50);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

targets.forEach(t => io.observe(t));
});