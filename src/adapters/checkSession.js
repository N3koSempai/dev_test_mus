import checkSessionService from '../services/checkSessionService'

export default async function checkSession () {
  const userSession = window.localStorage.getItem('userSession')
  if (userSession === '' || userSession === null || userSession === undefined) { return false } else {
    const dataServer = await checkSessionService()
    console.log(dataServer.status)
    if (dataServer.status === 200) {
      return true
    }
  }
}
