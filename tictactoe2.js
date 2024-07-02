const  readline = require("readline")
const r1= readline.createInterface({
    input:process.stdin,
    output:process.stout
})

function getInput(prompt)
{
    return new Promise ( (resolve) =>
    {
        r1.question(prompt,(input)=> {
            resolve(input);
        }) 
           
           

    })
}
let as = "";
let player1s = "";
let player2s = "";
//let player2s= "";
const array= [ [" "," "," "],[" "," "," "],[" "," "," "]]

//async function getInput1()
//{
//do{

   //  as  = await getInput("Enter player 1")
 //    console.log("you entered FIRST INPUT" + as);

   // }while( player1s !== "stop")
//}
 
   let init = 1;

async function player1()
{
    init++;
console.log("Enter Input 1(X): ");
 player1s = await getInput("hello player 1: ");
console.log("INPUT 1: " + player1s)
if(player1s === "stop")
    {
        console.log("Buy")
        return;
    }


       switch(player1s)
       {
       case "1":
  
   function prinTable()
   {

    console.log(
        `        [============]
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
      
       player1();
      
   break;
   
       
   
       }
else {
    array[0][0] = "X";
    prinTable();
    player2();
    break;
}

case "2":
    if(array[0][1] !== " ")
        {
         
          console.log(" Occupied slot . Try again")
          console.log(init+ " value if this the heck")
         
          player1();
         
      break;
      
          
      
          }
   else {
       array[0][1] = "X";
       prinTable();
       player2();
       break;
   }




   

    }

// slit that mf thing!!!!










}

async function player2()
{  
    init++;
       
  player2s= await getInput("hello PLayer 2: ");

    console.log("INPUT 2: " + player2s)
    if(player2s === "stop")
        {
            console.log("Buy")
            return;
        }
    player1()
}
// the fucking lie in this world should not end like this man what the hell
if(init % 2 !== 0)
    {player1();
    }
    else
    {
        player2();
    }





