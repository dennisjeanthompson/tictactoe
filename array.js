const array= [ ["s ","s"," s"],[" s","s ","s "],["s ","s ","s "]]
console.log(array.length)
//let kiss = new Array(sus)
let ass= ""
for(let i = 0; i < array.length;i++)
    {
          ass= ""
        for(let j = 0;j <array[i].length ;j++)
            {
             //array[i][j]= " s ";
             ass += array[i][j] + " ";
            }
           console.log(ass)
    }
    
array.fill("dikc")
console.log(array);
console.log(ass);