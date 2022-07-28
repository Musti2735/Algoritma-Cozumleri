const palidrome = (str)=>{

    let newStr = str.replace(/ /g, "").toLowerCase()
    
    return newStr.split("").reverse().join("") === newStr ? true :false
    
}
console.log(palidrome("racE car"))


/*
Verilen string ifadenin tersten okunuşunun da aynı olması halinde palidrome denilir. Bir kelimenin palidrome olup olmadığını bulan algoritma.
string ifadeyi öncelikle regexp kullanarak aradaki boşluk ifadeyi kaldırdık ve tüm harfleri küçük harfe dönüştürdük. split ile arraye ve reverse ile terse çevirdik. join ile tekrar string yaptığımı ifadeyi ilk str ile karşılaştırdık.

*/