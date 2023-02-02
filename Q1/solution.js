const input = {
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

function transformer(input) {
  const result = {};
  for (const key in input) {
    const value = input[key];

    // Check-1
    if (key.includes("_price")) {
      /**
       * If the key ends with "_price",
       * a. If the value is string that can be converted to a number, do the conversion and divide by 100
       * b. If not a number or a string that cannot be converted to a number, leave it as such
       */
      if (
        (typeof value === "string" || typeof value === "number") &&
        !Number.isNaN(Number(value))
      ) {
        result[key] = value / 100;
      } else if (typeof value === "string" && Number.isNaN(Number(value))) {
        result[key] = value;
      }
    }

    // Check-2
    else if (typeof value === "string") {
      /**
       * If the value is a string, suffix "String" to the key in the resultant JSON
       */
      result[key + "String"] = value;
    }

    // Check-3
    else if (typeof value === "object" && !Array.isArray(value)) {
      /**
       * If the value is an object and the keys are numbers, convert it to an array. Assume that if one of the keys is a
       * number, all of them will be numbers.
       */
      if (!Number.isNaN(Object.keys(value)[0])) {
        result[key] = Object.values(value);
      } else {
        const transformedValue = transformer(value);
        result[key] = transformedValue;
      }
    }

    // Check-4
    else if (typeof value === "object" && Array.isArray(value)) {
      /**
       * If the value is an array, convert it into an object with "value" as the array and "length" as the length of
       * the array
       */
      const transformedValue = value.map((element) => {
        if (typeof element === "object" && !Array.isArray(element)) {
          const transformedElement = transformer(element);
          return transformedElement;
        }
        return element;
      });
      result[key] = {
        value: transformedValue,
        length: transformedValue.length,
      };
    }
  }

  return result;
}

console.log(
  JSON.stringify(transformer(input)) === JSON.stringify(expectedResult)
);
