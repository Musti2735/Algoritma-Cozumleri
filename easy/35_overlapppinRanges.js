const overRanges =(arr)=>{

    let arr1 = [arr[0], arr[1]]
    let newArr1 = []

    for (let i=arr1[0]; i<=arr1[1]; i++){
        newArr1.push(i)
    };

    let arr2 = [arr[2], arr[3]]
    let newarr2 = []

    for (let i=arr2[0]; i<=arr2[1]; i++){
        newarr2.push(i)
    };
    
    counter =0
    for(let i=0; i<newArr1.length; i++){
        for(let j=0; j<newarr2.length; j++){
            if(newArr1[i]==newarr2[j]){
                counter +=1
            }
        }
    };

    return counter == arr[arr.length-1] ? true : false

}

console.log(overRanges([4, 10, 2, 6, 3]))

/*
Verilen listede, 0 ile 1 ve 2 ile 3. elemanlar ayrı ayrı birer aralık olarak alınıp, bu iki aralık arasındaki ortak rakamların sayısının listenin son elemanına eşit olup olmadığını buluna algoritma.
4-10 arası 4 5 6 7 8 9 10
2-6 arası 2 3 4 5 6 rakamları for döngüsü ile ayrı birer liste olarak alındı ve bu listeler arasındaki ortak rakamlar i ve j for döngüleri ile karşılaştırıldı.

*/

