import axios from 'axios'
const url = import.meta.env.VITE_SERVER_URL
const config = {
  headers: {
    'content-type': 'multipart/form-data'
  }
}
export default async function createFlightWithPhotoService (params) {
  const response = await axios.post(`${url}/flights/withPhoto`, params, config)

  return response
}
