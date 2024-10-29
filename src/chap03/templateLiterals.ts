export { }

const name = "しんちゃん";
// バッククオーテーションで文字列を囲むことで、変数を展開できる
// テンプレートリテラル、テンプレート文字列と呼ぶ
const nameOutput = `あなたのお名前は、${name}です。`;

console.log(nameOutput);