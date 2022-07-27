const alphabetSoup =(str) =>{
    let result = str.split("").sort().join("")
    return result
}

console.log(alphabetSoup("helloworld"));

/*
Sorunun Çözümünde İzlenen Yol
1- İlk olarak bize verilen değeri array'e çevirdik.
2- Array Üzerinde .sort() metodunu uyguladık,
3- Sıralanmış Array'i .join() metodu kullanarak return ettik.
*/
