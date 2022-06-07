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


   // ********************** STEP 10 OBJECT   ***********************
      // ______  Auto clicker ______
      // Once the auto clicker button is clicked the value of $cursor.count becomes is modified 
      // and increases the score according to give in time in the handler

      let cursor = {
          value: 2,
          price: 10,
          count: 0,
          description: `The cursor clicks the cookie automatically by ${this.value} `,
           
      } 



      function autoClick( ){
        if( cursor.count > 0 ){

          let total= cursor.count * cursor.value;
          autoIncrease(total)
          cookieCounter.innerHTML = score;  

          console.log("# cursors "+ cursor.count  );
        }else{
            console.log("CALLED BUT NOT ENOUGH");
            console.log("this is score from cursor branch "  +  score );
            console.log("this is COUNT from cursor branch "  +  cursor.count );

        }
    }










      















//______________ HTML POINTERS ______________________

let cookieCounter = document.getElementById("cookie-counter");
let multiplierValue= document.getElementById("multiplierInfo");

//this function increases $score according to the value of the multiplier. Initially the multiplier is 1 
//once the multplier button is clicked the value of $multiplier will change accordingly
 function increase(){
    score += multiplier.value; 
    cookieCounter.innerHTML = score;  

}

function autoIncrease(amount){
    score += amount;
    cookieCounter.innerHTML = score;  
}



//click handler 
document.getElementById("cookie-btn").addEventListener('click', () => {

    increase();
 
 })









 // ********************* STEP  5 PRICE OF MULTIPLIER         ***********************
 // ********************* STEP  7 DISPLAY  MULTIPLIER COUNTER ***********************
 // ********************* STEP  8 PRICE OF MULTIPLIER         ***********************
 // ********************* STEP 9 MODIFY PRICE OF MULTIPLIER   ***********************

//Multiplier button handler 
 document.getElementById("multiplier").addEventListener('click', () => {

//this makes the click add two the value of score and subtracts $mutliplier.Price from score
//also displays the value of multiplier **** Multiplication de vos points par : $multiplier.value*****
 



  if(score > multiplier.price){
    multiplier.value += 1;
    score -= multiplier.price
    multiplier.price*= (score * 2);
    
    Math.round(multiplier.price); 
    Math.round(score); 
  
    cookieCounter.innerHTML = score;
    multiplierValue.innerHTML= multiplier.value;

  }else{
    console.log("this is price of " + multiplier.price);
  }




     
})



// ********************** STEP 10 AUTOCLICKHANDLER   ***********************

document.getElementById("auto-clicker-1").addEventListener('click', () => {

if( score > cursor.price){
    console.log("exed");
    cursor.count += 1;
    console.log( "cursor count" + cursor.count );
    score -= cursor.price;
    cursor.price *= (score * 2);
    console.log( "price " + cursor.price );
    setInterval( autoClick, 3000)
    console.log( "this is score" + score );

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


