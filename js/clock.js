

const clock = document.querySelector("#clock");

// 시간을 가져오는 메서드 작성
function getClock() { 
    const date = new Date();

    // 시간이 표시될 때 두 자리수로 나타내기 위해 String형으로 변환 후 padStart()메서드 사용
    // padStart(표시하고 싶은 자리 수, "채울 문자");
    // 문자를 뒤에서부터 채우고싶을 때는 padEnd() 메서드 사용 
    const hours = String(date.getHours()).padStart(2,"0");
    const min = String(date.getMinutes()).padStart(2,"0");
    const sec = String(date.getSeconds()).padStart(2,"0");

    clock.innerText= `${hours}:${min}:${sec}`; //  시간을 html(id가 clock인 영역) 출력하는 코드
    
}

getClock(); // setInterval() 메서드 실행 시 생기는 딜레이(1초)를 채우기 위해 메서드 즉시 실행
setInterval(getClock, 1000); // sertInterval(함수명, 갱신시간); 1초=1000