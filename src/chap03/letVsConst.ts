export { }

let num1 = 56;
// TypeScriptのconstは定数ではなく、イミュータブルな変数
const num2 = 35;

console.log(num1);
console.log(num2);

num1 = 28;
// num2はconstで宣言されているため再代入不可
// num2 = 18;

console.log(num1);
console.log(num2);
