const questionMarks =(str)=>{
    if(str.length<5){ //ifadenin en az 5 karekter olmasını kontrol ettik.
        return false;
    }
    const newStr = str.replace(/[^0-9?]/g,"") // sayı ve soru işareti olmayanları boşluk ile değiştirdik
    let arr = newStr.split("") // stringi arraya çevirdik

    let sums =[] //toplamları bu listeye alacağız
    let sum = 0
    let iterator = 0 // karekterlerin indexini belirlemek için 

    arr.forEach(element => {
        if(element != "?"){
            sum = parseInt(element) + parseInt(arr[iterator + 4])
            sums.push(sum)
        }
        iterator +=1 // iterator her bir elemanda bir artıp 4. elemanı kontrol ediyor.
        
    });
    return sums.includes(10) ? true : false;



}

console.log(questionMarks("arrb2???4xxbl8???eee5"))


/*Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.
*/