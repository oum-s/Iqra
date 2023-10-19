//Utiliser PI pour voir toutes les lettres ?
let alphabet = {
  first : {
    letter : "A",
    begining : "A DEBUT",
    middle : 'A MILIEU',
    end : "A FIN",
    word: "Astronaute",

    sentence(){
      `J'ai vu un ${this.word}`
    }
  },
  second : {
   letter : "B",
   begining : "B DEBUT",
   middle : 'B MILIEU',
   end : "B FIN",
   word: "Bateau",

   sentence(){
     `J'ai vu un ${this.word}`
   }
 },

 third : {
   letter : "C",
   begining : "C DEBUT",
   middle : 'C MILIEU',
   end : "C FIN",
   word: "Château",

   sentence(){
     `J'ai vu un ${this.word}`
   }
 },

 four : {
   letter : "D",
   begining : "D DEBUT",
   middle : 'D MILIEU',
   end : "D FIN",
   word: "Dauphin",

   sentence(){
     `J'ai vu un ${this.word}`
   }
 },

 fifth : {
   letter : "E",
   begining : "E DEBUT",
   middle : 'E MILIEU',
   end : "E FIN",
   word: "Elephant",

   sentence(){
     `J'ai vu un ${this.word}`
   }
 },

}

//A la page game appuyer sur commencer le jeu
//  au click afficher les cartes de lettres
// afficher le titre de la lettre choisie au hasard
// // choisir la lettre qui correspond au titre

let randomLetter = alphabet[Object.keys(alphabet)[Math.floor(Math.random()*Object.keys(alphabet).length)]]
document.querySelector('.main').innerText = randomLetter.letter
// mettre lettre dans chaque case
let answers = document.getElementsByClassName('.answer')

for (const i = 0; i < answers.length ; i++){
  const item = answers[i]
  iteminnerText = randomLetter.letter 
}

console.log(document.querySelectorAll('.answer'))
// let myChoice = document.querySelector('.choice').val
// function isValid("onclick", ){
//   if(originalLetter.value === matchLetter.value){
//     matchLetter.style.backgroundColor = "green"
//     // changer de lettre
//   }else{
//     matchLetter.style.backgroundColor = "red"
//   }
// }
// si c'est la bonne lettre c'est ok donc mettre la lettre en vert sinon la mettre en rouge
//si c'est ok passer à une lettre suivante
//quand on a fait 5 passages avoir le choix entre continuer ou pas et si on continue, passer à l'étape de reconnissance des lettres debut milieu fin

// 
//si lettre principal correspond à la lettre de son objet 'début milieu ou fin" matcher (utiliser fonction isValid)
