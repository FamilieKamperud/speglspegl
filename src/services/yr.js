import fetch from 'isomorphic-fetch';
import X2JSFuglyAPI from 'x2js';
const x2js = new X2JSFuglyAPI();
import receiveWeather from '../actions';


export const postalCode = '0566';
const WEATHER_ENTRIES = 3;

export const fetchWeatherInfo = (dispatch) =>{
  getWeather(postalCode).then(weather =>{
    dispatch(receiveWeather(postalCode, weather));
  });
};

export function getWeather(location){
  return fetch(`https://crossorigin.me/http://www.yr.no/sted/Norge/postnummer/${location}/varsel.xml`)
    .then(function(response) {
      return response.text();
    });
}
export function parseWeatherInfo(xmlWeatherData){
  const weatherDocument = x2js.xml2js(xmlWeatherData);
  let parsedWeatherInfo = {};
  weatherDocument.weatherdata.forecast.tabular.time.slice(0, WEATHER_ENTRIES).map(time => {
    let parsedTime = {
      symbol: time.symbol._var,
      period: time._period,
      precipitation: time.precipitation._value,
      windSpeed: time.windSpeed._mps,
      temperature: time.temperature._value
    };
    const fromTime = time._from;
    const toTime = time._to;
    parsedWeatherInfo[`${fromTime} ${toTime}`] = parsedTime;

  });
  return parsedWeatherInfo;
}
