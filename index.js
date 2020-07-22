var player1=prompt("Enter Player 1 Name");
var player2=prompt("Enter Player 2 Name");
document.getElementById("P1").innerHTML=player1;
document.getElementById("P2").innerHTML=player2;
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/"+randomDiceImage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomNumber2 + ".png";

var randomImageSource1 = "images/"+randomDiceImage1;

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource1);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML=(" 🚩"+ player1 +" Wins!")
}
else if (randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML=(" 🚩"+ player2 + " Wins!")
}
else
{
    document.querySelector("h1").innerHTML=(" It's a Draw!")
}
