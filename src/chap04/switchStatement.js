"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var num = Math.round(Math.random() * 5);
switch (num) {
    case 1:
        console.log("大吉");
        break;
    case 2:
        console.log("中吉");
        break;
    case 3:
        console.log("吉");
        break;
    case 4:
        console.log("凶");
        break;
    case 5:
        console.log("大凶");
        break;
    default:
        console.log("これがでたら破滅");
        break;
}
