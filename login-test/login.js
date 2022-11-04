$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});


// 회원가입하기

// 1. 회원가입 버튼 함수 만들기
function register(){
    // 내용 체크하기
    checkJoinFields();
    // 회원가입 진행

    const usernameElement = document.getElementById("username");
    const emailElement = document.getElementById("email");
    const passwordElement = document.getElementById("password");
    
    const newUser = {
        username: usernameElement.value,
        email: emailElement.value,
        password: passwordElement.value,
    }

    console.log(newUser);

    // 페이지 이동
    // window.location.href = "#"

}


// 2. 회원가입 내용 체크 함수 만들기
function checkJoinFields(){
    // id들
    // username
    // email
    // password
    // confirm-password

    const usernameElement = document.getElementById("username");
    const emailElement = document.getElementById("email");
    const passwordElement = document.getElementById("password");
    const confirmPasswordElement = document.getElementById("confirm-password");

    // 유저네임이 없으면 안됨
    if(usernameElement.value == ""){
        alert("username을 입력해주세요.")
        usernameElement.focus();
        return false;
    }
    // 이메일이 없으면 안됨
    else if(emailElement.value == ""){
        alert("email을 입력해주세요.")
        emailElement.focus();
        return false;
    }
    // 비밀번호가 없으면 안됨
    else if(passwordElement.value == ""){
        alert("password을 입력해주세요.")
        passwordElement.focus();
        return false;
    }
    // 비밀번호 확인이 없으면 안됨
    else if(confirmPasswordElement.value == ""){
        alert("confirm password을 입력해주세요.")
        confirmPasswordElement.focus();
        return false;
    }
    // 비밀번호와 비밀번호 확인이 동일해야함
    else if(passwordElement.value != confirmPasswordElement.value){
        alert("비밀번호와 비밀번호 확인이 동일하지 않습니다.")
        return false;
    }else{ // 회원가입 완료 메세지
        alert('회원가입 완료!')
    }

}



//로그인하기

// 1. 로그인 버튼 함수 만들기
function login(){
    // 내용 체크하기
    checkLoinFields();
    // 로그인 진행
    // 페이지 이동
    // window.location.href = "#"

}
// 2. 로그인 내용 체크 함수 만들기
function checkLoinFields(){
    // id들
    // loginUsername
    // loginPassword


    const loginUsernameElement = document.getElementById("loginUsername");
    const loginPasswordElement = document.getElementById("loginPassword");


    // 유저네임이 없으면 안됨
    if(loginUsernameElement.value == ""){
        alert("Id를 입력해주세요.")
        loginUsernameElement.focus();
        return false;
    }
    // 비밀번호가 없으면 안됨
    else if(loginPasswordElement.value == ""){
        alert("password를 입력해주세요.")
        loginPasswordElement.focus();
        return false;
    }
    // Id와 비밀번호 확인
    else if(loginUsernameElement.value != newUser.username){
        alert("아이디 틀림.")
    }else if(loginPasswordElement.value != newUser.password){
        alert("비밀번호 틀림.")
    }
    else{  // 로그인 완료 메세지
        alert('로그인 완료!')

    }
}
