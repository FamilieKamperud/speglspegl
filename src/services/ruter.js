import JSONP from 'browser-jsonp'

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

function parseDestinationInfo(data){
  return data
}
