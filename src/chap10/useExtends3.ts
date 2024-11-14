export { }

class Greetings {
    // 名前のプロパティ
    protected name: string = "";

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

class MyDo extends Greetings {
    sayHello() {
        console.log(`${this.name}さん、まいど`)
    }
}

const jiro = new MyDo("坂本次郎");
jiro.sayHello();