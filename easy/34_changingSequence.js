const changSequence =(arr) =>{
    let newArr = []

    for(let i =1; i<arr.length; i++){
        newArr.push(arr[i]-arr[i-1])
    }
    let tendency = "1";
    if(newArr[0]<1) tendency="-1";

    if(tendency=="1"){
        for(let i =0; i<newArr.length; i++){
            if(newArr[i]<1){
                return i
            }
        }
    }else if(tendency=="-1"){
        for(let i =0; i<newArr.length; i++){
            if(newArr[i]>0){
                return i
            }
        }
    }
  
    return -1


}

console.log(changSequence(["-1","-2","-3","-4","6","7","8"]))
// console.log(changSequence(["6","7","8","5","3","-2"]))

/*

Verilen listde artış veya azalışın değiştiği indexi bulan algoritma.

listenin sırayla elemanlarını birbirinden çıkartıp, sonucu yeni bir listeye push ediyoruz. tandency adında bir değişken oluşturum eğilimin artan olmasına 1 azalan olmasını -1 atıyoruz. artan ve azalan eğilimlere göre liste elemanlarını kontrol edip eğilim değiştiğinde elemanın indexini return ediyoruz.
*/