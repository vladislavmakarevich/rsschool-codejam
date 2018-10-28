module.exports = sumOfOther = (arr) => {
    let sum = 0;
    const result = [];
    let len = arr.length;
    for(let i = 0; i < len; i++) {
        sum += arr[i];
    }
    for(let i =0; i < len; i++) {
        result[i] = sum - arr[i];
    }
    return result;
};