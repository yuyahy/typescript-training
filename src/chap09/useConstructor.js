"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    function Student(name, english, math, japanese) {
        this.name = "";
        this.english = 0;
        this.math = 0;
        this.japanese = 0;
        this.name = name;
        this.english = english;
        this.math = math;
        this.japanese = japanese;
    }
    // メソッド
    // "function"は不要
    Student.prototype.showScoresSum = function () {
        var sum = this.english + this.math + this.japanese;
        console.log("".concat(this.name, "\u306E\u5408\u8A08\u5F97\u70B9: ").concat(sum));
    };
    Student.prototype.showScoresAvg = function () {
        var sum = this.math + this.japanese;
        var avg = Math.round(sum / 3 * 10) / 10;
        console.log("".concat(this.name, "\u306E\u5E73\u5747\u70B9: ").concat(avg));
    };
    return Student;
}());
var taro = new Student("宮本太郎", 78, 82, 85);
taro.showScoresSum();
taro.showScoresAvg();
