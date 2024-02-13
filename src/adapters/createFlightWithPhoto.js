import createFlightWithPhotoService from '../services/createFlightPhotoServ'

export default async function createFlightWithPhoto (code, capacity, departure, img) {
  capacity = parseInt(capacity)
  img = img[0].data_url
  const imageDataOnly = img.split(',')[1]
  const arrayBufferView = new ArrayBuffer(imageDataOnly.length)
  const arrayBuffer = await Uint8Array.from(arrayBufferView).reduce(
    (data, byte) => {
      data += String.fromCharCode(byte)
      return data
    },
    ''
  )
  const blob = new Blob([arrayBuffer], { type: 'image/jpeg' })
  const formData = new FormData()
  formData.append('code', code)
  formData.append('capacity', capacity)
  formData.append('departureDate', departure)
  formData.append('photo', blob)

  const response = await createFlightWithPhotoService(formData)
  if (response.status === 201) {
    return true
  } else {
    return false
  }
}
