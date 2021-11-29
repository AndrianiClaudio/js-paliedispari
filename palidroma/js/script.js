/*  
    Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma(prima senza funzione e poi con funzione)
*/

// console.log('js/script.js caricato correttamente');
//  Richiedo una parola all'utente
const word = prompt('Inserisci una parola').toLowerCase();
// const word = 'anna';
//  Controllo se la parola é uguale a se stessa al contrario
// let check = false
let check = Boolean();
let i=0;
do {
    // console.log(word[i],word[word.length - (i + 1)]);
    // condizione parola polidroma: lettera = lettera finale?
    if(word[i] == word[word.length-(i+1)])
    {
        check = true;
        // console.log(check);
    }  else {
        check = false;
    }
    // console.log(i);
    i++;
}while(i<word.length && check);
// console.log(check);
if (check) {//parola polidroma
    console.log('La parola é polidroma');
} else {//parola non polidroma
    console.log('La parola NON é polidroma');
}