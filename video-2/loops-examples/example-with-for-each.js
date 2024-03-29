export const exampleWithForEach = (arrayValues) => {

    if (!Array.isArray(arrayValues))
        return 'Invalid input'

    let sum = 0;

    arrayValues.forEach(value => sum += value);

    return sum;
}
