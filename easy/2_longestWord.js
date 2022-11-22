export const longestWord =(sen) =>{
    //1-Noktalama işaretlerini kaldırma. Harf ya ada boşluk değilse yerine boşluk koyma ve 
    //2-Cümleyi boşluklardan bölerek, arr oluşturma
    const arr =sen.replace(/[^a-zA-Z ]/g, "").split(" ")

    //3-Arrayi, karekter sayısına göre sıralamak
    arr.sort((a,b)=>{return b.length-a.length})
    //4-İlk öğeyi almak
    return arr[0]


}

console.log(longestWord("Today is a good day!"))


/*
Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
*/