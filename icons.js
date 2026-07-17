/* ==========================================
   Weather PRO
   icons.js
   Version 1.0
========================================== */

/*
PTY (강수형태)

0 : 없음
1 : 비
2 : 비/눈
3 : 눈
4 : 소나기

SKY (하늘상태)

1 : 맑음
3 : 구름많음
4 : 흐림
*/

/* ==========================================
   날씨 아이콘
========================================== */

const WEATHER_ICON = {

    clear: "☀️",

    partly: "⛅",

    cloudy: "☁️",

    rain: "🌧️",

    shower: "🌦️",

    snow: "❄️",

    rainSnow: "🌨️",

    thunder: "⛈️",

    fog: "🌫️",

    wind: "💨"

};

/* ==========================================
   아이콘 반환
========================================== */

function getWeatherIcon(sky, pty){

    if(pty !== "0"){

        switch(pty){

            case "1":

                return WEATHER_ICON.rain;

            case "2":

                return WEATHER_ICON.rainSnow;

            case "3":

                return WEATHER_ICON.snow;

            case "4":

                return WEATHER_ICON.shower;

            default:

                return WEATHER_ICON.rain;

        }

    }

    switch(sky){

        case "1":

            return WEATHER_ICON.clear;

        case "3":

            return WEATHER_ICON.partly;

        case "4":

            return WEATHER_ICON.cloudy;

        default:

            return WEATHER_ICON.clear;

    }

}

/* ==========================================
   한글 설명
========================================== */

function getWeatherText(sky, pty){

    if(pty !== "0"){

        switch(pty){

            case "1":

                return "비";

            case "2":

                return "비 또는 눈";

            case "3":

                return "눈";

            case "4":

                return "소나기";

            default:

                return "비";

        }

    }

    switch(sky){

        case "1":

            return "맑음";

        case "3":

            return "구름 많음";

        case "4":

            return "흐림";

        default:

            return "맑음";

    }

}

/* ==========================================
   배경 테마
========================================== */

function getThemeClass(sky, pty){

    if(pty !== "0"){

        return "theme-rain";

    }

    switch(sky){

        case "1":

            return "theme-sunny";

        case "3":

            return "theme-cloudy";

        case "4":

            return "theme-cloudy";

        default:

            return "theme-sunny";

    }

}

/* ==========================================
   배경 변경
========================================== */

function applyTheme(sky, pty){

    const app = document.querySelector(".weather-app");

    if(!app){

        return;

    }

    app.classList.remove(

        "theme-sunny",

        "theme-cloudy",

        "theme-rain"

    );

    app.classList.add(

        getThemeClass(sky, pty)

    );

}
