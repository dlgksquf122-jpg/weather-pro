/* =====================================
   Weather PRO
   api.js
   기상청 API
===================================== */

const SERVICE_KEY = "54603c209a9ca3779cf490e18be3825c939f88eeffc22a742f0912550e632ff4";

// 기상청 초단기예보
const API_URL =
"https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst";

/* ----------------------------- */

function getBaseDate(){

    const now=new Date();

    const year=now.getFullYear();

    const month=
    String(now.getMonth()+1)
    .padStart(2,"0");

    const day=
    String(now.getDate())
    .padStart(2,"0");

    return year+month+day;

}

/* ----------------------------- */

function getBaseTime(){

    const now=new Date();

    let hour=now.getHours();

    hour--;

    if(hour<0){

        hour=23;

    }

    return String(hour)
    .padStart(2,"0")+"00";

}

/* ----------------------------- */

async function requestWeather(nx,ny){

    const date=getBaseDate();

    const time=getBaseTime();

    const url=

`${API_URL}
?serviceKey=${SERVICE_KEY}
&pageNo=1
&numOfRows=1000
&dataType=JSON
&base_date=${date}
&base_time=${time}
&nx=${nx}
&ny=${ny}`;

    try{

        const response=
        await fetch(url);

        const json=
        await response.json();

        console.log(json);

        return json;

    }

    catch(error){

        console.error(error);

    }

}
