document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbar");
    const toggler = document.querySelector(".navbar-toggler");

    toggler.addEventListener("click", function() {
        // Check if the screen width is less than 768px (S screen)
        if (window.innerWidth <= 987) {
            navbar.classList.toggle("navbar-open");
        }
    });

    // Close menu when resizing to a larger screen
    window.addEventListener("resize", function() {
        if (window.innerWidth >= 987) {
            navbar.classList.remove("navbar-open");
        }  else {
            ; // Mantiene el menú abierto en pantallas pequeñas
        }
    });
});