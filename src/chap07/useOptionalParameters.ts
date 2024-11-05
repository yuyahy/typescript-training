export { }

// 引数名に"?"をつけると省略可能になる
function showCircumference(radius: number, pi?: number) {
    // piが省略されている場合はデフォルト値をセット
    if (pi == undefined) {
        pi = 3.14;
    }
    const circumference = 2 * pi * radius;
    console.log(`半径${radius}の円周の長さ: ${circumference}`);
}

showCircumference(4, 3.142);
showCircumference(8);