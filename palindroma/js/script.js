/*  
    Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma(prima senza funzione e poi con funzione)
*/
// funzione: word --> true: parola palindrona;false: non polindroma
function isPalindroma(word) {
    let check = Boolean();
    let i = 0;
    do {
        // condizione parola polindroma: lettera = lettera finale
        if (word[i] == word[word.length - (i + 1)]) {
            check = true;
        } else {
            check = false;
        }
        i++;
    } while (i < word.length && check);
    if(check) {
        return true;
    } else {return false;}
}
//  Richiedo una parola all'utente
const word = prompt('Inserisci una parola').toLowerCase();
//  Controllo se la parola é uguale a se stessa al contrario tramite funzione:true: parola palindrona;false: non polindroma
const check = isPalindroma(word);
if (check) {
    console.log('La parola é polindroma');
} else {
    console.log('La parola NON é polindroma');
}