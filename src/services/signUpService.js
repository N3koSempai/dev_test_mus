import axios from 'axios'
const url = import.meta.env.VITE_SERVER_URL

export default async function signUpService (params) {
  try {
    const response = await axios.post(`${url}/auth/register`, params)
    return response
} catch (error) {
  console.log(error)
  return false
}
}
