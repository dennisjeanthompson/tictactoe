const readline = require("readline")
const r1 = readline.createInterFace({
    input:process.stdin,
    output: process.stdout
})
function getInput()
{
    return new Promise((resolve)=>{
        r1.question(prompt,(input)=>{
            resolve(input)
        })
    })


}