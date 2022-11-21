const validAnagram =(s,t) =>{
let newS =  s.toLowerCase().split("").sort().toString()

let newT = t.toLowerCase().split("").sort().toString()

return newS == newT ? true : false 


}

console.log(validAnagram('caer', 'race'))


// Soruda verilen iki string ifadenin anagram olup olmadığı isteniyor.  İki farklı kelimenin aynı harflere sahip olması durumuna anagram denir. 
// Verilen ifadeyi liste haline getirip sort() methodu ile sıraladık ve tekrar stringe çevirdik. İki ifade birbirine değer olarak eşitse true döndürdük.