//2  Выведите в консоль тип данных следующих переменных:


let a;
let c = 9;
let str = "Hi 5!";
let b = true;
let y = 9 + '1';
let x = 'a' / 6;

console.log(typeof a);    // undefined
console.log(typeof c);    // number
console.log(typeof str);  // string
console.log(typeof b);    // boolean
console.log(typeof y);    // string (поскольку при сложении числа с строкой результат будет строкой)
console.log(typeof x);    // number (NaN также относится к числовому типу)
