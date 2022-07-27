const wordByte =(str) =>{
    let result = str.trim().split(" ").length
    return result
}

console.log(wordByte("Hello World this is JavaScript"))

/*
İlk olarak bize verilen string'in önünde ve arkasında olması muhtemel boşlukları .trim() metodu ile sildik. Sonrasında .split() kullanarak bu string'i bir array'e çevirdik ve array'in uzunluğuna ise .length property ile ulaşarak, bu değeri return ettik.
*/ 