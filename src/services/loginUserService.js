import axios from 'axios'
const url = import.meta.env.VITE_SERVER_URL

export default async function createFlightService (params) {
  try {
  const response = await axios.post(`${url}/auth/login`, params)
return response  
} catch {
  return false
}
}
