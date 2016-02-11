import moment from 'moment'

export default function formatTimeToDeparture(departure, now = moment()) {
  const duration = moment.duration(departure.diff(now))
  if(duration.asSeconds() <= 0) {
    return 'nå'
  }
  if(duration.asMinutes() < 1) {
    return `${duration.seconds()}s`
  }
  if(duration.asMinutes() < 3) {
    return `${duration.minutes()}m ${duration.seconds()}s`
  }
  return `${duration.minutes()}m`
}
