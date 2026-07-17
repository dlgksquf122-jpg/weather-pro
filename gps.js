/* ==========================================
   Weather PRO
   gps.js
========================================== */

/* ==========================================
   현재 위치 가져오기
========================================== */

function getCurrentLocation() {

    if (!navigator.geolocation) {

        alert("GPS를 지원하지 않는 브라우저입니다.");

        return;

    }

    navigator.geolocation.getCurrentPosition(

        successGPS,

        errorGPS,

        {

            enableHighAccuracy: true,

            timeout: 10000,

            maximumAge: 0

        }

    );

}

/* ==========================================
   GPS 성공
========================================== */

async function successGPS(position) {

    const lat = position.coords.latitude;

    const lon = position.coords.longitude;

    console.log("위도 :", lat);

    console.log("경도 :", lon);

    const grid = dfs_xy_conv("toXY", lat, lon);

    console.log(grid);

    const json = await requestWeather(

        grid.x,

        grid.y

    );

    parseWeather(json);

}

/* ==========================================
   GPS 실패
========================================== */

function errorGPS(error) {

    console.log(error);

    alert("현재 위치를 가져올 수 없습니다.");

}
