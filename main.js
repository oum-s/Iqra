//Utiliser PI pour voir toutes les lettres ?
let alphabet = [
 {
    letter : "A",
    begining : "A DEBUT",
    middle : 'A MILIEU',
    end : "A FIN",
    word: "Astronaute",

    sentence(){
      `J'ai vu un ${this.word}`
    }
  },
  {
   letter : "B",
   begining : "B DEBUT",
   middle : 'B MILIEU',
   end : "B FIN",
   word: "Bateau",

   sentence(){
     `J'ai vu un ${this.word}`
   }
 },

 {
   letter : "C",
   begining : "C DEBUT",
   middle : 'C MILIEU',
   end : "C FIN",
   word: "Château",

   sentence(){
     `J'ai vu un ${this.word}`
   }
 },

 {
   letter : "D",
   begining : "D DEBUT",
   middle : 'D MILIEU',
   end : "D FIN",
   word: "Dauphin",

   sentence(){
     `J'ai vu un ${this.word}`
   }
 },

 {
   letter : "E",
   begining : "E DEBUT",
   middle : 'E MILIEU',
   end : "E FIN",
   word: "Elephant",

   sentence(){
     `J'ai vu un ${this.word}`
   }
 },

]

const filterInitialLetters = alphabet.map(initial => {
  return initial.letter 
  })


// creer l'array de l'ex
const arrFourLetters = []

// arrFourLetters.push(mainRandomLetter)

function playInitialLetters(){
  while ( arrFourLetters.length < 4) {

    const mainRandomLetter = filterInitialLetters[Math.floor(Math.random() * filterInitialLetters.length)]
  
    if (!arrFourLetters.includes(mainRandomLetter)){
      arrFourLetters.push(mainRandomLetter)
      console.log(arrFourLetters)
    }
  }
}
playInitialLetters()

let mainLetter = document.querySelector('.letter')
let myCards = document.querySelectorAll('.answer')

function shuffleArray(arrFourLetters){
  return arrFourLetters.sort(()=> Math.random() - 0.5);
}
let shuffleArrayFirst = shuffleArray(arrFourLetters)
  for (i = 0; i < shuffleArrayFirst.length ; i++){
    mainLetter.innerText = shuffleArrayFirst[i]
    myCards[i].innerText = shuffleArrayFirst[i]
  }
  
function checkValidInitialLetter(){
  let innerCards = myCards.innerText
  innerCards.forEach(element => {
    if( element === mainLetter.innerText)
      element.style.backgroundColor = "green"
  });
}
// integre à Lettre
// document.querySelector('.letter').innerText = mainRandomLetter