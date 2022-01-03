
var btnBack = document.querySelector('#back');
if(btnBack) {
    btnBack.addEventListener('click', function() {
        history.back();
    })
};

var btnLogin = document.querySelector('#login');
var labelId = document.querySelector('#id');
var labelPw = document.querySelector('#pw');

if(btnLogin) {
    btnLogin.addEventListener('click', function() {
        if(labelId.value === '' || labelPw.value === '') {
            alert('로그인을 할 수 없습니다.');
        } else {
            location.href='main.html';
        }
        
    });
}


var btnJoin = document.querySelector('#join');
var labelIdJ = document.querySelector('#idJ');
var lablePwJ = document.querySelector('#pwJ');
var lableCPwJ = document.querySelector('#cPwJ');

if(btnJoin) {
    btnJoin.addEventListener('click', function() {
        if(labelIdJ.value === '' || lablePwJ.value === '' || lableCPwJ.value === '') {
            alert('회원가입을 할 수 없습니다.')
        } else if(lablePwJ.value !== lableCPwJ.value) {
            alert('비밀번호를 확인해 주세요.')
        } else {
            location.href='login.html';
        }
    });
}
