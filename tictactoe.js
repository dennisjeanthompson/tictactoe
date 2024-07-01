// so first the user's will like have to like I mean guess I guess
// oh I see like you can choose a column or something
// like input what column you want and choose if x or o
//so get's two user input 

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

person2(); 

let aso = "";
let aso2= "";
let dif = "";
let ale =false;


const array= [["a","b","c"],["d","e","f"],["g","h","i"]]
   async function person2()
   {

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
    
    const    aw = await getInput("player 1: ");
     
        
  
           //saq = await getInput('player 2: ')
    

        console.log("====================================================yeeest")
       // if( ale)
        //  {
         //   const as =await getInput("player 2:")
        //  }
       

  
 

   
    
    switch(aw)
    {
    case "1":
    array[0][0] ="*"
    console.log(array)
for(let i= 0; i < 3;i++)
{
  for(let j = 0; j< 3;j++)
    {
  
array[i][j] +=``

    
    }

 
}
console.log(array);
ale=true
person2()

   
  
    break;
    case "2":
     array[0][1] = "*"
     for(let i= 0; i < 3;i++)
{
  for(let j = 0; j< 3;j++)
    {
    
array[i][j] +=``
      
    
    }

 
}
console.log(array);

ale=true
person2()
   
     break;
     case "3":
       array[0][2] = "*"
       for(let i= 0; i < 3;i++)
        {
          for(let j = 0; j< 3;j++)
            {
           
        array[i][j] +=``
             
            
            }
        
         
        }
        console.log(array);
        
        ale=true
        person2()
           
     break
    case "4":
    array[1][0] = "*" 
    for(let i= 0; i < 3;i++)
      {
        for(let j = 0; j< 3;j++)
          {
          
      array[i][j] +=``
        
          
          }
      
       
      }
      console.log(array);
      
      ale=true
      person2()
         
    break
    case "5":
     array[1][1]  = "*"
     for(let i= 0; i < 3;i++)
      {
        for(let j = 0; j< 3;j++)
          {
        
      array[i][j] +=``
           
          
          }
      
       
      }
      console.log(array);
      
      ale=true
      person2()
         
     break
     case "6":
       array[1][2] + "*"
       break;
       case "7":
         array[2][0] = "*"
       break
    case "8":
     array[2][1] = "*"
     for(let i= 0; i < 3;i++)
      {
        for(let j = 0; j< 3;j++)
          {
        
      array[i][j] +=``
          
          
          }
      
       
      }
      console.log(array);
      
      ale=true
      person2()
         
     break
     case "9":
       array[2][2] = "*"
       for(let i= 0; i < 3;i++)
        {
          for(let j = 0; j< 3;j++)
            {
           
        array[i][j] +=``
            
            }
        
         
        }
        console.log(array);
        
        ale=true
        person2()
           
       break
    
    }
   















   }

   function smart (){}
