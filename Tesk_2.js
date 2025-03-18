// 자바스크립트 배열과 문자열 내장 함수 실습
/*
1부터 10까지의 숫자를 배열에 저장합니다. 
배열에서 push, pop, slice 등의 배열 메서드를 사용하여 값을 추가하고 삭제합니다. 
또한 문자열의 toUpperCase와 substring 같은 메서드를 사용해 간단한 문자열 조작을 연습합니다. 
결과물로 코드와 콘솔 출력 스크린샷을 제출합니다.
*/

const numArray = [1,2,3,4,5,6,7,8,9,10];

console.log(`pop : ${numArray.pop()}, array : ${numArray}`) // 가장 마지막에 있는 요소를 제거 후 리턴
numArray.push(20) // 20을 배열 마지막 인덱스에 추가
console.log(`push : ${numArray}`) // 요소를 배열 마지막에 추가 후 배열 길이 리턴
console.log(`slice : ${numArray.slice(0, 5)}`) // 0 ~ 4번째 요소를 slice
console.log(`reverse: ${numArray.reverse()}`) // 배열을 반대로 만듬

const word = "Hi Goorm DEEP DIVE !!"
const word2 = "fullstack java spring & react "
console.log(`toLowerCase : ${word.toLowerCase()}`); // 소문자로 변환
console.log(`toUpperCase : ${word2.toUpperCase()}`); // 대문자로 변환
console.log(`substring : ${word.substring(3, 8)}`); // 3 ~ 7번째 문자를 반환