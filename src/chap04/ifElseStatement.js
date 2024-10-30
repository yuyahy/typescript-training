"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var num = Math.round(Math.random() * 100);
console.log("num\u306E\u5024: ".concat(num));
if (num > 50) {
    console.log("50より大きい");
}
else {
    console.log("50以下");
}
console.log("処理終了");
