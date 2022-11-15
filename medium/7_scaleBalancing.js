const scaleBalancing = (arr)=>{
    const [l, r] = returnNum(arr[0])
    const diff = Math.abs(l-r)

    const weigths = returnNum(arr[1])

    console.log(weigths)

    //1.senaryo - fark, ikinci kümede varsa direk buluyoruz. Bunun için index numarası üzerinden sorgulatınca eğer array içinde değer varsa bize index numarasını vereceği için ve bu değer de -1'den büyük olacağı için bu yöntemle bir kontrol sağlıyoruz.
    if(weigths.indexOf(diff) > -1) return diff

    //2.senaryo - fark, kümede yoksa ve iki ağırlığın toplamı ile bulunması gerekiyorsa 

    //While döngüsü içinde Sağdan ve soldan toplama işlemi yaparak diff değerini veren sonucu buluruz.

    let leftIndex = 0;
    let rigthIndex = weigths.length-1
    let count =1
    let result =""

    while (leftIndex<rigthIndex && count >0 ){
        let sum = weigths[leftIndex] + weigths[rigthIndex]

        if(sum > diff){
            rigthIndex --
        }
        else if(sum < diff){
            leftIndex ++
        }
        else{
            result = weigths[leftIndex] +","+ weigths[rigthIndex]
            count --
        }
    }
    if(result !="") return result
    else {
        console.log ("none")
    }
}

const returnNum = (str)=>{
    let numerals = []

    str.match(/\d+/g).forEach(element => {
        numerals.push(Number(element))
    });

    return numerals
}

console.log(scaleBalancing(['[5,9]','[1,3,8,9]']))