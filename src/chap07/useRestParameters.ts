export { }

// "..."{引数名}:{引数のデータ型} [] で可変長引数が定義できる
function sumScores(...scores: number[]): number {
    let total = 0;
    for (const score of scores) {
        total += score;
    }
    return total;
}

const total6 = sumScores(10, 9, 9, 10, 8, 9);
console.log(`6人の審査員の合計点: ${total6}`);
const total4 = sumScores(10, 9, 8, 9);
console.log(`4人の審査員の合計点: ${total4}`);
