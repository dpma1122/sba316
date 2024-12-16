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


function myfunction() {console.log('h')}
keys.addEventListener("click", myfunction);


// const keys = document.querySelectorAll(“.keys”);

const wordToComapre = keys.forEach((key) => {
  key.addEventListener('click', () => {
    console.log(key.textContent);
    word += key.textContent;
    return word;
  });
});
console.log(wordToComapre);

const button1 = document.querySelector('button1');
button1.addEventListener('click', function(){
    const inputByUser = prompt('Enter guess here:');
})
//tried to to get the buttons for the cuisine and country to open to allow users to input text with an onclick. I don't think that the call back has been assigned

 function checkLetters() {
    const word = ["Mexican", "Chinese", "Japanese", "Greek", ];
    const lettersToCheck = ['a', 'c', 'e', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'p', 'r', 's', 'x'];
  
    const foundLetters = lettersToCheck.filter(letter => {
      return word.some(word => word.toUpperCase().includes(letter));
    });
  
    return foundLetters;
  }
  const button2 = document.querySelector('button2');
  button2.addEventListener('click', function() {
    const userInput = prompt('Please enter your guesses:');
    console.log(userInput);
  });
 

 function checkLetters2(){
    const words = ["Mexico", "China", "Japan", "Greece", ];
    const lettersToCheck = ['a', 'c', 'e', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'p', 'r', 's', 'x'];
  
    const foundLetters2 = lettersToCheck.filter(letter => {
      return words.some(words => words.toUpperCase().includes(letter));
    });
  
    return foundLetters2;
  }
 
//append keys to the screen

const addToScreen = (keys) => {
    screen.append(keys)
}
//I'm tyring to get the keypad to append to the screen but its not working. Pressing the keys creates teh hoover affect and the keys change color but they're appending to the screen. 