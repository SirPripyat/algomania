import {generateRandomNumbers} from "../../utils/array-values-generator.js";
import {exampleWithFor} from "./loops-examples/example-with-for.js";
import {exampleWithReduce} from "./loops-examples/example-with-reduce.js";
import {exampleWithForEach} from "./loops-examples/example-with-for-each.js";
import {exampleWithForOf} from "./loops-examples/example-with-for-of.js";
import {exampleWithForIn} from "./loops-examples/example-with-for-in.js";
import {exampleWithWhile} from "./loops-examples/example-with-while.js";

const arrayToTest = generateRandomNumbers(10_000_000)

const sumArrayExamples = {
    for: exampleWithFor,
    forIn: exampleWithForIn,
    forOf: exampleWithForOf,
    reduce: exampleWithReduce,
    forEach: exampleWithForEach,
    while: exampleWithWhile,
}

const main = async () => {
    for (const [key, example] of Object.entries(sumArrayExamples)) {
        console.time(key)
        await example(arrayToTest)
        console.timeEnd(key)
    }
}

main()