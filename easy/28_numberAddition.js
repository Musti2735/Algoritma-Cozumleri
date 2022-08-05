const numberAddition = (str) => {
    let arr = str.split("")
    let newArr = []

    for (let i = 0; i < arr.length; i++) {

        if ((/[0-9]/).test(arr[i]) && (/[0-9]/).test(arr[i + 1])) {
            newArr.push(arr[i] + arr[i + 1])
        }
        else if((/[0-9]/).test(arr[i]) && !(/[0-9]/).test(arr[i + 1])&& !(/[0-9]/).test(arr[i - 1])) {
            newArr.push(arr[i])
        }
    }
    let result = 0
    newArr.forEach((item)=>{
        result += parseInt(item) 
    })
    return result
}

console.log(numberAddition("53Hello 2Wors1ld"))

/*

Bize Parametre Olarak Verilen Stirng İçerisinde Yer Alan Rakam ve Sayıların Yazdığımız Kod Tarafından Ayırt 
Edilerek Toplam Değerin Return Edilmesi İsteniyor.

1-Verilen string ifadeyi arraye çeviriyoruz.
2-Array elemanlarını tutmak için boş bir newArr tanımlıyoruz.
3-for döngüsü içinde her bir elemanı kontrol ederek eğer eleman ve bir sonraki eleman rakam ise new arraye ekliyoruz. ikinci if koşulu ile sağında ve solunda rakam olmayayan rakamı newarr'e ekliyoruz.
foreach ile newArr içindeki elemanları birbiri ile topluyoruz.

*/