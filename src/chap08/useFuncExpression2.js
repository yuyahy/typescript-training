"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var func = function showRoundedElement(currentValue, index, array) {
    var roundedElement = Math.round(currentValue);
    console.log("".concat(index + 1, "\u500B\u76EE\u306E\u8981\u7D20").concat(currentValue, "\u306E\u4E38\u3081\u51E6\u7406\u5F8C:").concat(roundedElement));
};
var numList = [45.112, 78.567, 66.891, 12.223, 28.341];
// 関数が引数の関数をコールバック関数と呼ぶ
numList.forEach(func);
