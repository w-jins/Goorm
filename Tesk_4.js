// 자바스크립트 배열과 연산 응용 실습
/*
사용자의 이름과 나이를 입력받아 배열로 저장하는 프로그램을 자바스크립트로 작성합니다. 
입력받은 이름과 나이를 순서대로 출력하고, 각 사용자들의 나이의 평균을 계산한 값을 출력해봅니다. 
결과물로 프로그램 실행 결과의 스크린샷을 제출합니다.
*/
const readline = require("readline"); // js 모듈, 콘솔에서 입력을 받을 수 있음

const rl = readline.createInterface({
  // 모듈을 이용해 입출력을 위한 인터페이스 객체 생성
  input: process.stdin,
  output: process.stdout,
});

let users = []; // user 배열
let sumAge = 0; // 평균 나이를 구하기 위한 변수
console.log("name age 를 입력해주세요 ! 공백을 기준으로 해주시면 됩니다.");

rl.on("line", (line) => {
  // rl 이 입력받고 있을 때 실행할 함수
  users.push(line);
  if (users.length === 3) {
    rl.close();
  }
});
rl.on("close", () => {
  // rl 이 close 되고 난 후 실행 함수 
  for (let element of users) {
    let [name, age] = element.split(" ");
    sumAge += parseInt(age);
    console.log(`Name: ${name}, Age: ${age}`);
  }
  console.log(
    `User ${users.length}명의 평균 나이는 ${Math.round(sumAge / users.length)} 입니다.`
  )
});
