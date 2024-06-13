
//Declaracion para oferta educativa
const tsuContainer = document.getElementById("tsu-div-container");
const ingContainer = document.getElementById("ing-div-container");
tsuContainer.style.display = "block";
ingContainer.style.display = "none";

//Declaracion para proceso de admision
const tsuAdminContainer = document.getElementById("tsu-admision-container");
const ingAdminContainer = document.getElementById("ing-admision-container");
tsuAdminContainer.style.display = "block";
ingAdminContainer.style.display = "none";

//Funcionalidad para desplegar la oferta educativa que corresponde
function desplegarOfertaTSU() {
  tsuContainer.style.display = "block";
  ingContainer.style.display = "none";
  console.log("TSU");
}
function desplegarOfertaIng() {
  tsuContainer.style.display = "none";
  ingContainer.style.display = "block";
  console.log("Ing");
}

//Funcionalidad para desplegar el proceso de admision que corresponde
function desplegarAdmisionTSU() {
  tsuAdminContainer.style.display = "block";
  ingAdminContainer.style.display = "none";
  console.log("TSU");
}
function desplegarAdmisionIng() {
  tsuAdminContainer.style.display = "none";
  ingAdminContainer.style.display = "block";
  console.log("Ing");
}