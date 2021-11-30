/*  
    Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma(prima senza funzione e poi con funzione)
*/
// funzione: word --> true: parola palindrona;false: non polindroma
function isPalindroma(word) {
    const word_low = word.toLowerCase();
    const len = word.length;
    if (len % 2 != 0) {
        word_length = Math.floor(len / 2);
        console.log(word_length);
    } else {
        word_length = len / 2;
    }
    let i = 0;
    do {
        // condizione parola polindroma: lettera = lettera finale
        if (word_low[i] != word_low[len - (i + 1)]) {
            return false; //esce dalla funzione.
        }
        i++;
    } while (i < word_length);
    //si arriva a fine ciclo solo se la parola é polindroma.
    return true;
}
//  Richiedo una parola all'utente
const word = prompt('Inserisci una parola');
//  Controllo se la parola é uguale a se stessa al contrario tramite funzione
if (isPalindroma(word)) {
    console.log('La parola é polindroma');
} else {
    console.log('La parola NON é polindroma');
}