//  Требования к функции compareFunc(x, y)
//  Принимает два ргумента, которые нужно сравнить
//  Если Первый элемент больше второго, то возвращает 1
//  Если первый элемент меньше второго, то -1
//  Если равны, то 0

const binarySearch = (targer, original_array, compareFunc) => {
    if (original_array.length === 0) {
        console.log("Массив пустой")
        return -1
    }
    if (typeof targer != typeof original_array[0]) {
        console.log("Тип искомого элемента не совпадает с типом элементов массива")
        return -1
    }
    if (original_array.length > 1 && compareFunc(original_array[0], original_array[1]) > 0) {
        console.log("Массив не отсортирован по возрастанию элементов в соответствии с функцией сравнения")
        return -1
    }
    const array = original_array.slice()
    let start = 0
    let end = array.length - 1
    let center
    let compareRes
    while (start <= end) {
        center = Math.floor((start + end)/2)
        compareRes = compareFunc(array[center], targer)
        if (compareRes == 0) {
            return center
        } else if (compareRes > 0) {
            end = center - 1
        } else {
            start = center + 1
        }
    }
    return -1
}

export const numberBinarySeaarch = (target, array) => {
    return binarySearch(target, array, (x ,y) => x - y)
}

