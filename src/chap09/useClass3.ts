export { }

// クラス定義
class Student {
    name: string = "";
    english: number = 0;
    math: number = 0;
    japanese: number = 0;

    // メソッド
    // "function"は不要
    showScoresSum() {
        const sum = this.english + this.math + this.japanese;
        console.log(`${this.name}の合計得点: ${sum}`);
    }
}

const taro = new Student();
console.log(taro);
taro.name = "宮本太郎";
taro.english = 78;
taro.math = 82;
taro.japanese = 85;
taro.showScoresSum();

const hanako = new Student();
console.log(hanako);
hanako.name = "松下花子";
hanako.english = 91;
hanako.math = 80;
hanako.japanese = 87;
taro.showScoresSum();