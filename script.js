document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.browser-nav a');
    const sections = document.querySelectorAll('.app-section');
    const spidermanCard = document.getElementById('spiderman');
    const batmanCard = document.getElementById('batman');
    const backButtons = document.querySelectorAll('.back-button');
    const charactersContainer = document.querySelector('.characters-container');

    // Función para mostrar una sección específica
    function setActiveSection(targetId) {
        // Asegúrate de que todas las secciones estén ocultas
        sections.forEach(section => {
            section.classList.remove('active');
        });
        // Muestra la sección deseada
        document.getElementById(targetId).classList.add('active');
    }

    // Navegación principal
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
            const targetSection = link.getAttribute('data-section');
            setActiveSection(targetSection);
        });
    });

    // Lógica para elegir personaje (Spiderman)
    spidermanCard.addEventListener('click', () => {
        charactersContainer.classList.add('hide-batman');
        
        setTimeout(() => {
            setActiveSection('spiderman-info');
            charactersContainer.classList.remove('hide-batman');
        }, 1000); // Espera 1 segundo para la animación de salida
    });

    // Lógica para elegir personaje (Batman)
    batmanCard.addEventListener('click', () => {
        charactersContainer.classList.add('hide-spiderman');

        setTimeout(() => {
            setActiveSection('batman-info');
            charactersContainer.classList.remove('hide-spiderman');
        }, 1000); // Espera 1 segundo para la animación de salida
    });

    // Lógica del botón de "Regresar" (AHORA SI ARREGLADA)
    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            const activeInfoSection = document.querySelector('.app-section.active');
            
            // Oculta la sección de información con una transición de opacidad
            activeInfoSection.style.opacity = '0';
            
            // Espera a que termine la animación de desvanecimiento
            setTimeout(() => {
                // Restablece el estado de la página principal de forma forzada
                charactersContainer.classList.remove('hide-spiderman', 'hide-batman', 'return-from-right', 'return-from-left');
                
                // Muestra la sección de inicio inmediatamente
                setActiveSection('inicio');
                
                // Restablece la opacidad
                activeInfoSection.style.opacity = '1';
                
                // Activa el botón de inicio en la navegación
                navLinks.forEach(link => link.classList.remove('active'));
                document.querySelector('a[data-section="inicio"]').classList.add('active');
                
            }, 800); // Duración del fade-out de la info
        });
    });
});