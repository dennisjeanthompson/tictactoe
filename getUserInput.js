const readline = require("readline")
const r1= readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function getInput(prompt)
{
    return new Promise((resolve) => {
        r1.question(prompt, (input) => {
            resolve(input)
        })
    })
}
async function main()
{
    const input1 =await getInput("enter ");

    switch(input1)

    {
        case "1":
            console.log("ur a faggot");
            asd();
            break;
            case "2":
                console.log("ur a gay");
                asd()
                break;
                case "3":
                    console.log("ur a nigger");
                    asd()
                    break;
                    default:
                        console.log("ur a fucking retard");
                        asd()
                        break;
        
    }
    const input2 = await getInput("enter ur bitch name");
    console.log(input1);
    console.log(input2 + "that is ur bitch nigger fam");
    r1.close();
}

function  asd ()

{
    
    async function main2()
    {
    const askan = await getInput("enter again=================================================")
    {
        console.log("you entered" + askan);
    r1.close()
    }
    }

main2()
}

main()