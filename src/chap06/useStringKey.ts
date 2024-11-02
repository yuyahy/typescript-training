export { }

// keyに使用できるのはnumber or stringのみである
// key: の部分は任意のキーワードでOK(慣例的に"key" or "indx"が多い)
const heightList: { [key: string]: number; } =
{
    "Tomoko": 155.4,
    "Yumi": 162.3,
    "Ayaka": 157.9,
    "Rina": 170.2,
    "Yoshie": 153.7
}

for (const key in heightList) {
    console.log(`${key}さんの身長: ${heightList[key]}`);
}

heightList["Yoshie"] = 154.6;
heightList["Emi"] = 160.3;
for (const key in heightList) {
    console.log(`${key}さんの身長: ${heightList[key]}`);
}
console.log(heightList.Rina);