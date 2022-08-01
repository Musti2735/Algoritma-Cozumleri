const countingMinutes = (time) =>{
    let times=time.split("-")
    let time0 = {
        meridiem:times[0].slice(-2),
        hour:parseInt(times[0].split(":")[0]),
        minute:parseInt(times[0].slice(-4,-2))
    }
    let time1 = {
        meridiem:times[1].slice(-2),
        hour:parseInt(times[1].split(":")[0]),
        minute:parseInt(times[1].slice(-4,-2))
    }

    let minutes = 0
    let result = 0
    if(time0.meridiem==time1.meridiem){
        minutes =(time1.hour*60 + time1.minute) - (time0.hour*60 + time0.minute)
        result = minutes > 0 ? minutes: 24*60 + minutes
    }
    else{
        minutes =(time1.hour*60 + time1.minute) - (time0.hour*60 + time0.minute)
        result = 12*60 + minutes
    }

    return result

}

console.log(countingMinutes("5:00am-10:00am"))



// 9:00am-10:00am

/*
String şekilinde verilen iki adet saat arasındaki farkın dakika olarak hesaplanması isteniyor.
Parametre formatı ise: "9:00am-10:00am" şeklinde. 

Sorunun Çözümü
1- Verilenlen string değerlerini hesaplarda kullanailmek adına parçaladık, gerekli yerleri parseInt() ile sayıya çevirdik ve bu değerler ile time1 ve time2 adında nesneler oluşturduk.

2- Aynı meridyemde olan saatler için farklı, farklı meridyemlerde olan saatler için farklı hesaplama yaptık.

*/