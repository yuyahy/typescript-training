"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sigma2N(n) {
    var ans = 0;
    for (var i = 0; i <= n; i++) {
        ans += i;
    }
    return ans;
}
var sigma100 = sigma2N(100);
var sigma150 = sigma2N(150);
var sigma200 = sigma2N(200);
var total = sigma100 + sigma150 + sigma200;
console.log("\u305D\u308C\u305E\u308C\u306E\u8DB3\u3057\u7B97\u7D50\u679C: ".concat(total));
