/*
*
* Cookie Clicker recreation
*
* ** Coded by Arnold, Felicien and Jaggar
*
*/


//_____________ SCRIPT VARIABLES___________________


let score = 0;
let multiplierAccu = 1;
let autoAccu = 0;
let instance;






//_____________    OBJECTS     ______________________
// ______  Simple click multipler ______
let multiplier = {
  value: 1,
  price: 20,
  count: 0,
  description: `The clicked is increased by ${this.value}`
}


let ultraBall = {
  value: 2,
  price: 100,
  count: 0,
  description: `The clicked is increased by ${this.value}`
}

let masterBall = {
  value: 5,
  price: 300,
  count: 0,
  description: `The clicked is increased by ${this.value}`
}

let goldBall = {
  value: 10,
  price: 1250,
  count: 0,
  description: `The clicked is increased by ${this.value}`
}



//this function increases $score according to the value of the multiplier. Initially the multiplier is 1 
//once the multplier button is clicked the value of $multiplier will change accordingly
function increase(value) {
  score += value;
  cookieCounter.innerHTML = Math.round(score);

}

function autoIncrease(amount) {
  score += amount;
  cookieCounter.innerHTML = Math.round(score);
}




// ********************** STEP 10 OBJECT   ***********************
// ______  Auto clicker ______
// Once the auto clicker button is clicked the value of $magikarp.count becomes is modified 
// and increases the score according to give in time in the handler

let magikarp = {
  value: 2,
  price: 50,
  count: 0,
  description: `The magikarp clicks the cookie automatically by ${this.value} `,

}



let snorlax = {
  value: 4,
  price: 150,
  count: 0,
  description: `The magikarp clicks the cookie automatically by ${this.value} `,

}



let pikachu = {
  value: 10,
  price: 500,
  count: 0,
  description: `The magikarp clicks the cookie automatically by ${this.value} `,

}



let mewtwo = {
  value: 15,
  price: 1500,
  count: 0,
  description: `The magikarp clicks the cookie automatically by ${this.value} `,

}




function autoClick(autObject) {
  if (autObject.count > 0) {

    //let total= autObject.count * autObject.value;
    //autoAccu += total;

    autoIncrease(autoAccu);
    //cookieCounter.innerHTML = score;  


  }
}


const pokeballImage = "url('./images/pokeball.png')";
const superballImage = "url('./images/superball.png')";
const ultraballImage = "url('./images/ultraball.png')";
const masterballImage = "url('./images/masterball.png')";
const goldballImage = "url('./images/goldball.png')";

let currentBallImage = pokeballImage;


function booster(toggle) {

  if (toggle) {
    boostAlert();
    multiplierAccu += 20;

    multiplierValue.innerHTML = Math.round(multiplierAccu);

  } else {

    let getBoostAlert = document.getElementsByClassName("boostAlert");
    console.log(getBoostAlert);
    for (let boostAlert of getBoostAlert) {
      boostAlert.style.display = 'none';
    }

    multiplierAccu -= 20;

    multiplierValue.innerHTML = Math.round(multiplierAccu);

    pokeButton.style.backgroundImage = currentBallImage;
  }
}


function showBooster() {
  badge.style.visibility = "visible";

}


function callBooster() {
  booster(true);

  setTimeout(booster, 5000, false);

}

setInterval(showBooster, 15000);








//______________ HTML POINTERS ______________________

let cookieCounter = document.getElementById("cookie-counter");
let multiplierValue = document.getElementById("multiplierInfo");
let superBallPrice = document.getElementById("m-1-p");
let ultraBallPrice = document.getElementById("m-2-p");
let masterBallPrice = document.getElementById("m-3-p");
let goldBallPrice = document.getElementById("m-4-p");
let magikarpPrice = document.getElementById("ac-1-p");
let snorlaxPrice = document.getElementById("ac-2-p");
let pikachuPrice = document.getElementById("ac-3-p");
let mewtwoPrice = document.getElementById("ac-4-p");
let magikarpCount = document.getElementById("ac-1-c");
let snorlaxCount = document.getElementById("ac-2-c");
let pikachuCount = document.getElementById("ac-3-c");
let mewtwoCount = document.getElementById("ac-4-c");

let badge = document.getElementById("badge-btn");
let pokeButton = document.getElementById("cookie-btn");







//click handler 
document.getElementById("cookie-btn").addEventListener('click', () => {

  increase(multiplierAccu);

})


document.getElementById("badge-btn").addEventListener('click', () => {
  badge.style.visibility = "hidden";
  pokeButton.style.backgroundImage = "url('./images/bonusball.png')";
  callBooster()

})


function boostAlert() {
  const toast = document.createElement("div");
  const boostMessage = document.createTextNode('! Moon ball activated !');
  const infoCookies = document.getElementById("getAll");
  toast.appendChild(boostMessage);
  infoCookies.appendChild(toast);
  toast.style.backgroundColor = "#FF0000";
  toast.style.color = "white";
  toast.classList.add("rounded-3");
  toast.classList.add("boostAlert");


}

function pokeAlert(banner, timer) {
  const toast = document.createElement("div");
  const pokeMessage = document.createTextNode('Not enough $ok??dollar');
  toast.appendChild(pokeMessage);
  banner.appendChild(toast);
  toast.style.backgroundColor = "#FF0000";
  toast.style.color = "white";
  toast.classList.add("rounded-3");
  toast.classList.add("col-10");

  setTimeout(() => {

    toast.style.display = 'none';
  }, timer);
}

const multiBanner = document.getElementById("multiBanner");

//Multiplier button handler 
document.getElementById("superball").addEventListener('click', () => {

  //this adds 1 to the $multiplierAccu value which is later passed on to the main increase function



  if (score > multiplier.price) {
    multiplierAccu += multiplier.value;
    score -= multiplier.price;
    multiplierValue.innerHTML = multiplierAccu;
    multiplier.price *= 1.20
    let roundPrice = Math.round(multiplier.price)
    superBallPrice.innerHTML = ` $ ${roundPrice} <br> Superball`
    increase(multiplierAccu);

    if (ultraBall.count>0||masterBall.count>0||goldBall.count>0) {
      return 
    }


    currentBallImage = superballImage;
    pokeButton.style.backgroundImage = "url('./images/superball.png')";


  }
  else if (score < multiplier.price) {

    pokeAlert(multiBanner, 2500)

  }




})



document.getElementById("ultraball").addEventListener('click', () => {

  //this adds 1 to the $multiplierAccu value which is later passed on to the main increase function



  if (score > ultraBall.price) {
    ultraBall.count += 1;
    multiplierAccu += ultraBall.value;
    score -= ultraBall.price;
    multiplierValue.innerHTML = multiplierAccu;

    ultraBall.price *= 1.20;
    let roundPrice = Math.round(ultraBall.price)
    ultraBallPrice.innerHTML = ` $ ${roundPrice} <br> Ultraball`
    increase(multiplierAccu);

    if (masterBall.count>0||goldBall.count>0) {
      return 
    }

    pokeButton.style.backgroundImage = "url('./images/ultraball.png')";
    currentBallImage = ultraballImage;
  }
  else if (score < ultraBall.price) {

    pokeAlert(multiBanner, 2500)

  }




})



document.getElementById("masterball").addEventListener('click', () => {

  //this adds 1 to the $multiplierAccu value which is later passed on to the main increase function



  if (score > masterBall.price) {
    masterBall.count += 1;
    multiplierAccu += masterBall.value;
    score -= masterBall.price;
    multiplierValue.innerHTML = multiplierAccu;
    masterBall.price *= 1.20;
    let roundPrice = Math.round(masterBall.price)
    masterBallPrice.innerHTML = ` $ ${roundPrice} <br> Masterball`
    increase(multiplierAccu);

    if (goldBall.count>0) {
      return 
    }

    pokeButton.style.backgroundImage = "url('./images/masterball.png')";
    currentBallImage = masterballImage;
  }
  else if (score < masterBall.price) {

    pokeAlert(multiBanner, 2500)

  }




})




document.getElementById("goldball").addEventListener('click', () => {

  //this adds 1 to the $multiplierAccu value which is later passed on to the main increase function



  if (score > goldBall.price) {
    goldBall.count += 1;
    multiplierAccu += goldBall.value;
    score -= goldBall.price;
    multiplierValue.innerHTML = multiplierAccu;
    goldBall.price *= 1.20;
    let roundPrice = Math.round(goldBall.price)
    goldBallPrice.innerHTML = ` $ ${roundPrice} <br> Goldball`
    increase(multiplierAccu);
    pokeButton.style.backgroundImage = "url('./images/goldball.png')";
    currentBallImage = goldballImage;

  }
  else if (score < goldBall.price) {

    pokeAlert(multiBanner, 2500)

  }




})



// ********************** STEP 10 AUTOCLICKHANDLER   ***********************

document.getElementById("auto-clicker-1").addEventListener('click', () => {

  if (score > magikarp.price) {
    magikarp.count += 1;

    let total = magikarp.count * magikarp.value;
    autoAccu += total;
    score -= magikarp.price;
    cookieCounter.innerHTML = Math.round(score)
    magikarp.price *= 1.20;
    let roundPrice = Math.round(magikarp.price);
    magikarpPrice.innerHTML = " $ " + roundPrice;
    magikarpCount.innerHTML = magikarp.count;
    setInterval(autoClick, 5000, magikarp)


  }
  else if (score < magikarp.price) {

    pokeAlert(autoBanner, 2500)

  }
})


document.getElementById("auto-clicker-2").addEventListener('click', () => {

  if (score > snorlax.price) {
    snorlax.count += 1;
    let total = snorlax.count * snorlax.value;
    autoAccu += total;
    score -= snorlax.price;
    cookieCounter.innerHTML = Math.round(score)
    snorlax.price *= 1.20;
    let roundPrice = Math.round(snorlax.price);
    snorlaxPrice.innerHTML = " $ " + roundPrice;
    snorlaxCount.innerHTML = snorlax.count;
    setInterval(autoClick, 3000, snorlax)


  }
  else if (score < snorlax.price) {

    pokeAlert(autoBanner, 2500)

  }
})



document.getElementById("auto-clicker-3").addEventListener('click', () => {

  if (score > pikachu.price) {
    pikachu.count += 1;
    let total = pikachu.count * pikachu.value;
    autoAccu += total;
    score -= pikachu.price;
    cookieCounter.innerHTML = Math.round(score)
    pikachu.price *= 1.20;
    let roundPrice = Math.round(pikachu.price);
    pikachuPrice.innerHTML = " $ " + roundPrice;
    pikachuCount.innerHTML = pikachu.count;
    setInterval(autoClick, 3000, pikachu)


  }
  else if (score < pikachu.price) {

    pokeAlert(autoBanner, 2500)

  }
})



document.getElementById("auto-clicker-4").addEventListener('click', () => {

  if (score > mewtwo.price) {
    mewtwo.count += 1;
    let total = mewtwo.count * mewtwo.value;
    autoAccu += total;
    score -= mewtwo.price;
    cookieCounter.innerHTML = Math.round(score)
    mewtwo.price *= 1.20;
    let roundPrice = Math.round(mewtwo.price);
    mewtwoPrice.innerHTML = " $ " + roundPrice;
    mewtwoCount.innerHTML = mewtwo.count;
    setInterval(autoClick, 3000, mewtwo)


  }
  else if (score < mewtwo.price) {

    pokeAlert(autoBanner, 2500)

  }
})


