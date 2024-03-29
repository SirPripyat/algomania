export const exampleWithWhile = (arrayValues) => {
    let sum = 0;

    while (arrayValues.length > 0) {
        sum += arrayValues.pop();
    }

    return sum;
}
