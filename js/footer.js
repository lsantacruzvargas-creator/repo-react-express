// Función para cargar el footer
function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
}

// Cargar el footer cuando el documento esté listo
document.addEventListener('DOMContentLoaded', loadFooter);