/*
*
* Cookie Clicker recreation
*
* ** Coded by Arnold, Felicien and Jaggar
*
*/


//_____________ SCRIPT VARIABLES___________________

 
let score = 0;
let multiplierAccu= 1;
let autoAccu= 0;
let instance;



console.log("starts")
console.log(new Date().getTime())


//_____________    OBJECTS     ______________________
      // ______  Simple click multipler ______
    let  multiplier= {
          value: 1,
          price: 25,
          count: 0,
          description: `The clicked is increased by ${this.value}`  
      }


      let  ultraBall= {
           value: 2,
           price: 75,
           count: 0,
           description: `The clicked is increased by ${this.value}`  
      }

    let  masterBall= {
           value: 5,
           price: 200,
           count: 0,
           description: `The clicked is increased by ${this.value}`  
      }

    let  goldBall= {
            value: 10,
            price: 400,
            count: 0,
            description: `The clicked is increased by ${this.value}`  
      }





   // ********************** STEP 10 OBJECT   ***********************
      // ______  Auto clicker ______
      // Once the auto clicker button is clicked the value of $magiKarp.count becomes is modified 
      // and increases the score according to give in time in the handler

      let magiKarp = {
          value: 2,
          price: 10,
          count: 0,
          description: `The magiKarp clicks the cookie automatically by ${this.value} `,
           
      } 


      
      let Snorlax = {
        value: 2,
        price: 10,
        count: 0,
        description: `The magiKarp clicks the cookie automatically by ${this.value} `,
         
    } 


      
      let Pickachu = {
        value: 2,
        price: 10,
        count: 0,
        description: `The magiKarp clicks the cookie automatically by ${this.value} `,
        
    } 


      
      let MewTwo = {
        value: 2,
        price: 10,
        count: 0,
        description: `The magiKarp clicks the cookie automatically by ${this.value} `,
        
    } 




      function autoClick( ){
        if( magiKarp.count > 0 ){

          let total= magiKarp.count * magiKarp.value;
          autoIncrease(total)
          cookieCounter.innerHTML = score;  

          console.log("# magiKarps "+ magiKarp.count  );
        }else{
            console.log("CALLED BUT NOT ENOUGH");
            console.log("this is score from magiKarp branch "  +  score );
            console.log("this is COUNT from magiKarp branch "  +  magiKarp.count );

        }
    }




    function booster(toggle){
      console.log(toggle);
      if(toggle){
        multiplierAccu += 200;
        console.log("booster now is on")
        console.log(new Date().getTime())
        multiplierValue.innerHTML=Math.round(multiplierAccu);

      }else{
        multiplierAccu -= 200;
        console.log("booster now is of")
        console.log(new Date().getTime())
        multiplierValue.innerHTML= Math.round(multiplierAccu);
      }
    }



    function callBooster(){
      booster(true);
      setTimeout(booster, 5000, false);

    }

    //  setInterval(callBooster, 10000);
  





//______________ HTML POINTERS ______________________

let cookieCounter = document.getElementById("cookie-counter");
let multiplierValue= document.getElementById("multiplierInfo");
let ultraBallPirce=document.getElementById("m-2-p").innerHTML;
let masterBallPrice=document.getElementById("m-3-p").innerHTML;
let goldBallPrice=document.getElementById("m-4-p").innerHTML;

//this function increases $score according to the value of the multiplier. Initially the multiplier is 1 
//once the multplier button is clicked the value of $multiplier will change accordingly
 function increase(value){
    score += value; 
    cookieCounter.innerHTML = Math.round(score);  

}

function autoIncrease(amount){
    score += amount;
    cookieCounter.innerHTML = Math.round(score);  
}



//click handler 
document.getElementById("cookie-btn").addEventListener('click', () => {

    increase(multiplierAccu);
 
 })




//Multiplier button handler 
 document.getElementById("multiplier-1").addEventListener('click', () => {

//this adds 1 to the $multiplierAccu value which is later passed on to the main increase function



  if(score > multiplier.price){
    multiplierAccu += multiplier.value;
    score -= multiplier.price;
    multiplierValue.innerHTML= multiplierAccu;
    multiplier.price*= 1.20
    increase(multiplierAccu);
  }
    


     
})



document.getElementById("multiplier-2").addEventListener('click', () => {

  //this adds 1 to the $multiplierAccu value which is later passed on to the main increase function
  
  
  
    if(score > ultraBall.price){
      multiplierAccu += ultraBall.value;
      score -= ultraBall.price;
      multiplierValue.innerHTML= multiplierAccu;
      
      ultraBall.price*= 1.20;
      ultraBallPirce= Math.round(ultraBall.price) ;
      increase(multiplierAccu);
    }
      
  
  
       
  })



  document.getElementById("multiplier-3").addEventListener('click', () => {

    //this adds 1 to the $multiplierAccu value which is later passed on to the main increase function
    
    
    
      if(score > masterBall.price){
        multiplierAccu += masterBall.value;
        score -= masterBall.price;
        multiplierValue.innerHTML= multiplierAccu;
        masterBall.price*= 1.20;
        masterBallPirce= Math.round(masterBall.price);
        increase(multiplierAccu);
      }
        
    
    
         
    })




    document.getElementById("multiplier-4").addEventListener('click', () => {

      //this adds 1 to the $multiplierAccu value which is later passed on to the main increase function
      
      
      
      if(score > goldBall.price){
        multiplierAccu += goldBall.value;
        score -= goldBall.price;
        multiplierValue.innerHTML= multiplierAccu;
        goldBall.price*= 1.20;
        goldBallPrice= Math.round(goldBall.price);
        increase(multiplierAccu);
      }
        
    
      
           
      })



// ********************** STEP 10 AUTOCLICKHANDLER   ***********************

document.getElementById("auto-clicker-1").addEventListener('click', () => {

if( score > magiKarp.price){
    console.log("exed");
    magiKarp.count += 1;
    console.log( "magiKarp count" + magiKarp.count );
    score -= magiKarp.price;
    magiKarp.price *= (score * 2);
    console.log( "price " + magiKarp.price );
    setInterval( autoClick, 3000)
    console.log( "this is score" + score );

}
})

