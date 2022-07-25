const letterCapitalize = (str)=>{
    let myList = []
   str.split(" ").forEach(word => {
      myList.push(word.charAt(0).toUpperCase()+word.slice(1, word.length) )
    });
    return myList.join(" ")
    
}

console.log(letterCapitalize("Bu gün hava çok yağmurlu"))



/* Verilen string ifadede her kelimenin ilk harfini büyük harfe çeviren algoritma
1-String ifadeyi split() ile her bir boşluktan arraya çevirdik.
2-Her bir liste elemanı kelimenin ilk harfini chartAt() ile alıp büyük harf yaptık ve kelimenin devamını slice() metodu ile aldık. Bu ifadeyi push metodu ile yeni listeye ekledik ve jion() metodu ile aralarında bir boşluk bırakarak tekrar ifadeyi stringe çevirdik.
*/