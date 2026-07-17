/* =====================================
   Weather PRO
   search.js
===================================== */

// 주요 도시 좌표
const CITY_DATA = {

    "서울": { nx:60, ny:127 },

    "부산": { nx:98, ny:76 },

    "대구": { nx:89, ny:90 },

    "인천": { nx:55, ny:124 },

    "광주": { nx:58, ny:74 },

    "대전": { nx:67, ny:100 },

    "울산": { nx:102, ny:84 },

    "세종": { nx:66, ny:103 },

    "제주": { nx:52, ny:38 },

    "여수": { nx:73, ny:66 },

    "순천": { nx:70, ny:70 },

    "목포": { nx:50, ny:67 },

    "여천": { nx:73, ny:66 }

};

/* ------------------------------- */

async function searchCity(){

    const keyword = search.value.trim();

    if(keyword===""){

        alert("지역명을 입력하세요.");

        return;

    }

    const city = CITY_DATA[keyword];

    if(!city){

        alert("지원하지 않는 지역입니다.");

        return;

    }

    const json = await requestWeather(

        city.nx,

        city.ny

    );

    parseWeather(json);

}

/* ------------------------------- */

searchBtn.addEventListener(

"click",

searchCity

);

/* ------------------------------- */

search.addEventListener(

"keydown",

function(e){

    if(e.key==="Enter"){

        searchCity();

    }

}

);
