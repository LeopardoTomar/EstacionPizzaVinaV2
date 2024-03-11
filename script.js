// Función para limpiar el formato del precio
function cleanPrice(price) {
    // Eliminar cualquier carácter que no sea un dígito o un punto
    return price.replace(/[^\d.]/g, '');
}

// Función para agregar un elemento al carrito
function addToCart(productName, productPrice) {
    // Convertir el precio a un número flotante limpio
    var priceFloat = parseFloat(cleanPrice(productPrice));

    // Verificar si el precio es un número flotante válido
    if (!isNaN(priceFloat) && priceFloat > 0) {
        var cartItems = document.getElementById("cart-items");

        // Crear un nuevo elemento de lista para el nuevo producto
        var listItem = document.createElement("li");

        // Agregar el nombre del producto al elemento de la lista
        var nameElement = document.createElement("span");
        nameElement.textContent = productName;
        listItem.appendChild(nameElement);

         // Agregar una línea de separación
         listItem.appendChild(document.createElement("br"));
         listItem.appendChild(document.createElement("br"));
         
        // Crear un elemento span para mostrar el precio
        var priceSpan = document.createElement("span");
        priceSpan.textContent = "$" + priceFloat.toFixed(3); // Formatear el precio a tres decimales
        priceSpan.className = "item-price";
        listItem.appendChild(priceSpan);

        // Agregar el precio como un atributo de datos al elemento de la lista
        listItem.setAttribute("data-price", priceFloat);

        // Agregar un contador con botones de suma y resta
        var counter = document.createElement("div");
        counter.className = "counter";

        var decrementButton = document.createElement("button");
        decrementButton.textContent = "-";
        decrementButton.className = "decrement";
        decrementButton.onclick = function() {
            var quantityElement = this.nextElementSibling;
            var quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                updateItemPrice(listItem); // Actualizar el precio del elemento al cambiar la cantidad
                updateTotalPrice(); // Actualizar el precio total al cambiar la cantidad
            }
        };

        var quantitySpan = document.createElement("span");
        quantitySpan.textContent = "1";

        var incrementButton = document.createElement("button");
        incrementButton.textContent = "+";
        incrementButton.className = "increment";
        incrementButton.onclick = function() {
            var quantityElement = this.previousElementSibling;
            var quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            updateItemPrice(listItem); // Actualizar el precio del elemento al cambiar la cantidad
            updateTotalPrice(); // Actualizar el precio total al cambiar la cantidad
        };

        counter.appendChild(decrementButton);
        counter.appendChild(quantitySpan);
        counter.appendChild(incrementButton);

        listItem.appendChild(counter);

        // Agregar un botón para eliminar el elemento del carrito
        var removeButton = document.createElement("button");
        removeButton.textContent = "x";
        removeButton.className = "remove-button";
        removeButton.onclick = function() {
            listItem.remove();
            updateTotalPrice(); // Actualizar el precio total al eliminar un elemento
        };

        listItem.appendChild(removeButton);

        // Agregar el nuevo elemento de lista al carrito
        cartItems.appendChild(listItem);

        updateTotalPrice(); // Actualizar el precio total al agregar un nuevo elemento
    } else {
        console.error("Precio inválido:", productPrice);
    }
}

// Función para actualizar el precio de un elemento en función de su cantidad
function updateItemPrice(item) {
    var price = parseFloat(item.getAttribute("data-price"));
    var quantity = parseInt(item.querySelector(".counter span").textContent);
    var itemPrice = price * quantity;
    item.querySelector(".item-price").textContent = "$" + itemPrice.toFixed(3); // Actualizar el precio del elemento
}

// Función para actualizar el precio total del carrito
function updateTotalPrice() {
    var cartItems = document.querySelectorAll("#cart-items li");
    var totalPrice = 0;

    // Calcular el precio total sumando el precio de cada elemento en el carrito
    cartItems.forEach(function(item) {
        var price = parseFloat(item.getAttribute("data-price")); // Obtener el precio del producto
        var quantity = parseInt(item.querySelector(".counter span").textContent); // Obtener la cantidad del producto

        // Verificar si el precio es un número válido y la cantidad es mayor que cero
        if (!isNaN(price) && price > 0 && quantity > 0) {
            totalPrice += price * quantity;
        }
    });

    // Mostrar el precio total en el elemento div correspondiente
    var totalPriceElement = document.getElementById("total-price");
    totalPriceElement.textContent = "Total: $" + totalPrice.toFixed(3); // Ajuste para mostrar tres decimales
}



















// Obtener todos los botones "Agregar al carrito"
var addToCartButtons = document.querySelectorAll(".boton-card");

// Iterar sobre cada botón y agregar un evento de clic
addToCartButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        // Obtener el título y el precio del producto desde la tarjeta
        var card = button.closest(".card");
        var title = card.querySelector("h3").textContent;
        var price = card.querySelector(".price").textContent;

        // Llamar a la función addToCart con el título y el precio del producto
        addToCart(title, price);
    });
});














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


window.addEventListener('scroll', function() {
    var cart = document.getElementById('cart');
    var cartOffset = cart.offsetTop;
    var upperSection = document.getElementById('upper-section');
    var upperSectionOffset = upperSection.offsetTop;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Verifica si el carrito ha alcanzado la parte superior de la pantalla
    if (scrollTop >= upperSectionOffset) {
        // Agrega la clase "fixed" para fijar el carrito en la parte superior
        cart.classList.add('fixed');
    } else if (scrollTop < upperSectionOffset) {
        // Remueve la clase "fixed" si el desplazamiento es menor que la posición superior del upper-section
        cart.classList.remove('fixed');
    }
});

document.querySelectorAll('.secciones a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Obtiene el ID del objetivo del enlace según el atributo href
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Calcula la posición final restando 20px a la posición superior de la sección objetivo
        const offset = targetSection.offsetTop - 20;

        // Desplaza suavemente hacia la posición final
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    });
});








