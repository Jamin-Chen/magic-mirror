(function () {
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }

    function startTime() {
        var today = new Date(),
            hours = checkTime(today.getHours()),
            minutes = checkTime(today.getMinutes()),
            seconds = checkTime(today.getSeconds());
        var ampm = hours < 12 ? "AM" : "PM";
        hours = hours % 12;
        hours = hours ? hours : 12;
        document.getElementById('time').innerHTML = hours + ":" + minutes + ":" + seconds + " " + ampm;
        t = setTimeout(function () {
            startTime()
        }, 500);
    }
    startTime();
})();
