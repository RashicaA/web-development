const nestedArr = [1, [2, 3], [4, 5, [6, 7]], undefined, {}, "hlloe",];
// output shud be == [1,2,3,4,5,6,7, undefined, {}, "hlloe"];\

function flattenArray(arr) {
    return arr.reduce((acc, currValue) => {

        if (Array.isArray(currValue)) {
            // recursion....
            acc.push(...flattenArray(currValue))
        } else {
            // push to result..
            acc.push(currValue);
        }
        return acc;
    }, [])
}

const res1 = flattenArray(nestedArr);
console.log("res1", res1)

// using inbuit method
console.log(nestedArr.flat(1))
console.log(nestedArr.flat(2))
console.log(nestedArr.flat(Infinity))

