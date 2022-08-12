const palidrome=(str)=>{
    let newStr = str.toLowerCase().replace(/[^a-z]/g, "")
    revStr = newStr.split("").reverse().join("")

    return newStr ==revStr ? true : false
}

console.log(palidrome("Anne, I vote more cars race Rome-to-Vienna"))


/* 

Soruda, verilen cümlenin tersten okunuşu ile aynı olup olmadığı soruluyor.

Kelimeyi ilkönce küçük harfe çevirip, harf olmayan karekterleri regExp ile çıkarttık. oluşan yeni stringi arraya çevirip reverse metodu ile ters çevirdik ve tekrar string yaptık. değerleri karşılaştırıp true ya da false return ettik.

*/