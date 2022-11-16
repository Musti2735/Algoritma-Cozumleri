const timeDiff =(t1, t2) =>{

    let t1Minutes = Number(t1.slice(0,2)*60) + Number(t1.slice(3,5))
    let t2Minutes = Number(t2.slice(0,2)*60) + Number(t2.slice(3,5))
    let diff = t2Minutes - t1Minutes

    if(diff < 0){
        diff = diff + 1440
    }

    let hour =(diff) =>{
        let hour =  Math.floor(diff/60)
        if(hour<10){
            hour = "0"+hour
        }
        return hour
    }
    let minute =(diff) =>{
        let minute = diff%60
        if(minute<10){
            minute = minute +"0"
        }
        return minute
    }

    let myHour = hour(diff)
    let myMinute = minute(diff)

    let resut = myHour+":"+ myMinute

    return resut
    
}

console.log(timeDiff("16:30", "16:30"))