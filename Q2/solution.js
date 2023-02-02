const object1 = {
    name: "Nidhish Kumar Reddy",
    email: "nidhishkumarreddy@gmail.com",
    address: {
        house: "14",
        street: "Ejipura"
    },
    misc: [{ prop1: [1], prop2: [2] }, [3, 4]],
    city: "Bangalore"
};

const object2 = {
    name: "Nidhish Kumar Reddy",
    email: "nidhishkumarreddy@gmail.com",
    address: {
        house: "14",
        street: "Ejipura"
    },
    misc: [{ prop1: [1], prop2: [2] }, [3, 4]],
    city: "Bangalore"
};

/***
 * validate function will take two values as parameters and returns whether the two values are same or not
 * value1, value2 can be of any type between number, string, object, array
 */
function validate(value1, value2) {
    if (typeof value1 === typeof value2) {
        if (typeof value1 === "object") {
            if (Array.isArray(value1) !== Array.isArray(value2)) {
                return false;
            } else if (
                Array.isArray(value1) === Array.isArray(value2) &&
                !Array.isArray(value1)
            ) {
                const result = compareObjects(value1, value2);
                // when result === false then only return, if return true, future keys will not get executed
                if (!result) {
                    return result;
                }
            } else if (
                Array.isArray(value1) === Array.isArray(value2) &&
                Array.isArray(value1)
            ) {
                const result = compareArrays(value1, value2);
                // when result === false then only return, if return true, future indices will not get executed
                if (!result) {
                    return result;
                }
            }
        } else {
            if (value1 !== value2) {
                return false;
            }
        }
    } else {
        return false;
    }
}

// Compare two objects deeply nested
function compareObjects(object1, object2) {
    const length1 = Object.keys(object1).length;
    const length2 = Object.keys(object2).length;
    if (length1 !== length2) {
        return false;
    }
    for (const key1 in object1) {
        const value1 = object1[key1];
        const value2 = object2[key1];
        const result = validate(value1, value2);
        if (result !== undefined) {
            return result;
        }
    }
    return true;
}

// Compare two arrays deeply nested
function compareArrays(array1, array2) {
    const length1 = array1.length;
    const length2 = array2.length;
    if (length1 !== length2) {
        return false;
    }
    for (let index = 0; index < length1; index++) {
        const value1 = array1[index];
        const value2 = array2[index];
        const result = validate(value1, value2);
        if (result !== undefined) {
            return result;
        }
    }
    return true;
}

console.log(compareObjects(object1, object2));
