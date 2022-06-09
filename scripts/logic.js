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
          price: 50,
          count: 0,
          description: `The clicked is increased by ${this.value}`  
      }


      let  ultraBall= {
           value: 2,
           price: 250,
           count: 0,
           description: `The clicked is increased by ${this.value}`  
      }

    let  masterBall= {
           value: 5,
           price: 1500,
           count: 0,
           description: `The clicked is increased by ${this.value}`  
      }

    let  goldBall= {
            value: 10,
            price: 7500,
            count: 0,
            description: `The clicked is increased by ${this.value}`  
      }





   // ********************** STEP 10 OBJECT   ***********************
      // ______  Auto clicker ______
      // Once the auto clicker button is clicked the value of $magiKarp.count becomes is modified 
      // and increases the score according to give in time in the handler

      let magiKarp = {
          value: 2,
          price: 50,
          count: 0,
          description: `The magiKarp clicks the cookie automatically by ${this.value} `,
           
      } 


      
      let Snorlax = {
        value: 2,
        price: 150,
        count: 0,
        description: `The magiKarp clicks the cookie automatically by ${this.value} `,
         
    } 


      
      let Pickachu = {
        value: 2,
        price: 500,
        count: 0 ,
        description: `The magiKarp clicks the cookie automatically by ${this.value} `,
        
    } 


      
      let MewTwo = {
        value: 2,
        price: 1250,
        count: 0,
        description: `The magiKarp clicks the cookie automatically by ${this.value} `,
        
    } 




      function autoClick( ){
        if( magiKarp.count > 0 ){

          let total= magiKarp.count * magiKarp.value;
          autoIncrease(total)
          cookieCounter.innerHTML = score;  

          
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
    
        pokeButton.style.backgroundImage= "url('../images/pokeball.png')"
      }
    }


    function showBooster(){
      badge.style.visibility = "visible";

    }


    function callBooster(){
      booster(true);
      console.log("called booster");
      setTimeout(booster, 5000, false);

    }

    setInterval(showBooster, 10000);
  







//______________ HTML POINTERS ______________________

let cookieCounter = document.getElementById("cookie-counter");
let multiplierValue= document.getElementById("multiplierInfo");
let superBallPirce= document.getElementById("m-1-p");
let ultraBallPrice= document.getElementById("m-2-p");
let masterBallPrice= document.getElementById("m-3-p");
let goldBallPrice= document.getElementById("m-4-p");
let magiKarpPrice= document.getElementById("ac-1-p");
let SnorlaxPrice= document.getElementById("ac-2-p");
let pikachuPrice= document.getElementById("ac-3-p") ;
let mewTwoPrice= document.getElementById("ac-4-p") ;
let magiKarpCount= document.getElementById("ac-1-c");
let SnorlaxCount= document.getElementById("ac-2-c") ;
let pickachuCount= document.getElementById("ac-3-c")  ;
let mewTowCount= document.getElementById("ac-4-c")  ;
let badge= document.getElementById("badge-btn");
let pokeButton=  document.getElementById("cookie-btn");


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


 document.getElementById("badge-btn").addEventListener('click', () => {
  badge.style.visibility = "hidden";
  pokeButton.style.backgroundImage= "url('../images/bonusball.png')"
 
  callBooster()

})




//Multiplier button handler 
 document.getElementById("superball").addEventListener('click', () => {

//this adds 1 to the $multiplierAccu value which is later passed on to the main increase function



  if(score > multiplier.price){
    multiplierAccu += multiplier.value;
    score -= multiplier.price;
    multiplierValue.innerHTML= multiplierAccu;
    multiplier.price *= 1.20
    let roundPrice= Math.round(multiplier.price)
    superBallPirce.innerHTML = ` $ ${roundPrice} <br> Superball`
    increase(multiplierAccu);
  }
    


     
})



document.getElementById("ultraball").addEventListener('click', () => {

  //this adds 1 to the $multiplierAccu value which is later passed on to the main increase function
  
  
  
    if(score > ultraBall.price){
      multiplierAccu += ultraBall.value;
      score -= ultraBall.price;
      multiplierValue.innerHTML= multiplierAccu;
      
      ultraBall.price*= 1.20;
      let roundPrice= Math.round(ultraBall.price)
      ultraBallPrice.innerHTML = ` $ ${roundPrice} <br> Ultraball`
      increase(multiplierAccu);
    }
      
  
  
       
  })



  document.getElementById("masterball").addEventListener('click', () => {

    //this adds 1 to the $multiplierAccu value which is later passed on to the main increase function
    
    
    
      if(score > masterBall.price){
        multiplierAccu += masterBall.value;
        score -= masterBall.price;
        multiplierValue.innerHTML= multiplierAccu;
        masterBall.price*= 1.20;
        let roundPrice= Math.round(masterBall.price)
        masterBallPrice.innerHTML = ` $ ${roundPrice} <br> Masterball`
        increase(multiplierAccu);
      }
        
    
    
         
    })




    document.getElementById("goldball").addEventListener('click', () => {

      //this adds 1 to the $multiplierAccu value which is later passed on to the main increase function
      
      
      
      if(score > goldBall.price){
        multiplierAccu += goldBall.value;
        score -= goldBall.price;
        multiplierValue.innerHTML= multiplierAccu;
        goldBall.price*= 1.20;
        let roundPrice= Math.round(goldBall.price)
        goldBallPrice.innerHTML = ` $ ${roundPrice} <br> Goldball`
        increase(multiplierAccu);
      }
        
    
      
           
      })



  // ********************** STEP 10 AUTOCLICKHANDLER   ***********************

  document.getElementById("auto-clicker-1").addEventListener('click', () => {

  if( score > magiKarp.price){
      magiKarp.count += 1;
      score -= magiKarp.price;
      cookieCounter.innerHTML= Math.round(score)
      magiKarp.price *=  1.20;
      let roundPrice= Math.round(magiKarp.price);
      magiKarpPrice.innerHTML= " $ " + roundPrice;
      magiKarpCount.innerHTML= magiKarp.count;
      setInterval( autoClick, 3000)
      

  }
  })


  document.getElementById("auto-clicker-2").addEventListener('click', () => {

    if( score > Snorlax.price){
        Snorlax.count += 1;
        score -= Snorlax.price;
        cookieCounter.innerHTML= Math.round(score)
        Snorlax.price *= 1.20;
        let roundPrice= Math.round(magiKarp.price);
        SnorlaxPrice.innerHTML= " $ " + roundPrice;
        SnorlaxCount.innerHTML= Snorlax.count;
        setInterval( autoClick, 3000)
        
    
    }
    })

    

    document.getElementById("auto-clicker-3").addEventListener('click', () => {

      if( score > magiKarp.price){
          magiKarp.count += 1;
          score -= magiKarp.price;
          cookieCounter.innerHTML= Math.round(score)
          magiKarp.price *= 1.20;
          let roundPrice= Math.round(Pickachu.price);
          pikachuPrice.innerHTML= " $ " + roundPrice;
          pickachuCount.innerHTML= Pickachu.count;
          setInterval( autoClick, 3000)
          
      
      }
      })

      

      document.getElementById("auto-clicker-4").addEventListener('click', () => {

        if( score > MewTwo.price){
            MewTwo.count += 1;
            score -= MewTwo.price;
            cookieCounter.innerHTML= Math.round(score)
            MewTwo.price *= 1.20;
            let roundPrice= Math.round(MewTwo.price);
            mewTwoPrice.innerHTML= " $ " +roundPrice;
            mewTowCount.innerHTML= MewTwo.count;
            //setInterval( autoClick, 3000)
            
        
        }
        })
        

