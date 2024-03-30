const fibonnaci = (number) => {
  if (number <= 1)
    return number;

  return fibonnaci(number - 1) + fibonnaci(number - 2);
}

const main = () => {
  console.time('fibonnaci');

  fibonnaci(40)

  console.timeEnd('fibonnaci');
}

main()