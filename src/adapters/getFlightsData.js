import useGetFlights from '../services/getFlights'

export default async function GetFlightsData () {
  const response = await useGetFlights()

  if (response.status === 200) {
    return response.data
  }
}
