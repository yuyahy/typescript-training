"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rgb;
(function (Rgb) {
    Rgb[Rgb["RED"] = 0] = "RED";
    Rgb[Rgb["GREEN"] = 1] = "GREEN";
    Rgb[Rgb["BLUE"] = 2] = "BLUE";
})(Rgb || (Rgb = {}));
function showColorSelection(name, color) {
    var colorStr = "赤";
    if (color == Rgb.GREEN) {
        colorStr = "緑";
    }
    else {
        colorStr = "青";
    }
    console.log("".concat(name, "\u3055\u3093\u304C\u9078\u3093\u3060\u8272: ").concat(colorStr));
}
showColorSelection("美智恵", Rgb.RED);
