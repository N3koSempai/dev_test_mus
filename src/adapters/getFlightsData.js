import useGetFlights from '../services/getFlights'

export default async function GetFlightsData (key = 1, size = 10) {
  const response = await useGetFlights(key, size)

  if (response.status === 200) {
    return response.data
  } else {
    return false
  }
}
