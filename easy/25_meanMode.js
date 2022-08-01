const meanMode = (arr) =>{

    let sum = 0;
    arr.forEach(element => {
        sum +=element
    });
    let mean = sum/(arr.length)
    
    let mode = 1
    let modeList=[]
    arr.forEach(element=>{
        if(! modeList.includes(element)){
            modeList.push(element)
        }else{
            mode +=1 
        }

    })
    return mode === mean ? "1" : "0";

}

console.log(meanMode([1,3,3,3,5]))

/*
Verilen array'in içerisindeki değerlerin ortalaması ile mode değerinin eşit olup olmadığının kontrol edilmesi isteniyor.


*/