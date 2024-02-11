import useGetFlights from '../services/getFlights'

export default async function GetFlightsData (key, size = 10) {
  console.log(size)
  const response = await useGetFlights(key, size)

  if (response.status === 200) {
    return response.data
  }
}
