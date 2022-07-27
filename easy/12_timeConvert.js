const timeConvert = (num) =>{
    let result = `${Math.floor(num/60)}:${num % 60}`
    return result
}

console.log(timeConvert(63))

/*
1 - Verilen sayıdan Math.floor() kullanılarak saat ve % kullanarak da dakika hesaplanmıştır. 
2 - Hesaplanan değerler hour+":"+min şekilnde return edilmiştir. 
*/