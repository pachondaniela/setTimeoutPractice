
const spinner = function(){
  const array1 = ['|' , '/' , '-' , '\\' , '|' ]
  counter = 0
  for(const char of array1){
      counter = counter + 100
      setTimeout(() => {
        process.stdout.write('\r' + char)
      }, counter)}
  
}

spinner()