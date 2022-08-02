const swapCase = (str) => {
    let arr = str.split("")
    let newArr = []

    arr.forEach(element => {
        if ((/[A-Z]/).test(element)) {
            newArr.push(element.toLowerCase())
        } else {
            newArr.push(element.toUpperCase())
        }
    });
    return newArr.join("")
}

console.log(swapCase("HellO WoRlD"))


/*
Verilen String İçerisinde Yer Alan Küçük Harflerin Büyütülmesi, Küçük Harflerin De Küçültülerek String'in Yeni Halinin Döndürülmesi İsteniyor.

1- Boş Bir Array Oluşturuyoruz. 
2- Foreach Döngüsü Kullanarak String'i Oluşturan Karakterleri kontrol ediyoruz. Harf büyük ise küçüğe, değilse büyüğe çeviriyoruz.

*/