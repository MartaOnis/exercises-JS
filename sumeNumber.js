// SUMAR LOS CUATRO PRIMEROS NUMEROS Y LOS CUATRO ULTIMOS DE UN ARRAY

function miniMaxSum(arr) {
  // Write your code here
  const sortNumberArray = arr.sort(function (a, b) {
    return a - b;
  });

  const getSum = (arr, number1, number2) => {
    let total = 0;
    let newArray = arr.slice(number1, number2);

    for (let i of newArray) {
      total += i;
    }
    return total;
  };
  console.log(getSum(arr, 0, 4) + ' ' + getSum(arr, 1, 5));
}
let array = [1, 3, 5, 7, 9];
miniMaxSum(array);
