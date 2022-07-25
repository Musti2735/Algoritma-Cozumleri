const letterChange=(str)=>{
    let newStr = str.toLowerCase().replace(/[a-z]/gi, (char)=>{
        if(char === "z"){
            return "a"
        }else{
            return String.fromCharCode(char.charCodeAt()+1)
        }
        //İlk başta tüm karekterleri küçük harfe çevirdik. Ardından rexExp ile her karekteri kontrol ederek eğer z karekteri varsa doğrudan a karekterine çevirdik. Diğer karekterleri chatAt metodu kullanarak kendinden bir sonraki karektere çevirdik.
        
        
    })
    let result = newStr.replace(/a|e|o|u|i/gi, char => char.toUpperCase() )
    return result
    // sesli harfleri büyük harf yaptık
}


console.log(letterChange("Hello Mu32stafa<z"))


/* Verilen string ifadede her harfi alfabede kendinden bir sonraki karektere çeviren ve aynı zamanda sesli harfleri büyük harfe çeviren uygulama. */
