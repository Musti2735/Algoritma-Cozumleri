const dashInsert = (str) => {
    arr = str.split("")

    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i])

        if (arr[i] % 2 == 1 && arr[i + 1] % 2 == 1) {
            newArr.push("-")
        }
    }
    return newArr.join("")
}
console.log(dashInsert("43547931"))

/* 
Verilen String İçerisinde Arda Arda Tek Rakamlar Bulunuyorsa Bu Değerlerin Arasına "-" Eklememiz Bizden İsteniyor.

1- Boş Bir Array Oluşturuyoruz. 
2- For Döngüsü Oluşturuyoruz.
3- Arr elemanlarını yeni dizeye ekliyoruz. Eğer ard arda iki sayının 2 ye bölümöünden kalan 1 ise araya - ekliyoruz.
4- Join metodu ile stringe çevirme yapıyoruz.

*/