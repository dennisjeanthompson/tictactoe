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
let player2s= "";
const array= [ [" "," "," "],[" "," "," "],[" "," "," "]]

//async function getInput1()
//{
//do{

   //  as  = await getInput("Enter player 1")
 //    console.log("you entered FIRST INPUT" + as);

   // }while( player1s !== "stop")
//}


async function player1()
{

 player1s = await getInput("hello player 1: ");
console.log("you suck" + player1s)
player2()
}

async function player2()
{
    player2s= await getInput("hello PLayer 2: ");
    console.log("no you suck" + player2s)
    player1()
}

player1();
player2();



