//1. Функция, которая вернёт максимальное значение из 2.
//Значения брать у пользователя.

const userInput1 = prompt("Enter number 1: ");
const userInput2 = prompt("Enter number 2: ");

const maxValue = function(val1, val2){
 // if (val1 > val2) {
 //   return val1;
  //  }else{
//return val2;  }
   return val1 > val2 ? val1 : val2;
  }
  const maxSum = maxValue(userInput1, userInput2);
  console.log(maxSum);

  
