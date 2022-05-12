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
  }
});

// 모든 ID 삭제
idDelete.addEventListener("click", 삭제);
function 삭제() {
  document.cookie = "ID = ; expires = Wed; 01 Jan 1970";
}

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
  } else if (idInputCreate.value.length < 6) {
    idInputCreate.style.border = "2px solid #ff0000";
  } else {
    idInputCreate.style.border = "2px solid #00D000";
  }
  // 비밀번호 입력값 제어
  if (passwordInputCreate.value == "") {
    passwordInputCreate.style.border = "2px solid #ff0000";
  } else if (passwordInputCreate.value.length < 8) {
    passwordInputCreate.style.border = "2px solid #ff0000";
  } else {
    passwordInputCreate.style.border = "2px solid #00D000";
  }
  // 비밀번호 재입력값 제어
  if (passwordInputCreate2.value == "") {
    passwordInputCreate2.style.border = "2px solid #ff0000";
  } else if (passwordInputCreate2.value.length < 8) {
    passwordInputCreate2.style.border = "2px solid #ff0000";
  } else if (passwordInputCreate.value !== passwordInputCreate2.value) {
    passwordInputCreate2.style.border = "2px solid #ff0000";
  } else {
    passwordInputCreate2.style.border = "2px solid #00D000";
  }
}

// 로그인
const loginBtn = document.querySelector("#loginBtn");
loginBtn.addEventListener("click", function () {
  const loginId = document.querySelector("#loginId");
  const loginPw = document.querySelector("#loginPw");
});
