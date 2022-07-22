const firstReverse = (str) =>{
    //split ile arraye çevrilir, reverse ile ters çevrilir, join ile tekrar stringe çevrilir.
    let newStr = str.split("").reverse().join("")
    return newStr;
}


console.log(firstReverse("Hello World and Coders"))





/* First Reverse
HIDE QUESTION
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
*/
