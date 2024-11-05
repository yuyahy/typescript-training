"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function showSigma2N(n) {
    var ans = 0;
    for (var i = 1; i <= n; i++) {
        ans += i;
    }
    console.log("\u7D50\u679C: ".concat(ans));
}
var num = 100;
showSigma2N(num);
num = 150;
showSigma2N(num);
num = 200;
showSigma2N(num);
