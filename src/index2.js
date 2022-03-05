/**
 * mapやfilterを使った配列の処理
 */
// map
const nameArr = ["藤澤", "吉田", "鈴木", "青木"];
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}

const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);

nameArr.map((name) => console.log(name));

// filter
const numArr = [1, 2, 3, 4, 5];
const nuwNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(nuwNumArr);

for (let index = 0; index < nameArr.length; index++) {
  console.log(`${index + 1}番目は${nameArr[index]}です。`);
}

nameArr.map((name, index) => console.log(`${index}番目は${name}です。`));

const newNameArr = nameArr.map((name) => {
  if (name === "青木") {
    return name;
  } else {
    return `${name}さん。`;
  }
});
console.log(newNameArr);

/**
 * 三項演算子
 */
const val1 = 1 > 0 ? "trueです。" : "falseです。";
console.log(val1);

const num = "1300";
console.log(num.toLocaleString());

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています。" : "大丈夫です。";
};
console.log(checkSum(50, 40));

/**
 * 論理演算子の本当の意味
 */
const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log("１か２はtrueになります。");
}
if (flag1 && flag2) {
  console.log("１も２もtrueになります。");
}

// ||は左がfalseならば右側を返す。
//  ※ javascriptはnullはfalseと「なる。
const num1 = null;
const fee = num1 || "金額未設定です。";
console.log(fee);

// &&は左がtrueなら左側を返す.
const num2 = "123";
const fee2 = num2 && "何か設定されました。";
console.log(fee2);
