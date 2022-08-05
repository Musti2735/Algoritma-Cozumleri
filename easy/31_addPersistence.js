const addPersistence = (num) => {

    if (num < 10) {
        return 0
    }

    let toplam = sum(num)
    let steps = 1

    while (toplam > 9) {
        toplam = sum(toplam)
        steps++
    }
    return steps

};

function sum(n) {
    let arr = n.toString().split("")
    let sum = 0
    arr.forEach(element => {
        sum += parseInt(element)
    })
    return sum
}

console.log(addPersistence(22343999997999918))