export const exampleWithForIn = (arrayValues) => {
    let sum = 0;

    for (const item in arrayValues) {
        sum += item;
    }

    return sum;
}
