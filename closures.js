function makeAdding (firstNumber) {
    // "first" is scoped within the makeAdding function
    const first = firstNumber;
    return function resulting (secondNumber) {
      // "second" is scoped within the resulting function
      const second = secondNumber;
      return first + second;
    }
  }
  // but we've not seen an example of a "function"
  // being returned, thus far - how do we use it?
  
  const add5 = makeAdding(5);
  console.log(add5)
  console.log(add5(2)) // logs 7s

function eatMe(add)
{
  const second = add
  
  return function ded(secondx) {
    const sencondn = secondx
    return second + sencondn 
  }


}

const addz = eatMe(4)
console.log(addz(2));//6~

const add = (numbers) => {
  this.numbers = numbers ;
  return numbers

}

console.log(add("pussy"));


  