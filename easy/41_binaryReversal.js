const binaryReversal = (str) => {
    let binary = Number(str).toString(2).split("")
    
   let newBinary = addZero(binary).concat(binary).reverse().join('')

   return parseInt(newBinary,2)

}

const addZero =(arr) =>{
    newList =[]
    for(let i=0; i<8-arr.length; i++){
        newList.push('0')
    }
    return newList
}


console.log(binaryReversal("47"))

/* Soruda, verilen sayının binary değerinin alınması, binary değerinin başına gerektiği kadar 0 eklenerek 8 basamaklı hale getirilmesi ve bu 8 basamaklı binary değerinin ters çevrilerek decimal değerinin bulunması isteniyor.

Çözüm olarak, ilk önce verilen ifadeyi binary değerlerden oluşan bir liste olarak binary değişkenine tanımladık.

addZero adlı harici bir fonksiyon ile boş liste içine basamak sayısını 8'e tamamlayacak sayıda 0 ekleyip bu değeri return ettik.Bu fonksiyon ile 8-liste uzunluğu kadar sıfırdan oluşan bir lite elde ettik.Burda repeat methodu da kullanılarak 0 değerileri eklenebilirdi.

Asıl fonksiyonumuzn içinde Binary listemizi addZero adlı fonksiyona parametre olarak tanımladık. Sıfırlardan oluşan liste ile asıl listemizi birleştirdik ve ters çevirdik.

parseInt methodu ile de decimale çevirme işlemimizi yaptık.





*/