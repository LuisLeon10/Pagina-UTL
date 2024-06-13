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

document.addEventListener("DOMContentLoaded", function () {

    function isElementInViewport(element) {
      var rect = element.getBoundingClientRect();

      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight - 300 &&
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
      titleMenu.style.fontSize = "12px"
  } else {
      sideBar.style.left = '-50px';
  }
});