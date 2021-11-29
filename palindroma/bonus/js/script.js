/*  
    Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma(prima senza funzione e poi con funzione)
*/
// funzione: word --> true: parola palindrona;false: non polindroma
function isPalindroma(word) {
    const word_low = word.toLowerCase();
    const len = word.length;
    let i = 0;
    do {
        // condizione parola polindroma: lettera = lettera finale
        if (word_low[i] != word_low[len - (i + 1)]) {
            return false; //esce dalla funzione.
        }
        i++;
    } while (i < len/2);
    //si arriva a fine ciclo solo se la parola é polindroma.
    return true;
}
//  Richiedo una parola all'utente
const container = document.querySelector('.container');
//creo input text
const inputText = document.createElement('input');
inputText.type = 'text';
inputText.placeholder = 'inserisci il tuo testo';
//creo bottone invio
const button = document.createElement('button');
button.innerHTML = '<span>Verifica</span>'
//creo div stampa risultato-errori
const div = document.createElement('div');
container.append(inputText,button,div);

button.addEventListener('click',function (){
    const word = inputText.value;
    //  Controllo se la parola é uguale a se stessa al contrario tramite funzione
    if(word == '') {
        div.innerHTML = 'Inserire una parola da controllare'
    }
    else {
        if (isPalindroma(word)) {
            div.innerHTML = 'La parola é polindroma';
        } else {
            div.innerHTML = 'La parola NON é polindroma';
        }
    }
});