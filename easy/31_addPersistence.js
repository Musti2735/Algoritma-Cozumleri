const multiPersistence = (num) => {

    if (num < 10) {
        return 0
    }

    let toplam = sum(num)
    let steps = 1

    while (toplam >9) {
        toplam = sum(toplam)
        steps++

    }
return steps


};

const sum=(n) => {
    let arr = n.toString().split("")
    let sum = 0
    arr.forEach(element => {
        sum += parseInt(element)
    })
    return sum
}



console.log(multiPersistence(6336))


/*
Additive persistence: bir sayıyı oluşturan rakamların toplamlarının tek basamaklı bir sayıya eşit oluncaya kadar yapılması gereken toplama
işlemi adedir.

sum fonksiyonu içinde gelen sayının her bir basamağını toplayan bir işlem yaptık. Bu fonksiyonu while döngüsü içinde toplam tek basamaklı bir sayı olana kadar döngüye soktuk.


*/