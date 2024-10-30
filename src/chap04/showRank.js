"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = Math.round(Math.random() * 100);
console.log("\u70B9\u6570\u306F".concat(score, "\u70B9\u3067\u3059\u3002"));
if (score >= 80) {
    console.log("A判定");
}
else if (score >= 70) {
    console.log("B判定");
}
else if (score >= 60) {
    console.log("C判定");
}
else {
    console.log("不合格");
}
console.log("判定終了");
