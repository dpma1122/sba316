 const category1 = document.querySelector(".button1").style.color = "red";


const category2 = document.querySelector (".button2").style.color = "red"
//cache at least one element


//these are the words to guess
const cuisine = ["Mexican", "Chinese", "Japanese", "Greek"]

 const country= ["Mexico", "China", "Japan", "Greece"]

let currentword ='';
let guessedLetters = [];

function checkLetters(){
    console.log("hello")
}

const keys= document.querySelectorAll('.keys')

keys.addEventListener("click",()=>{console.log ('hi')})
//  use iteration (repeat instructions)


function myfunction() {console.log('he"')}
keys.addEventListener("click", myfunction);


// const keys = document.querySelectorAll(“.keys”);

const wordToComapre = keys.forEach((key) => {
  key.addEventListener((click), () => {
    console.log(key.textContent);
    word += key.textContent;
    return word;
  });
});
console.log(wordToComapre);