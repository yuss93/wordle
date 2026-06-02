const words=["apple","grape","storm","money","skill","tasks","learn","study","malik"];

let gameOver=false;
let index = Math.floor(Math.random()*words.length);
let secretWord=words[index]
let currentRow=0;
let input = document.getElementById("guess-input");
let button = document.getElementById("submit-btn");
let message = document.getElementById("message");    
let row = document.querySelectorAll(".row");
function handleGuess(){
    if (currentRow>=6 || gameOver){
        if (gameOver){
            message.textContent="You already Won!";
        }
        else{
            message.textContent="Game Over";
        }
       return
    }
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
    let activeRow = row[currentRow];
    let tiles = activeRow.querySelectorAll(".tile")

    for (let i=0;i<5;i++){
        tiles[i].textContent = guess[i];

        if (guess[i]==secretWord[i]){
            tiles[i].style.backgroundColor="green";
        }
        else if(secretWord.includes(guess[i])){
            tiles[i].style.backgroundColor ="yellow";
        }
        else{
            tiles[i].style.backgroundColor ="grey";
        }
    }
    if (guess === secretWord){
        gameOver=true
        message.textContent="You Win!";
        return;
    }
    input.value=""
    currentRow+=1;
}
 button.addEventListener("click", handleGuess);
