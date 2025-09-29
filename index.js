import {numberArrayBubleSortAsk, numberArrayBubleSortDesc} from "./sortUtils.js";
import {numberBinarySeaarch} from "./SeqrchUtils.js";

const numbers = [12, 5, 8, 1, 43, 17, -3, 27, 0, 2];

const testSortedNumbersAsk = numbers.sort((x,y) => x - y);

console.log("Результат сортировки встроенной по возрастанию: " + JSON.stringify(testSortedNumbersAsk))

const sortArrayAsk = numberArrayBubleSortAsk(numbers)

console.log("Результат сортировки по возрастанию: " + JSON.stringify(sortArrayAsk))

if (JSON.stringify(sortArrayAsk) === JSON.stringify(testSortedNumbersAsk)) {
    console.log("Массив успено отсортирован")
} else {
    console.log("Массив не отсортирован")
}

const sortArrayDesc = numberArrayBubleSortDesc(numbers)
const testSortedNumbersDesc = numbers.sort((x,y) => y - x);
console.log("Результат сортировки встроенной по убыванию: " + JSON.stringify(testSortedNumbersDesc))
console.log("Результат сортировки по убыванию: " + JSON.stringify(sortArrayDesc))
if (JSON.stringify(sortArrayDesc) === JSON.stringify(testSortedNumbersDesc)) {
    console.log("Массив успено отсортирован")
} else {
    console.log("Массив не отсортирован")
}


// Тестируем бинарный поиск numberBinarySeaarch
console.log('--- Тесты бинарного поиска ---');

const sortedArray = sortArrayAsk; // отсортированный по возрастанию массив для поиска

console.log("--- Поиск существующих значений--- ")
console.log(numberBinarySeaarch(43, sortedArray) === 9); // Должно вывести индекс 9
console.log(numberBinarySeaarch(17, sortedArray) === 7); // Должно вывести индекс 7

console.log("--- Поиск отсутствующих значений--- ")
console.log(numberBinarySeaarch(100, sortedArray) === -1); // Должно вывести -1 (нет элемента)
console.log(numberBinarySeaarch(-10, sortedArray) === -1); // Должно вывести -1 (нет элемента)

console.log("--- Поиск в пустом массиве--- ")
console.log(numberBinarySeaarch(1, []) === -1); // Должно вывести -1

console.log("--- Поиск в массиве с одним элементом--- ")
console.log(numberBinarySeaarch(sortedArray[0], [sortedArray[0]]) === 0); // Должно вывести 0
console.log(numberBinarySeaarch(999, [sortedArray[0]]) === -1); // Должно вывести -1

console.log("--- Поиск крайних элементов--- ")
console.log(numberBinarySeaarch(sortedArray[0], sortedArray) === 0); // Первый элемент, индекс 0
console.log(numberBinarySeaarch(sortedArray[sortedArray.length - 1], sortedArray) === 9); // Последний элемент, индекс последний

console.log("--- Поиск с массивом строк вместо чисел--- ")
console.log(numberBinarySeaarch(17, ["1", "2", "3"]) === -1); // Вероятно -1, т.к. типы не соответствуют

console.log('--- Конец тестов бинарного поиска ---');


