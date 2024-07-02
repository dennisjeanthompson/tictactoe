// so first the user's will like have to like I mean guess I guess
// oh I see like you can choose a column or something
// like input what column you want and choose if x or o
//so get's two user input 
// do while maybe ????? 
// yeah could be
const readline = require("readline");

const r2 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function getInput(prompt)
{
return new Promise((resolve)=>
{
  r2.question(prompt,(input)=>{
    resolve(input)
  })
})
}

//main()

console.log("CHOOSE NUMBER (1-9)");

    console.log("1.upleft");
    console.log("2.upmidle");
    console.log("3.upright");
    console.log("4.midleleft");
    console.log("5.midle");
    console.log("6.midleright");
    console.log("7.bottomleft");
    console.log("8.bottommiddle");
    console.log("9.bottomright");

let aso = "";
let aso2= "";
let dif = "";
let ale =true;
let ale2= false;
let ano = true;
let init = 1 ;
let awz  =""
let play2z = ""
const array= [ [" "," "," "],[" "," "," "],[" "," "," "]]
   async function person2()
   {   do { console.log(ano + "value ano")
    let ale =true;
    ;//odd
   
    if(init % 2 !== 0)
      {
        awz = await getInput("player 1: ")

      }
  else{
   //even // make this a function may be idk really

  
  }

  console.log("value init" + init);
   // async function ss()
    // {
     // if(ale2 === true)
       // {
          
       // }
      

   //  }
 

           //saq = await getInput('player 2: ')
    

        console.log("====================================================yeeest")
       // if( ale)
        //  {
         //   const as =await getInput("player 2:")
        //  }
       // good after noon sir im gonna rape you 



async function player2000()
{
play2z= await getInput('player 2: ')
//ended here

}
let assz = play2z;

    switch(awz|| assz )
    {
    case "1":
    
 
//array.forEach(subA => {
 // console.log(array[0][0] + " s " + array[0][1]);
 
//})


//odd even number wait this is fun
//function checkNull()
//{

//}
//checkNull()

function prinTable()
{
 
 console.log("value init" + init);
  console.log(
     `    [=============]
    :| ${array[0][0]} | ${array[0][1]} | ${array[0][2]} |:
     -------------
    :| ${array[1][0]} | ${array[1][1]} | ${array[1][2]} |:
     ------------- 
    :| ${array[2][0]} | ${array[2][1]} | ${array[2][2]} |:
    [=============]
    `
    )

}
if(array[0][0] !== " ")
  {
   
    console.log(" Occupied slot . Try again")
    console.log(init+ " value if this the heck")
   
    
   
break;

    
  }
  else{
    if(init % 2 == 0  )
      {
       
        array[0][0] ="O"
       
        init++;
       
        player2000();
      break;
        console.log("sssssssssssssssssssssssssssssssssssssssssssss")
        aw= ""
        play2= ""
        ale = false;
      }
     
      else if (init % 2 !== 0 ){
    array[0][0] ="X"
    prinTable()
    init++
   
    
    player2000()
    break;
        aw =""
    play2 = ""
      }
  }


  



  
    break;
    case "2":
      if(array[0][1] === "X" || array[0][1] === "O")
        {
          console.log("Occupied slot. Try again")
          console.log(init+ " value if this the heck----------------------")
          prinTable()
          person2();
         
         
        }
      else if(init % 2 == 0  && ale === true)
        {
         
          array[0][1] ="O"
          prinTable()
          init++;
         ale = false
          person2()
        }
       
        else if (init % 2 !== 0 && ale === true){
   array[0][1] = "X"
      prinTable()
      init++
      ale =false 
      
      person2()
      
        }
  
    
   
   
     break;
     case "3":
      
      
     if(array[0][1] === "X" || array[0][1] === "O")
      {
        console.log("Occupied slot. Try again")
        person2();
       
       
      }

      if(init % 2 == 0 )
        {
         
          array[0][2] ="O"
          prinTable()
          init++;
         
          person2()
        }
       
        else{
      array[0][2] ="X"
      prinTable()
      init++
      
     
      person2()
      
        }
      
      
     
     break;
    case "4":
      if(array[1][0] === "X" || array[1][0] === "O")
        {
          console.log("Occupied slot. Try again")
          person2();
         
         
        }
      if(init % 2 == 0 )
        {
         
          array[1][0] ="O"
          prinTable()
          init++;
         
          person2()
        }
       
        else{
      array[1][0] ="X"
      prinTable()
      init++
      
     
      person2()
      
        }
 
         
    break;
    case "5":
      if(array[1][1] === "X" || array[1][1] === "O")
        {
          console.log("Occupied slot. Try again")
          person2();
         
         
        }
      if(init % 2 == 0 )
        {
         
          array[1][1] ="O"
          prinTable()
          init++;
         
          person2()
        }
       
        else{
      array[1][1] ="X"
      prinTable()
      init++
      
     
      person2()
      
        }
    
         
     break;
     case "6":
      if(array[1][2] === "X" || array[1][2] === "O")
        {
          console.log("Occupied slot. Try again")
          person2();
         
         
        }
      if(init % 2 == 0 )
        {
         
          array[1][2] ="O"
          prinTable()
          init++;
          
          person2()
        }
       
        else{
      array[1][2] ="X"
      prinTable()
      init++
      
     
      person2()
      
        }


       break;
       case "7":
        if(array[2][0] === "X" || array[2][0] === "O")
          {
            console.log("Occupied slot. Try again")
            person2();
           
           
          }
        if(init % 2 == 0 )
          {
           
            array[2][0] ="O"
            prinTable()
            init++;
            
            person2()
          }
         
          else{
        array[2][0] ="X"
        prinTable()
        init++
        
        ale2 = true;
        person2()
        
          }
      
       break;
    case "8":
      if(array[2][1] === "X" || array[2][1] === "O")
        {
          console.log("Occupied slot. Try again")
          person2();
         
         
        }
      if(init % 2 == 0 )
        {
         
          array[2][1] ="O"
          prinTable()
          init++;
          ale2= true;
          person2()
        }
       
        else{
      array[2][1] ="X"
      prinTable()
      init++
      
      ale2 = true;
      person2()
      
        }
    

         
     break;
     case "9":
      if(array[2][2] === "X" || array[2][2] === "O")
        {
          console.log("Occupied slot. Try again")
          person2();
         
         
        }
      if(init % 2 == 0 )
        {
         
          array[2][2] ="O"
          prinTable()
          init++;
          ale2= true;
          person2()
        }
       
        else{
      array[2][2] ="X"
      prinTable()
      init++
      
      ale2 = true;
      person2()
      
        }
    

     
           
       break;
 
       

    }
  }while(ano === true)    
  
  }
















  person2(); 

   


