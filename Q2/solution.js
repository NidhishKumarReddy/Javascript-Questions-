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

// This Method checks for objects, arrays, numbers, strings, null, undefined prop types
function compareObjects(object1, object2) {
    // Check whether the two params are same or not
    if (object1 === object2) {
        return true;
    }

    // Checking the given params are objects are not
    if (
        object1 === null ||
        typeof object1 !== "object" ||
        object2 === null ||
        typeof object2 !== "object"
    ) {
        return false;
    }

    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    // Loop through the object1 keys
    for (const key of keys1) {
        // Find the whether current key in keys1 exited in keys2 also
        if (!keys2.includes(key)) {
            return false;
        }
        // If current key is there in both keys1 and keys2 call recursion
        if (!compareObjects(object1[key], object2[key])) {
            return false;
        }
    }
    return true;
}

console.log(compareObjects(object1, object2));
