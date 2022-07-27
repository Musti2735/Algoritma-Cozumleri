const vowelCount =(str)=>{
    let count = 0
    let arr = str.split("")

    arr.forEach((element) => {
        if((/[a/e/u/i/o]/).test(element)){
            count +=1
        }
    })
    return count;
    

}

console.log(vowelCount("Hello World This is JavaScript"))


/*
Sorunun Çözümünde İzlenen Yol
1 - Bize verilen String'in üzerinde forEach Döngüsü kullanabilmek için bir array oluşturduk. 
2- forEach içerisinde if bloğu, regeular expression ve .test metodu kullanarak döngü içerisinde yer alan karakterin sesli bir harf olup olmadığını kontrol ettik.
3- Son olarak da eğer döngüdeki karakter sesli harf ise sayacımızı bir arttırdık ve sonucu return ettik

*/