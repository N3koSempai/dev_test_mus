import axios from 'axios'
const url = import.meta.env.VITE_SERVER_URL

export default async function createFlightService (params) {
  console.log(params)
  const response = await axios.post(`${url}/flights`, params)

  return response
}
