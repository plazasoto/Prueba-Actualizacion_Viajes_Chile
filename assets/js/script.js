import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
/* 
$(document).ready(function(){
    $("#botonEnviar").click(function () {
        alert("Mensaje enviado.");
    });
});
 */