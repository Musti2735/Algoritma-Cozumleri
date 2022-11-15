function(){
    console.log(1);
    setTimeout(function(){console.log(2)},1000);
    setTimeout(function(){console.log(3)},0);
}


/*

liste içinde verilen her bir sayının kendinden önceki sayıların toplamının sayının kendisinden büyük olup olmadığını kontrol eden algoritma.

Çözüm olarak, önce ayrı bir fonksiyon tanımlayıp parametre olarak liste ve index verdik. Fonksiyonda index değerine kadar olan elemanların toplamını döndürdük.

Ardından gelen değeri listenin elemanları ile for döngüsü kullanarak karşılaştırdık

*/