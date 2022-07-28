const exOh = (str) =>{
    let arr = str.split("")
    count = 0;

    arr.forEach(element => {
        if(element==="o"){
            count ++
        }
        else{
            count --
        } 
    });
    return count === 0 ? true : false;
}

console.log(exOh("xooxxoxo"))


/*
Verilen str ifadesinde x ve o karekterlerinin sayısının eşit olup olmadığını karşılaştıran algoritma.
1-Stringi arraye çevirdik ve foreach ile her bir karekteri sorgulayarak count değişkeninde tuttuk. 
2- Count değişkeni eşit sayıda karekter olduğunda 0 değeri verecktir.

*/