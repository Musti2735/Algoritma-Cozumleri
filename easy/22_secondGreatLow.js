const seconfGreatLow = (arr) =>{
    newArr = []
    arr.forEach(num => {
        if(!newArr.includes(num)){
            newArr.push(num)
        }
       
    });
    newArr.sort((a,b)=>{return a-b})
    
    if(newArr.length<=2){
        return newArr[0]+"-"+newArr[1]
    }else{
        return newArr[1]+"-"+newArr[newArr.length-2]
    }

}

console.log(seconfGreatLow([2,3,3,5,14,67,56,33,60,5,2,6]))

/*
Soruda bizden istenen; 
En az 2 adet rakamdan oluşacak olan array içerisinden ikinci en küçük ve ikinci en büyük rakamların aralarına bir adet "-" eklenerek return edilmeleri isteniyor.

1- İlk olarak array içerisinde kendini tekrarlayan sayılardan forEach döngüsü ve array.includes() metodu kullanarak kurtuluyoruz.
2- Array içerisindeki sayıları array.sort() metodu kullanarak küçükten büyüğe doğru sıralıyoruz.
3- Eğer Array 2 adet sayıdan oluşuyorsa hemen en küçük ikinci sayı olarak büyük sayıyı ve en büyük ikinci sayı olarak da en küçük değeri return ediyoruz.
4- Eğer array'in eleman sayısı 2'den fazlaysa da en küçük ikinci değer olarak Array'in 1. indeksindeki elemanı, en büyük ikinci eleman olarak da array'in en sondan 2. indeksindeki sayıyı aralarına "-" ekleyerek return ediyoruz.


*/