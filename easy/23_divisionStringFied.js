const divisionField = (num1, num2) =>{
    let result =Math.floor(num1/num2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") 

    return result

}
console.log(divisionField(123456789, 10000))

/*
Bize verilen 2 adet sayının bölünmesi ve bölümün ise formatlanarak return edilmesi isteniyor. 
Formatlama Kriterleri;
1- Ondalık kısmı verme,
2- Eğer bölüm 3 basamaktan oluşuyorsa bölümü string'e çevir ve return et. 
3- Eğer bölüm 3'den fazla basamaktan oluşyorsa,  binler basamağına virgül ekle, string'e çevir ve o şekilde return et. 

Math floor ile sonucu aşağıya yuvarladık. İfadeyi stringe çevirerek rexEvp kullandık..
Regular Expression Sayesinde tek satırda sorunun replace kullanılarak çözümü.

*/