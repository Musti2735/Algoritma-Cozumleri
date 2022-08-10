const bitWise = (arr) => {
    newArr = []
    for (let i = 0; i < arr[0].length; i++) {
        if (arr[0][i] == 0 && arr[1][i] == 0) {
            newArr.push(0)
        }
        else {
            newArr.push(1)
        }
    }
    return newArr.join("")
}

console.log(bitWise(["1100", "0110"]))

/* Soruda, liste içinde verilen iki değer üzerinde kontrol sağlanarak, aynı basamakta bulunan değerlerin ikisi de 0 ise 0 değerinin aksi halde 1 değerinin döndürülmesi istenmiştir.

for döngüsü ile listenin ilk elemanı ile ikinci elemanlarının tek tek karşılaştırarak eğer iki elemanın da i değeri 0 ise yeni oluşturulan liteye 0 ekledik değilse diğer durumlar için listeye 1 ekledik.

*/