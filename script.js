/* ==========================================
   Weather PRO
   script.js
   Version 1.0
========================================== */

const city = document.getElementById("city");
const icon = document.getElementById("icon");
const temp = document.getElementById("temp");
const desc = document.getElementById("desc");

const feel = document.getElementById("feel");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const rain = document.getElementById("rain");

const search = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");

const hourly = document.getElementById("hourly");
const weekly = document.getElementById("weekly");

/* ===========================
   검색
=========================== */

searchBtn.addEventListener("click", () => {

    const keyword = search.value.trim();

    if(keyword===""){

        alert("지역명을 입력하세요.");

        return;

    }

    loadDummyWeather(keyword);

});

search.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        searchBtn.click();

    }

});

/* ===========================
   테스트용 데이터
=========================== */

function loadDummyWeather(name){

    const weather={

        city:name,

        temp:28,

        feel:31,

        humidity:72,

        wind:3.2,

        rain:20,

        desc:"맑음",

        icon:"☀"

    };

    updateWeather(weather);

}

/* ===========================
   화면 업데이트
=========================== */

function updateWeather(data){

    city.textContent=data.city;

    icon.textContent=data.icon;

    temp.textContent=data.temp+"℃";

    desc.textContent=data.desc;

    feel.textContent=data.feel+"℃";

    humidity.textContent=data.humidity+"%";

    wind.textContent=data.wind+" m/s";

    rain.textContent=data.rain+"%";

    changeTheme(data.desc);

    createHourly();

    createWeekly();

}

/* ===========================
   시간별 예보
=========================== */

function createHourly(){

    hourly.innerHTML="";

    const list=[

        {time:"09시",icon:"☀",temp:26},
        {time:"12시",icon:"☀",temp:29},
        {time:"15시",icon:"🌤",temp:31},
        {time:"18시",icon:"☁",temp:28},
        {time:"21시",icon:"🌙",temp:25}

    ];

    list.forEach(item=>{

        hourly.innerHTML+=`

        <div class="hour">

            <div>${item.time}</div>

            <div style="font-size:30px">

                ${item.icon}

            </div>

            <div>${item.temp}℃</div>

        </div>

        `;

    });

}

/* ===========================
   주간 예보
=========================== */

function createWeekly(){

    weekly.innerHTML="";

    const list=[

        ["월","☀",31,24],
        ["화","☁",30,23],
        ["수","🌧",28,22],
        ["목","☀",31,24],
        ["금","🌤",32,25],
        ["토","🌧",27,22],
        ["일","☀",30,23]

    ];

    list.forEach(day=>{

        weekly.innerHTML+=`

        <div class="week">

            <span>${day[0]}</span>

            <span>${day[1]}</span>

            <span>${day[2]}° / ${day[3]}°</span>

        </div>

        `;

    });

}

/* ===========================
   테마
=========================== */

function changeTheme(weather){

    if(weather==="비"){

        document.body.style.background=

        "linear-gradient(180deg,#374151,#111827)";

    }

    else{

        document.body.style.background=

        "linear-gradient(180deg,#66b8ff,#dff3ff)";

    }

}

/* ===========================
   시작
=========================== */

window.onload=()=>{

    loadDummyWeather("여수");

};
