const multiPersistence = (num) => {

    if (num < 10) {
        return 0
    }

    let result = multiply(num)
    let steps = 1

    while (result > 9) {
        result = multiply(result)
        steps++

    }
return steps


};

const multiply = (num) => {
    let arr = num.toString().split("")
    let multiply = 1
    arr.forEach(element => {
        multiply *= parseInt(element)
    })
    return multiply
}



console.log(multiPersistence(63233336))


/*
Multiply persistence: bir sayıyı oluşturan rakamların çarpımlarının tek basamaklı bir sayıya eşit oluncaya kadar yapılması gereken çarpma
işlemi adedir.

sum fonksiyonu içinde gelen sayının her bir basamağını çarpan bir işlem yaptık. Bu fonksiyonu while döngüsü içinde toplam tek basamaklı bir sayı olana kadar döngüye soktuk.
*/