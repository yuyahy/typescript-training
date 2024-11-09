export { }

// 関数シグネチャを列挙(オーバーロードシグネチャと呼ぶ)
function descOneself(name: string, message: string);
function descOneself(name: string, month: number, day: number);
// 実装シグネチャ
// - 全ての実装シグネチャを包括した内容である必要がある
// - 直接実装シグネチャを呼び出すことはできず、必ず関数シグネチャで定義する必要がある
function descOneself(name: string, msgOrMonth: number | string, day?: number) {
    let desc = `こんにちは、${name}です。`;
    // "typeof"で変数の型が取れる
    if (typeof msgOrMonth == "string") {
        desc += msgOrMonth;
    } else {
        desc += `${msgOrMonth}月${day}日生まれです。`;
    }
    console.log(desc);
}

descOneself("江藤", "よろしくお願いします！");
descOneself("江藤", 6, 12);