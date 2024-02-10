import { Button, CardBody, Card, Typography, ButtonGroup, CardHeader } from '@material-tailwind/react'
import './App.css'
import useFlightInfo from './stores/store'
import flightimg from './assets/BestFlight.png'
import useGetFlights from './services/getFlights'
import GetFlightsData from './adapters/getFlightsData'
function App () {
  return (
    <>
      <div className='MainContainer flex flex-col items-center justify-center w-full'>

        <Card
          className='flex flex-col text-center   justify-center w-auto lg:h-auto'
          style={{
            backgroundColor: '#003a65',
            width: '30%',
            borderRadius: '1.5rem'

          }}
        >

          <CardHeader
            className='self-center bg-transparent relative lg:h-56 mt-4'
            style={{
              border: 'none',
              boxShadow: 'none',
              outline: 'none'
            }}
          >
            <img
              className='h-72 w-full object-cover object-center'
              src={flightimg}
            />
          </CardHeader>
          <CardBody style={{
            width: '100%'
          }}
          >
            <h1
              className='self-center text-white'
              style={{
                fontFamily: 'Montserrat',
                fontStyle: 'semiBold'
              }}
            >
              Welcome to DemoFlights

            </h1>
            <Typography
              className='lg:mt-24 WelcomeText self-center text-balance text-white leading-relaxed'

            >
              Welcome to DemoFlight - Your go-to place for booking and searching
              flights! We kickstart your exciting journey towards remarkable
              destinations. Discover our exclusive deals and easily find the
              perfect flight for you. 😊🛫
            </Typography>
            <ButtonGroup className='gap-4 lg:mt-6 items-center justify-center'>
              <Button className='MainButton'> I have a ticket</Button>
              <Button onClick={GetFlightsData} className='MainButton'> Search available flights</Button>
            </ButtonGroup>
          </CardBody>
        </Card>

      </div>
    </>
  )
}

export default App
