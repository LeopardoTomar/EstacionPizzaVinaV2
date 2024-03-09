function showChangeLocationPopup() {
    document.getElementById("change-location-popup").style.display = "block";
}

function hideChangeLocationPopup() {
    document.getElementById("change-location-popup").style.display = "none";
}

function changeLocation() {
    var newLocation = document.getElementById("new-location-input").value;
    if (newLocation.trim() !== "") {
        // Aquí puedes agregar la lógica para verificar si la ubicación existe
        // Por ahora, simplemente actualizaremos el texto del párrafo
        document.getElementById("location-text").innerText = newLocation;
        hideChangeLocationPopup();
    } else {
        alert("Por favor, ingrese una ubicación válida.");
    }
}

function contactWhatsApp() {

    // Construye el enlace de WhatsApp
    var whatsappLink = "https://wa.me/" +956300299;

    // Redirige al enlace de WhatsApp
    window.open(whatsappLink, "_blank");
}

var slideIndex = 0; // Inicia desde 0

showSlides(); // Llama a la función para mostrar los slides

function nextSlide() {
    slideIndex++;
    showSlides();
}

function prevSlide() {
    slideIndex--;
    showSlides();
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}

function showSlides() {
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    
    // Verificar si slideIndex está fuera de rango
    if (slideIndex >= slides.length) {slideIndex = 0;}
    if (slideIndex < 0) {slideIndex = slides.length - 1;}

    // Ocultar todos los slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Mostrar el slide actual
    slides[slideIndex].style.display = "block";
    
    // Actualizar la clase "active" para el indicador de punto
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex].className += " active";
}

// Cambiar de slide automáticamente cada 6 segundos
setInterval(function() {
    slideIndex++;
    showSlides();
}, 6000);

// Mostrar el primer slide al cargar la página
showSlides();

document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los puntos del carrusel
    var dots = document.querySelectorAll(".dot");

    // Añadir un evento de clic a cada punto del carrusel
    dots.forEach(function(dot, index) {
        dot.addEventListener("click", function() {
            currentSlide(index); // Llama a la función currentSlide con el índice correspondiente
        });
    });
});
