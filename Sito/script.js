/**
 * Funzione per generare un colore esadecimale casuale
 * @returns {string} Un colore esadecimale, ad esempio '#a3c1f2'
 */
function generaColoreCasuale() {
    // Genera un numero intero casuale da 0 a 16777215 (FFFFFF in esadecimale)
    const colore = Math.floor(Math.random() * 16777215).toString(16);
    // Aggiunge zeri iniziali se necessario per assicurare 6 cifre
    return '#' + colore.padStart(6, '0');
}

// 1. Aspetta che il documento sia completamente caricato
document.addEventListener('DOMContentLoaded', () => {
    // 2. Ottieni riferimenti agli elementi
    const bottone = document.getElementById('cambiaColoreBtn');
    const corpoPagina = document.body;

    // 3. Aggiungi un listener di evento al click del bottone
    if (bottone) { // Assicurati che l'elemento esista
        bottone.addEventListener('click', () => {
            // Genera il nuovo colore casuale
            const nuovoColore = generaColoreCasuale();
            
            // Imposta il nuovo colore come sfondo del corpo della pagina
            corpoPagina.style.backgroundColor = nuovoColore;
            
            console.log(`Sfondo cambiato in: ${nuovoColore}`);
        });
    }
});