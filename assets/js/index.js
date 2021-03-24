//1. Функция, которая вернёт максимальное значение из 2.
//Значения брать у пользователя.

const userInput1 = prompt("Enter number 1: ");
const userInput2 = prompt("Enter number 2: ");
/**
 *  finds the maximum value
 * @param {number} val1 
 * @param {number} val2 
 * @returns val1 || val2
 */

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
/**
 * finds the minimum value
 * @param {number} minVal1 
 * @param {number} minVal2 
 * @returns minVal1 || minVal2
 */

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


const num = prompt("Enter number isEven: ");

/**
 * the function determines the parity of a number
 * @param {number} num 
 * @returns num
 */
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



//*4. Функция, которая решает квадратные уравнения

const a = +prompt("Enter number a: ");
const b = +prompt("Enter number b: ");
const c = +prompt("Enter number c: ");

/**
 * quadratic function
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @returns null || [number] || [number, number]
 */

const squareRoot = function(a, b, c){
  const d = b ** 2 - 4 * a * c;
  if(d < 0){
    console.log("No roots")
    return null;
  }
  if(d === 0){
    const x = -b / (2 * a);
    return [x];
  }
  if (d > 0){
    const x1 = (-b + d ** (1/2)) / (2 * a);
    const x2 = (-b - d ** (1/2)) / (2 * a);
    return [x1, x2];
  }
}
console.log(squareRoot(a, b, c));