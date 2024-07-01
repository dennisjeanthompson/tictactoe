const array=[[ [23,3],  [12,2]  ,3],[1]]

console.log(array[0][1][1]);
console.log(array[0][0][1])
console.log(array[0][2])//3

const arr = [["a","b","c"]
            ,["d","e","f"],
            ["j","h","i"]]
let as=  arr[0][1].replace(/[A-Za-z0-9]/g, "shit")
 arr[0][0] = "summer";
 arr[0][1] = "summer";
 arr[0][2] = "summer";
 if(arr[0][0]==="summer"&& arr[0][1] ==="summer"&& arr[0][2] === "summer")
    {
        console.log("WINNER 1");
    }
 console.log(arr[0][0])
console.log(as);
console.log(arr[0][1])
if (arr[0][1]=== "shit")

    {
        console.log("WINNER 1");
    }

    let es=""
    let pattern = new Array(3)
    for(let i= 0; i< 3;i++)
        {
            pattern[i]= new Array(3).fill(' '); 
        }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if(i >= 0 &&j <= 0 )
                {
                  //pattern[i][j] = arr[i][j];
                   // es+=arr[i][j]
                   pattern[i][j] ="*"; 
                }
          // 
        }
       
    } console.log(pattern)
/* console.log(es)


[X][0][X]
[x][x][X]
[X][x][X]
WINNER 1


*/


console.log("programming is hard as fuck it is not easy you need million of hours in it dude");
