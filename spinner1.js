process.stdout.write('hello from spinner1.js...\rheyyy\n') // \r replaces the first few characters with whatever is written after. 

setTimeout(() => {
  process.stdout.write('\r| ')
},100);



setTimeout(() => {
  process.stdout.write('\r/ ')
},300);


setTimeout(() => {
  process.stdout.write('\r- ')
},500);



setTimeout(() => {
  // Need to escape the backslash since it is a special character
  process.stdout.write('\r\\ ')
},700);

setTimeout(() => {
  process.stdout.write('\r| ')
},900);



setTimeout(() => {
  process.stdout.write('\r/ ')
},1100);


setTimeout(() => {
  process.stdout.write('\r- ')
},1300);



setTimeout(() => {
  // Need to escape the backslash since it is a special character
  process.stdout.write('\r\\ ')
},1500);

setTimeout(() => {
  process.stdout.write('\r| \n')
},1700);
