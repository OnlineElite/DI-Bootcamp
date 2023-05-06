/*--------------------DailyChallenge---------------------*/

var words = prompt("Enter a several words :")
var strArray = words.split(' ')
var lengt = 0;
var FLStar = '';

function longerWord() {

   for (let i in strArray) {

      if (strArray[i].length > lengt) {
         lengt = strArray[i].length;
      }
      else {
         continue;
      }
   }
   for (let i = 0; i < Number(lengt) + 4; i++) {
      FLStar += "*";
   }
   console.log(FLStar);
}
longerWord();

for (let k in strArray) {
   var spaces = '';
   var m = strArray[k].length
   for (let t = 0; t < (Number(lengt) - Number(m)); t++) {
      spaces += " ";
   }
   var comp = "* " + strArray[k] + spaces + " *";
   console.log(comp)
   FLStar = '';
}

longerWord();



