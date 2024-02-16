import loginUserService from '../services/loginUserService'

export default async function loginUser (email, password) {
  const params = {
    email,
    password
  }

  const resp = await loginUserService(params)

  if (resp.status === 200) {
    window.localStorage.setItem('userSession', JSON.stringify(resp.data))
    return true
  } else {
    return false
  }
}
