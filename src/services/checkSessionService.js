import axios from 'axios'
const url = import.meta.env.VITE_SERVER_URL

export default async function checkSessionService () {
  const response = await axios.get(`${url}/auth/me`)
  return response
}
