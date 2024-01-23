var randomNumber1 = Math.floor(Math.random() * 6 ) + 1 ;
 var randomDiceImage = "dice" + randomNumber1 + ".png";
 var randomImageSource = "image/" + randomDiceImage ;
 var image1 = document.querySelectorAll("img")[0] ;
 image1.setAttribute("src",randomImageSource);

 var randomNumber2 = Math.floor(Math.random() * 6 ) + 1 ;
  var randomImageSource2 = "image/dice" + randomNumber2 + ".png";
 document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)
 
 var randomNumber3 = Math.floor(Math.random() * 6 ) + 1 ;
  var randomImageSource3 = "image/dice" + randomNumber3 + ".png";
 document.querySelectorAll("img")[2].setAttribute("src", randomImageSource3)

 if((randomNumber1 === randomNumber2 && randomNumber2 ===  randomNumber3)){
  document.querySelector("h1").innerHTML="JACKPOT...!!!";
 }
 else if(randomNumber1 === randomNumber2 || randomNumber2 === randomNumber3 || randomNumber1 === randomNumber3){
  document.querySelector("h1").innerHTML="Double Wins....";
 }
 else{
  document.querySelector("h1").innerHTML="Single Win!";
 }