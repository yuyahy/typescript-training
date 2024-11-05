"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumScores() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, scores_1 = scores; _a < scores_1.length; _a++) {
        var score = scores_1[_a];
        total += score;
    }
    return total;
}
var total6 = sumScores(10, 9, 9, 10, 8, 9);
console.log("6\u4EBA\u306E\u5BE9\u67FB\u54E1\u306E\u5408\u8A08\u70B9: ".concat(total6));
var total4 = sumScores(10, 9, 8, 9);
console.log("4\u4EBA\u306E\u5BE9\u67FB\u54E1\u306E\u5408\u8A08\u70B9: ".concat(total4));
