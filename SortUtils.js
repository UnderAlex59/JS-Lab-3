//  Требования к функции compareFunc(x, y)
//  Принимает два ргумента, которые нужно сравнить
//  Если Первый элемент больше второго, то возвращает положительное число
//  Если первый элемент меньше второго, то отрицательное
//  Если равны, то 0
const bubleSort = (original_array, compareFunc) => {
    const array = original_array.slice()
    const len = array.length
    let current
    let compare
    for (let i = 0; i < len-1; i++) {
        current = array[i]
        compare = array[i+1]
        if (compareFunc(current, compare) > 0) {
            array[i] = compare
            array[i+1] = current
            i = -1
        }
    }
    return array
}

// функция сортировки для массива чисел по возрастанию (хотя для всего у чего работает сравнение через >)
// Правда результат может быть непредсказуемый для объектов
// Для сложных объектов чше использовать bubleSort со свей функцией
export const numberArrayBubleSortAsk = (array) => {
    return bubleSort(array, (x, y) => x - y)
}

// Для сортировки чисел по убыванию
export const numberArrayBubleSortDesc = (array) => {
    return bubleSort(array, (x, y) => y - x)
}

