import LandingPage from './landing'
import { NavbarTool } from '../../components/navBar/navBar'
import { useUserInfo } from '../../stores/User'
import BestSky from '../../assets/unsplash.jpg'
import { Card } from '@material-tailwind/react'
import { useEffect } from 'react'
import checkSession from '../../adapters/checkSession'
export default function PreLanding () {
  const { login, changeLogin } = useUserInfo()
  const checkSessionHook = async () => {
    const resp = await checkSession()

    if (resp === true) {
      await changeLogin(true)
    }
  }

  useEffect(() => {
    checkSessionHook()
  }, [])
  return (
    <div
      className='' style={{
        width: '100%',
        height: '100vh',
        background: `url(${BestSky})`,
        backgroundSize: 'cover'
      }}
    >
      <div className='flex flex-col w-full items-center self-center justify-center  '>
        <NavbarTool />
      </div>
      <div className='h-[90%] '>
        {login
          ? <LandingPage />
          : <div className='flex flex-col w-full h-full  '>
            <Card className='flex flex-col mt-12 items-center justify-center self-center w-[20%] h-[40%]'>
              <div className='flex '>
                <p>Login first</p>
              </div>
            </Card>
            </div>}
      </div>
    </div>
  )
}
