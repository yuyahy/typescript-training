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

class HelloWithNice extends Greetings {
    sayHello(): void {
        super.sayHello();
        console.log("よろしくお願いします");
    }
}

class HelloWithMsg extends Greetings {
    msg: string = "";

    constructor(name: string, msg: string) {
        super(name);
        this.msg = msg;
    }

    sayHello(): void {
        super.sayHello();
        console.log(this.msg);
    }
}

const shiro = new HelloWithMsg("渡辺四郎", "いい天気ですね");
shiro.sayHello();

const saburo = new HelloWithNice("宮西三郎");
