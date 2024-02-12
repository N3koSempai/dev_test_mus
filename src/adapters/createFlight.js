import getFlightById from '../services/getFlightById'
import createFlightService from '../services/createFlightService'
export default async function checkFlight (code) {
  const resp = await getFlightById(code)

  if (resp.data.status !== 'unavailable' && resp.status === 200) {
    console.log('true')
    return true
  } else {
    console.log('false')
    return false
  }
}

export async function createFlight (code, capacity, departure) {
  console.log(typeof (capacity))
  capacity = parseInt(capacity)
  console.log(typeof (departure))
  const params = {
    code,
    capacity,
    departureDate: departure
  }
  const response = await createFlightService(params)
  console.log(response.status)
  if (response.status === 201) {
    console.log('ok')
    return true
  } else {
    console.log('fail')
    return false
  }
}
