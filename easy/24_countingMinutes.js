const countingMinutes = (time) =>{
    let arr=time.split("-")
    arr1 =arr[0].split(":")
    arr2 = arr[1].split(":")
   
    if(arr1[1].split("")[arr1[1].length-2]=="a"){
        num1 =  parseInt(arr1[0].toString()) * 60
    }else if(arr1[1].split("")[arr1[1].length-2]=="p"){
        num1 =  (parseInt(arr1[0].toString()) * 60) + 720
    }

    if(arr2[1].split("")[arr2[1].length-2]=="a"){
        num2 =  parseInt(arr2[0].toString()) * 60
    }else if(arr2[1].split("")[arr2[1].length-2]=="p"){
        num2 =  (parseInt(arr2[0].toString()) * 60) + 720
    }
   return Math.abs(num1-num2)

}

console.log(countingMinutes("5:00pm-10:00am"))



// 9:00am-10:00am

/*

    if(arr1[1].split("")[arr1[1].length-2]="a"){
        num1 =  parseInt(arr1[0].toString()) * 60
    }else if(arr1[1].split("")[arr1[1].length-2]="p"){
        num1 =  (parseInt(arr1[0].toString()) * 60) + 720
    }

    if(arr2[1].split("")[arr2[1].length-2]="a"){
        num2 =  parseInt(arr2[0].toString()) * 60
    }else if(arr2[1].split("")[arr2[1].length-2]="p"){
        num2 =  (parseInt(arr2[0].toString()) * 60) + 720
    }
   return num1-num2

*/