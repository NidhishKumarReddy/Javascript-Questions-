Write a function "transformer()" that will take in a JSON and do the following transformations

1.  If the key ends with "\_price",
    a. If the value is string that can be converted to a number, do the conversion and divide by 100
    b. If not a number or a string that cannot be converted to a number, leave it as such
2.  If the value is a string, suffix "String" to the key in the resultant JSON
3.  If the value is an object and the keys are numbers, convert it to an array. Assume that if one of the keys is a
    number, all of them will be numbers.
4.  If the value is an array, convert it into an object with "value" as the array and "length" as the length of
    the array

The checks should be done in the order given. The first rule that matches in the above list is applied to the
transformation.
The transformer should do a deep transformation by going through all the keys in the JSON i.e. if during parsing an
array/object is encountered, each element/property of that array/object should be further parsed based on the above
rules

```
function transformer(json) {
    // code goes here
}
```

```
const testCase = {
  name: "Men's shirt",
  total_price: "10000",
  discounted_price: 9000,
  text_price: "Nine thousand only",
  variants: ["M", "S", "XL", "XXL"],
  colors: {
    0: "red",
    1: "blue",
    2: "green",
  },
  details: [
    {
      title: "Shirt for Men",
      line_price: "10000",
    },
  ],
};
```

```
const expectedResult = {
  nameString: "Men's shirt",
  total_price: 100,
  discounted_price: 90,
  text_price: "Nine thousand only",
  variants: {
    value: ["M", "S", "XL", "XXL"],
    length: 4,
  },
  colors: ["red", "blue", "green"],
  details: {
    value: [
      {
        titleString: "Shirt for Men",
        line_price: 100,
      },
    ],
    length: 1,
  },
};
```
