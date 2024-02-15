import LandingPage from './landing'
import { NavbarTool } from '../../components/navBar/navBar'
import { useUserInfo } from '../../stores/User'
import BestSky from '../../assets/unsplash.jpg'
import { Card } from '@material-tailwind/react'
export default function PreLanding () {
  const { login } = useUserInfo()
  return (
    <div
      className='' style={{
        width: '100%',
        height: '100vh',
        background: `url(${BestSky})`
      }}
    >
      <div className='flex flex-col w-full items-center self-center justify-center  '>
        <NavbarTool />
      </div>
      <div className='h-[90%] mt-10'>
        {login
          ? <div className='flex flex-col w-full h-full mt-12 '>
            <Card className='flex flex-col items-center justify-center self-center w-[20%] h-[40%]'>
              <div className='flex '>
                <p>Login first</p>
              </div>
            </Card>
            </div>
          : <LandingPage />}
      </div>
    </div>
  )
}
