//method 1
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    return arr.filter(fn);
};

//Method 2
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    var filteredArray = [];
    for (var i = 0; i < arr.length; i++){
        if (fn(arr[i],i)){
            filteredArray.push(arr[i])
        }
    }
    return filteredArray;
};
