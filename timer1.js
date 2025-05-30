const timer = function(number) {
  if(number === "" || isNaN(number) || number < 0) {
    return null
  } else if(number){
    setTimeout(()=> {
    process.stdout.write("\x07");
    }, number)
  }
}

timer(2000)

