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
// les variables dont j'ai besoin ==>
// filter juste les lettres initiales de l'alphabet
const filterInitialLetters = alphabet.map(initial => {
  return initial.letter 
  })
// creer l'array de ces lettres
const arrFourLetters = []
let mainLetter = document.querySelector('.letter')
let myCards = document.querySelectorAll('.choice')
let myAnswers = document.querySelectorAll('.answer')
// function putInitialLetterInCards(){
// }

// 1ere function = récupérer de manière aléatoire 4 lettres venant du tableau en évitant les doublons
function getFourLettersFromArray(){
  // executer tant que l'array n'a pas 4 elements
  while ( arrFourLetters.length < 4) {
    // récuperer une lettre au hasard du map
    const mainRandomLetter = filterInitialLetters[Math.floor(Math.random() * filterInitialLetters.length)]
    // les mettres dans le tableau à condition qu'elle y soit pas
    if (!arrFourLetters.includes(mainRandomLetter)){
      arrFourLetters.push(mainRandomLetter)
    }
  }
}
// l'appeler
getFourLettersFromArray()

// 2em function = insérer une lettre au hasard à chaque carte et à la lettre principal 
function myShuffle(){
  //mélanger les lettres dans l'array avant de les placer dans les cards
  function shuffleArray(arrFourLetters){
    return arrFourLetters.sort(()=> Math.random() - 0.5);
  }
  // récupérer la function précedente dans une const
  const shuffleArrayConst = shuffleArray(arrFourLetters)
  // mettre une lettre au hasard au main et cards
  for (i = 0; i < shuffleArrayConst.length ; i++){
    mainLetter.innerText = shuffleArrayConst[i]
    myAnswers[i].innerText = shuffleArrayConst[i]
  }
}
 myShuffle() 

// 3em function = raffraichir la page seulement si on click sur une carte correspondante à la principal, au bout de 10 raffraichissement afficher la page suivante en affichant un bouton
function checkValidate(){
  // appliquer la fonction en faisant le tour de chaque réponse
  for (i=0 ; i < 4 ; i++){
    if( myAnswers[i].textContent === mainLetter.textContent){
      // récupérer le parent de la lettre et changer sa couleur
        let goodAnswer = myAnswers[i].parentElement;
         goodAnswer.addEventListener('click', function(){
          goodAnswer.style.backgroundColor = 'green'
          location.reload()
         })
    }else{
      let badAnswer = myAnswers[i].parentElement
      badAnswer.addEventListener('click', function(){
        badAnswer.classList.toggle('bg-red')
       })
    }
  }
}
checkValidate()
 /*  let innerCards = myCards.innerText
  innerCards.forEach(element => {
    if( element === mainLetter.innerText)
      checkValidInitialLetter()
  }); */


// integre à Lettre
// document.querySelector('.letter').innerText = mainRandomLetter