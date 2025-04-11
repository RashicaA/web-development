Array.prototype.myReduceMethod = function (callbackFn, initialValue) {

    // step1 - handle callback type to be functon
    if (typeof callbackFn !== 'function') {
        throw new TypeError(callbackFn + ' must be a functtion');
    }
    var originalArr = this;
    console.log("originalArr", originalArr)
    console.log("arguments", arguments)

    // step2
    // handle emty array woth no initial value
    if (originalArr.length === 0 && arguments.length === 1) {
        throw new TypeError("Reduce of empty array with no initial value")
    }

    // step3 
    // set the intialvalue in the acciumulator & startindex.
    var accumulator = arguments.length >= 2 ? initialValue : originalArr[0];
    var startIndex = arguments.length >= 2 ? 0 : 1;

    // step4. iterate the array.
    for (var i = startIndex; i < originalArr.length; i++) {
        if (i in originalArr) {
            // updating the accumulator..
            accumulator = callbackFn(accumulator, originalArr[i], i, originalArr);
        }
    }

    return accumulator;

}



const el = [1, 2, 3, 4].myReduceMethod((acc, cur) => acc + cur, 1000);
console.log(el)

const el2 = [100, 2, 3, 4].myReduceMethod((acc, cur) => acc + cur);
console.log(el2)

const el3 = [].myReduceMethod((acc, cur) => acc + cur);
console.log(el3); // typeerror...