let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};


const profesion = "Ingeniero";
let inge = "Ing. Jeiner Robles";
let estu = "Est. Jeiner Robles";


if (profesion == "Ingeniero") {
    cambiar(inge);
}else{
    cambiar(estu);
}

function cambiar(texto){
    document.getElementById("sobre-mi").innerHTML = `${texto}`;
}
