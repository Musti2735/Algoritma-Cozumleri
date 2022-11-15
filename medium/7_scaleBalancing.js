const scaleBalancing = (arr)=>{
    const [l, r] = returnNum(arr[0])
    console.log(l)
    console.log(r)
}

const returnNum = (str)=>{
    let numerals = []

    str.match(/\d+/g).forEach(element => {
        numerals.push(Number(element))
    });

    return numerals
}

console.log(scaleBalancing(['[5,9]','[1,4,8,9]']))