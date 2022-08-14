const toRoman = (num) => {
    let roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        V: 5,
        IV: 4,
        I: 1
    }

    let toRoman = ""

    for (let k in roman) {
        while (num >= roman[k]) {
            toRoman += k
            num -= roman[k]
        }

    }
    return toRoman
}

console.log(toRoman(3999))


/* Soruda, verilen sayının roma sayısı olarak karşılığının bulunması isteniyor.

Bunun için öncelikle roma sayılarını bir obj olarak tanımlıyoruz.

Her bir değer için verilen sayı roma rakamına karşılık gelen değerden büyük olduğu sürece while döngüsü ile karşılık gelen roma sayısnı toRoamn stirng ifaddesine ekliyoruz ve sayımızı bir o kadar azaltıyoruz.

Sonuç olarak roma rakam değerini return ediyoruz.

*/