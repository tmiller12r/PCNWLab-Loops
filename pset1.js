/*
    @func average
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            find average of all numbers
    @example - average([1,2,3,4]); // 2.5
*/

/*const average = arr => {
    
    for i = 0; i <= copyArr.length - 1; i++) {

    }
 */
const average = (arr) => {
    const copyArr = arr.slice(0);   // copyArr can also simply be arr
let sum = 0;                        // since we are not returning 
 for (let i = 0; i < copyArr.length; i++) {
     sum += copyArr[i]
 }
 return sum / arr.length;
}

console.log(average([10,20,30,40,55]));

/*
    @func squareEach
    @param {array} arr
    @returns {array}
    @desc - square each value in array
    @example - squareEach([1,2,3,4]); // [1,4,9,16]
*/
const squareEach = (arr) => {
    const copyArr = arr.slice(0);
    for (let i = 0; i < copyArr.length; i++) {
copyArr[i] = copyArr[i] ** 2;
    }
    return copyArr;
}
console.log(squareEach([1,2,3,4]));


/*
    @func averageSquare
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            square each element
            find the average of the 
            SQUARES of each element in this array
    @example - 
        // turn [1,2,3,4] to [1,4,9,16]
        // then find the averate of the array to the right
        averageSquare([1,2,3,4); // 7.5
*/
const avgSquare = (arr) => {
    return average(squareEach(arr));
}
console.log(squareEach([1,2,3,4]));
/*
    @func negateArr
    @param {array} arr
    @returns {array}
    @desc - negate each item in array
    @example
        negateArr([1,2,3,4]); // [-1,-2,-3,-4]
*/
const negateArr = (arr) => {
    const copyArr = [...arr];
    for (let i = 0; i < copyArr.length; i++) {
        copyArr[i] *= -1;
        //copyArr[i] = copyArr[i] * -1;
    }
    return copyArr;
}
console.log(negateArr([1,2,3,4,5]))
/*
    @func reverseArr
    @param {array} arr
    @returns {array}
    @desc - reverse an array
    @example - reverseArr([1,2,3,4]); // [4,3,2,1]
*/ 
//This is a clever solution (not by the book):
const reverseArr1 = (arr) => {
    let arrCopy = [];

    for (let i = 0; i < arr.length; i++) {
arrCopy[arr.length-1-i] = arr[i];
    }
    return arrCopy;
}
console.log(reverseArr1([1,2,3,4]))

//More conventional solution:
const reverseArr = (arr) => {
    let arrCopy = []

    for (let i = arr.length - 1; i >= 0; i--) {
        arrCopy.push(arr[i]);
    }
    return arrCopy;
}
console.log(reverseArr([1,2,3,4,5]))
/*
    @func negateBackwards
    @param {array} arr
    @returns {array}
    @desc - reverse AND negate array
    @example
        negateBackwards([1,2,3,4]); // [-4, -3, -2, -1]
*/
const negateBackwards = (arr) => {
    let copyArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        copyArr.push((arr[i] * -1));
    }
    return copyArr;
}
console.log(negateBackwards([1,2,3,4,5,6,7,8]));

const negateBackwards2 = (arr) => negateArr(reverseArr(arr));
