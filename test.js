var twoSum = function(nums, target) {
    let res = [];
    for(let i = 0; i < nums.length; i++){
        let value = target - nums[i];
        for(let j = i + 1; j < nums.length; j++){
            if(nums[j] === value){
                res.push(i);
                res.push(j);
                return res;
            }
        }
    }
};