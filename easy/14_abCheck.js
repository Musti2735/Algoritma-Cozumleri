const abCheck =(str)=>{
    let arr = str.split("")
    let control =[]
    arr.forEach(element => {
        if(element==="a"&& arr[arr.indexOf(element)+4]==="b"){
          control.push(true)
        }
        else{
            control.push(false)
        }
    });
    return control.includes(true)? true : false

    // KISA ÇÖZÜM search metodu ile kontrol sağlanabilir
    // return str.search(a...b) > -1 ? true : false  
    
}

console.log(abCheck("smkp kdgjavskbsr"))

/*
Soruda bizden istenen, bize verilen bir string içerisinde aralarında 3 adet değer bulunan ve a ile başlayıp b ile biten bir kelimenin bulunup bulunmadığıdır. Kısaca arayacağımız kelime aj?-b de olabilir a&50b'de hatta 3 adet boşluk da olabilir. Önemli olan şey a ve b harfleri arasında 3 adet değer olması. Eğer aradığımız bu değer string içerisinde varsa fonksiyonumuz true, aksi durumda ise false dönmelidir. 

Soruyu 2 farklı yöntemle çözdük. 
Birinci ve uzun olan yöntemde;
1- Bize verilen string'i forEach kullanabilmek için array'e çevirdik. Burada kesinlikle boşlukları silmedik ve string'i en başta da küçük harfe dönüştürdük.  Bu noktada harf olmayan değerler ile bu işlemi gerçekleştireceğimizde toLowerCase() metodu hataya yol açacaktır. Bu sebeple size tavsiyem çözümünüzü buna göre güncellemenizdir.
2- Oluşturduğumu array üzerinde forEach ile döngü oluşturduk ve eğer döngüdeki değer a harfi ise bu a harfinin indeksini bulduk ve kendisinden 3 karakter sonraki değerin b harfi olup olmadığını kontrol ettik. 
3- Eğer döngü içindeki harf a ve kendisinden sonra 4. karakter b ise oluşturduğumuz const control = [] array içerisine true ekledik. Diğer durumlar içinse bir işlem gerçekleştirmedik. 
4- Son olarak da control array'inin içinde true varsa fonksiyonumuzun true, aksi durumlarda ise false dönmesini sağladık. 
*/ 