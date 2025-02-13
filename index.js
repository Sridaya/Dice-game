document.addEventListener("DOMContentLoaded", function () {
    // Generate a random number between 1 and 6
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  
    // Select the first dice image (Player 1)
    let diceImage1 = document.querySelector(".img1");
    let diceImage2 = document.querySelector(".img2");

    let header = document.querySelector("h1");
  
    // Change the dice image if the element exists
    if (diceImage1) {
      diceImage1.setAttribute("src", `./images/dice${randomNumber1}.png`);
    } 
    if (diceImage2) {
        diceImage2.setAttribute("src", `./images/dice${randomNumber2}.png`);
      } 

      if(randomNumber1>randomNumber2){
        header.innerHTML="🚩 Player1 Wins!";
      }
      else if(randomNumber1<randomNumber2){
        header.innerHTML="Player2 Wins! 🚩";
      }
      else{
        header.innerHTML="It's Draw! 🤝";
      }
  });
  