// word list
const words=["apple","grape","storm","money","skill","tasks","learn","study","malik"];
// game state
let gameOver=false;
let index = Math.floor(Math.random()*words.length); //pick random word
let secretWord=words[index] // one word chosen based on the index picked
let currentRow=0;
let input = document.getElementById("guess-input");
let button = document.getElementById("submit-btn");
let message = document.getElementById("message");    
let row = document.querySelectorAll(".row");
function handleGuess(){
    if (currentRow>=6 || gameOver){ // game over check
        if (gameOver){
            message.textContent="You already Won!";
        }
        else{
            message.textContent="Game Over! The word was: "+secretWord;
        }
       return
    }
    message.textContent = "";
    let guess =input.value.toLowerCase();
    if (guess.length!=5){ // validate input
        message.textContent = "Word must be 5 letters!";
        return;
    }
    if (!(/^[a-zA-Z]+$/.test(guess))) { //validate input
        message.textContent = "Only letters are allowed!";
        return;
    }
    let activeRow = row[currentRow]; // getting the active row
    let tiles = activeRow.querySelectorAll(".tile") // active tile
    input.value=""
    for (let i=0;i<5;i++){
        
        tiles[i].textContent = guess[i];
        // the color of each tile
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
    // the win check
    if (guess === secretWord){
        gameOver=true
        message.textContent="You Win!";
        return;
    }
    currentRow+=1;
}
 button.addEventListener("click", handleGuess);
