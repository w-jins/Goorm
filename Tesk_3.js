// 조건문과 반복문 활용
/*
if 문과 for 반복문을 사용하여 숫자 배열에서 짝수만 골라 출력하는 코드를 작성합니다. 
또한, for...of 문을 사용해 다른 배열을 순회하며 조건에 맞는 값을 필터링하는 연습도 추가합니다. 
결과물로 코드와 콘솔 출력 스크린샷을 제출합니다.
*/

const numArray = [1,2,3,4,5,6,7,8,9,10];
const otherArray = [1,2,355,9,12,26,24,5,7]
// 짝수만 골라 새로운 배열로 초기화
let oddArray = []
// 필터링한 값을 넣을 배열
let newArray = []

for (let i = 0; i < numArray.length; i++) {
    if(numArray[i] % 2 === 0) {
        oddArray.push(numArray[i])
    }
}
// for ..of 를 이용한 짝수 찾기
// for (const element of numArray) {
//     if (element % 2 === 0) {
//         oddArray.push(element)
//     }
// }

for(const element of otherArray) {
    // numArray 에 element요소가 포함하면 true를 날림
    if(numArray.includes(element)) {
        newArray.push(element);
    }
}
newArray.sort((a, b) => a - b) // 정렬

console.log(`${numArray} 의 배열 중 짝수를 찾으면 : ${oddArray}`)
console.log(`${otherArray}와 ${numArray}의 공통 요소를 찾으면 : ${newArray}`)
