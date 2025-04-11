
// if (!Array.prototype.map) {
Array.prototype.myMapMethod = function (callbackFn, thisArg) {
    if (typeof callbackFn !== 'function') {
        throw new TypeError(callbackFn + ' is not a function.')
    }

    // array to be returned.
    var result = [];

    let originalArr = this;
    for (var i = 0; i < originalArr.length; i++) {
        // check if index is present in the sparse array
        if (i in originalArr) {

            const context = thisArg ? thisArg : this;
            var mappedValue = callbackFn.call(context, originalArr[i], i, originalArr)
            result.push(mappedValue);
        }
    }


    return result;
}
// }

const r1 = [1, 2, , 3, 4, 5].map(el => el * 2)
const r2 = [1, 2, , 3, 4, 5].myMapMethod(el => el / 2)
const r3 = [1, 2, 3, ,].myMapMethod(el => el * 2)
const r4 = [1, 2, 3, 4, 5].myMapMethod(el => el / 2)
// console.log(r1)
// console.log(r1.length)
// console.log(r3)
console.log(r2)
console.log(r2.length)
// console.log(r4)





