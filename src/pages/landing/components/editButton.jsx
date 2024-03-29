/* eslint-disable react/prop-types */
import { useState } from "react"
import { Menu,MenuHandler,Alert, MenuItem, MenuList,Dialog, Button, Card, CardBody, Typography } from "@material-tailwind/react"
import checkFlight from "../../../adapters/createFlight"
import { Input } from "@material-tailwind/react"
import isOnlyDigits from '../../../utils/isDigits'
import { editFlightAdapter } from "../../../adapters/editFlight"

import { useEffect } from "react"
import deleteFlightService from "../../../services/deleteFlight"

export default function EditMenuButton({ get, id }) {


    const [editOption, setEditOption] = useState(false)
    const [deleteOption, setDeleteOption] = useState(false)
    const [deleteStatus, setDeleteStatus] = useState(false)
    const handleOpen = () => setEditOption((cur) => !cur)
    const handleOpenDelete = () => setDeleteOption((cur) => !cur)

    const [editStatus, setEditStatus] = useState(false)
    const [newCode, setNewCode] = useState('')
    const [capacity, setCapacity] = useState(1)
    const [departureDate, setDepartureDate] = useState('')
    const [codeError, setCodeError] = useState('')
    const [oldId, setOldId] = useState('')
    
    useEffect(()=> {setOldId(id)},[id])

    const handlerEdit =async () => {
        const secondResp = await checkFlight(newCode)
        if (secondResp ){
            
            const result = editFlightAdapter(oldId,newCode,capacity,departureDate)
            if (result){
                setEditStatus(true)
            } else {
                setCodeError('server error network')

            }
            
        } else {
            console.log('error')
        }
    }


    const handleSuccess = async () => {
        setEditOption(false)
        setEditStatus(true)
        get()
        
    }
    const checkCodeFormat = (event) => {
        const regex = /^[a-zA-Z]+$/
        const isOnlyLetters = regex.test(event.target.value)
    
        if ((isOnlyLetters !== true && event.target.value.length !== 0) || event.target.value.length > 6) {
          setCodeError('Enter only lowercase and uppercase letters between 1 - 6 characters')
        } else {
          setCodeError('')
          setNewCode(event.target.value)
        }
      }

      const updateDepartureDate = (event) => {
        const date = event.target.value
        setCodeError('')
        setDepartureDate(date)
      }
    
    
  const checkCapacity = (event) => {
    let res
    if (event.target.value !== '') {
      res = isOnlyDigits(event.target.value)
    } else {
      res = true
    }
    if (event.target.value > 200 || event.target.value < 0 || (res !== true)) {
      setCapacity(200)
    } else {
        setCapacity(event.target.value)
    }
  }

  const handlerDelete = async () => {
    
    const resp = await deleteFlightService(oldId)

    if (resp) {
        setDeleteStatus(true)
    } else {
        setCodeError('server error network')
    }
  }

  const handlerDeleteSuccess = async () => {
    setDeleteOption(false)
    setDeleteStatus(true)
    get()
  }


    return (
        <Menu className='flex items-center justify-center'>
        <MenuHandler>
          <Button size='sm' >Edit</Button>
        </MenuHandler>
        <MenuList>
          <MenuItem onClick={() => {setEditOption(true)}} className="bg-orange-200 text-black  focus:bg-orange-400">Edit Flight</MenuItem>
          <MenuItem onClick={() => {setDeleteOption(true)}} className="bg-red-200 focus:bg-red-400 text-black">Delete</MenuItem>
          
        </MenuList>

        {editStatus ? <Dialog
            size='xs'
            open={editOption}
            handler={handleOpen}
            className='bg-transparent shadow-none'
          >

          <Card className='mx-auto w-full max-w-[24rem]'>
            <CardBody className='flex flex-col gap-4 items-center justify-center text-center'>
              <Typography>
                Your flight was saved successfully
              </Typography>
              <Button size='sm' color='green' onClick={handleSuccess} className=''>
                Continue
              </Button>
            </CardBody>

          </Card>
          
          </Dialog> :
          <Dialog
            size='xs'
            open={editOption}
            handler={handleOpen}
            className='bg-transparent shadow-none'
          >
           <Card className='mx-auto w-full max-w-[24rem]'>
              <CardBody className='flex flex-col gap-4'>
                <Typography variant='small' className='text-center'>
                  enter your flight data
                </Typography>
                <div>
                  <Input color='blue' value={newCode} onChange={(value) => { checkCodeFormat(value) }} label='Flights Code' placeholder='XfeSde' />

                </div>
                <Input value={capacity} onChange={(value) => { checkCapacity(value) }} color='blue' label='Capacity 0-200' placeholder='10' type='number' min='0' max='200' />
                <Input value={departureDate} onChange={(value) => { updateDepartureDate(value) }} color='blue' label='Departure Date' type='date' />
                
                {codeError ? <Alert color='orange' variant='small' className='mt-1 text-color-gray'>{codeError}</Alert> : <></>}
                <Button onClick={handlerEdit}>Change flight Data</Button>
              </CardBody>
              
            </Card>
            </Dialog>}

            {deleteStatus ? 
            <Dialog
                size='xs'
                open={deleteOption}
                handler={handleOpenDelete}
                className='bg-transparent shadow-none'
              >
    
              <Card className='mx-auto w-full max-w-[24rem]'>
                <CardBody className='flex flex-col gap-4 items-center justify-center text-center'>
                  <Typography>
                  Your flight was deleted successfully
                  </Typography>
                  <Button size='sm' color='green' onClick={handlerDeleteSuccess} className=''>
                    Continue
                  </Button>
                </CardBody>
    
              </Card>
              
              </Dialog> :
              <Dialog
                size='xs'
                open={deleteOption}
                handler={handleOpenDelete}
                className='bg-transparent shadow-none'
              >
              <Card className='mx-auto w-full max-w-[24rem]'>
                <CardBody className='flex flex-col gap-4 items-center justify-center text-center'>
                  <Typography className="w-[40%]">
                  Are you sure you want to delete this flight?
                  </Typography>
                  <div className="flex flex-row gap-4">
                  <Button size='sm' color='green' onClick={handleOpenDelete} className=''>
                    Cancel
                  </Button>
                  <Button size='sm' color='red' onClick={handlerDelete} className=''>
                    yes
                  </Button>
                  </div>
                </CardBody>
    
              </Card>
                </Dialog>}
      </Menu>
    )
  
}