const superIncreasing = (arr) => {

    for (let i = 1; i <arr.length; i++) {
        let total = sum(arr, i)
        if(total >= arr[i]) return false
    }
return true

}

const sum = (arr, index) => {
    total = 0
    for (let i = 0; i < index; i++) {
        total += arr[i]
    }
    return total

}

console.log(superIncreasing([1, 3, 6, 13, 64]))


/*

liste içinde verilen her bir sayının kendinden önceki sayıların toplamının sayının kendisinden büyük olup olmadığını kontrol eden algoritma.

Çözüm olarak, önce ayrı bir fonksiyon tanımlayıp parametre olarak liste ve index verdik. Fonksiyonda index değerine kadar olan elemanların toplamını döndürdük.

Ardından gelen değeri listenin elemanları ile for döngüsü kullanarak karşılaştırdık

*/