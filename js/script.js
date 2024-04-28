var divregistar = window.document.querySelector("div.formulario-registrar");
var divlogin = window.document.querySelector("div.formulario");

function registar() {
    // Verifica se divregistar está visível
    if (divlogin.style.display === "flex") {
        divregistar.style.display = "flex";
        divlogin.style.display = "none";
    } else {
        // Caso contrário, assume que divlogin está visível
        divregistar.style.display = "none";
        divlogin.style.display = "flex";
    }
}

