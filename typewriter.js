//to animate the sentence, we need to loop through the characters


const animation = function (sentence) {
  let counter = 0
  for(const char of sentence){
      counter = counter + 50
      setTimeout(() => {
        process.stdout.write(char)
      }, counter)}

      console.log("/n")
  }

animation("hello there from lighthouse labs!!")
// animation("I love my boyfriend, I am going to marry him <3")