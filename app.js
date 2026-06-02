const words=["apple","grape","storm","money","skill","tasks","learn","study","malik"];

let index = Math.floor(Math.random()*words.length);
let secretWord=words[index]
let currentRow=0;
let input = document.getElementById("guess-input");
let button = document.getElementById("submit-btn");
let message = document.getElementById("message");
function handleGuess(){
    message.textContent = "";
    let guess =input.value
    if (guess.length!=5){
        message.textContent = "Word must be 5 letters!";
        return;
    }
    if (!(/^[a-zA-Z]+$/.test(guess))) {
        message.textContent = "Only letters are allowed!";
        return;
    }
    console.log(guess)
}
 button.addEventListener("click", handleGuess);