//here i collect all my katas

//insert a number 

function solution(number){
  //for every number until 10 check if its devisonalbe by 3 or 5
  console.log(number)
  newArray = []
  
  if (number > 0 ) {
  
  for (let i = 0; i < number; i++) {
    console.log(i)
    if (i % 3 === 0) {
      newArray.push(i)
    } else if (i % 5 === 0){
      newArray.push(i) 
    }
  }
  
  return sum = newArray.reduce((a,b) => {
    return a + b
  }) 
  } else {
    return 0
  }
}

// other and easy solution 

function solution(number){
    return number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
  }

//Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits.

function nextBigger(n){
const array = n.toString().split('')
newArray = []
console.log(array)
console.log(array[array.length-1])
//ich gehe über die zahlen eine nach der anderen
  //wenn zahl am index + 1 kleiner ist als die zahl an index i dann kann ich die zahl so lassen

for (let i = array.length-1; i > 0; i--) {
  console.log(array[i])
  console.log(array[i+1])
  
  if (array[i] < array[i+1]) {
    newArray.push(array[i+1])
    newArray.push(array[i])
  } else if (array[i] > array[i+1]) {
    newArray.push(array[i])
  }
} 
  //wenn die zahl am index + 1 größer ist dann schreiibe ich die größere zahl zuerst auf und danach die zweite
  
  return parseInt(newArray.join(''))
}