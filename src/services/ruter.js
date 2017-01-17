import JSONP from 'browser-jsonp';
import _ from 'lodash';
import moment from 'moment';

import { receiveRuterSchedule } from '../actions';

const DEPARTURES_CAP = 3;

export const stops = {
  toyen:3010600,
  sarsgate: 3014534,
  sofienberg: 3010533,
  helgesensgate: 3010536
};
export const fetchBusDepartures = (dispatch) => {
  getDepartures(stops.helgesensgate).then(departures => {
    dispatch(receiveRuterSchedule('Helgesens gate', departures));
  });
  getDepartures(stops.sarsgate).then(departures => {
    dispatch(receiveRuterSchedule('Sars gate', departures));
  });
  getDepartures(stops.sofienberg).then(departures => {
    dispatch(receiveRuterSchedule('Sofienberg', departures));
  });
  getDepartures(stops.toyen).then(departures => {
    dispatch(receiveRuterSchedule('Tøyen T', departures));
  });
};

export function heartbeat(){
  JSONP({
    url: 'https://reisapi.ruter.no/Heartbeat/Index',
    data: {},
    success: function(data) {
      alert(data);
    }
  });
}

export function getDepartures(stopId){
  return new Promise((resolve, reject) => {
    JSONP({
      url: `https://reisapi.ruter.no/StopVisit/GetDepartures/${stopId}`,
      data: {},
      success: data => resolve(parseDestinationInfo(data)),
      error: reject
    });
  });
}

export function parseDestinationInfo(buses){
  // filter buses where direction is null
  // (there are a lot of falsy departures in the data retrieved from Ruter's API)
  let parsedDepartures = _.filter(buses, (bus)=> {
    return bus.MonitoredVehicleJourney.DirectionName;
  });

  // create object keys
  parsedDepartures = _.groupBy(parsedDepartures, (bus)=>{
    let departure = bus.MonitoredVehicleJourney;
    return departure.DirectionRef+' '+departure.PublishedLineName;
  });

  // only return the (3) next departures
  parsedDepartures = _.mapValues(parsedDepartures, departures=> _.take(departures, DEPARTURES_CAP));

  // pick only expected arrival out of each bus departure
  parsedDepartures = _.mapValues(parsedDepartures, departures =>
    _.map(departures, departure => {
      return {
        expectedArrival: moment(departure.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime),
        finalDestination: departure.MonitoredVehicleJourney.DestinationName
      };
    }));
  return parsedDepartures;
}
