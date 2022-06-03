/*
*
* Cookie Clicker recreation
*
* ** Coded by Arnold, Felicien and Jaggar
*
*/


let score = 0;
let cookieCounter = document.getElementById("cookie-counter");

document.getElementById("cookie-btn").addEventListener('click', () => {

    //increase score by one
    score++
    console.log(score);
    cookieCounter.innerHTML = score;
})



 //______________________________________________BONUS_______________________________


 //______________________________________________DISPLAY_______________________________
