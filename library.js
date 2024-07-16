const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

async function getInput(prompt)
{
    return new Promise((resolve) => {
        r1.question(prompt, (input) => {
            resolve(input);
        })
    })
}
let putInMe = ""
async function getInputz()
{
    function stop()
    {
        for (let i = 0; i < 2; i++)
        {
            console.log(i);
        }
    }
    stop();
    nameBook = await getInput("Enter the name of the book: ");
    console.log(nameBook);
    putInMe = nameBook;



    const array = [];
    function displayBooks()
    {
        let asz =""
        for (var as of array)
        {
            asz += as + " ";

        }
        console.log("List of books: " + asz);
    }
function  Book(nameBook)
{
    return nameBook;

}
function addBook(nameBook)
{
array.push(nameBook);
}
Book(nameBook);
addBook(nameBook);
    console.log(array);
    displayBooks();
}
getInputz();
