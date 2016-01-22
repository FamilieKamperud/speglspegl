import JSONP from 'browser-jsonp'
import _ from 'lodash'
import moment from 'moment'


const DEPARTURES_CAP = 3;

export const stops = {
  dalenenga: 3010524,
  birkelunden: 6644612,
  kobenhavngata: 6644844,
  carlberner: 6644460
}

function heartbeat(){
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
  // create object keys
  let parsedDepartures = _.groupBy(buses, (bus)=>{
    let departure = bus.MonitoredVehicleJourney;
    return departure.PublishedLineName+' '+departure.DestinationName;
  });
  // pick only expected arrival out of each bus departure
  parsedDepartures = _.mapValues(parsedDepartures, departures =>
    _.map(departures, departure =>
      moment(departure.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime)
  ));
  // only return the (3) next departures
  return _.mapValues(parsedDepartures, departures=> _.take(departures, DEPARTURES_CAP)); 
}
