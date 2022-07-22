const findIntersection = (arr) =>{
let arr_1 = arr[0].replace(/\s/g, "").split(","); //listenin ile elemanını aldık vee replace ile boş karekterleri kaldırdık.
let arr_2 = arr[1].replace(/\s/g, "").split(",");
let arr_3 = []; // eşleştirme yaptıktan sonra sonucu göreceğimiz ve sayıları tutacağımız bir boş liste oluşturduk
arr_2.forEach(element => { 
    if(arr_1.includes(element)){
        arr_3.push(element)
    }    
});
let result = arr_3.length ==0 ?  false : arr_3.toString()
return result
}
// forEach ile dizenin tüm elemanlarını karşılaştırdık ve aynı olanları push ile listeye ekledik.
console.log(findIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]))

/*
Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
*/