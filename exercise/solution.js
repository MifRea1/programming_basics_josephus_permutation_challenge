// BEGIN (write your solution here)
export default (amount, step) => {
  let arr = [], result = [];
  for (let i = 1; i <= amount; ++i) {
    arr.push(i);
  }

  let num = (step - 1) % amount;
  while (arr.length) {
    let current = arr.splice(num, 1)[0];
    result.push(current);
    num = (num + step - 1) % arr.length;
  }
  return result;
};
// END
