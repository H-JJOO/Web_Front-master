const headingElem = document.querySelector('#heading');
headingElem.onclick = function() {
    headingElem.style.color = 'red';
}    

const name = prompt('이름을 입력하세요.');
document.write('<b>' + name + '</b>' + '님 환영합니다.');
console.log(name + '님 환영합니다.');
const now = new Date();
const display = now.toLocaleTimeString();
document.write('현재시간은' + display);