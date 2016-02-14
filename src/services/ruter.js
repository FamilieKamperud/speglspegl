import JSONP from 'browser-jsonp'
import _ from 'lodash'
import moment from 'moment'

import { receiveRuterSchedule } from '../actions'

const DEPARTURES_CAP = 3;

export const stops = {
  dalenenga: 3010524,
  birkelunden: 3010520,
  kobenhavngata: 3010525,
  carlberner: 3011400
}
export const fetchBusDepartures = (dispatch) => {
  getDepartures(stops.dalenenga).then(departures => {
    dispatch(receiveRuterSchedule('Dælenenga', departures))
  })
  getDepartures(stops.kobenhavngata).then(departures => {
    dispatch(receiveRuterSchedule('Københavngata', departures))
  })
  getDepartures(stops.birkelunden).then(departures => {
    dispatch(receiveRuterSchedule('Birkelunden', departures))
  })
  getDepartures(stops.carlberner).then(departures => {
    dispatch(receiveRuterSchedule('Carl Berner T', departures))
  })
}

export function heartbeat(){
  JSONP({
    url: 'http://reisapi.ruter.no/Heartbeat/Index',
    data: {},
    success: function(data) {
      alert(data);
    }
  })
}

export function getDepartures(stopId){
  return new Promise((resolve, reject) => {
    JSONP({
      url: `http://reisapi.ruter.no/StopVisit/GetDepartures/${stopId}`,
      data: {},
      success: data => resolve(parseDestinationInfo(data)),
      error: reject
    })
  })
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
      }
  }));
  return parsedDepartures;
}
