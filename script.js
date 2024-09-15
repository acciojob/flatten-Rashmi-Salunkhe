function flatten(value) {
    // If the value is not an array or object, return it as-is (primitive)
    if (typeof value !== 'object' || value === null) {
        return value;
    }

    // If it's an array, flatten each element recursively
    if (Array.isArray(value)) {
        let result = [];
        for (let item of value) {
            const flattenedItem = flatten(item);
            // If the flattened item is an array, spread its values
            if (Array.isArray(flattenedItem)) {
                result.push(...flattenedItem);
            } else {
                result.push(flattenedItem);
            }
        }
        return result;
    }

    // If it's an object, flatten its key-value pairs recursively
    if (typeof value === 'object') {
        let result = {};
        for (let key in value) {
            const flattenedValue = flatten(value[key]);
            if (typeof flattenedValue === 'object' && !Array.isArray(flattenedValue)) {
                // Flatten the object properties into the top-level
                for (let subKey in flattenedValue) {
                    result[subKey] = flattenedValue[subKey];
                }
            } else {
                result[key] = flattenedValue;
            }
        }
        return result;
    }
}

module.exports = flatten;
