"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var heightList = {
    "Tomoko": 155.4,
    "Yumi": 162.3,
    "Ayaka": 157.9,
    "Rina": 170.2,
    "Yoshie": 153.7
};
for (var key in heightList) {
    console.log("".concat(key, "\u3055\u3093\u306E\u8EAB\u9577: ").concat(heightList[key]));
}
heightList["Yoshie"] = 154.6;
heightList["Emi"] = 160.3;
for (var key in heightList) {
    console.log("".concat(key, "\u3055\u3093\u306E\u8EAB\u9577: ").concat(heightList[key]));
}
console.log(heightList.Rina);
