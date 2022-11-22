const containsDuplicate = (nums)=> {
    checkArr = []
    for (let i = 0; i<nums.length; i++){
        if(!(checkArr.includes(nums[i]))){
            checkArr.push(nums[i])
        }
    }
     return checkArr.length == nums.length ? false : true
}


console.log(containsDuplicate([1,2,3,1]))