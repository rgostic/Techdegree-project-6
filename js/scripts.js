const qwertyElement = document.getElementById("qwerty");
const phraseElement = document.getElementById("phrase");
let missed = 0;
const phrasesArray = ["dog", "ele phant", "rhino", "bird", "emu"];

document.getElementsByClassName("btn__reset")[0].addEventListener('click', (e) => {
   document.getElementById("overlay").style.display = "none";
});

function getRandomPhraseAsArray(phrases) {
    const length = phrases.length;

    const index = Math.floor(Math.random() * length);
    var charArray = phrases[index].split('');

    return charArray;
}

const chosenPhrase = getRandomPhraseAsArray(phrasesArray);

function addPhraseToDisplay(phraseArr) {

    for (let i = 0; i < phraseArr.length; i++) {
        // create list item
        const li = document.createElement("li");
        //put char inside
        const span = document.createElement("span");
        span.textContent = phraseArr[i];
        li.appendChild(span);
        if (phraseArr[i] !== " ") {
            li.className = "letter";
        }
        // append to #phrase ul
        document.querySelector("#phrase ul").appendChild(li);
    }
}

addPhraseToDisplay(chosenPhrase);

function checkLetter(button) {
    if (chosenPhrase.indexOf(button.textContent) === - 1) {
        missed++;
        return null;
    }
    else {
        var letters = document.getElementsByClassName("letter");

        for (let i = 0; i < letters.length; i++) {
            if (button.textContent === letters[i].textContent) {
                letters[i].className += " show";
                return button.textContent;
            }
        }
    }
}

qwertyElement.addEventListener('click', function (e) {
   var clickedButton = e.target;
   if (clickedButton.tagName === "BUTTON") {
        clickedButton.className = "chosen";
        var letterFound = checkLetter(clickedButton);
        if (!letterFound) {
            missed++;
            // TODO: Remove try from scoreboard
        }
   }
});

function checkWin() {
    
}