function phoneNumber(numbers) {
  const digits = numbers.join("");

  return `(${digits.substring(0, 3)}) ${digits.substring(
    3,
    6
  )}-${digits.substring(6, 10)}`;
}

console.log(phoneNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

{
  /* <p>(012) 345-6789</p>
console.log(p) */
}
