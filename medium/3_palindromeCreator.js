const pCreator = (str) => {

    let newStr = newWordFunk(str)

    if (str.split("").reverse().join("") == str) {
        return (str + " is palidrome")
    }
    else if (str.split("").reverse().join("") != str) {
        newStr = newWordFunk(str)
        if ((newStr.split("").reverse().join("") == newStr)) {
            return (newStr + " is palidrome")
        }
        else if (newStr.split("").reverse().join("") != newStr) {
            newStr = newWordFunk(newStr)
            if ((newStr.split("").reverse().join("") == newStr)) {
                return (newStr + " is palidrome")
            } else return ("not palidrome")
        }
    }
}

const newWordFunk = (word) => {
    for (let i = 0; i < word.length; i++) {
        let newWord = word.slice(0, i) + word.slice(i + 1)
        if (!(newWord.includes(word[i]))) {
            return newWord
        }
    }
}


console.log(pCreator("rabhkbar"));



/*
Soruda verilen string ifadeden enfazla iki karekter çıkarıldığında yeni ifadenin palidrome olup olmadığının kontrol edilmesi isteniyor. Eğer soru en fazla iki karekter çıkarılmasını şart koşmasa idi yukarıda if bloğu yerine while döngüsü ile soru çözülebilirdi. En fazla iki karekter dediği için iç içe iki if bloğu ile çözüme gidilmiştir.

while(newStr.split("").reverse().join("") != newStr) {
    newStr = newWordFunk(newStr) 
    if bloğu yerine kullanılabilirdi.


oluşturulan newWordFunk fonksiyonu ile parametre olarak gelen string idadede kelime içinde yalnız 1 kez yer alan tekrar etmeyen i değeri yakalanarak kelimeden çıkarılıyor ve yukarıda if bloğunda bu yeni kelimenin palidrome olup olmadığı kontrol ediliyor. Eğer değilse kelime bir kez daha parametre olarak fonksiyona giriyor.

Böylelikle en fazla iki harf çıkarılarak palidrome ifadeye ulaşılıyor.


    */