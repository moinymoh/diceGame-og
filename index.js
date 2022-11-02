var ranNum1 = Math.floor(Math.random() * 6) + 1;
var images1 = "images/dice" + ranNum1 + ".png";
// CHANGING THE ATTRIBUTE OF THE IMAGE
document.querySelector(".img1").setAttribute("src", images1);

var ranNum2 = Math.floor(Math.random() * 6) + 1;
var images2 = "images/dice" + ranNum2 + ".png";
document.querySelector(".img2").setAttribute("src", images2);


if(ranNum1 > ranNum2){
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";
}else if(ranNum1 < ranNum2){
    document.querySelector("h1").textContent = "Player 2 Wins!🚩";   
}else{
    document.querySelector("h1").textContent = "Draw!";
}
