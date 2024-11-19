export { }

enum Rgb { RED, GREEN, BLUE }

function showColorSelection(name: string, color: Rgb) {
    let colorStr = "赤";
    if (color == Rgb.GREEN) {
        colorStr = "緑";
    } else {
        colorStr = "青";
    }
    console.log(`${name}さんが選んだ色: ${colorStr}`);
}

showColorSelection("美智恵", Rgb.GREEN)