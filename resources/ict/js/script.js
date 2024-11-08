$(document).ready(function () {
	function updateDateTime() {
		const now = new Date();
		const hours = String(now.getHours()).padStart(2, '0');
		const minutes = String(now.getMinutes()).padStart(2, '0');
		const formattedTime = `${hours}:${minutes}`;
		const year = now.getFullYear();
		const month = String(now.getMonth() + 1).padStart(2, '0');
		const date = String(now.getDate()).padStart(2, '0');
		const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
		const dayName = daysOfWeek[now.getDay()];
		const formattedDate = `${year}. ${month}. ${date}. ${dayName}`;
		const dateString = `${year}년 ${month}월 ${date}일(${dayName})`;

		$('.media_common_header_time').text(formattedTime);
		$('.media_common_header_date').text(formattedDate);
		$('.media_promotion_date').text(dateString);
		$('.media_promotion_time').text(formattedTime);
	}

	updateDateTime();
	setInterval(updateDateTime, 60000);

	function updateClock() {
		const now = new Date();
		const seconds = now.getSeconds();
		const minutes = now.getMinutes();
		const hours = now.getHours();

		const $secondHand = $('.media_promotion_clock_second');
		const $minuteHand = $('.media_promotion_clock_minute');
		const $hourHand = $('.media_promotion_clock_hour');

		const secondsDegrees = (seconds / 60) * 360 + 90;
		const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
		const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

		$secondHand.css('transform', `rotate(${secondsDegrees}deg)`);
		$minuteHand.css('transform', `rotate(${minutesDegrees}deg)`);
		$hourHand.css('transform', `rotate(${hoursDegrees}deg)`);
	}

	setInterval(updateClock, 1000);
});

const weathers = [
	'thunderstorm with light rain',
	'thunderstorm with rain',
	'thunderstorm with heavy rain',
	'light thunderstorm',
	'thunderstorm',
	'heavy thunderstorm',
	'ragged thunderstorm',
	'thunderstorm with light drizzle',
	'thunderstorm with drizzle',
	'thunderstorm with heavy drizzle',
	'light intensity drizzle',
	'drizzle',
	'heavy intensity drizzle',
	'light intensity drizzle rain',
	'drizzle rain',
	'heavy intensity drizzle rain',
	'shower rain and drizzle',
	'heavy shower rain and drizzle',
	'shower drizzle',
	'light rain',
	'moderate rain',
	'heavy intensity rain',
	'very heavy rain',
	'extreme rain',
	'freezing rain',
	'light intensity shower rain',
	'shower rain',
	'heavy intensity shower rain',
	'ragged shower rain',
	'light snow',
	'snow',
	'heavy snow',
	'sleet',
	'light shower sleet',
	'shower sleet',
	'light rain and snow',
	'rain and snow',
	'light shower snow',
	'shower snow',
	'heavy shower snow',
	'mist',
	'smoke',
	'haze',
	'sand/dust whirls',
	'fog',
	'sand',
	'dust',
	'volcanic ash',
	'squalls',
	'tornado',
	'clear sky',
	'few clouds',
	'scattered clouds',
	'broken clouds',
	'overcast clouds',
];

const weatherskor = [
	'뇌우',
	'뇌우',
	'뇌우',
	'뇌우',
	'뇌우',
	'뇌우',
	'뇌우',
	'뇌우',
	'뇌우',
	'뇌우',
	'이슬비',
	'이슬비',
	'이슬비',
	'이슬비',
	'이슬비',
	'이슬비',
	'이슬비',
	'이슬비',
	'비 약간',
	'적당한 비',
	'비 많이',
	'비 많이',
	'폭우',
	'우박',
	'소나기 약간',
	'소나기',
	'폭우 수준의 소나기',
	'오락가락한 소나기',
	'눈 약간',
	'눈',
	'폭설',
	'진눈째비',
	'약간의 진눈깨비',
	'갑자기 진눈깨비',
	'약간의 비와 눈',
	'비와 눈',
	'갑자기 약간 눈',
	'갑자기 눈',
	'폭설',
	'안개',
	'연기',
	'안개',
	'모래/먼지 소용돌이',
	'모래',
	'모래',
	'먼지',
	'화산재',
	'돌풍',
	'토네이도',
	'맑음',
	'구름 약간',
	'약간 흐림',
	'흐림 구름',
	'구름 많음',
	'흐림',
];

$.ajax({
	url: 'https://api.openweathermap.org/data/2.5/forecast?q=Gumi&appid=3bcf7eca7fc5d5df252135e43043a0a7&units=metric',
	dataType: 'json',
	type: 'GET',
	success: function (data) {
		const weatherDescription = data.list[0].weather[0].description;
		const weatherIndex = weathers.indexOf(weatherDescription);
		const kor = weatherIndex >= 0 ? weatherskor[weatherIndex] : '';

		const iconCode = data.list[0].weather[0].icon.split('@')[0];
		const iconUrl = `/resources/ict/img/${iconCode}.png`;

		$('.media_promotion_feels_like').text(`체감 ${parseFloat(data.list[0].main.feels_like.toFixed(1))}°`);
		$('.media_promotion_weather_icon').attr('src', iconUrl);
		$('.media_promotion_temp').text(`${parseFloat(data.list[0].main.temp.toFixed(1))}°`);
		$('.media_promotion_weather_description').text(kor);
	},
});

$(function () {
	const mediaEventSwiper = new Swiper('.media_event_slider', {
		speed: 600,
		loop: true,
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		slidesPerView: 1,
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},
	});
});
