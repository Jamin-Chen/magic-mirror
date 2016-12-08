$(document).ready(function() {
  getWeather(); //Get the initial weather.
  setInterval(getWeather, 600000); //Update the weather every 10 minutes.
});

function getWeather() {
  $.simpleWeather({
    location: 'Los Angeles, CA',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<temperature><icon class="icon-'+weather.code+'"></icon> '+weather.temp+'&deg;'+weather.units.temp+'</temperature>';
      html += '<location>'+weather.city+', '+weather.region+'</location>';
      html += '<description class="currently">'+weather.currently+'</description>';

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
 }
