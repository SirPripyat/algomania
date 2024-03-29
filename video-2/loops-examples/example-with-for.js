export const exampleWithFor = (arrayValues) => {
    let sum = 0;

    for (let i = 0; i < arrayValues.length; i++) {
        sum += arrayValues[i];
    }

    return sum;
}
