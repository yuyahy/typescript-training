export { }

// 引数のデフォルト値を設定(以下は型も指定しているが、デフォルト値から推論されるので省略可能)
function showCircumference(radius: number, pi: number = 3.14) {
    const circumference = 2 * pi * radius;
    console.log(`半径${radius}の円周の長さ: ${circumference}`);
}

showCircumference(4, 3.142);
showCircumference(8);