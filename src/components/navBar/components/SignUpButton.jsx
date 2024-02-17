
import { Alert } from "@material-tailwind/react"
import { Button, Dialog,Typography, DialogBody, DialogHeader, Input, DialogFooter } from "@material-tailwind/react"
import { useState } from "react"
import SignUpCall from "../../../adapters/useSignUp"


export default function SignUpButton () {
    const [openDialog, setOpenDialog] = useState(false)
    const [errorPass, setErrorPass] = useState('')
   const [userInf , setUserInfo] = useState('')
   const [emailInfo, setEmailInfo] = useState('')
   const [passInfo , setPassInfo] = useState('')
   const [confirmPassInfo , setConfirmPassInfo] = useState('')
   const [signUpSuccess, setSignUpSuccess] = useState(false)
   const handlerOpen = () => {
        setOpenDialog(!openDialog)
      }

const changePass = (value) => {
  setConfirmPassInfo(value)
}

    const handlerSignUp = async () => {
      if (passInfo !== confirmPassInfo) {
        setErrorPass("passwords don't match")
      } else {
        setErrorPass('')
        const regex = /^\S+@\S+$/
        if (regex.test(emailInfo) ) { 
        const resp = await SignUpCall(userInf,emailInfo, passInfo )
        console.log(resp)
        if (resp) {
          setOpenDialog(false)
          setSignUpSuccess(true)
        } else {
          setErrorPass('network error')
        }
      
      } else {
          setErrorPass('email format no valid')
        }
      
      }
  
    
    }

    return (
        <div>

<Button variant='text' size='sm' onClick={handlerOpen}>
              Sign Up
            </Button>
    


            <Dialog open={signUpSuccess} size="sm" handler={() => {setSignUpSuccess(!signUpSuccess)}} className=' p-6 !pr-10 !pl-10 '>
        <div>
        <DialogHeader className='flex flex-col items-center justify-center'> <Typography style={{ fontWeight: 700, fontSize: '1.5rem' }}>Sign Up </Typography></DialogHeader>
        <DialogBody className='!w-[100%] flex items-center justify-center'>          
        <div className="w-[50%] flex items-center justify-center">
        <Typography> You have successfully registered your user account, please log in. </Typography>
        </div>
        </DialogBody>
        <DialogFooter className="flex items-center justify-center">
        <div >
          <Button variant='gradient' color='green' onClick={() => {setSignUpSuccess(!signUpSuccess)}} >
            <span>Confirm</span>
          </Button>
          </div>
        </DialogFooter>
        </div> 

      </Dialog>



        
        <Dialog open={openDialog} size="sm" handler={handlerOpen} className=' p-6 !pr-10 !pl-10 '>
        
       
          
        <div>
        <DialogHeader className='flex flex-col items-center justify-center'> <Typography style={{ fontWeight: 700, fontSize: '1.5rem' }}>Sign Up </Typography></DialogHeader>
        <DialogBody className='!w-[100%] flex items-center justify-center'>          
          <div className='flex flex-col gap-4 w-[44%] items-center justify-center'>
            <Input id='userSingUpInput' label='User' value={userInf} onChange={(e) => {setUserInfo(e.target.value)}} placeholder='Admin' />
            <Input id='userSingUpInput' label='Email' type="email" value={emailInfo} onChange={(e) => {setEmailInfo(e.target.value)}} placeholder='test@test.com' />
            <Input id='passSignUpInput' label='Password' value={passInfo} onChange={(e) => {setPassInfo(e.target.value)}} placeholder='*****' />
            <Input id='confirmPassInput' label='Confirm Password' value={confirmPassInfo} onChange={(e) => {changePass(e.target.value)}} placeholder='repeat password' />
          </div>

        </DialogBody>
        <DialogFooter className='flex flex-col items-center justify-center'>
        {errorPass ? <Alert className="w-[50%] mb-4 text-black" color="orange"><Typography> {errorPass} </Typography></Alert> : <></>}
        <div  className='flex items-center justify-center'>
          
        
          <Button
            variant='text'
            color='red'
            onClick={handlerOpen}
            className='mr-1'
          >
            <span>Cancel</span>
          </Button>
          <Button variant='gradient' color='green' onClick={handlerSignUp}>
            <span>Confirm</span>
          </Button>
          </div>
        </DialogFooter>
        </div> 

      </Dialog>
        
</div>
    )
}

