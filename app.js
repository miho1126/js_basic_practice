// let foo = "課題";

// let name = '80点以上合格'
// console.log(name);

// name = '50点以上惜しい';
// console.log(name);

// const test = '３０点以上';
// console.log(`３０点以上残念`);

// int = 30
// if (int > 30) {
//   console
// }


let score = 20;
if (score >= 80) {
  console.log(`${score}点、合格`)
} else if (score >= 50) {
  console.log(`${score}点、惜しい`);
} else if (score >= 30) {
  console.log(`${score}点、残念`);
} else {
  console.log(`${score}点、また来年`);
}

// if と forの練習
for (let i = 1; i <= 30; i++) {
  if (i % 3 == 0){
    console.log('あほ');
  }else{
    console.log(i);
  }
}


// ５の倍数と３の倍数のときにメッセージ　（もしくは。。）
// console.log
// それ以外は数字
// 1〜１００まで

for (let i = 1; i <= 100; i ++){
  if(i % 5 == 0 || i % 3 == 0){
    console.log('綺麗');
  }else {
    console.log(i);
  }
}

// 3で割り切れるときはFizz
// 5で割り切れるときはBuzz
// 両方で割り切れるときはFizzBuzz
// それ以外は１〜１００まで
// 値はconsole.logで出力

for (let i = 1; i <= 100; i ++){
  if(i % 3 == 0 && i % 5 == 0 ){
    console.log('FizzBuzz');
  }else if (i % 3 ==0){
    console.log('Fuzz');
  }else if (i % 5 == 0){
    console.log('Buzz')
  }else {
    console.log(i)
  }
}