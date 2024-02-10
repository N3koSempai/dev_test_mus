import axios from 'axios'
const url = import.meta.env.VITE_SERVER_URL
export default async function useGetFlights (key) {
  const response = await axios.get(`${url}/flights?page=${key}&size=10`)
  console.log(response)
  return response
}
