export { }

class Greetings {
    // 名前のプロパティ
    name: string = "";

    // コンストラクタ
    constructor(name: string) {
        this.name = name;
    }

    // 「こんにちは」と表示するメソッド
    sayHello() {
        console.log(`${this.name}さん、こんにちは`)
    }
}

// 継承
class GoodMorning extends Greetings {
    sayGoodMorning() {
        console.log(`${this.name}さん、おはようございます`);
    }
}

const taro = new GoodMorning("江口太郎");
taro.sayGoodMorning();
taro.sayHello();