const largestPair =(num) =>{
    let str = num.toString()

    let newList = []

    for (let i = 0; i<str.length-1; i++){
        newList.push(str[i]+str[i+1]) 


    }
    return newList.sort()[newList.length-1]

}

console.log(largestPair(473809398729))


/*
Soruda, verilen sayı içindeki en büyük çift haneli sayının bulunması isteniyor.

Bunun ifadeyi for döngüsünde kullanbilmek için stringe çeviriyoruz. Ardından oluşturduğumuz boş listeye herbir index+index+1 ifadesini ekliyoruz. Böylelikle tüm çift haneli ifadeler listeye eklenmiş oluyor. for döngüsünü listenin sondan bir önceki elemanına kadar döndürüyoruz çünkü zaten sonda tek basamak kalıyor.

ardından oluşan yeni listeyi küçükten büyüğe doğru soralayıp en büyük ifade olan son ifadeyi return ettik.

*/