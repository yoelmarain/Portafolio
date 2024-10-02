document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactoForm');
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        // Validar campos
        let valid = true;

        if (nombre.value.trim() === '') {
            alert('Por favor, ingrese su nombre.');
            valid = false;
        }

        if (email.value.trim() === '') {
            alert('Por favor, ingrese su correo electrónico.');
            valid = false;
        } else if (!validateEmail(email.value.trim())) {
            alert('Por favor, ingrese un correo electrónico válido.');
            valid = false;
        }

        if (mensaje.value.trim() === '') {
            alert('Por favor, ingrese su mensaje.');
            valid = false;
        }

        if (valid) {
            alert('Formulario enviado correctamente.');
            form.submit();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});