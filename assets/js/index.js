//1. Функция, которая вернёт максимальное значение из 2.
//Значения брать у пользователя.

const userInput1 = prompt("Enter number 1: ");
const userInput2 = prompt("Enter number 2: ");

const maxValue = function(val1, val2){
  if (isNaN(val1 - val2)){
    return null;
  }
 // if (val1 > val2) {
 //  return val1;
 // }else{
 // return val2;  }
   return val1 > val2 ? val1 : val2;
  }
  const maxSum = maxValue(userInput1, userInput2);
  console.log(maxSum);



//2. Функция, которая вернёт минимальное значение из 2.
//Значения брать у пользователя.

const minUserInput1 = prompt("Enter number 1: ");
const minUserInput2 = prompt("Enter number 2: ");

const minValue = function(minVal1, minVal2){
  if(isNaN(minVal1 - minVal2)){
    return null;
  }
// if (minVal1 < minVal2) {
//   return minVal1;
// }else{
// return minVal2;  }
    return minVal1 < minVal2 ? minVal1 : minVal2;
   }
   const minSum = minValue(minUserInput1, minUserInput2);
   console.log(minSum);
 


// 3. Функция, которая определяет чётность числа.

const num = 21;
const isEven = function(num){
//if(num % 2 === 0){
//console.log(num, "Четное");
//}else{
//console.log(num, "Нечетное");
//}
const numPosition = num % 2 === 0 ? "Четное" : "Нечетное";
console.log(num, numPosition);
}
isEven(num);
