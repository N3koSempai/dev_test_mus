import React from 'react'
import {
  Navbar,
  Typography,
  Button,
  IconButton
  , Avatar,
  MenuHandler
  , Menu,
  MenuItem,
  MenuList,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter
  , Input, Collapse
} from '@material-tailwind/react'
import { useUserInfo } from '../../stores/User'
import AvatarIcon from '../../assets/account.svg'
import loginUser from '../../adapters/loginUser'
import SignUpButton from './components/SignUpButton.jsx'
import { useState } from 'react'
import { Alert } from '@material-tailwind/react'
export function NavbarTool () {
  const { login, changeLogin } = useUserInfo()
  const [openNav, setOpenNav] = React.useState(false)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [openDialog, setOpenDialog] = React.useState(false)
  const [errorLoginCode, setErrorLoginCode] = useState('')
  const handlerOpen = () => {
    setErrorLoginCode('') 
    setOpenDialog(!openDialog)
  }
  React.useEffect(() => {
    
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    )
  }, [])

  const handlerLogin = async () => {
    const emailInfo = document.getElementById('userInput')?.value
    const passInfo = document.getElementById('passInput')?.value
    const regex = /^\S+@\S+$/
        if (regex.test(emailInfo)) {
    const resp = await loginUser(emailInfo, passInfo)
    if (resp === true) {
      changeLogin(true)
      setOpenDialog(false)
    } else {
      setErrorLoginCode('credential error')      
    }
  } else {
    setErrorLoginCode('email format incorrect')
  }
  }
  const handlerLogout = () => {
    changeLogin(false)
    window.localStorage.removeItem('userSession')
  }
  return (
    <Navbar className='mx-auto mt-2 max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 w-[60%]'>

      <Dialog open={openDialog} size='xs' handler={handlerOpen} className=' p-6 !pr-10 !pl-10 '>
        <DialogHeader className='flex flex-col items-center justify-center'> <Typography style={{ fontWeight: 700, fontSize: '1.5rem' }}>login </Typography></DialogHeader>
        <DialogBody className='!w-[100%] flex items-center justify-center'>
          <div className='flex flex-col gap-4 w-[64%] items-center justify-center'>
            <Input id='userInput' type='email' label='Email' placeholder='admin@test.com' />
            <Input id='passInput' type='password' label='Password' placeholder='*****' />
            {errorLoginCode? <Alert className='text-black text-center' color='orange'> {errorLoginCode}</Alert> :<></>}
          </div>
        
        </DialogBody>
        <DialogFooter className='flex items-center justify-center'>
        <div  className='flex items-center justify-center'>
          <Button
            variant='text'
            color='red'
            onClick={handlerOpen}
            className='mr-1'
          >
            <span>Cancel</span>
          </Button>
          <Button variant='gradient' color='green' onClick={handlerLogin}>
            <span>Confirm</span>
          </Button>
          </div>
        </DialogFooter>
      </Dialog>

      <div className='container mx-auto flex items-center justify-between text-blue-gray-900'>
        <div className='flex flex-row '>
          <Typography style={{ fontWeight: 700, fontSize: '1.8rem', marginRight: '-0.4rem' }}>
            Dem
          </Typography>
          <div className='w-12 h-[12%]'>
            <svg viewBox='0 0 96 96' xmlns='http://www.w3.org/2000/svg'>
              <g>
                <path d='m48 95a32.668 32.668 0 0 1 -32.667-32.667v-28.666a32.667 32.667 0 0 1 65.334 0v28.666a32.667 32.667 0 0 1 -32.667 32.667z' fill='#cbd4f8' />
                <path d='m79.3 24.333h-62.6a32.614 32.614 0 0 0 -1.372 9.334v14.833h65.339c0-16 .355-18.376-1.367-24.167z' fill='#dff2ff' />
                <path d='m15.333 48.5h65.333v4.333h-65.333z' fill='#cbd4f8' />
                <path d='m15.333 52.833h65.333v5.167h-65.333z' fill='#b7b6e9' />
                <path d='m24.265 84.75a32.606 32.606 0 0 0 47.47 0z' fill='#b7b6e9' />
                <path d='m16.324 70.333a32.461 32.461 0 0 0 3.576 8.667h56.2a32.461 32.461 0 0 0 3.58-8.667z' fill='#b7b6e9' />
                <path d='m76.621 17.917h-57.242a32.567 32.567 0 0 0 -2.679 6.416h62.6a32.567 32.567 0 0 0 -2.679-6.416z' fill='#cbd4f8' />
                <path d='m19.379 17.917h57.242c-12.421-22.529-44.812-22.54-57.242 0z' fill='#dff2ff' />
                <path d='m48 10a23.7 23.7 0 0 0 -23.67 23.67v28.66a23.67 23.67 0 0 0 47.34 0v-28.66a23.7 23.7 0 0 0 -23.67-23.67zm18.67 52.33a18.67 18.67 0 0 1 -37.34 0v-28.66a18.67 18.67 0 0 1 37.34 0z' fill='#626ba8' />
                <path d='m58.23 77.94a18.673 18.673 0 0 1 -27.1-7.6c-1.967-4.157-1.857-7.02-1.81-13.489a2.5 2.5 0 1 0 -4.99-.023v5.5a23.7 23.7 0 0 0 23.67 23.672c11.228 0 22.3-7.97 23.553-22.412a2.5 2.5 0 1 0 -4.972-.414c-.524 6.717-3.37 11.491-8.351 14.766z' fill='#4e528a' /><g fill='#7b8ec6'><path d='m26.747 47.833a2.419 2.419 0 1 0 -2.417-2.416 2.424 2.424 0 0 0 2.417 2.416z' /><path d='m27.963 26.509a2.488 2.488 0 0 0 3.324-1.118 18.73 18.73 0 0 1 12.118-9.8 2.5 2.5 0 0 0 -1.217-4.851 23.764 23.764 0 0 0 -15.409 12.46 2.483 2.483 0 0 0 1.184 3.309z' /><path d='m49.729 12.585-.021.247a2.408 2.408 0 0 0 1.967 2.55 18.562 18.562 0 0 1 3.008.883 2.355 2.355 0 0 0 2.968-1.247l.1-.227a2.393 2.393 0 0 0 -1.335-3.225 23.449 23.449 0 0 0 -3.828-1.109 2.393 2.393 0 0 0 -2.859 2.128z' /><path d='m70.192 25.456a2.508 2.508 0 0 0 -3.645-1.272 2.531 2.531 0 0 0 -1.024 3.072 18.433 18.433 0 0 1 1.147 6.414v8.512a2.5 2.5 0 0 0 5 0c0-8.628.356-11.808-1.478-16.726z' /></g><path d='m66.67 33.67v28.66a18.668 18.668 0 0 1 -8.44 15.61c-12.253 8.12-28.9-.736-28.9-15.61v-28.66a18.67 18.67 0 0 1 37.34 0z' fill='#83d9fd' /><path d='m66.67 45.26v17.07a18.71 18.71 0 0 1 -11.08 17.06l-4.26-10.16a6.85 6.85 0 0 1 -.19-13.42 5.8 5.8 0 0 1 1.16-1.35 9.279 9.279 0 0 1 14.37-9.2z' fill='#fff' /><path d='m66.67 49.47v12.86a18.678 18.678 0 0 1 -8.44 15.61c-5.23-12.492-4.872-11.54-4.81-11.68a.17.17 0 0 1 -.07.01 3.846 3.846 0 1 1 -.74-7.62c.793 0 .72.156.72 0a2.447 2.447 0 0 1 2.8-2.42 6.261 6.261 0 0 1 10.54-6.76z' fill='#4ac0fd' /><path d='m66.67 33.67v4.21h-7.87a2.345 2.345 0 0 0 -1.99 1.11l-1.89 3.06a2.014 2.014 0 0 1 -1.71.95h-10.42a2.014 2.014 0 0 1 -1.71-.95l-1.89-3.06a2.345 2.345 0 0 0 -1.99-1.11h-7.87v-4.21a18.67 18.67 0 0 1 37.34 0z' fill='#eef2fd' /><path d='m48 15a18.691 18.691 0 0 0 -18.67 18.67v4.21h3v-4.21a15.67 15.67 0 0 1 31.34 0v4.21h3v-4.21a18.691 18.691 0 0 0 -18.67-18.67z' fill='#cbd4f8' /><path d='m50.625 38.88h-5.25a1 1 0 0 1 0-2h5.25a1 1 0 0 1 0 2z' fill='#cbd4f8' /><path d='m58.23 77.94a18.514 18.514 0 0 1 -10.79 3.05l-2.06-27.32h2.7z' fill='#cbd4f8' /><path d='m48.78 80.99c-.335 0-.9.023-1.34 0l-2.06-27.32h1.34z' fill='#fff' /><path d='m58.23 77.94a18.514 18.514 0 0 1 -10.79 3.05l-.44-5.83a18.471 18.471 0 0 0 9.19-2.11z' fill='#fff' /><path d='m47.44 80.99a18.717 18.717 0 0 1 -16.31-10.65l10.66-16.67h3.59z' fill='#e11c56' /><path d='m39.647 57.021-1.945 3.042h8.16l-.229-3.042z' fill='#ff4956' /><path d='m47.44 80.99a18.717 18.717 0 0 1 -16.31-10.65l10.66-16.67h1.79l-10.66 16.67a18.711 18.711 0 0 0 14.51 10.5z' fill='#af0d56' /><path d='m37.672 77.875a18.534 18.534 0 0 0 9.768 3.115l-.235-3.115z' fill='#ff4956' /><path d='m47.44 80.99a18.717 18.717 0 0 1 -16.31-10.65l1.8-2.82a18.642 18.642 0 0 0 14.07 7.64z' fill='#ff4956' /><path d='m38.313 71.375h8.402l-.305-4.045h-5.754z' fill='#4e528a' /><path d='m62.2 74.43a18.484 18.484 0 0 1 -3.97 3.51c-3.985-9.522-5.32-12.722-7.79-18.62z' fill='#4a93fd' /><path d='m41.79 53.67-10.66 16.67a18.73 18.73 0 0 1 -1.8-8.35c5.9-3.92 12.46-8.32 12.46-8.32z' fill='#4ac0fd' />
              </g>
            </svg>
          </div>
          <Typography style={{ fontWeight: 700, fontSize: '1.8rem', marginLeft: '0.5rem' }}>
            Flight
          </Typography>

        </div>
        <div className='flex items-center gap-x-1'>

          {login

            ? <Menu open={isMenuOpen} handler={setIsMenuOpen} placement='bottom-end'>
              <MenuHandler>
                <Button variant='filled' className='flex items-center justify-center bg-gray-200'>
                  <Avatar variant='circular' size='sm' className='border border-gray-900 p-0.5' src={AvatarIcon} />

                </Button>
              </MenuHandler>

              <MenuList className='p-1 flex self-center'>
                <MenuItem className='text-center self-center' onClick={handlerLogout}>
                  logout
                </MenuItem>
              </MenuList>

            </Menu>

            :
            <div className='flex flex-row lg:gap-2'>
             <Button variant='text' size='sm' onClick={handlerOpen}>
              Log In

            </Button>
            <SignUpButton />
            </div>
            }
        </div>
        <IconButton
          variant='text'
          className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav
            ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                className='h-6 w-6'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
              )
            : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
              )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className='container mx-auto'>

          <div className='flex items-center gap-x-1'>
            {login

              ? <Button fullWidth variant='text' size='sm' className=''>
                <span>Log In</span>

              </Button>

              :  <Button variant='filled' className='flex items-center justify-center bg-gray-200'>
                  <Avatar variant='circular' size='sm' className='border border-gray-900 p-0.5' src={AvatarIcon} />

                </Button>}

          </div>
        </div>
      </Collapse>
    </Navbar>
  )
}
