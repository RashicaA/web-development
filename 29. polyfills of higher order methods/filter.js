// if(!Array.prototype.filter){
Array.prototype.myFilter = function (callback, thisArg) {
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' must be a functtion');
    }

    var result = [];
    var originalArr = this;
    for (var i = 0; i < originalArr.length; i++) {
        if (i in originalArr) {

            var context = thisArg ? thisArg : this;

            // if cb returns true, push the elemnet to the result array.
            if (callback.call(context, originalArr[i], i, originalArr)) {
                result.push(originalArr[i]);
            }
        }
    }


    return result;
}
// }


const arr = [1, 2, 3, , , 4, 5,];
const r1 = arr.filter(el => el % 2 === 0)
const r2 = arr.myFilter(el => el % 2 === 0)

console.log(arr.length);
console.log(arr[3])
console.log(r1)
console.log(r2)