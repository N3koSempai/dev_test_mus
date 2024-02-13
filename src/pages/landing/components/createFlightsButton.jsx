/* eslint-disable react/prop-types */
import {
  Alert,
  Button,
  Dialog,
  Card,
  CardBody,
  Typography,
  Input,
  Checkbox
} from '@material-tailwind/react'
import useFlightInfo from '../../../stores/store'
import { useState } from 'react'
import isOnlyDigits from '../../../utils/isDigits'
import checkFlight, { createFlight } from '../../../adapters/createFlight'
import ImageLoader from './imagenLoader'
import createFlightWithPhoto from '../../../adapters/createFlightWithPhoto'

export default function CreateFlightsButton ({ get }) {
  const [open, setOpen] = useState(false)
  const [codeError, setCodeError] = useState('')
  const [flightSuccess, setFlightSuccess] = useState(false)
  const [imgAvailable, setImgAvailable] = useState(false)
  const handleOpen = () => setOpen((cur) => !cur)
  const { code, capacity, departureDate, img, changeCode, changeCapacity, changeDeparture } = useFlightInfo()

  const checkCodeFormat = (event) => {
    console.log(event.target.value)
    const regex = /^[a-zA-Z]+$/
    const isOnlyLetters = regex.test(event.target.value)
    console.log(isOnlyLetters)
    if ((isOnlyLetters !== true && event.target.value.length !== 0) || event.target.value.length > 6) {
      setCodeError('Enter only lowercase and uppercase letters between 1 - 6 characters')
    } else {
      setCodeError('')
      changeCode(event.target.value)
    }
  }

  const updateDepartureDate = (event) => {
    const date = event.target.value
    setCodeError('')
    changeDeparture(date)
  }

  const handleSuccess = () => {
    setCodeError('')
    setFlightSuccess(false)
    handleOpen()
    get()
  }

  const handleCreateFlight = async () => {
    if (departureDate === Date) {
      setCodeError('departure date is require')
    } else {
      if (code === '') {
        setCodeError('code input cannot by empty')
      }
      const resp = await checkFlight(code, capacity, departureDate)

      if (resp === true) {
        setCodeError('')
        let res
        if (imgAvailable === true) {
          res = await createFlightWithPhoto(code, capacity, departureDate, img)
        } else {
          res = await createFlight(code, capacity, departureDate)
        }
        if (res === true) {
          setFlightSuccess(true)
          get()
        } else {
          setCodeError('unknown error')
        }
      } else {
        setCodeError('the code already exist, try with another')
      }
    }
  }

  const checkCapacity = (event) => {
    let res
    if (event.target.value !== '') {
      res = isOnlyDigits(event.target.value)
    } else {
      res = true
    }
    if (event.target.value > 200 || event.target.value < 0 || (res !== true)) {
      changeCapacity(200)
    } else {
      changeCapacity(event.target.value)
    }
  }

  return (

    <div>
      <Button size='sm' className='nowrap' onClick={handleOpen}> Create Flight </Button>

      {flightSuccess
        ? <Dialog
            size='xs'
            open={open}
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
          {/* eslint-disable-next-line */}
          </Dialog>
        : <Dialog
            size='xs'
            open={open}
            handler={handleOpen}
            className='bg-transparent shadow-none'
          >
          <Card className='mx-auto w-full max-w-[24rem]'>
            <CardBody className='flex flex-col gap-4'>
              <Typography variant='small' className='text-center'>
                enter your flight data
              </Typography>
              <div>
                <Input color='blue' value={code} onChange={(value) => { checkCodeFormat(value) }} label='Flights Code' placeholder='XfeSde' />

              </div>
              <Input value={capacity} onChange={(value) => { checkCapacity(value) }} color='blue' label='Capacity 0-200' placeholder='10' type='number' min='0' max='200' />
              <Input value={departureDate} onChange={(value) => { updateDepartureDate(value) }} color='blue' label='Departure Date' type='date' />
              <div>
                <Checkbox label='have photo?' value={imgAvailable} onChange={() => { setImgAvailable(!imgAvailable) }} />
                {imgAvailable ? <ImageLoader getPhoto={setImgAvailable} /> : <></>}
              </div>
              {codeError ? <Alert color='orange' variant='small' className='mt-1 text-color-gray'>{codeError}</Alert> : <></>}
              <Button onClick={handleCreateFlight}>Create flight</Button>
            </CardBody>
          </Card>
          {/* eslint-disable-next-line */}
          </Dialog>}
    </div>
  )
}
