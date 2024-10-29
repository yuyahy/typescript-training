"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var num1 = 56;
// TypeScriptのconstは定数ではなく、イミュータブルな変数
var num2 = 35;
console.log(num1);
console.log(num2);
num1 = 28;
// num2はconstで宣言されているため再代入不可
// num2 = 18;
console.log(num1);
console.log(num2);
