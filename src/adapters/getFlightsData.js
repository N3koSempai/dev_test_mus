import useGetFlights from '../services/getFlights'

export default async function GetFlightsData (key) {
  const response = await useGetFlights(key)

  if (response.status === 200) {
    return response.data
  }
}
