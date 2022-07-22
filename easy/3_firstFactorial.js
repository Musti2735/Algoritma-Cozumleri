 const firstFactorial = (num) =>{
    let sumOfNum = 1
    for(var i=2; i<=num; i++){ //2 den num değerine kadar her bir sayıyı aldık. ve her bir basamakta sayıları çarptık
        sumOfNum *=i   
    }
    return sumOfNum;
}
console.log(firstFactorial(8))

/*First Factorial
Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.
*/