$(document).ready(function() {
  $.simpleWeather({
    location: 'Los Angeles, CA 90007',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<temperature><icon class="icon-'+weather.code+'"></icon> '+weather.temp+'&deg;'+weather.units.temp+'</temperature>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});
