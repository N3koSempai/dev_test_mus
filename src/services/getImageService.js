import axios from 'axios'
const url = import.meta.env.VITE_SERVER_URL
export default async function getImageService (id) {
  const resp = await axios.get(`${url}/flights/${id}/photo`, {
    method: 'GET',
    url,
    responseType: 'arraybuffer', // Decodifica la respuesta como Arreglo Buffer
    headers: {
      Accept: 'application/octet-stream' // Solicita el flujo de bytes sin procesar
    },
    onDownloadProgress: (progressEvent) => {
      console.log(`Descargando... ${Math.round((progressEvent.loaded * 100) / progressEvent.total)}%`)
    }
  })
  const arrBuffer = resp.data
  console.log(arrBuffer)
}
