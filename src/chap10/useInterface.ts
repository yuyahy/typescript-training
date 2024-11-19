export { }

// Interface
interface Emp {
    name: string;
    wage: number;
    hours: number;
    memo?: string; // ?をつけるとオプショナルな(省略可能な)プロパティにできる
}

function showTotalWage(emp: Emp) {
    const total = emp.wage * emp.hours;
    console.log(`${emp.name}さんの支給額: ${total}円`);
}

// (クラスではなく)オブジェクトリテラルをInterfaceを利用して定義
const keisuke: Emp =
{
    name: "和田圭介",
    wage: 1150,
    hours: 105
}

showTotalWage(keisuke)