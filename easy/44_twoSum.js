const twoSum = (nums, target) => {
    const indices = new Map();

    for (let index = 0; index < nums.length; index++) {
        const diff = target - nums[index];

        if (indices.has(diff)) {
            return [indices.get(diff), index]
        }

        indices.set(nums[index], index)
    }
}
console.log(twoSum([3,2,3], 6));


/*

Soruda, verilen listedeki sayılardan hangi indexte bulunan iki sayının toplamının verilen target değerine eşit olduğu soruluyor.

for döngüsü ile tek tek sayılara erişiyoruz.nums[i] değeri bizim sayımızı ifade ediyor. ardından nums[i] değerinin olmadığı numbers adlı yeni bir listeyi filter metodu ile oluşturuyoruz. 

numbers listesi için yeni bir for döngüsü oluşturarak numbers[j] ile nums[i] değerini toplayarak target'a eşit olup olmadığını kontrol ediyoruz. 

Eşitliği sağlauyan değerlerin index numaralarını result adlı boş lisyteye push ediyoruz.

*/

/* Diğer çözüm yolu
    for (let i = 0; i < nums.length; i++) {
        let curretnValue = nums[i]
        ler diff = 9 - currentValue

        const indexOfSecValue  = nums.indexOf(diff)

        if(indexOfSecValue>-1 §§ nums[i] != nums[indexOf(indexOfSecValue)])
        return [i, indexOfSecValue]
    }

    */
