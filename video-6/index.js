import {generateRandomNumbers} from "../../utils/array-values-generator.js";

const findCommonElements = (list1, list2) => {
  const result = [];

  for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++)
      if (list1[i] === list2[j]) result.push(list1[i]);
  }

  return result;
}

const main = () => {
  console.time('findCommonElements ');

  const array1 = generateRandomNumbers(100_000);
  const array2 = generateRandomNumbers(100_000);

  findCommonElements(array1, array2);

  console.timeEnd('findCommonElements ');
}

main()