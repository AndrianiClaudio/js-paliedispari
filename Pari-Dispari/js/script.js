/*  L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random(sempre da 1 a 5) per il computer
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari
    Dichiariamo chi ha vinto
    (corrispondenza tra scelta pari e dispari e somma pari o dispari)
    In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari
*/
//richiedo numero all'utente
// const userNum = 3;
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
// const pcNum = 2;
const pcNum = Math.floor(Math.random() * 5) + 1;
//sommo i due numeri
const sum = userNum + pcNum;
// console.log(sum);
//stabilisco se somma é pari o dispari
let sum_isEven;
if(sum % 2 == 0) { //somma pari
    sum_isEven = true;
} else {
    sum_isEven = false;
}
//dichiaro il vincitore
//controllo scelta giocatore, se pari o dispari
let user_isEven;
if(userNum % 2 == 0) { //scelta iniziale: pari
    user_isEven = true;
} else { //scelta iniziale: dispari
    user_isEven = false;
}
console.log(userNum, pcNum, user_isEven, sum_isEven);
if ((sum_isEven && user_isEven) || (!sum_isEven && !user_isEven)) {
    console.log('Hai vinto!');
} else {
    console.log('Hai perso!');
}