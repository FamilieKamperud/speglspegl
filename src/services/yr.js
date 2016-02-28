import fetch from 'isomorphic-fetch';
import X2JSFuglyAPI from 'x2js';
const x2js = new X2JSFuglyAPI();
import { receiveWeather } from '../actions';


export const postalCode = '0566';
const WEATHER_ENTRIES = 3;
export const YR_SYMBOL_URL = 'https://crossorigin.me/http://symbol.yr.no/grafikk/sym/svg/';

export const fetchWeatherInfo = (dispatch) =>{
  getWeather(postalCode).then(weather =>{
    dispatch(receiveWeather(postalCode, weather));
  });
};

export function getWeather(location){
  return fetch(`https://crossorigin.me/http://www.yr.no/sted/Norge/postnummer/${location}/varsel.xml`)
    .then(function(response) {
      return response.text();
    })
    .then(function(response){
      return parseWeatherInfo(response);
    });
}

export function parseWeatherInfo(xmlWeatherData){
  const weatherDocument = x2js.xml2js(xmlWeatherData);
  let parsedWeatherInfo = [];
  weatherDocument.weatherdata.forecast.tabular.time.slice(0, WEATHER_ENTRIES).map(time => {
    let parsedTime = {
      from: time._from,
      to: time._to,
      symbol: YR_SYMBOL_URL+time.symbol._var+'.svg',
      period: time._period,
      precipitation: time.precipitation._value,
      windSpeed: time.windSpeed._mps,
      temperature: time.temperature._value
    };
    parsedWeatherInfo.push(parsedTime);

  });
  return parsedWeatherInfo;
}
