function averageEven(numbers) {
  if (!numbers || numbers.length === 0) {
    return "Не передали числа";
  }

  const evenNumbers = numbers.filter(num => num % 2 === 0);

  if (evenNumbers.length === 0) {
    return "В массиве нет четных чисел";
  }

  const average =
    evenNumbers.reduce((sum, num) => sum + num, 0) / evenNumbers.length;

  return average;
}

// Массив от 1 до 15
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Вызов функции
console.log(averageEven(numbers));
