/*
*
* Cookie Clicker recreation
*
* ** Coded by Arnold, Felicien and Jaggar
*
*/


//_____________ SCRIPT VARIABLES___________________

let multiplier= 1;
let score = 0;
let instance;


//______________ HTML POINTERS ______________________

let cookieCounter = document.getElementById("cookie-counter");
let multiplierValue= document.getElementById("multiplierInfo");

//this function increases $score according to the value of the multiplier. Initially the multiplier is 1 
//once the multplier button is clicked the value of $multiplier will change accordingly
 function increase(){
    score += multiplier; 

}



//click handler 
document.getElementById("cookie-btn").addEventListener('click', () => {

 

 
    increase();
    console.log(score);
    cookieCounter.innerHTML = score;
     
  
 })

 // ********************* STEP  5 PRICE OF MULTIPLIER ***********************

//Multiplier button handler 
 document.getElementById("multiplier").addEventListener('click', () => {

 //this makes the click add two the value of score and subtracts $Price from score
 //also displays the value of multiplier **** Multiplication de vos points par : $multiplier *****
  let price = 25;


  console.log(" this is score");
  console.log(score);

  if(score > 25){
    multiplier += 1;
    score -= price;
    cookieCounter.innerHTML = score;
    multiplierValue.innerHTML= multiplier;
    console.log(" branch exed");
  }


     
})


// class Counter {
//     constructor(){
//         if (instance){
//             throw new Error("Already exists")
//         }
//         instance= this;
//     }

//     getInstance(){
//         return this;
//     }

//     getCount(){
//         return score;
//     }

//     increment(){
//         return ++score;
//     }

//     subtract(amount){
         
//         return score -= amount;
//     }
// }


/*
class Multiplier{
    constructor(name, price, description, perk, clickable){
        this.name= name;
        this.price= price;
        this.description= description;
        this.clickable= clickable;
    }
    
}
 */


