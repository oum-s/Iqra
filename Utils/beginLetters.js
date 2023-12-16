//use localstorage pour maitriser le nombre de validation
let alphabet = [
  {
     letter : "ﺍ",
     begining : "ﺍ",
     middle : 'ﺎ',
     end : "'ﺎ",
     word: "Astronaute",
 
     sentence(){
       `J'ai vu un ${this.word}`
     }
   },
   {
    letter : "ﺏ",
    begining : "ﺑ",
    middle : 'ﺒ',
    end : "ـب",
    word: "Bateau",
 
    sentence(){
      `J'ai vu un ${this.word}`
    }
  },
 
  {
    letter : "ت",
    begining : "ﺗ",
    middle : "ﺘ",
    end : "ﺖ",
    word: "Château",
 
    sentence(){
      `J'ai vu un ${this.word}`
    }
  },
 
  {
    letter : "ﺝ",
    begining : "ﺟ",
    middle : "ﺠ",
    end : "ﺞ",
    word: "Dauphin",
 
    sentence(){
      `J'ai vu un ${this.word}`
    }
  },
 
  {
    letter : "ﺡ",
    begining : "ﺣ",
    middle : "ﺤ",
    end : "ﺢ",
    word: "Elephant",
 
    sentence(){
      `J'ai vu un ${this.word}`
    }
  },
  {
   letter : "ﺥ",
   begining : "ﺧ",
   middle : "ﺨ",
   end : "ﺦ",
   word: "Elephant",
 
   sentence(){
     `J'ai vu un ${this.word}`
   }
 },
 {
   letter : "ﺩ",
   begining : "ﺩ",
   middle : "ﺪ",
   end : "ﺪ",
   word: "Elephant",
 
   sentence(){
     `J'ai vu un ${this.word}`
   }
 },
 {
   letter : "ﺫ",
   begining : "ﺫ",
   middle : "ﺬ",
   end : "ﺬ",
   word: "Elephant",
 
   sentence(){
     `J'ai vu un ${this.word}`
   }
 },
 {
   letter : "ﺭ",
   begining : "ﺭ",
   middle : "ﺮ",
   end : "ﺮ",
   word: "Elephant",
 
   sentence(){
     `J'ai vu un ${this.word}`
   }
 },
 {
   letter : "ﺯ",
   begining : "ﺯ",
   middle : "ﺰ",
   end : "ﺰ",
   word: "Elephant",
 
   sentence(){
     `J'ai vu un ${this.word}`
   }
 },
 {
   letter : "ﺱ",
   begining : "ﺳ",
   middle : 'ﺴ',
   end : "'ـس",
   word: "Astronaute",
 
   sentence(){
     `J'ai vu un ${this.word}`
   }
 },
 {
  letter : "ش",
  begining : "شـ",
  middle : 'ـشـ',
  end :"ـش",
  word: "Bateau",
 
  sentence(){
    `J'ai vu un ${this.word}`
  }
 },
 
 {
  letter : "ص",
  begining : "صـ",
  middle : "ـصـ",
  end : "ـص",
  word: "Château",
 
  sentence(){
    `J'ai vu un ${this.word}`
  }
 },
 
 {
  letter : "ض",
  begining : "ضـ",
  middle : "ـضـ",
  end : "ـض",
  word: "Dauphin",
 
  sentence(){
    `J'ai vu un ${this.word}`
  }
 },
 
 {
  letter : "ط",
  begining : "طـ",
  middle : "ـطـ",
  end : "ـط",
  word: "Elephant",
 
  sentence(){
    `J'ai vu un ${this.word}`
  }
 },
 {
 letter : "ظ",
 begining : "ظـ",
 middle : "ـظـ",
 end : "ـظ",
 word: "Elephant",
 
 sentence(){
   `J'ai vu un ${this.word}`
 }
 },
 {
 letter : "ع",
 begining : "عـ",
 middle : "ـعـ",
 end : "ـع",
 word: "Elephant",
 
 sentence(){
   `J'ai vu un ${this.word}`
 }
 },
 {
 letter : "غ",
 begining : "غـ",
 middle : "ـغـ",
 end : "ـغ",
 word: "Elephant",
 
 sentence(){
   `J'ai vu un ${this.word}`
 }
 },
 {
 letter : "ف",
 begining : "فـ",
 middle : "ـفـ",
 end : "ـف",
 word: "Elephant",
 
 sentence(){
   `J'ai vu un ${this.word}`
 }
 },
 {
   letter : "ﺱ",
   begining : "ﺳ",
   middle : 'ﺴ',
   end : "'ـس",
   word: "Astronaute",
 
   sentence(){
     `J'ai vu un ${this.word}`
   }
 },
 {
  letter : "ش",
  begining : "شـ",
  middle : 'ـشـ',
  end :"ـش",
  word: "Bateau",
 
  sentence(){
    `J'ai vu un ${this.word}`
  }
 },
 
 {
  letter : "ص",
  begining : "صـ",
  middle : "ـصـ",
  end : "ـص",
  word: "Château",
 
  sentence(){
    `J'ai vu un ${this.word}`
  }
 },
 
 {
  letter : "ض",
  begining : "ضـ",
  middle : "ـضـ",
  end : "ـض",
  word: "Dauphin",
 
  sentence(){
    `J'ai vu un ${this.word}`
  }
 },
 
 {
  letter : "ط",
  begining : "طـ",
  middle : "ـطـ",
  end : "ـط",
  word: "Elephant",
 
  sentence(){
    `J'ai vu un ${this.word}`
  }
 },
 {
 letter : "ظ",
 begining : "ظـ",
 middle : "ـظـ",
 end : "ـظ",
 word: "Elephant",
 
 sentence(){
   `J'ai vu un ${this.word}`
 }
 },
 {
 letter : "ع",
 begining : "عـ",
 middle : "ـعـ",
 end : "ـع",
 word: "Elephant",
 
 sentence(){
   `J'ai vu un ${this.word}`
 }
 },
 {
 letter : "غ",
 begining : "غـ",
 middle : "ـغـ",
 end : "ـغ",
 word: "Elephant",
 
 sentence(){
   `J'ai vu un ${this.word}`
 }
 },
 {
 letter : "ف",
 begining : "فـ",
 middle : "ـفـ",
 end : "ـف",
 word: "Elephant",
 
 sentence(){
   `J'ai vu un ${this.word}`
 }
 },
 ]
// get begining letters
const begFilterLetters = alphabet.map(all => {
  return all.begining ;
})

const arrFourLettersFromAll = []
let mainLetter = document.querySelector('h2')
let myCards = document.querySelectorAll('.choice')
let myAnswers = document.querySelectorAll('.answer')

// const from checkValidateForAll
let shuffleArrayConst
let shuffleArrayConstAgain
let shuffleMain
let getOneLetterForMain

// Call all functions
 const Appl = {
   init: function(){
     Appl.getFourLettersFromAll(),
     Appl.myShuffleFromAll(),
     Appl.checkValidateForAll();
   },
 
     //1st = get randomly 4 letters from begFilterLetters
     getFourLettersFromAll : function(){
       while ( arrFourLettersFromAll.length < 4) {
         // shuffle letters of array
         const allRandomLetter = begFilterLetters[Math.floor(Math.random() * begFilterLetters.length)]
        // put in the arrFourLettersFromAll if it's not already there
         if (!arrFourLettersFromAll.includes(allRandomLetter)){
           arrFourLettersFromAll.push(allRandomLetter)
         }
       }
     },

     //2nd : put random letter in each card 
     myShuffleFromAll : function(){
       //shuffle letters
       function shuffleArray(arrFourLettersFromAll){
         return arrFourLettersFromAll.sort(()=> Math.random() - 0.5);
       }
       shuffleArrayConst = shuffleArray(arrFourLettersFromAll)
       
        // put letter in each card
        for (i = 0; i < shuffleArrayConst.length ; i++){
          myAnswers[i].innerText = shuffleArrayConst[i]
        }
          //  shuffle array again for main letter
          function shuffleArrayAgain(shuffleArrayConst){
            return shuffleArrayConst.sort(()=> Math.random() - 0.5);
          }
            shuffleArrayConstAgain = shuffleArrayAgain(shuffleArrayConst)
            // if one of them matches the first letter of the newArray, put it in as main letter
            shuffleMain = alphabet.find(i => i.begining == shuffleArrayConstAgain[0]);
            getOneLetterForMain = shuffleMain.letter
            mainLetter.innerText = getOneLetterForMain
    },

    //  3nd : refresh page only if mainLetter and one of the card letter are the same
     checkValidateForAll : function(){
      for (i= 0 ; i < 4 ; i++){
        console.log(myAnswers[i].textContent === shuffleArrayConstAgain[0])
        if( myAnswers[i].textContent === shuffleArrayConstAgain[0]){
          // get parent of answer and change bg-color
            let goodAnswer = myAnswers[i].parentElement;
              goodAnswer.addEventListener('click', function(){
              goodAnswer.style.backgroundColor = 'green'
              setTimeout(()=>{
                location.reload()
              },1500) 
            })
          
        }else{
          let badAnswer = myAnswers[i].parentElement
          badAnswer.addEventListener('click', function(){
            badAnswer.classList.toggle('bg-red')
          })
        }
      }
     }
     
   }
 
 
 document.addEventListener('DOMContentLoaded', Appl.init);