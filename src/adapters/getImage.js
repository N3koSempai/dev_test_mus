import getImageService from '../services/getImageService'

export default async function getImageAdapter (id) {
  const img = await getImageService(id)
  return img
}
