const artithGeo = (arr) =>{
    let diff = arr[1] - arr[0]
    let isAritmatic = true

    let ratio = arr[1]/arr[0]
    let isGeometric = true

    for(let i =2; i<=arr.length; i++){
        if(arr[i]-arr[i-1] != diff){
            isAritmathic = false
        }
        else if(arr[i]/arr[i-1] != ratio){
            isGeometric = false
        }
    };
    if(isAritmatic){
        return "Aritmatic"
    }
    else if(isGeometric){
        return "Geometic"
    }
    else{
        return -1
    }
    


}

console.log(artithGeo([2,4,6,8,10]))



/* Verilen dizinin elemanlarının, aritmatik olarak mı yoksa geometrik olarak mı sıralandığını bulun algoritma. 
Aritmatik dizi :[2,4,6,8,10]
Geometrik dizi :[3,6,18,54]

1- İlk olarak değişkenleri tanımladık, 
    
    let diff = arr[1] - arr[0] - Array'in aritmetik olarak nitelendirilebilmesi için ardışık elemanlar arasındaki fark sabit olmalıdır
    let ratio = arr[1] / arr[0] - Array'ın geometri olarak nitelendirilebilmesi için ardışık elemanlar arasındaki oran sabit olmalıdır.
    let isArithmetic = true - Array içerisinde ardışık elemanlar arasındaki farkın değişik olması durumunda false yapılacak.
    let isGeometric = true - Array içerisinde ardışık elemanlar arasındaki oranın değişik olması durumunda false yapılacak.

2- for döngüsü içinde if bloğu kullanarak array içerisindeki ardışık değerler arasındaki farkın diff değişkenine eşit olup olmadığını kontrol ettik. Eğer farklı bir değer varsa da isArithmetic değişkeninin değerini false olarak değiştirdik.
3- for döngüsü içinde if bloğu kullanarak array içerisindeki ardışık değerler arasındaki oranın ratio değişkenine eşit olup olmadığını kontrol ettik. Eğer farklı bir değer varsa da isGeometric değişkeninin değerini false olarak değiştirdik.
4- Yeni bir if boluğu oluşturduk. Eğer isArithmetic değişkeni true ise "Aritmehtic", isGeometric değişkeni true ise "Geometric", diğer durumlarda ise -1 return ettik.


*/