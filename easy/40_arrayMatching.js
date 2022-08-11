const matchingArray =(arr)=>{
    let arr1 = arr[0]
    let arr2 = arr[1]
    let newList = []
    for(var i=0; i<arr1.length; i++){
        newList.push(arr1[i]+arr2[i])
    }
    if(arr1.length != arr2.length){
       let  newArr= arr.sort((arr1,arr2)=>arr2.length-arr1.length)
        
        let addItems = newArr[0].slice(newArr[1].length)

        return newList.concat(addItems)
    }

    return newList
    
}

console.log(matchingArray([[1,3,2,5], [3,6,4,7,5,6,7]]))


/* Soruda verilen liste içindeki iki liste elamanının aynı indexinde bulunan elemanlarının toplamı ile yeni bir liste oluşturulması isteniyor. Eğer listeslerden biri daha fazla elemana sahip ise fazla olan elemanın aynı şekilde yeni listeye eklememiz isteniyor.

Çözüm olarak, listenin elemanları ile ayrı birer liste oluşturup bu yeni listelerin elemanlarını for döngüsü içinde birbirleri ile topladık. Ardından eğer listelerden biri daha fazla karektere sahipse, fazla karektere sahip olan litenin son elemanınlarını concat metodu ile yeni listemizin sonuna ekledik.
*/