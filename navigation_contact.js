document.addEventListener('DOMContentLoaded', function () {
    const radios = document.querySelectorAll('input[name="theme"]');
    const savedTheme = localStorage.getItem('theme');



    // Applique le thème sauvegardé
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('input[value="dark"]').checked = true;
    } else {
        document.body.classList.remove('dark-mode');
        document.querySelector('input[value="light"]').checked = true;
    }

    // Écoute les changements de sélection
    radios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.value === 'dark') {
                localStorage.setItem('theme', 'dark');
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            }
        });
    });

});
