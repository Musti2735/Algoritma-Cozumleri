const powerSet = (arr =[]) => {
    let newSet = []
    let power = 2 ** arr.length

    for (var i = 0; i < power; i++) {
        const subSet = [];
        //01234567
        for ( var j = 0; j < arr.length; j++){
            console.log(i +" & "+(1<<j)+"="+ (i & (1<<j))) 
            //012
            if(i & (1<<j)){
                subSet.push(arr[j])
            }
        }
        newSet.push(subSet)
    }
    return newSet

}

console.log(powerSet(["A","B","C"]))

/* Soruda, verilen listedeki elemanların alt kümelersinin bulunması isteniyor.

İlk olarak alk küme elamanlarını alacağımız boş bir küme oluşturduk. Alt küme sayısı 2**n formülü ile bulunduğu için alt küme sayısını bu formül ile bulup power değişkenine atadık.

for döngüsü ile power değeri kadar (soruda 8 adet) döngüde subset isimli boş liste oluşturduk.

i dönügüsü bize 0,1,2,3,4,5,6,7 olarak 8 adet değer verdi. j döngüsü ise 0,1,2 olarak 3 adet değer verdi. İf koşulu ile bu değerlerin bit değerleri üzerinden koşul ifadesi oluşturduk.  

 0 & 1=0
 0 & 2=0 BOŞ KÜME
 0 & 4=0

 1 & 1=1
 1 & 2=0 A DEĞERLİ BİR ELEMANLI KÜME
 1 & 4=0
 
 2 & 1=0
 2 & 2=2 B DEĞERLİ BİR ELEMANLI KÜME
 2 & 4=0

 3 & 1=1
 3 & 2=2 A B DEĞERLİ İKİ ELEMANLI KÜME
 3 & 4=0

 4 & 1=0
 4 & 2=0 C DEĞERLİ BİR ELEMANLI KÜME
 4 & 4=4

 5 & 1=1
 5 & 2=0 A C DEĞERLİ İKİ ELEMANLI KÜME
 5 & 4=4

 6 & 1=0
 6 & 2=2 B C DEĞERLİ İKİ ELEMANLI KÜME
 6 & 4=4

 7 & 1=1
 7 & 2=2 A B C DEĞERLİ ÜÇ ELEMANLI KÜME
 7 & 4=4

 verisi elde ettik. Döngünün içinde arr[i] ifadesini boş listemize push ettiğimizde verilen ifadenin alt kümelerini bulmuş olduk.
*/
