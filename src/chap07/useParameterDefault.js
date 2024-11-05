"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function showCircumference(radius, pi) {
    if (pi === void 0) { pi = 3.14; }
    var circumference = 2 * pi * radius;
    console.log("\u534A\u5F84".concat(radius, "\u306E\u5186\u5468\u306E\u9577\u3055: ").concat(circumference));
}
showCircumference(4, 3.142);
showCircumference(8);
