document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const primaryMenu = document.getElementById('primary-menu');
    const mainNavigation = document.getElementById('site-navigation');

    if (menuToggle && primaryMenu && mainNavigation) {
        // Aggiunge la classe per mostrare/nascondere il menu
        menuToggle.addEventListener('click', () => {
            // Alterna la classe 'toggled-on' sul genitore della navigazione
            mainNavigation.classList.toggle('toggled-on');
            
            // Aggiorna l'attributo aria-expanded per accessibilità
            const isExpanded = mainNavigation.classList.contains('toggled-on');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Aggiungi qui altre interazioni statiche se necessario
    // Ad esempio, una galleria immagini o un semplice effetto hover JS.
});