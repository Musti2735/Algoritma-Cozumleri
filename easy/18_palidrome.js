const palidrome = (str)=>{
    let newStr = str.split("").reverse().join("")
    return str === newStr ? true : false;
}
console.log(palidrome("racecar"))


/*
Verilen string ifadenin tersten okunuşunun da aynı olması halinde palidrome denilir. Bir kelimenin palidrome olup olmadığını bulan algoritma.
string ifadeyi split ile arraye ve reverse ile terse çevirdik. join ile tekrar string yaptığımı ifadeyi ilk str ile karşılaştırdık.

*/