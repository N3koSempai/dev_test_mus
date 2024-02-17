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
  capacity = parseInt(capacity)

  const params = {
    code,
    capacity,
    departureDate: departure
  }
  const response = await createFlightService(params)

  // adding time only for style purpose

  if (response.status === 201) {
    return true
  } else {
    return false
  }
}
