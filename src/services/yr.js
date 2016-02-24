import fetch from 'isomorphic-fetch'
import moment from 'moment'
import X2JSFuglyAPI from 'x2js'
const x2js = new X2JSFuglyAPI();


export const postalCode = "0566";
const WEATHER_ENTRIES = 3;

export function getWeather(location){
  return fetch(`https://crossorigin.me/http://www.yr.no/sted/Norge/postnummer/${location}/varsel.xml`)
    .then(function(response) {
      return response.text()
    })
    .then(function(body) {
      parseWeatherInfo(body);
    })
}
export function parseWeatherInfo(xmlWeatherData){
  const weatherDocument = x2js.xml2js(xmlWeatherData)
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
  debugger;
  return parsedWeatherInfo;
  // const xmlDoc = (new DOMParser()).parseFromString(xmlWeatherData, "application/xml");
  // console.log(xmlDoc.getElementsByTagName("tabular")[0]);
  // let listOfForecasts = xmlDoc.getElementsByTagName("tabular")[0];
  // for(let i=0; i<WEATHER_ENTRIES; i++){
  //   const entry = listOfForecasts;
  //   let json = {};
  //
  //   json.symbol = entry.getElementsByTagName("symbol")[0].attributes.var.value;
  //   json.period = entry.attributes.period.value;
  //   json.preciptiation = entry.getElementsByTagName("precipitation")[0].attributes.value.value;
  //   json.windSpeed = entry.getElementsByTagName("windSpeed")[0].attributes.mps.value;
  //   json.temperature = entry.getElementsByTagName("temperature")[0].attributes.value.value;
  //
  //   const fromTime = entry.attributes.from.value;
  //   const toTime = entry.attributes.to.value;
  //   jsonData[`${fromTime} ${toTime}`] = json;
  //
  // }
  // debugger
  //return jsonData;
}
