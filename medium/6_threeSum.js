const threeSum = (arr, target) => {
    arr.sort((a, b) => a - b)

    let subset = []
    for (let i = 0; i <= arr.length - 2; i++) {

        if (arr[i] !== arr[i - 1]) {
            let left = i + 1
            let rigth = arr.length - 1

            while (left < rigth) {
                let currentSum = arr[i] + arr[left] + arr[rigth]

                if (currentSum > target) {
                    rigth--
                }
                else if (currentSum < target) {
                    left++
                }
                else {
                    subset.push([arr[i], arr[left], arr[rigth]])
                    while (arr[left] == arr[left + 1]) left++
                    while (arr[rigth] == arr[rigth - 1]) rigth--
                    left++
                    rigth--
                }

            }


        }
    }
    return subset
}

console.log(threeSum([8, 1, 2, 4, 10, 5, -1, -1], 8))


/*
Soruda liste içinde verilen sayılardan hangi üç sayının toplamınının hedef değere eşit olduğunu istemektedir.

Çözüm yöntemi olarak for döngüsü içinde artan ve azalan sayı kontrol yöntemini kullandık.

İlk önce verilen listeyi küçükten büyüğe doğru sıraladık. for döngüsü ile ilk sayımı arr[i] elemanını aldık. whhile döngüsü içinde left ve rigth olarak ikinci ve üçüncü sayılarımız tanımladık. Her bir arr[i] değeri için left ve rigth değerlerini şart ifadelerine göre kontrolünü sağladık. en sonda eşitliği sağlayan üç değeri de boş listemize push ettik. Bu işleme devam etmek için left değerini azaltıp, rigth değerini artırmaya devam ettik ve döngü kendisini tekrarladı. 

 while (arr[left] == arr[left + 1]) left++
while (arr[rigth] == arr[rigth - 1]) rigth-- ifadeleri ise liste içinde ard arda aynı sayı var ise fazladan işleme sokmamak için konulan koşullardır.


*/