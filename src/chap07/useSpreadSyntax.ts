export { }

function concatName(lastName: string, middleName: string, firstName: string): string {
    return `${lastName}・${middleName}・${firstName}`;
}

const name1 = concatName("田中", "ダニエル", "健三");
console.log(`結合結果: ${name1}`);
// "as const"を使用すると配列の各要素も変更不可になる
const nameArray = ["佐藤", "ミカエル", "健太"] as const;
// "..."{配列}とすることで引数に配列の各要素を展開することができる
// ただし各要素はconstにしておく必要がある
const name2 = concatName(...nameArray);
console.log(`結合結果: ${name2}`);

