const powerOfTwo=(num)=>{

let result = Math.log2(num);

return Number.isInteger(result)
}

console.log(powerOfTwo(62))



/*
Verilen Parametrenin 2'nin Bir Kuvveti Olup Olmadığının Kontrol Edilmesi İsteniyor.


Math.log2(n) metodunun verdiği değer parametre olark verilen sayının üs değeridir. Bu değerin isInteger metodu ile tam sayı olup olmadığını kontrol ederek, eğer tam sayı ise true değilse false döndürdük.


*/