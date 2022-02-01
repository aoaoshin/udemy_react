/**
 * 分割代入
 */
const myProfile = {
  name: "青木",
  age: 45
};

const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
console.log(message1);

const { name, age } = myProfile;
const message2 = `名前は${name}です。年齢は${age}歳です。`;
console.log(message2);

const myProfile2 = ["青木", 46];
const message3 = `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}歳です。`;
console.log(message3);

const [name2, age2] = myProfile2;
const message4 = `名前は${name2}です。年齢${age2}よ。`;
console.log(message4);

/**
 * デフォルト値、引数など
 */
const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
sayHello("青木");
sayHello();
