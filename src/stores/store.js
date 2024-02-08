import { create } from 'zustand'

// const IMG_POSSIBLE_STATE = {
//   NONE: 'none',
//   READY: 'ready',
//   PROCESSING: 'processing'
// }
const useFlightInfo = create((set) => ({
  code: '',
  capacity: 1,
  departureDate: '',
  imgStatus: 'none',
  img: '',
  changeCode: (newCode) => set(() => ({ code: newCode })),
  changeCapacity: (newCapacity) => set(() => ({ capacity: newCapacity })),
  changeDeparture: (newDeparture) => set(() => ({ departureDate: newDeparture })),
  changeImgStatus: (newImgStatus) => set(() => ({ imgStatus: newImgStatus })),
  changeImg: (newImgUrl) => set(() => ({ img: newImgUrl }))

}))

export default useFlightInfo
