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
