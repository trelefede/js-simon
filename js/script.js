console.log('JS OK!');

// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta,
// i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri,
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const arrayNum = [];
let userArrayNum = [];

prompt('Hai 5 secondi per memorizzare più numeri possibili')

// ciclo for per creare 5 numeri random
for (let i = 0; i < 5; i++) {
    let number = Math.floor(Math.random() * 100);
    arrayNum.push(number);
}

console.log(arrayNum);

// leggo div html e scrivo al suo interno l'array di numeri
const numbers = document.querySelector(".numbers");
numbers.innerHTML = arrayNum;

// faccio partire conto alla rovescia per dare al div la classe none
let timerNone = setTimeout(function () {
    numbers.classList.add("none");
}, 5 * 1000);

// timer per aspettare che finisca il conto alla rovescia prima di proseguire con le richieste all'utente
let timerPrompt = setTimeout(function () {
    alert('Inserisci uno alla volta i numeri precedentemente mostrati');

    // ciclo for per chiedere all'utente un numero alla volta
    for (let i = 0; i < arrayNum.length; i++) {
        let userNum = parseInt(prompt('Inserisci il numero'));
        // inserisco uno alla volta i numeri scelti nell'array utente
        userArrayNum.push(userNum);
    }

    console.log(userArrayNum);

    // inizializzo due variabili da usare per il confronto e da stampare alla fine
    let correctNumbers = 0;
    let userCorrectNumbers = [];

    // ciclo for per verificare se i numeri inseriti dall'utente sono presenti nell'array iniziale
    for (i = 0; i < userArrayNum.length; i++) {
        // se sono presenti incremento la variabile ad ogni ciclo e aggiungo il valore all'array userCorrectNumbers
        if (arrayNum.includes(userArrayNum[i])) {
            correctNumbers++;
            userCorrectNumbers.push(userArrayNum[i]);
        }
    }

    // stampo i valori finali 
    console.log('numeri azzeccati', correctNumbers);
    console.log('lista numeri', userCorrectNumbers);

}, 6 * 1000);








