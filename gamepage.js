// random value generated
  var y=Math.floor(Math.random() * 10+1);
// counting the number of guesses
// made for correct Guess

var guess=1;
function submit(){
    playername=localStorage.getItem("player_name")

  
// function for number guessed by user   
var x= document.getElementById("guessField").value ; 
if(x==y){
    alert("CONGRATS "+playername+" YOU GUESSED IT RIGHT IN "+guess+" GUESSES");
    guess=1;
}
else if(x>y){
guess++;
alert("OOPS SORRY!!TRY A SMALLER NUMBER")
}
else{
guess++;
alert("OOPS SORRY!! TRY A GRATER NUMBER ")
}
}
function playAgain(){
     y=Math.floor(Math.random() * 10+1);
}