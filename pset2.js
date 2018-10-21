/*
    @func removeNegatives
    @param {array} arr
    @returns {array}
    @desc - takes all engative numbers and makes positive
    @example - removeNegatives([-3,-2,1,2,3,-4]); // [3,2,1,2,3,4]
*/
const removeNegatives = (arr) => {
    const copyArr = [...arr];
    for (let i = 0; i < arr.length; i++) {
        if (copyArr[i] < 0) {
        copyArr[i] *= -1
        }
    }
return copyArr;
}
console.log(removeNegatives([-3,-2,-1,1,2,3,-4]));
console.log(removeNegatives([-1000,-100,-10,0, -3, -4, -5]))
/*
    @func findVal
    @param {array} arr
    @param {anything} val
    @returns {number}
    @desc - checks each value of array and compares to val
            if found, returns the INDEX at which val was found
            otherwise, returns -1
    @example
        findVal([1,2,3,4], 1); // 0
        findVal([1,2,3,4], 4); // 3
        findVal([1,2,3,4], 9); // -1
*/
const findVal = (arr,val) => {

    for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
        return i
    }
}
return -1

}
console.log(findVal([1,2,3,4], 1));
console.log(findVal([1,2,3,4], 4))
console.log(findVal([1,2,3,4], 9))
console.log(findVal([-11,9,43,-17], 9));
console.log(findVal([6,7,8,9,-1], 6));
/*
    @func removeOdds
    @param {array} arr
    @returns {array}
    @desc - checks each value of array
            if odd, remove from array
            otherwise, keep in array
    @example
        removeOdds([1,2,3,4]); // [2,4]
        removeOdds([1,"2",3,4]); // [4]
*/
const removeOdds = (arr)  => {    
    const hasOddsArr = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && typeof(arr[i]) === "number") {
        hasOddsArr.push(arr[i]);
    }
}
return hasOddsArr;
}
console.log(removeOdds([1,2,3,4]));
console.log(removeOdds([1,"2",3,4]));
/*
    @func addSquares
    @param {array} arr
    @returns {array}
    @desc - for each value in array, square it then add to array
    @example - 
        addSquares([1,2,3,4); // [1,2,3,4,1,4,9,16]
*/
const addSquares = (arr) => {
    const squares = [...arr];
    for (let i = 0; i < arr.length; i++) {
             
         squares.push(arr[i] ** 2)
    }

    return squares;
}
console.log(addSquares([1,2,3,4]));
/*
    @func doubleify
    @param {array} arr
    @returns {array}
    @desc - take each value of array, add same value right after
    @example - doubleify([1,2,3,4); // [1,1,2,2,3,3,4,4]
*/
const doubleify = [] => {
    const twinI = [...arr];
    for let i = 0; i < arr.length; i++) {
twinI.push(arr[i]) 
}
return twinI;
}
console.log(doubleify([1,2,3,4]));
/*
    @func findMax
    @param {array}
    @returns {number}
    @desc - find largest number in array
    @example - findMax([1,2,3,99,4]); // 99 
*/
