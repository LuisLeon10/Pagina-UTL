// JavaScript para reiniciar el carrusel
document.addEventListener('DOMContentLoaded', function () {
  var myCarousel = document.getElementById('carousel-2');
  var carousel = new bootstrap.Carousel(myCarousel);

  myCarousel.addEventListener('slid.bs.carousel', function () {
    if (carousel.isLast) {
      carousel.to(0); // Reinicia el carrusel al principio cuando se alcanza la ultima diapositiva
    }
  });
});

//Funcion para cambio de imagenes en la seccion de noticias
const notice1 = document.getElementById('notice-item-1');
const notice2 = document.getElementById('notice-item-2');
const notice3 = document.getElementById('notice-item-3');
const img = document.getElementById('img-notice');

notice1.addEventListener('mouseover', function() {
    img.setAttribute('src', 'assets/img/noticia1.jpeg');
});
notice2.addEventListener('mouseover', function() {
    img.setAttribute('src', 'assets/img/noticia2.jpeg');
});
notice3.addEventListener('mouseover', function() {
    img.setAttribute('src', 'assets/img/noticia3.jpg');
});

//SideBar Menu - Funcionalidad
const botonMostrar = document.getElementById('btn-clic-apps');
const botonCerrar = document.getElementById('btn-close-apps');
const menuLateral = document.getElementById('sideBar');

botonMostrar.addEventListener('click', function() {
  menuLateral.classList.toggle('mostrar'); // Alterna la clase 'mostrar'
});
botonCerrar.addEventListener('click', function() {
  menuLateral.classList.toggle('mostrar'); // Alterna la clase 'cerrar'
});


//Funcionalidad para que se muestre correctamente el menu de apps
setTimeout(mostrarSideBar, 1000); // 1000 milisegundos = 1 segundo

function mostrarSideBar() {
  var elemento = document.getElementById("sidebar-container");
  if(elemento.style.display == "none"){
    elemento.style.display = "block";
    elemento.style.margin = "15px";
  }else{
    elemento.style.display = "none";
  }
}

//Carrusel avisos funcionalidad de reproduccion automatica
document.addEventListener("DOMContentLoaded", function () {
    var myCarousel = new bootstrap.Carousel(document.getElementById("carousel-2"), {
        interval: 3000 // Establece el intervalo deseado
    });

    function isElementInViewport(element) {
      var rect = element.getBoundingClientRect();

      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth
      );
    }

    function handleVisibility() {
      var misSecciones = document.querySelectorAll(".sections");
      var enlacesMenu = document.querySelectorAll(".anchors-table-item-icon a");

      misSecciones.forEach(function(seccion) {
        if (isElementInViewport(seccion)) {
          var idSeccion = seccion.id;
          enlacesMenu.forEach(function(enlace) {
            enlace.classList.remove("active");
            if (enlace.getAttribute("href") === "#" + idSeccion) {
              enlace.classList.add("active");
            }
          });
          
        }
      });
    }

    window.addEventListener("scroll", handleVisibility);

    handleVisibility();
    
 });

//Funcionalidad menu lateral
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  
  //Umbral de aparicion
  var umbral = 700;
  
  var sideBar = document.getElementById('right-menu-nav');
  var titleMenu = document.getElementById('subtitle');
  
  if (scrollPosition > umbral) {
      sideBar.style.left = '0';
      titleMenu.style.fontSize = "12px";
  } else {
      sideBar.style.left = '-50px';
  }
});