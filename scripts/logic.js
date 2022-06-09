/*
*
* Cookie Clicker recreation
*
* ** Coded by Arnold, Felicien and Jaggar
*
*/


//_____________ SCRIPT VARIABLES___________________

 
let score = 0;
// let instance;



//_____________    OBJECTS     ______________________
      // ______  Simple click multipler ______
    let  multiplier= {
          value: 1,
          price: 5,
          description: `The clicked is increased by ${this.value}`  
      }


   // ********************** STEP 10 OBJECT   ***********************
      // ______  Auto clicker ______
      // Once the auto clicker button is clicked the value of $cursor.count becomes is modified 
      // and increases the score according to give in time in the handler

      let cursor = {
          value: 1,
          price: 10,
          count: 0,
          description: `The cursor clicks the cookie automatically by ${this.value} `,
           
      } 


 
      function autoClick( ){
        if( cursor.count > 0 ){
          let total= cursor.count * cursor.value;
          autoIncrease(total)

   
        }
    }



//______________ HTML POINTERS ______________________

let cookieCounter = document.getElementById("cookie-counter");
let multiplierValue= document.getElementById("multiplierInfo");

//this function increases $score according to the value of the multiplier. Initially the multiplier is 1 
//once the multplier button is clicked the value of $multiplier will change accordingly
 function increase(){
    score += multiplier.value; 
    cookieCounter.innerHTML = Math.round(score);  

}

function autoIncrease(amount){
    score += amount;
    cookieCounter.innerHTML = Math.round(score);
}



//click handler 
document.getElementById("cookie-btn").addEventListener('click', () => {

    increase();
 
 })




 // ********************* STEP  5 PRICE OF MULTIPLIER         ***********************
 // ********************* STEP  7 DISPLAY  MULTIPLIER COUNTER ***********************
 // ********************* STEP  8 PRICE OF MULTIPLIER         ***********************
 // ********************* STEP  9 MODIFY PRICE OF MULTIPLIER  ***********************

//Multiplier button handler 
 document.getElementById("multiplier").addEventListener('click', () => {

//this makes the click add two the value of score and subtracts $mutliplier.Price from score
//also displays the value of multiplier **** Multiplication de vos points par : $multiplier.value*****
 



  if(score > multiplier.price){
    multiplier.value += 1;
    score -= multiplier.price
    multiplier.price*= 1.20;

  
   // cookieCounter.innerHTML = score;
    multiplierValue.innerHTML= multiplier.value;
  }

  
})



// ********************** STEP 10 AUTOCLICKHANDLER   ***********************

document.getElementById("auto-clicker-1").addEventListener('click', () => {

if( score > cursor.price){
    cursor.count += 1;
    score -= cursor.price;
    cursor.price *= 1.20;
    setInterval( autoClick, 10000)
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

