const isRightStr = (str) => {
    const map = getMap()
    const open = "([{"
    const close = ")]}"
    const arr = []
    for (let c of str) {
        if (open.includes(c)) {
            arr.push(c)
        }
        if (close.includes(c)) {
            if (arr.pop() != map.get(c)) {
                return false
            }
        }
    }
    if (arr.length > 0) {
        return false
    }
    return true
}

const getMap = () => {
    const map = new Map()
    map.set(")", "(")
    map.set("]", "[")
    map.set("}", "{")
    return map
}

console.log("---Базовые тесты---")
console.log(isRightStr("([{}]]])") == false)
console.log(isRightStr("([{}])") == true)
console.log(isRightStr("") == true)

console.log("\n---Строка с дополнительным текстом и правильными скобками---")
console.log(isRightStr("text with ([brackets])") == true)
console.log(isRightStr("function(a, b) { return [a, b]; }") == true)
console.log(isRightStr("hello(world[test{value}])") == true)

console.log("\n---Строка с дополнительным текстом и неправильными скобками---")
console.log(isRightStr("text with ([wrong brackets)]") == false)
console.log(isRightStr("function(a, b { return [a, b]; }") == false)
console.log(isRightStr("hello(world[test{value]})") == false)

console.log("\n---Только одна открывающая скобка каждого типа---")
console.log(isRightStr("([{") == false)
console.log(isRightStr("some text ([{") == false)
console.log(isRightStr("(incomplete") == false)

console.log("\n--- Только закрывающие скобки---")
console.log(isRightStr(")]}")  == false)
console.log(isRightStr("text )]}") == false)
console.log(isRightStr(")") == false)

console.log("\n---Пустая строка и строка без скобок---")
console.log(isRightStr("") == true)
console.log(isRightStr("hello world") == true)
console.log(isRightStr("text without brackets") == true)

console.log("\n---Неправильный порядок закрытия скобок---")
console.log(isRightStr("({)}") == false)
console.log(isRightStr("[(])") == false)
console.log(isRightStr("text with ({wrong)} order") == false)

console.log("\n---Сложные вложенные конструкции с текстом---")
console.log(isRightStr("function test() { if (arr[0] === true) { console.log('works'); } }") == true)
console.log(isRightStr("var obj = { key: [1, 2, 3], func: function(x) { return x * 2; } };") == true)
console.log(isRightStr("invalid { code (missing ] bracket") == false)

console.log("\n---Множественные скобки одного типа---")
console.log(isRightStr("((()))") == true)
console.log(isRightStr("[[[]]]") == true)
console.log(isRightStr("{{{}}}") == true)
console.log(isRightStr("(((()))") == false)






