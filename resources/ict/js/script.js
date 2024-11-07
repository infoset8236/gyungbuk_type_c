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

		$('.media_common_header_time').text(formattedTime);
		$('.media_common_header_date').text(formattedDate);
	}

	updateDateTime();

	setInterval(updateDateTime, 60000);
});
