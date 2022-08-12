const twoSum = (nums, target) => {

    result = []

    for (let i = 0; i < nums.length; i++) {

        const numbers = nums.filter(item => item != nums[i])

        for (let j = 0; j < numbers.length; j++) {
            if (nums[i] + nums[j] == target) {
                result.push(i, j)
            }
        }
        return result
    }

}

console.log(twoSum([2, 11, 7, 15], 9));


/*

Soruda, verilen listedeki sayılardan hangi indexte bulunan iki sayının toplamının verilen target değerine eşit olduğu soruluyor.

for döngüsü ile tek tek sayılara erişiyoruz.nums[i] değeri bizim sayımızı ifade ediyor. ardından nums[i] değerinin olmadığı numbers adlı yeni bir listeyi filter metodu ile oluşturuyoruz. 

numbers listesi için yeni bir for döngüsü oluşturarak numbers[j] ile nums[i] değerini toplayarak target'a eşit olup olmadığını kontrol ediyoruz. 

Eşitliği sağlauyan değerlerin index numaralarını result adlı boş lisyteye push ediyoruz.

*/