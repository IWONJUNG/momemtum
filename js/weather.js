
function onCeoOk(position) { // 성공 시 JS에서 정보를 전달해줌
    const API_KEY = '2b64e7ecc51aa07eb0c006d7b997c5c4';
    const lat = position.coords.latitude; // 위도
    const lon = position.coords.longitude; // 경도

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
           
            weather.innerText = `${data.weather[0].main} [ ${data.main.temp}˚C ]`
            city.innerText = data.name;

        });

}

function onCeoError() {
    console.log("Can't find you. No Weather for you.");
}


//위치 정보 가져오기 navigator.geolocation.getCurrentPosition(실행 시 메서드, 에러 시 메서드);
navigator.geolocation.getCurrentPosition(onCeoOk, onCeoError);

