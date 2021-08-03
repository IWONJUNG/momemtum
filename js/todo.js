
const toDoForm = document.querySelector('#todo-form');
// toDoForm 안에서 input 요소를 찾음. document.querySelector('#todo-form input) 와 동일
const toDoInput = toDoForm.querySelector('input'); 
const toDoList = document.querySelector('#todo-list');

const TODOS_KEY = "todos";

let toDos = [];


// to do 저장
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // toDos를 String형으로 저장
}

// To do 삭제
function deleteToDo(event) {
    const li = event.target.parentElement; // target(=button), parentElement(=li)
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

// 입력한 To do 을 html (ul li span, button)에 출력
function paintToDo(newTodo) {
    
    // html element li, span, button 생성
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText="❌"
    button.addEventListener("click", deleteToDo); // 삭제 이벤트 연결

    // 포함 관계 설정
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

// 입력값 전달 및 입력값 초기화
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        text:newTodo,
        id: Date.now(), // 랜덤 아이디
    };

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); // String형으로 저장된 saveToDos를 오브젝트로 변환
    toDos = parsedToDos; // 값이 있을 경우 이전의 to do (parsedToDos)를 toDos에 저장
    parsedToDos.forEach(paintToDo);

}