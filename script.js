/*
*
* Cookie Clicker recreation
*
* ** Coded by Arnold, Felicien and Jaggar
*
*/

let multiplier= 1;
let score = 0;

//this function increases $score according to the value of the multiplier. Initially the multiplier is 1 
//once the multplier button is clicked the value of $multiplier will change accordingly
function increase(){
    score += multiplier; 

}



//click handler 
document.getElementById("run").addEventListener('click', () => {

 

 
    increase()
    console.log(score);
     
  
 })

//Multiplier button handler 
 document.getElementById("multiplier").addEventListener('click', () => {

 //this makes the click add two the value of score
  multiplier += 1;


     
})


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


