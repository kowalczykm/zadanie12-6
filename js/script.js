var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
  var countryName = $('#country-name').val();
if(!countryName.length) countryName = 'Poland';
$.ajax({
      url: url + countryName,
      method: 'GET',
      success: showCountriesList
    });
}

function showCountriesList(resp) {
    countriesList.empty();
      //Here is the code that will execute on each successive item in the collection. A single item is hidden under an item variable.
      resp.forEach(function(item){
      $('<li>').text(item.name).appendTo(countriesList);
      $('<li>').text(item.capital).appendTo(countriesList);
      $flagImage = $('<img>').attr('src', item.flag);
      $('<li>').append($flagImage).appendTo(countriesList);
    });
}