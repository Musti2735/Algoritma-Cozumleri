const numberCheck =(num1, num2) =>{
    if(num1>num2){
        return true
    }
    else if (num2>num1){
        return false
    }
    else{
        return -1
    }
}

console.log(numberCheck(1,1))

// Verilen iki adet num değerinin büyük-küçük olarak karşılaştıran uygulama