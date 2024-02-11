import axios from 'axios'
const url = import.meta.env.VITE_SERVER_URL
export default async function useGetFlights (key, size = 10) {
  key = parseInt(key)
  size = parseInt(size)
  const response = await axios.get(`${url}/flights?page=${key}&size=${size}`)
  console.log(response)
  return response
}
