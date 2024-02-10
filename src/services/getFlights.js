import axios from 'axios'
const url = import.meta.env.VITE_SERVER_URL
export default async function useGetFlights () {
  const response = await axios.get(`${url}/flights`)
  console.log(response)
  return response
}
