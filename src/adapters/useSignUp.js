import signUpService from "../services/signUpService"

export default async function SignUpCall (userName, email, password) {
  const params = {
    name: userName,
    email,
    password
  }

  const resp = await signUpService(params)

  if (resp.status === 201 || resp !== false) {
    return true
  } else {
    return false
  }
}
