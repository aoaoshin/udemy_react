/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
const func1 = function (str) {
  return str;
};
console.log(func1("func1です。"));

// アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("func2です。"));

const func3 = (str) => str;
console.log(func3("func3です。"));

const func3_1 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3_1(10, 20));

/**
 * デフォルト値
 */
const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
sayHello();
sayHello("青木");

/**
 * スプレット構文
 */
// 配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

const arr8 = arr4;
// console.log(arr8);
arr8[0] = 100;
console.log(arr8);
console.log(arr4);

arr6[0] = 300;
console.log(arr6);
console.log(arr4);
