/* ==========================================
   Weather PRO
   weather.js
========================================== */

function parseWeather(json){

    if(
        !json ||
        !json.response ||
        !json.response.body
    ){

        alert("날씨 데이터를 가져오지 못했습니다.");

        return;

    }

    const items =
    json.response.body.items.item;

    const weather = {

        temp:"--",

        humidity:"--",

        wind:"--",

        rain:"0",

        sky:"1",

        pty:"0",

        city:city.textContent

    };

    items.forEach(item=>{

        switch(item.category){

            case "T1H":

                weather.temp=item.fcstValue;

                break;

            case "REH":

                weather.humidity=item.fcstValue;

                break;

            case "WSD":

                weather.wind=item.fcstValue;

                break;

            case "POP":

                weather.rain=item.fcstValue;

                break;

            case "SKY":

                weather.sky=item.fcstValue;

                break;

            case "PTY":

                weather.pty=item.fcstValue;

                break;

        }

    });

    weather.icon=getWeatherIcon(

        weather.sky,

        weather.pty

    );

    weather.desc=getWeatherText(

        weather.sky,

        weather.pty

    );

    weather.feel=
    calcFeelsLike(

        weather.temp,

        weather.humidity

    );

    updateWeather(weather);

}
