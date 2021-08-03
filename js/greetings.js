const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector('#todo-form');

const HIDDEN_CLASSNAME = "hidden"; 
const USERNAME_KEY = "username";



// submit을 실행하면 동작하는 메서드 작성
function onLoginSubmit(event) { // 인자(event)는 발생된 이벤트에 대한 정보를 담고 있음
    event.preventDefault(); // 기본 동작 실행을 막음 ( 첫번째 인자에 기본 제공 )
    
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME); // loginForm 영역에 HIDDEN_CLASSNAME 클래스를 추가

    // localStorage 에 사용자 이름 저장
    localStorage.setItem(USERNAME_KEY, username); // setItem("key", value);

    // username 을 출력하는 메서드 호출
    paintGreetings(username);
}


// username 을 인자로 받아 greeting 영역에 텍스트 출력 (HIDDEN_CLASSNAME 클래스를 삭제)
function paintGreetings(username) {
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

// localStorage 에 저장된 정보가 있는지 판별
if (savedUsername === null) {
    // 저장된 사용자 이름(savedUsername) 없을 때 HIDDEN_CLASSNAME 클래스 삭제 (= Form 보여줌)
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    
    // 이벤트 리스너 연결 (메서드명 옆에는 소괄호 추가X 소괄호 추가하면 메서드가 즉시 실행됨)
    loginForm.addEventListener("submit", onLoginSubmit); // addEventListener("이벤트명", 메서드명)
    
} else {
    paintGreetings(savedUsername);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
   
}


