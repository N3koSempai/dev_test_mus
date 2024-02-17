import getFlightById from '../services/getFlightById'
import createFlightService from '../services/createFlightService'
export default async function checkFlight (code) {
  try {
    const resp = await getFlightById(code)
    if (resp.data.status !== 'unavailable' && resp.status === 200) {
      return true
    } else {
      return false
    }
  } catch {
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
  try {
    const response = await createFlightService(params)
    if (response.status === 201) {
      return true
    } else {
      return false
    }
  } catch {
    return false
  }
  // adding time only for style purpose
}
