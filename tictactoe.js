// so first the user's will like have to like I mean guess I guess
// oh I see like you can choose a column or something
// like input what column you want and choose if x or o
//so get's two user input 

const readline = require("readline");

const r2 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function getInputz(prompt)
{
return new Promise((resolve)=>
{
  r2.question(prompt,(input)=>{
    resolve(input)
  })
})
}

//main()



let aso = "";
let aso2= "";
let dif = "";
let ale =false;
   async function person()
   {
  
    
    if(ale=== true)
      {
        const aw = await getInputz("enter man");
        console.log(aw +"=====================================================yeeest")

      }
 

    r2.question("enter",(input) => {
    
    
    




        console.log(`You've entered ${input}`);
aso = input;





person2()

    }); 
   }

   function person2()
   {
    const array= [["a","b","c"],["d","e","f"],["g","h","i"]]
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
  
r2.question("enter input",(input2)=>
{
  
console.log("you ENTERED" + input2);
aso2 = input2;

//console.log(aso+"sasdasdasdasdsasdasd");
//what da fk is going on here mhan come on like im so gay about this i need a drug called drug lord or drug leader
//r2.close()
switch(input2)
{
case "1":
array[0][0] ="*"
console.log(array)
ale = true;
main();

case "2":
 array[0][1] ="*"
 break;
 case "3":
   array[0][2] = "*"
 break
case "4":
array[1][0] ="*" 
break
case "5":
 array[1][1]  ="*"
 break
 case "6":
   array[1][2] +"*"
   break;
   case "7":
     array[2][0]="*"
   break
case "8":
 array[2][1] ="*"
 break
 case "9":
   array[2][2]="*"
   break

}
ass()


}
)    
   }
 // I wasn't super uncomfortable with it like its death

   person(); //not call this mf for know
function ass()
{ 
   


    process.exit(0);

}
function player2()
  {
   
   

    r2.question("input player 2:",(input) =>
    {
      console.log("sssss" + input)
    })


    console.log("hack");
    person2();
  }





  async function main()
  {
    const waitz =  await getInputz("name please daddy")
    console.log(waitz);
  }













