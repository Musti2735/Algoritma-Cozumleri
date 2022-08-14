const twoSum =(arr, target) =>{
    let left = 0
    let right = arr.length-1

    while(left<right){
        let currentSum = arr[left] + arr[right]
        if(currentSum>target){
            right -=1
        }else if(currentSum<target){
            left +=1
        }else{
            return [left, right]
        }
    }

}

console.log(twoSum([1, 3, 4, 5, 7, 10, 11], 9))


/* Soruda istenen verilen sıralı liste içinde hedef sayının toplamını veren iki sayının indeksinin bulunması.

Çözüm için kullanılan yöntem liste üzearide sağdam ve soldan ilerleyerek toplamı veren iki sayıyı bulmaktır.

left değişkeni listenin ilk yani ek küçük, rigth değişkeni son yani en büyük sayıyı ifade etmektedir.

while döngüsü içinde listenin left ve rigth elemanlarını karşılaştırarak ilerliyoruz. şu anki toplam değer target değerinden büyükse rigth değerini yani en büyük değeri bir azaltıyoruz. Eğer şu anki toplam target değerinden küçükse left yani en küçük değeri bir artıyoruz. sonucu buluna kadar işlem aynı şekilde devam ediyoru ve bulunca left ve rigth değerlerini return ediyoruz.

*/