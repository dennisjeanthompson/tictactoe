array = [[" "," "," "],[" "," "," "],[" "," "," "]]; //fucking hell
const bt1 = document.querySelector(".bt1");
const enter3= document.getElementById("enter");

const enter4= document.getElementById("enter2");
const enter5= document.getElementById("enter3");
const enter6= document.getElementById("enter4");
const enter7= document.getElementById("enter5");
const enter8= document.getElementById("enter6");
const enter9= document.getElementById("enter7");

const bt2 = document.querySelector(".bt2");
const enter1= document.getElementById("ent1");
const bt4 = document.querySelector(".bt4");
const bt5 = document.querySelector(".bt5");
const bt6 = document.querySelector(".bt6");
const bt7 = document.querySelector(".bt7");
const bt8 = document.querySelector(".bt8");
const bt9 = document.querySelector(".bt9");
const ent3z = document.getElementById("ent3");
const bt3= document.querySelector(".bt3")
//bt1.addEventListener("click",function())
bt1.addEventListener("click",()=>{
    enter3.innerHTML =`X` ;
    array[0][0] = "X";
    
    enter3.innerHTML = "X";
    enter3.style.color = "blue";
    enter3.style.fontSize = "30px";
    enter3.style.fontWeight = "bold";
    enter3.style.textTransform = "uppercase";
    enter3.style.textAlign = "cp";
    enter3.style.backgroundColor = "yellow";
    enter3.style.padding = "10px";
    enter3.style.borderRadius = "10px";
    enter3.style.boxShadow = "0px 0px 10px 5px rgba(0,0,0,0.5)";
    enter3.style.transition = "all 0.4s ease-in-out";
    winnerChecker()
})

bt2.addEventListener("click",()=>{
    enter1.innerHTML =`X` ;
    array[0][1] = "X";
    
    enter1.style.color = "blue";
    enter1.style.fontSize = "30px";
    enter1.style.fontWeight = "bold";
    enter1.style.textTransform = "uppercase";
    enter1.style.textAlign = "center";
    enter1.style.backgroundColor = "yellow";
    enter1.style.padding = "10px";
    enter1.style.borderRadius = "10px";
    enter1.style.boxShadow = "0px 0px 10px 5px rgba(0,0,0,0.5)";
    enter1.style.transition = "all 0.4s ease-in-out";
    winnerChecker()
})

bt3.addEventListener("click",function(){
    array[0][2] = "X";
    
    console.log(array);
    ent3z.innerHTML = 'X';
    ent3z.style.color = "blue";
    ent3z.style.fontSize = "30px";
    ent3z.style.fontWeight = "bold";
    ent3z.style.textTransform = "uppercase";
    ent3z.style.textAlign = "center";
    ent3z.style.backgroundColor = "yellow";
    ent3z.style.padding = "10px";
    ent3z.style.borderRadius = "10px";
    ent3z.style.boxShadow = "0px 0px 10px 5px rgba(0,0,0,0.5)";
    ent3z.style.transition = "all 0.4s ease-in-out";
   
    ent3z.style.zIndex = "1000";
    ent3z.style.position
    winnerChecker()
});
   
bt4.addEventListener("click",function(){
    array[1][0] = "X";

    enter4.innerHTML = "X";
    enter4.style.color = "blue";
    enter4.style.fontSize = "30px";
    enter4.style.fontWeight = "bold";
    enter4.style.textTransform = "uppercase";
    enter4.style.textAlign = "center";
    enter4.style.backgroundColor = "yellow";
    enter4.style.padding = "10px";
    enter4.style.borderRadius = "10px";
    enter4.style.boxShadow = "0px 0px 10px 5px rgba(0,0,0,0.5)";
    enter4.style.transition = "all 0.4s ease-in-out";
   
    enter4.style.zIndex = "1000";
    enter4.style.position
    winnerChecker()
});
   
bt5.addEventListener("click",function(){
    array[1][1] = "X";

   enter5.innerHTML = "X";
   enter5.style.color = "blue";
   enter5.style.fontSize = "30px";
   enter5.style.fontWeight = "bold";
   enter5.style.textTransform = "uppercase";
   enter5.style.textAlign = "center";
   enter5.style.backgroundColor = "yellow";
   enter5.style.padding = "10px";
   enter5.style.borderRadius = "10px";
   enter5.style.boxShadow = "0px 0px 10px 5px rgba(0,0,0,0.5)";
   enter5.style.transition = "all 0.4s ease-in-out";
   
   enter5.style.zIndex = "1000";
   enter5.style.position
    winnerChecker()
});
   
bt6.addEventListener("click",function(){
    array[1][2] = "X";

    enter6.innerHTML = "X";
    enter6.style.color = "blue";
    enter6.style.fontSize = "30px";
    enter6.style.fontWeight = "bold";
    enter6.style.textTransform = "uppercase";
    enter6.style.textAlign = "center";
    enter6.style.backgroundColor = "yellow";
    enter6.style.borderRadius = "10px";
    enter6.style.boxShadow = "0px 0px 10px 5px rgba(0,0,0,0.5)";
    enter6.style.transition = "all 0.4s ease-in-out";
   
    enter6.style.zIndex = "1000";
    enter6.style.position
    winnerChecker()
});
   

bt7.addEventListener("click",function(){
    array[2][0] = "X";

   enter7.innerHTML = "X";
   enter7.style.color = "blue";
   enter7.style.fontSize = "30px";
   enter7.style.fontWeight = "bold";
   enter7.style.textTransform = "uppercase";
   enter7.style.textAlign = "center";
   enter7.style.backgroundColor = "yellow";
   enter7.style.padding = "10px";
   enter7.style.borderRadius = "10px";
   enter7.style.boxShadow = "0px 0px 10px 5px rgba(0,0,0,0.5)";
   enter7.style.transition = "all 0.4s ease-in-out";
   
   enter7.style.zIndex = "1000";
   enter7.style.position
    winnerChecker()
});
   

bt8.addEventListener("click",function(){
    array[2][1] = "X";

    enter8.innerHTML = "X";
    enter8.style.color = "blue";
    enter8.style.fontSize = "30px";
    enter8.style.fontWeight = "bold";
    enter8.style.textTransform = "uppercase";
    enter8.style.textAlign = "center";
    enter8.style.backgroundColor = "yellow";
    enter8.style.padding = "10px";
    enter8.style.borderRadius = "10px";
    enter8.style.boxShadow = "0px 0px 10px 5px rgba(0,0,0,0.5)";
    enter8.style.transition = "all 0.4s ease-in-out";
   
    enter8.style.zIndex = "1000";
    enter8.style.position
    winnerChecker()
});
   

bt9.addEventListener("click",function(){
    array[2][2] = "X";

    enter9.innerHTML = "X";
    enter9.style.color = "blue";
    enter9.style.fontSize = "30px";
    enter9.style.fontWeight = "bold";
    enter9.style.textTransform = "uppercase";
    enter9.style.textAlign = "center";
    enter9.style.backgroundColor = "yellow";
    enter9.style.padding = "10px";
    enter9.style.borderRadius = "10px";
    enter9.style.boxShadow = "0px 0px 10px 5px rgba(0,0,0,0.5)";
    enter9.style.transition = "all 0.4s ease-in-out";
   
    enter9.style.zIndex = "1000";
    enter9.style.position
    winnerChecker()
});
   




/* OLD METHOD
function winnerChecker()
{
    if(array[0][0]==="X" && array[0][1]==="X"&&array[0][2]==="X")
{ 
    alert("YOU WON");

}
}
*/
console.log(array[0][0]);
