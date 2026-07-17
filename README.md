# weather-pro
a weather program
<!DOCTYPE html>
<html lang="ko">
<head>

<meta charset="UTF-8">

<meta
name="viewport"
content="width=device-width,initial-scale=1.0">

<title>Weather PRO</title>

<link rel="manifest" href="manifest.json">

<link rel="stylesheet" href="style.css">

<link
rel="preconnect"
href="https://fonts.googleapis.com">

<link
href="https://fonts.googleapis.com/css2?family=Pretendard:wght@300;400;500;700&display=swap"
rel="stylesheet">

</head>

<body>

<header>

<h1>🌤 Weather PRO</h1>

<input
id="search"
placeholder="지역 검색">

<button id="searchBtn">
검색
</button>

</header>

<main>

<section class="card">

<h2 id="city">

현재위치

</h2>

<div id="icon">

☀

</div>

<div id="temp">

--

</div>

<div id="desc">

불러오는 중...

</div>

</section>

<section class="grid">

<div class="item">

체감

<div id="feel">

--

</div>

</div>

<div class="item">

습도

<div id="humidity">

--

</div>

</div>

<div class="item">

풍속

<div id="wind">

--

</div>

</div>

<div class="item">

강수

<div id="rain">

--

</div>

</div>

</section>

<section class="forecast">

<h3>

시간별 예보

</h3>

<div id="hourly">

</div>

</section>

<section class="forecast">

<h3>

7일 예보

</h3>

<div id="weekly">

</div>

</section>

</main>

<script src="script.js"></script>
<script src="api.js"></script>
<script src="weather.js"></script>
<script src="gps.js"></script>
<script src="search.js"></script>

</body>
</html>
