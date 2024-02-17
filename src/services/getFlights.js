import axios from 'axios'
const url = import.meta.env.VITE_SERVER_URL
export default async function useGetFlights (key, size = 10) {
 
 const Session = window.localStorage.getItem(`userSession`)
  key = parseInt(key)
  size = parseInt(size)

  const config = {
    headers: { Authorization: `Bearer ${Session.token}` }
  }

  try{
  const response = await axios.get(`${url}/flights?page=${key}&size=${size}`, config)
  return response  
} catch (error){
  console.log(error)
  return false
  }
}
