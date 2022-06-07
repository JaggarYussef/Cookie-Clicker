/*
*
* Cookie Clicker recreation
*
* ** Coded by Arnold, Felicien and Jaggar
*
*/


//_____________ SCRIPT VARIABLES___________________

 
let score = 0;
let instance;



//_____________    OBJECTS     ______________________
      // ______  Simple click multipler ______
    let  multiplier= {
          value: 1,
          price: 25,
          description: `The clicked is increased by ${this.value}`  
      }























//______________ HTML POINTERS ______________________

let cookieCounter = document.getElementById("cookie-counter");
let multiplierValue= document.getElementById("multiplierInfo");

//this function increases $score according to the value of the multiplier. Initially the multiplier is 1 
//once the multplier button is clicked the value of $multiplier will change accordingly
 function increase(){
    score += multiplier.value; 

}



//click handler 
document.getElementById("cookie-btn").addEventListener('click', () => {

    increase();
    cookieCounter.innerHTML = score;  
 })

 // ********************* STEP  5 PRICE OF MULTIPLIER ***********************

//Multiplier button handler 
 document.getElementById("multiplier").addEventListener('click', () => {

 //this makes the click add two the value of score and subtracts $mutliplier.Price from score
 //also displays the value of multiplier **** Multiplication de vos points par : $multiplier.value*****
 



  if(score > multiplier.price){
    multiplier.value += 1;
    score -= multiplier.price
    multiplier.price*= (score * 2);
    Math.round(multiplier.price); 
    cookieCounter.innerHTML = score;
    multiplierValue.innerHTML= multiplier.value;

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

