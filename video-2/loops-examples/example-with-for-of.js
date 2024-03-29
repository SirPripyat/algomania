export const exampleWithForOf = (arrayValues) => {
    let sum = 0;

    for (const item of arrayValues) {
        sum += item;
    }

    return sum;
}
