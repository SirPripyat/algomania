const factorialConst = (number) => {
  if (number <= 1)
    return 1;

  return number * factorialConst(number - 1);
}

const main = () => {
  console.time('factorialConst')

  factorialConst(8_000);

  console.timeEnd('factorialConst')
}

main()