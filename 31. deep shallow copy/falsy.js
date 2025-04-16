// given few values, filter put truthy values.

const values = ["", " ", "hello", 0, 1, -0, true, false, function () { }, {}, [], [1, 2], NaN, null, undefined, 1 / 0, { a: 1 }];

values.forEach(value => {
    if (value) {
        console.log(value, "is truthy")
    } else {
        console.log(value, "is falsy")
    }
})

const res = values.filter(Boolean);
console.log(res);
/**
 * [
  ' ',
  'hello',
  1,
  true,
  [Function (anonymous)],
  {},
  [],
  [ 1, 2 ],
  Infinity,
  { a: 1 }
]
 */
