const firstNonRepeat = (strng) => {
    let str = strng.toLowerCase()

    let count =0

    for (var i = 0; i < str.length; i++) {
        let letter = str[i]
        let newStr = str.slice(0,i)+str.slice(i+1)
        if(!(newStr.includes(letter))){
            count +=1
            return letter
        }
    }

    if(count==0) return "---"

}

console.log(firstNonRepeat("reertSts"))


/* 
Soruda, verilen kelime içindeki harflerin, aynı kelime içinde yer alıp almadığı ve tekrar etmeyen ilk harfin return edilmesi eğer bütün harfler tekrar ediyorsa "---" değerinin return edilmesi isteniyor.

Bunun için küçük-büyük harf sorunu yaşanmaması için bütün harfleri küçük harfe çeviridik.

Ardından for döngüsü ile her bir harfi alıp letter değerine atadık. kontrol edilecek harfin index değerini kullanarak harfi kelimeden çıkardık ve yeni kelimeyi newStr değerine atadık. 

Eğer letter newStr içinde değilse yani yeni kelime içinde harf bir kez daha yoksa letter return ettik. Ayrıca count değerimiz 1 arttığı için eğer bütün harfler tekrar ediyorsa count değerimi artmayacağından son if koşulu ile bu durumda "---" return ettik.

*/