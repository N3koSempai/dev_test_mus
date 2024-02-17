import axios from 'axios'
const url = import.meta.env.VITE_SERVER_URL

export default async function getFlightById (code) {
  const response = await axios.get(`${url}/flights/available?code=${code}`)
  return response
}
