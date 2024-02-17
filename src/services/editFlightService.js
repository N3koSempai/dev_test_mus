import axios from 'axios'
const url = import.meta.env.VITE_SERVER_URL

export default async function editFlightService (id,params) {

  try{
    const response = await axios.put(`${url}/flights/${id}`, params)
   
    return response

} catch (error){
   
    return false
}
 
}
