"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function concatName(lastName, middleName, firstName) {
    return "".concat(lastName, "\u30FB").concat(middleName, "\u30FB").concat(firstName);
}
var name1 = concatName("田中", "ダニエル", "健三");
console.log("\u7D50\u5408\u7D50\u679C: ".concat(name1));
var nameArray = ["佐藤", "ミカエル", "健太"];
var name2 = concatName.apply(void 0, nameArray);
console.log("\u7D50\u5408\u7D50\u679C: ".concat(name2));
