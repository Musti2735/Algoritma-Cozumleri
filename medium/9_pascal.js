const pascal = (num) => {
    let pascal = [[1]]
    for(let i =0; i<num; i++){
        let temp = [0,...pascal[pascal.length-1], 0]
        let row = []

        for(let j=0; j<pascal[pascal.length-1].length+1; j++){
            row.push(temp[j]+temp[j+1])
        }
        pascal.push(row)
    }
    return pascal
}

console.log(pascal(7))