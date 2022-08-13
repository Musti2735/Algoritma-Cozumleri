const productDigits = (num) => {

        let multiplers = []

        for (let i = 1; i <= num; i++) {
                if (num % i == 0) {
                        multiplers.push(i)
                }
        }
        console.log(multiplers)

        let resultList= multiplers.slice(multiplers.length/2-1,(multiplers.length/2 +1))

        return resultList.toString().length-1

}

console.log(productDigits(24))


/* Soruda, verilen sayının çarpanları arasında en küçük olanın hesaplanması ve bu en küçük çarpanların, toplam basamak sayı uzunluğunun bulunması istenilmektedir. 

24 sayısının en küçük çarpanlar 4 ve 6 olduğundan sonuç 2 çıkmaktadır. 23 sayısının çarpanları 1 ve 23 olduğundan sonuç 3 çıkmaktadır.

for döngüsü ile sayının 1'e kadar olan bütün kendinden küçük değerlere bölüp, eğer bölümden kalan 0 ise bu değeri boş listemize aldık. Böylelikle bütün çarpanlar multiplers listesine eklenmiş oldu. Bu liste küçükten büyüğe doğru sıralı halde geliyor. [1, 2, 3, 4, 6, 8, 12, 24]

Ardından en küçük çarpanları bulmak için küçükten büyüğe doğru olan listede liste eleman sayısının ortasına gelip 1 eksiği ve 1 artısı ile slice metodu kullanarak en küçük iki çarpanı ayırmış olduk. [4, 6]

İfadeyi stringe çevirerek "4,6" ifadesini elde ettik 4 v 6 birer basamaktan oluştuğu için sonuç 2 olacaktır. ancak aradaki virgül length değeri ile karekter olarak sayılacağından uzunluktan 1 düştük.
*/