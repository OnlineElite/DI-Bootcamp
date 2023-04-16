
/*-----------------------DailyChallenge--------------------*/
var sentence = "your english it's not that bad! you surprised me";
var wordNot = sentence.indexOf("not");
var wordBad = sentence.indexOf("bad");

//console.log(wordBad +" and " + wordNot)

if(wordBad > wordNot){
    var change = sentence.replace("not that bad", "good");
    console.log(change)
}
else{
    console.log(sentence)
}