import { create } from 'zustand'

export const useUserInfo = create((set) => ({
  userName: '',
  userId: 1,
  login: false,

  changeUserName: (newUser) => set(() => ({ userName: newUser })),
  changeLogin: (newLogin) => set(() => ({ login: newLogin }))

}))
