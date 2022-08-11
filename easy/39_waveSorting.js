const waveSorting = (arr) => {
    let sortedArr = arr.sort((a, b) => a - b)
    newArr = []
    for (let i = 1; i < sortedArr.length; i += 2) {
        newArr.push(sortedArr[i])
        newArr.push(sortedArr[i - 1])
    }
    if (sortedArr.length % 2 == 1) newArr.push(sortedArr[sortedArr.length - 1])
    return newArr
}

console.log(waveSorting([14, 7, 10, 9, 2, 4, 11]))


/*
Soruda istenen verilen listenin elemanlarının bir büyük bir küçük eşleştirmesi olacak şekilde sıralanması. Yani [4 > 2 < 9 > 7 < 11 > 10 < 14] şeklinde bir sıralama oluşturulması isteniyor. Bunun için verilen listeyi sort metodu ile küçükten büyüğe sıraladık. For döngüsü içinde çifter çifter döngüyü artırarak önce sortedArr içindeki çift indexe karşılık gelen elemanı ve daha sonra bu indexin kendinden önce gelen elemanı yeni oluşturulan listeye push  metodu ile ekledik. for döngüsünü iki iki artırdığımız için Eğer verilen listenin uzunluğu tek sayı ise for dönügüsü bu son elemanı yakalayamayacağı için sıralı listede en büyük olan sayıyı direk newArr içine push ettik.

*/