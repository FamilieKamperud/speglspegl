import { receiveRuterSchedule } from './actions'

const mockDepartures = [
  Date.now(),
  Date.now(),
  Date.now()
]

const mockDalenenga = {
  '30 Bygdøy': mockDepartures,
  '30 Nydalen': mockDepartures
}

const mockKobenhavnGata = {
  '20 Skøyen': mockDepartures,
  '20 Gokk': mockDepartures
}

export default function loadMockData(store) {
  store.dispatch(receiveRuterSchedule('Dælenenga', mockDalenenga))
  store.dispatch(receiveRuterSchedule('Københavngata', mockKobenhavnGata))
}
