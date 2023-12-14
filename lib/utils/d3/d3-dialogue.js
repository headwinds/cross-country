/*
const phrase = "As the cleric healed the wounded...".split("");

    let sentence = "";
    
    function walkPhrase(phrase, n) {
      if (n === 0) {
        return;
      } else {
        return setTimeout( () => {
          const idx = phrase.length - n;
          const letter = phrase[idx];
          
          sentence = sentence + letter;
          
          const color = n % 2 === 0 ? "pink" : "red";
          updateResult("recursion", sentence, color);
          return walkPhrase(phrase, n - 1)
        }, 200)
      }
    }
    
    walkPhrase(phrase, phrase.length)

    
        */