export { }

class Student {
    private _name: string = "";
    private _english: number = 0;
    private _math: number = 0;
    private _japanese: number = 0;

    constructor(name: string, english: number, math: number, japanese: number) {
        this._name = name;
        this._english = english;
        this._math = math;
        this._japanese = japanese;
    }

    // メソッド
    // "function"は不要
    showScoresSum() {
        console.log(`${this._name}の合計得点: ${this.total}`);
    }

    showScoresAvg() {
        const avg = Math.round(this.total / 3 * 10) / 10;
        console.log(`${this._name}の平均点: ${avg}`);
    }

    // ゲッター
    get total(): number {
        return this._english + this._japanese + this._math;
    }

    // セッター
    set english(value: number) {
        // バリデーション
        if (value < 0) {
            value = 0;
        }
        this._english = value;
    }
}

const taro = new Student("宮本太郎", 78, 82, 85);
taro.showScoresSum();
taro.english = -20
// privateメンバーで定義しているので以下はエラーになる
// taro._english = -20
console.log(taro.total);
