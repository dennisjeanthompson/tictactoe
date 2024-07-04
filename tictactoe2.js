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

// SO  DRAW IS IT WILL CHECK IF ITS NULL AND CHECK IF ALL THE COLUMNS CONTAIN X OR O 
let as = "";
let player1s = "";
let player2s = "";
let askAgain = "";
let restartBot = false;
let pickyNemesis = "";
//let player2s= "";
const array= [ [" "," "," "],[" "," "," "],[" "," "," "]]

//async function getInput1()
//{
//do{

   //  as  = await getInput("Enter player 1")
 //    console.log("you entered FIRST INPUT" + as);

   // }while( player1s !== "stop")
//}
   // can choose  a skill level  they want to 
 



   let init = 1;
   let init1 = 1;

   async function pickEnemy()
   {
   console.log("PLAY WITH BOT(bot) OR HUMAN(hum)?");
    pickyNemesis = await getInput();
   if(pickyNemesis=== "bot")
   {
      restartBot = true; 
      platButton();
   }
   else{
    platButton();
   }
   
   }

let flat = "Do you want to CONTINUE playing ? (Y/N)"

function  botPlayer()
{
    // I am trying to make an AI player here like bruh using a random math 
    let botNum =  Math.floor(Math.random()*9)+1
  
console.log(botNum);
init++;
   
             switch(botNum)
             {
             case "1":
        
   
         if(array[0][0] !== " ")
           {
            
            
             botPlayer();
            
         break;
         
             
         
             }
      else {
          array[0][0] = "O";
        
          if( winnerChecker2() )
              {
                  restart()
                  break;
              }
      else
      {
          prinTable();
                  
          player1();
          break;
      }
      
            
               
             
         
      }
      
      case "2":
          if(array[0][1] !== " ")
              {
               
                
                botPlayer();
               
            break;
            
                
            
                }
         else {
          
             array[0][1] = "O";
             if( winnerChecker2() )
              {
                  restart()
                  break;
              }
      else
      {
          prinTable();
                  
          player1();
          break;
      }
      
         }
      case "3":
          if(array[0][2] !== " ")
              {
                botPlayer();
                break;
              }
      else{ array[0][2] = "O";
          if( winnerChecker2() )
              {
                  restart()
                  break;
              }
      else
      {
          prinTable();
                  
          player1();
          break;
      }
      
      
      }
      
      case "4":
          if(array[1][0] !== " ")
              {
                botPlayer();
                break;
              }
              else{ array[1][0] = "O";
                  if( winnerChecker2() )
                      {
                          restart()
                          break;
                      }
              else
              {
                  prinTable();
                          
                  player1();
                  break;
              }
              
              
              }
      case "5":
      
      if(array[1][1] !== " ")
          {
            botPlayer();
            break;
          }
          else{ array[1][1] = "O";
              if( winnerChecker2() )
                  {
                      restart()
                      break;
                  }
          else
          {
              prinTable();
                      
              player1();
              break;
          }
      
      
      
         
      
          }
 
      case "6":
      
      if(array[1][2] !== " ")
          {
            botPlayer();
            break;
          }
          else{ array[1][2] = "O";
              if( winnerChecker2() )
                  {
                      restart()
                      break;
                  }
          else
          {
              prinTable();
                      
              player1();
              break;
          }
      
      
         
      
          }
      
      case "7":
      
      if(array[2][0] !== " ")
          {
            botPlayer();
            break;
          }
          else{ array[2][0] = "O";
              if( winnerChecker2() )
                  {
                      restart()
                      break;
                  }
          else
          {
              prinTable();
                      
              player1();
              break;
          }
      
      
         
      
          }
      case "8":
      
      if(array[2][1] !== " ")
          {
            botPlayer();
            break;
          }
          else{ array[2][1] = "O";
              if( winnerChecker2() )
                  {
                      restart()
                      break;
                  }
          else
          {
              prinTable();
                      
              player1();
              break;
          }
      
      
         
      
          }
      case "9":
      
      if(array[2][2] !== " ")
          {
            botPlayer();
            break;
          }
          else{ array[2][2] = "O";
              if( winnerChecker2() )
                  {
                      restart()
                      break;
                  }
          else
          {
              prinTable();
                      
              player1();
              break;
          }
      
      
         
      
          }
      
}

}


   
  async function  restart()

  {
    restartBot = false;
   init = 1;
   init1 = 1;
    for(let i = 0; i<array.length;i++)
        {
            for(let j = 0 ; j < array[i].length;j++)
                {
                    array[i][j]= " ";
                }
        }
    console.log("restarted know you mf ------------------------------------------------------------------------------------------------")
    console.log("Do you want to CONTINUE playing ? (Y/N)");
    askAgain = await getInput(flat);
   // askAgain = await getInput('Do you want to CONTINUE playing ? (Y/N)');
    if(askAgain.match(/[A-Za-z]/g))
        {
            askAgain.toLowerCase();
 console.log("what you entered are some abc");
 if(askAgain=="y")
    {
       pickEnemy();
       player1();
        return;
    
    }
    else{
        console.log("GOOD BYE!!")
        restart();
       // process.exit(0);
        return;
    }
        }
        else
        {
 console.log("Only letters.retry again");
        }
    
 restart();

  }


  function winnerChecker2()
  {

   if( array[0][0]=== "O" && array[0][1]=== "O" && array[0][2]=== "O" || array[1][0]==="O" && array[1][1]==="O" && array[1][2]==="O"||
       array[2][0]==="O"&&array[2][1]==="O"&&array[2][2]==="O"|| array[0][0]=== "O"&&array[1][0]==="O" &&  array[2][0]==="O"
       ||array[0][1]=== "O" && array[1][1]==="O" &&array[2][1]==="O"|| array[0][2]=== "O" && array[1][2]==="O"&&array[2][2]==="O"||
       array[0][0]=== "O" &&array[1][1]==="O"&&array[2][2]==="O"||array[0][2]=== "O"&&array[1][1]==="O"&&  array[2][0]==="O"
   )
       {
        if(restartBot === true){
            console.log("=====================================")
            console.log("THE A.I. IS THE WINNER!!!")
            console.log("=====================================")
            return true;
        }
        else
        {
            console.log("=====================================")
            console.log("Player TWO IS THE WINNER!!!")
            console.log("=====================================")
            
            return true;
        }
    
       }
  }

  
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
      init1++;  
      console.log("INIT 1 VALUE: "+init1);
      if (init1 === 10)
        {
            console.log("IT'S A DRAW!!!")
            restart();
            return;
        
        }
  }
   function winnerChecker()
   {

    if( array[0][0]=== "X" && array[0][1]=== "X" && array[0][2]=== "X" || array[1][0]==="X" && array[1][1]==="X" && array[1][2]==="X"||
        array[2][0]==="X"&&array[2][1]==="X"&&array[2][2]==="X"|| array[0][0]=== "X"&&array[1][0]==="X" &&  array[2][0]==="X"
        ||array[0][1]=== "X" && array[1][1]==="X" &&array[2][1]==="X"|| array[0][2]=== "X" && array[1][2]==="X"&&array[2][2]==="X"||
        array[0][0]=== "X" &&array[1][1]==="X"&&array[2][2]==="X"||array[0][2]=== "X"&&array[1][1]==="X"&&  array[2][0]==="X"
    )
        {
            console.log("=====================================")
console.log("Player ONE IS THE WINNER!!!")
console.log("=====================================")

return true;
        }
   }
async function player1()
{
    init++;
    console.log("FINAL VALUE OF INIT" +  init)
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

   if(array[0][0] !== " ")
     {
      
       console.log(" Occupied slot . Try again")
       console.log(init+ " value if this the heck")
      
       player1();
      
   break;
   
       
   
       }
else {
    array[0][0] = "X";

//wait

    if( winnerChecker() )
        {
            restart()
            break;
        }
else
{
    
    prinTable();
 
    console.log("VALUE OF INTIT1 "  + init1);
    if(botPlayer === true)
        {
botPlayer()
break;           
        }
        else
        {
            player2();
            break;
        }
    
    
}

      
         
       
   
}

case "2":
    if(array[0][1] !== " ")
        {
         
          console.log(" Occupied slot . Try again ")
          console.log(init+ " value if this the heck ")
         
          player1();
         
      break;
      
          
      
          }
   else {
    
       array[0][1] = "X";
       if( winnerChecker() )
        {
            restart()
            break;
        }
else
{
    prinTable();
    if(botPlayer === true)
        {
botPlayer()
break;           
        }
        else
        {
            player2();
            break;
        }
}

   }
case "3":
    if(array[0][2] !== " ")
        {
            console.log(" Occupied slot . Try again")
         
         
          player1();
          break;
        }
else{ array[0][2] = "X";
    if( winnerChecker() )
        {
            restart()
            break;
        }
else
{
    prinTable();
            
    if(botPlayer === true)
        {
botPlayer()
break;           
        }
        else
        {
            player2();
            break;
        }
}


}

case "4":
    if(array[1][0] !== " ")
        {
            console.log(" Occupied slot . Try again")
         
         
          player1();
          break;
        }
        else{ array[1][0] = "X";
            if( winnerChecker() )
                {
                    restart()
                    break;
                }
        else
        {
            prinTable();
                    
            if(botPlayer === true)
                {
        botPlayer()
        break;           
                }
                else
                {
                    player2();
                    break;
                }
        }
        
        
        }
case "5":

if(array[1][1] !== " ")
    {
        console.log(" Occupied slot . Try again")
     
     
      player1();
      break;
    }
    else{ array[1][1] = "X";
        if( winnerChecker() )
            {
                restart()
                break;
            }
    else
    {
        prinTable();
                
        if(botPlayer === true)
            {
    botPlayer()
    break;           
            }
            else
            {
                player2();
                break;
            }
    }



   

    }

// slit that mf thing!!!!




case "6":

if(array[1][2] !== " ")
    {
        console.log(" Occupied slot . Try again")
     
     
      player1();
      break;
    }
    else{ array[1][2] = "X";
        if( winnerChecker() )
            {
                restart()
                break;
            }
    else
    {
        prinTable();
                
        if(botPlayer === true)
            {
    botPlayer()
    break;           
            }
            else
            {
                player2();
                break;
            }
    }


   

    }

case "7":

if(array[2][0] !== " ")
    {
        console.log(" Occupied slot . Try again")
     
     
      player1();
      break;
    }
    else{ array[2][0] = "X";
        if( winnerChecker() )
            {
                restart()
                break;
            }
    else
    {
        prinTable();
                
        if(botPlayer === true)
            {
    botPlayer()
    break;           
            }
            else
            {
                player2();
                break;
            }
    }


   

    }
case "8":

if(array[2][1] !== " ")
    {
        console.log(" Occupied slot . Try again")
     
     
      player1();
      break;
    }
    else{ array[2][1] = "X";
        if( winnerChecker() )
            {
                restart()
                break;
            }
    else
    {
        prinTable();
                
        if(botPlayer === true)
            {
    botPlayer()
    break;           
            }
            else
            {
                player2();
                break;
            }
    }


   

    }
case "9":

if(array[2][2] !== " ")
    {
        console.log(" Occupied slot . Try again")
     
     
      player1();
      break;
    }
    else{ array[2][2] = "X";
        if( winnerChecker() )
            {
                restart()
                break;
            }
    else
    {
        prinTable();
                
        if(botPlayer === true)
            {
    botPlayer()
    break;           
            }
            else
            {
                player2();
                break;
            }
    }


   

    }

    


//end here

}
}
async function player2()
{  
    init++;
       
  player2s= await getInput('hello PLayer 2: ');

    console.log("INPUT 2: " + player2s)
    if(player2s === "stop")
        {
            console.log("Buy")
            return;
        }
       
        
        
               switch(player2s)
               {
               case "1":
          
     
           if(array[0][0] !== " ")
             {
              
               console.log(" Occupied slot . Try again")
               console.log(init+ " value if this the heck")
              
               player2();
              
           break;
           
               
           
               }
        else {
            array[0][0] = "O";
          
            if( winnerChecker2() )
                {
                    restart()
                    break;
                }
        else
        {
            prinTable();
                    
            player1();
            break;
        }
        
              
                 
               
           
        }
        
        case "2":
            if(array[0][1] !== " ")
                {
                 
                  console.log(" Occupied slot . Try again ")
                  console.log(init+ " value if this the heck ")
                 
                  player2();
                 
              break;
              
                  
              
                  }
           else {
            
               array[0][1] = "O";
               if( winnerChecker2() )
                {
                    restart()
                    break;
                }
        else
        {
            prinTable();
                    
            player1();
            break;
        }
        
           }
        case "3":
            if(array[0][2] !== " ")
                {
                    console.log(" Occupied slot . Try again")
                 
                 
                  player2();
                  break;
                }
        else{ array[0][2] = "O";
            if( winnerChecker2() )
                {
                    restart()
                    break;
                }
        else
        {
            prinTable();
                    
            player1();
            break;
        }
        
        
        }
        
        case "4":
            if(array[1][0] !== " ")
                {
                    console.log(" Occupied slot . Try again")
                 
                 
                  player2();
                  break;
                }
                else{ array[1][0] = "O";
                    if( winnerChecker2() )
                        {
                            restart()
                            break;
                        }
                else
                {
                    prinTable();
                            
                    player1();
                    break;
                }
                
                
                }
        case "5":
        
        if(array[1][1] !== " ")
            {
                console.log(" Occupied slot . Try again")
             
             
              player2();
              break;
            }
            else{ array[1][1] = "O";
                if( winnerChecker2() )
                    {
                        restart()
                        break;
                    }
            else
            {
                prinTable();
                        
                player1();
                break;
            }
        
        
        
           
        
            }
        
        // slit that mf thing!!!!
        
        
        
        
        case "6":
        
        if(array[1][2] !== " ")
            {
                console.log(" Occupied slot . Try again")
             
             
              player2();
              break;
            }
            else{ array[1][2] = "O";
                if( winnerChecker2() )
                    {
                        restart()
                        break;
                    }
            else
            {
                prinTable();
                        
                player1();
                break;
            }
        
        
           
        
            }
        
        case "7":
        
        if(array[2][0] !== " ")
            {
                console.log(" Occupied slot . Try again")
             
             
              player2();
              break;
            }
            else{ array[2][0] = "O";
                if( winnerChecker2() )
                    {
                        restart()
                        break;
                    }
            else
            {
                prinTable();
                        
                player1();
                break;
            }
        
        
           
        
            }
        case "8":
        
        if(array[2][1] !== " ")
            {
                console.log(" Occupied slot . Try again")
             
             
              player2();
              break;
            }
            else{ array[2][1] = "O";
                if( winnerChecker2() )
                    {
                        restart()
                        break;
                    }
            else
            {
                prinTable();
                        
                player1();
                break;
            }
        
        
           
        
            }
        case "9":
        
        if(array[2][2] !== " ")
            {
                console.log(" Occupied slot . Try again")
             
             
              player2();
              break;
            }
            else{ array[2][2] = "O";
                if( winnerChecker2() )
                    {
                        restart()
                        break;
                    }
            else
            {
                prinTable();
                        
                player1();
                break;
            }
        
        
           
        
            }
        
}
}
// the fucking lie in this world should not end like this man what the hell

pickEnemy()
if(init % 2 !== 0)
    {
        player1();
    }
    else
    {
        if(restartBot===true)
            {
            botPlayer();
            }
            else{
                player2();
            }   
     
    }

function platButton()
{
    if(init % 2 !== 0)
        {
            player1();
        }
        else
        {
            if(restartBot===true)
                {
                botPlayer();
                }
                else{
                    player2();
                }   
         
        }
    

    
}
    

