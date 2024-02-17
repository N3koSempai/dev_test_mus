import axios from "axios";

const url = import.meta.env.VITE_SERVER_URL
export default async function deleteFlightService(id) {
  
try{
const resp = await axios.delete(`${url}/flights/${id}`)

    if (resp.status === 204) {
        
        return true
    } else {return false}
} catch (error) {

return false
}
}