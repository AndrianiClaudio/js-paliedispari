/*  L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random(sempre da 1 a 5) per il computer
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari
    Dichiariamo chi ha vinto
    (corrispondenza tra scelta pari e dispari e somma pari o dispari)
    In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari
*/
//funziona controlla se valore pari
function isEven(value) {
    if(value % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
function oddEvenWin(numPlayer,sum) {
    if ((isEven(sum) && isEven(numPlayer)) || (!isEven(sum) && !isEven(numPlayer))) {
        return true;
    } else {
        return false;
    }
}
// funzione genera numero intero tra due valori compresi
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//richiedo numero all'utente
let userNum;
do {
    userNum = parseInt(prompt('Inserisci un numero da 1 a 5'));
    if(isNaN(userNum)) {
        console.log('Inserimento di un valore non numerico');
    } else if (userNum < 1 || userNum > 5) {
        console.log('Inserire un valore da 1 a 5 compreso');
    }
} while (isNaN(userNum) || userNum < 1 || userNum > 5); //ripeti acquisizione numero finche numero non risulta essere compreso tra 1 e 5
//genero numero random per il PC
const pcNum = getRndInteger(1,5);
if(oddEvenWin(userNum,sum(userNum,pcNum))) { //utente ha vinto
    console.log('Hai vinto!');
} else {
    console.log('Hai perso!');
}