const arrayAddition =(arr) =>{
    let maxNum = Math.max(...arr)
    let total = 0
    for(let i=0; i<arr.length; i++){
      total += arr[i]
    }
  return total/2 == maxNum ? true : false;
}

console.log("%c" + arrayAddition([5,2,23,6,3,7]), "font-size:20px")


/*
Verilen liste içindeki en büyük eleman ile listenin diğer elemanlarının toplamının eşit olup olmadığını karşılaştıran algoritma.
Max değeri yine Math.max() metodu ile bulduktan sonra bütün array içerisindeki elemanları topladık ve ikiye böldük. Eğer bölüm max değere eşitse true aksi durumlarda ise yine false döndük.

*/