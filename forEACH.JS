const numbers = [1, 2, 3, 4, 5];
let as = numbers.slice(0, 1).pop()
console.log(as)
console.log(as);
let asd = ``; 
let zing = ''
for (let azz of numbers)
{
    zing += azz;
}
console.log(zing);
// Using forEach to log each number
numbers.forEach(function(number, index) {
 asd +=`Index ${index}: ${number}`;
});
console.log(asd);
for (let i = 0; i < 999999; i++)
{
    console.log(i)
}