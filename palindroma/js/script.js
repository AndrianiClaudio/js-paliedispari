/*  
    Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma(prima senza funzione e poi con funzione)
*/
// funzione: word --> true: parola palindrona;false: non polindroma
function isPalindroma(word) {
    // si scorrerá fino a metá parola. (se dispari la metá si arrotonda per difetto. la letterá a metá parola rimane a metá parola al contrario).
    // console.log(word.length);
    if((word.length) % 2 == 0) { //lughezza parola pari
        indexMax = word.length / 2;
    } else { //lughezza parola dispari
        indexMax = Math.floor(word.length / 2);
    }
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
    } while (i < indexMax && check);
    return check;
}
//  Richiedo una parola all'utente
const word = prompt('Inserisci una parola').toLowerCase();
//  Controllo se la parola é uguale a se stessa al contrario tramite funzione
if (isPalindroma(word)) {
    console.log('La parola é polindroma');
} else {
    console.log('La parola NON é polindroma');
}