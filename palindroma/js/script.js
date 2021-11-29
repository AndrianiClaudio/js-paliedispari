/*  
    Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma(prima senza funzione e poi con funzione)
*/
// funzione: word --> true: parola palindrona;false: non polindroma
function isPalindroma(word) {
    const len = word.length;
    let i = 0;
    do {
        // condizione parola polindroma: lettera = lettera finale
        if (word[i] != word[len - (i + 1)]) {
            return false; //esce dalla funzione.
        }
        i++;
    } while (i < len/2);
    //si arriva a fine ciclo solo se la parola é polindroma.
    return true;
}
//  Richiedo una parola all'utente
const word = prompt('Inserisci una parola').toLowerCase();
//  Controllo se la parola é uguale a se stessa al contrario tramite funzione
if (isPalindroma(word)) {
    console.log('La parola é polindroma');
} else {
    console.log('La parola NON é polindroma');
}