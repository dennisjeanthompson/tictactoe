const susi = 5;
const row =  4;
const per = new Array(row);
for(let i= 0 ;i <= row;i++)
{
    per[i] = new Array(susi).fill("s ");
  

}
let as ="";
for(var sik of per )
{
    as += sik.join(" ") + "\n";
}

console.log(as);
for(let i = 0 ;i <= row;i++)
{
    for(let j = 0 ; j <= susi;j++)
    {
    if((j === 2 && i <= 3)||(j===1))
    {
        per[i][j] = "x";

    }

    }
    
}
let ass =""
for(var sikz of per)
{
    ass += sikz.join(" ") + "\n";
}
console.log(ass);