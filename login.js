const idCreateBtn = document.querySelector("#idCreateBtn"); // 회원가입 버튼
const idCreateWindow = document.querySelector("#idCreateWindow"); // 회원가입 모달
const returnBtn = document.querySelector("#returnBtn"); // 회원가입 취소 버튼
const loginWindow = document.querySelector("#loginWindow"); // 로그인 창
const hidden = "hidden";

// 회원가입 버튼을 누르면 로그인 창은 닫고 회원가입 모달 띄우기
idCreateBtn.addEventListener("click", function () {
  if (idCreateWindow.classList.contains(hidden)) {
    idCreateWindow.classList.remove(hidden);
  } else {
    idCreateWindow.classList.add(hidden);
  }
  if (loginWindow.classList.contains(hidden)) {
    loginWindow.classList.remove(hidden);
  } else {
    loginWindow.classList.add(hidden);
  }
});

// 취소하기 버튼 누르면 회원가입 모달은 닫고 로그인 창 띄우기
returnBtn.addEventListener("click", function () {
  if (idCreateWindow.classList.contains(hidden)) {
    idCreateWindow.classList.remove(hidden);
  } else {
    idCreateWindow.classList.add(hidden);
  }
  if (loginWindow.classList.contains(hidden)) {
    loginWindow.classList.remove(hidden);
  } else {
    loginWindow.classList.add(hidden);
  }
});

// 관리자 모드
const idCheck = document.querySelector("#idCheck"); // 모든 ID 조회 버튼
const idDelete = document.querySelector("#idDelete"); // 모든 ID 삭제 버튼

// 모든 ID 조회
idCheck.addEventListener("click", function () {
  if (!document.cookie) {
    alert("생성된 아이디가 없습니다");
  } else {
    alert(document.cookie.split(";"));
    console.log(document.cookie.split(";"));
  }
});

// 입력한 ID 삭제
idDelete.addEventListener("click", function () {
  const idDel = document.querySelector("#idDel");
  let delName = idDel.value;
  document.cookie = delName + "=; max-age=0";
});

//--------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------//

// 회원가입
const idComplete = document.querySelector("#idComplete"); // 회원가입 버튼
idComplete.addEventListener("click", 생성);
function 생성() {
  const idInputCreate = document.querySelector("#idInputCreate");
  const passwordInputCreate = document.querySelector("#passwordInputCreate");
  const passwordInputCreate2 = document.querySelector("#passwordInputCreate2");
  // 아이디 입력값 제어
  if (idInputCreate.value == "") {
    idInputCreate.style.border = "2px solid #ff0000";
    return false;
  }
  // 영문자+숫자 (8~20자리 입력) 정규식
  let idCheck = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,20}$/;
  if (!idCheck.test(idInputCreate.value)) {
    alert("아이디는 영문자+숫자 조합으로 6~20자리 사용해야 합니다.");
    idInputCreate.focus();
    idInputCreate.style.border = "2px solid #ff0000";
    return false;
  } else {
    idInputCreate.style.border = "2px solid #00D000";
  }

  // 비밀번호 입력값 제어
  if (passwordInputCreate.value == "") {
    passwordInputCreate.style.border = "2px solid #ff0000";
    return false;
  }
  // 영문자+숫자+특수조합 (8~20자리 입력) 정규식
  let pwCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
  if (!pwCheck.test(passwordInputCreate.value)) {
    alert("비밀번호는 영문자+숫자+특수문자 조합으로 8~20자리 사용해야 합니다.");
    passwordInputCreate.focus();
    passwordInputCreate.style.border = "2px solid #ff0000";
    return false;
  } else {
    passwordInputCreate.style.border = "2px solid #00D000";
  }

  // 비밀번호 재입력값 제어
  if (passwordInputCreate2.value == "") {
    passwordInputCreate2.style.border = "2px solid #ff0000";
    return false;
  }
  if (passwordInputCreate.value !== passwordInputCreate2.value) {
    passwordInputCreate2.style.border = "2px solid #ff0000";
    return false;
  } else {
    passwordInputCreate2.style.border = "2px solid #00D000";
    // 쿠키 생성
    function setCookie(cname, cvalue, exdays) {
      let d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      let expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    setCookie(idInputCreate.value, passwordInputCreate2.value, "3");
  }
}

// 로그인
const loginBtn = document.querySelector("#loginBtn"); // 로그인 버튼
loginBtn.addEventListener("click", function () {
  const loginId = document.querySelector("#loginId"); // 아이디 input
  const loginPw = document.querySelector("#loginPw"); // 비밀번호 input

  let cookieText = document.cookie.split(";");
  let inputText = loginId.value + "=" + loginPw.value;
  console.log(cookieText[0]);
  console.log(inputText);
  if (cookieText[0] == inputText) {
    alert("로그인 성공");
  } else {
    const loginErrorText = document.querySelector("#loginErrorText");
    loginErrorText.innerHTML = "아이디 혹은 비밀번호를 잘못 입력하셨습니다.";
    return false;
  }
});
