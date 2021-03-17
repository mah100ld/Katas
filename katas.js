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
