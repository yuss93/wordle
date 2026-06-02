// word list
const words=["apple","grape","storm","money","skill","tasks","learn","study","malik"
    ,"plant", "chair", "beach", "clock", "dance", "earth", "flame", "giant", "heart", "ivory", "joker"
    , "knife", "light", "march", "night", "ocean", "piano", "queen", "river", "saint", "tiger", "umbra"
    , "vivid", "watch", "xenon", "yacht", "zebra", "blend", "crisp", "dwarf"
];
// game state
let gameOver=false;
let index = Math.floor(Math.random()*words.length); //pick random word
let secretWord=words[index]; // one word chosen based on the index picked
let currentRow=0;
let input = document.getElementById("guess-input");
let button = document.getElementById("submit-btn");
let message = document.getElementById("message");    
let row = document.querySelectorAll(".row");
let restart = document.getElementById("restart-btn");
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
        
        tiles[i].textContent = guess[i].toUpperCase();
        // the color of each tile
        if (guess[i]==secretWord[i]){
            tiles[i].style.backgroundColor="green";
            tiles[i].style.color = "white"
        }
        else if(secretWord.includes(guess[i])){
            tiles[i].style.backgroundColor ="yellow";
        }
        else{
            tiles[i].style.backgroundColor ="grey";
            tiles[i].style.color = "white"
        }
    }
    // the win check
    if (guess === secretWord){
        input.disabled=true;
        gameOver=true;
        message.textContent="You Win!";
        return;
    }
    currentRow+=1;
    if (currentRow >= 6) {
        input.disabled = true;
        gameOver = true;
        message.textContent = "Game Over! The word was: " + secretWord;
    }
}
 button.addEventListener("click", handleGuess);
 input.addEventListener("keydown",function(event){
    if (event.key==="Enter"){
        handleGuess()
    }
 });
 function restartGame(){
    input.disabled=false;
    let index = Math.floor(Math.random()*words.length); //pick random word
    secretWord=words[index];
    currentRow=0;
    gameOver=false;
    message.textContent="";
    input.value="";
    for (let r=0;r<6;r++){
        let activeRow = row[r];
        let tiles = activeRow.querySelectorAll(".tile");
        for (let col=0;col<5;col++){
            tiles[col].textContent="";
            tiles[col].style.backgroundColor="";
            tiles[col].style.color="";
        }
    }
 }
 restart.addEventListener("click",restartGame);
