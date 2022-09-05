console.log('JS OK!');

// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta,
// i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri,
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const arrayNum = [];
let userArrayNum = [];

for (let i = 0; i < 5; i++) {
    let number = Math.floor(Math.random() * 100);
    arrayNum.push(number);
}

console.log(arrayNum);

const numbers = document.querySelector(".numbers");
numbers.innerHTML = arrayNum;

let timerNone = setTimeout(function () {
    numbers.classList.add("none");
}, 5 * 1000);

let timerPrompt = setTimeout(function () {
    alert('Inserisci uno alla volta i numeri precedentemente mostrati');
    for (let i = 0; i < arrayNum.length; i++) {
        let userNum = parseInt(prompt('Inserisci il numero'));
        userArrayNum.push(userNum);
    }

    console.log(userArrayNum);

    for (i = 0; i < userArrayNum; i++) {
        if (arrayNum.includes(userArrayNum[i])) {
            index++;
            console.log(i);
            correctNumber += " " + i
        }
    }
}, 6 * 1000);

let index = 0;
let correctNumber;








