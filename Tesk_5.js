// DOM 트리에서 요소 선택하고 조작하기
/*
HTML 기초 학습 미션으로 만들었던 개인 소개 웹페이지에 div, p, button 요소를 자바스크립트로 선택하고,
innerText나 style 속성을 사용하여 텍스트와 색상을 변경합니다. 
예를 들어, 버튼을 클릭하면 문장의 색상이 변경되도록 이벤트 리스너를 추가합니다. 
결과물로 웹 페이지의 브라우저 콘솔창에서 코드를 실행한 결과가 나오게 캡처하여 스크린샷을 제출합니다.
*/

const p = document.getElementById('change-p');
const button = document.querySelector('.change-button');
const div = document.querySelector('#name');
const ul = document.querySelector('.ul')

const newli = document.createElement('li');
newli.innerText = "새로운 취미 !!! ";

button.addEventListener('click', function() {

    ul.appendChild(newli); // 요소 추가
    p.style.color = "blue";
    p.style.fontWeight = "bold";
    div.innerText = "KIM WOO JIN"

    console.log(`변경후 p color : ${p.style.color}`);
    console.log(`변경후 p font-weight : ${p.style.fontWeight}`);
    console.log(`변경후 div text : ${div.innerText} `)
    
});


