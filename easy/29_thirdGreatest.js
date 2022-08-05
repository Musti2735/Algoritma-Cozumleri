const thirdGreatest =(arr)=>{
    return arr.sort((a,b)=>b.length - a.length)[2]

}

console.log(thirdGreatest(["Hello", "Dear", "World's", "beatiful"]))

/*
Soruda verilen liste içinde en uzun 3. kelime bizden isteniyor. Bu sorunun farklı parametreler için kesin bir cevabı bulunmadığı için basit şekilde sort metodu kullanılarak çözüm yapılmıştır.

*/