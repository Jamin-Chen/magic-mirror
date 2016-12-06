(function () {
    var dayNames = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY",
                    "FRIDAY", "SATURDAY", "SUNDAY"];

    var monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November",
                      "December"];

    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }

    function startTime() {
        var today = new Date(),
            hours = checkTime(today.getHours()),
            minutes = checkTime(today.getMinutes()),
            seconds = checkTime(today.getSeconds()),
            day = dayNames[today.getDay()],
            date = today.getDate(),
            month = monthNames[today.getMonth()],
            year = today.getFullYear();
        var ampm = hours < 12 ? "AM" : "PM";
        hours = hours % 12;
        hours = hours ? hours : 12;
        document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds + " " + ampm;
        document.getElementById("date").innerHTML = day + ", " + month + " " + date + ", " + year;
        t = setTimeout(function () {
            startTime()
        }, 500);
    }
    startTime();
})();
/*
(function checkVersion()
{
    $.getJSON('githash.php', {}, function(json, textStatus) {
        if (json) {
            if (json.gitHash != gitHash) {
                window.location.reload();
                window.location.href=window.location.href;
            }
        }
    });
    setTimeout(function() {
        checkVersion();
    }, 3000);
})();
*/
(function updateWeather()
	{
		var iconTable = {
			'01d':'wi-day-sunny',
			'02d':'wi-day-cloudy',
			'03d':'wi-cloudy',
			'04d':'wi-cloudy-windy',
			'09d':'wi-showers',
			'10d':'wi-rain',
			'11d':'wi-thunderstorm',
			'13d':'wi-snow',
			'50d':'wi-fog',
			'01n':'wi-night-clear',
			'02n':'wi-night-cloudy',
			'03n':'wi-night-cloudy',
			'04n':'wi-night-cloudy',
			'09n':'wi-night-showers',
			'10n':'wi-night-rain',
			'11n':'wi-night-thunderstorm',
			'13n':'wi-night-snow',
			'50n':'wi-night-alt-cloudy-windy'
		}
		var params = {
			'q':'Baarn,Netherlands',
			'units':'metric',
			'lang':'nl'
		}

		$.getJSON('http://api.openweathermap.org/data/2.5/weather', params, function(json, textStatus) {
			var temp = Math.round(json.main.temp * 10) / 10;
			var iconClass = iconTable[json.weather[0].icon];
			var icon = $('<span/>').addClass('icon').addClass(iconClass);
			$('.temp').updateWithText(icon.outerHTML()+temp+'&deg;', 1000);
		});

		setTimeout(function() {
			updateWeather();
		}, 60000);
	})();
