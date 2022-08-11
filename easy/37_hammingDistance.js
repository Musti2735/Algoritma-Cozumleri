const hammingDistance =(p1, p2) => {
    count = 0
    for (let i = 0; i<=p1.length; i++){
        if(p1[i] != p2[i]) count +=1
    }
    return count

}

console.log(hammingDistance("karolin", "kathrin"))


/* Soruda, verilen iki kelimenin kaç farklı harfinin olduğu sorulmuştur. 
Çözüm olarak bir sayaç tanımladık ve for döngüsü ile iki kelimenin her bir harfini birbiri ile karşılaştırdık. Eğer harfler farklıysa count değerini 1 artırdık.

*/

