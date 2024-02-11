import { Typography, Card, CardBody, Button } from '@material-tailwind/react'
import backgroundImage from '../../assets/unsplash.jpg'
import { urlUpdateLocation } from '../../utils/urlParsedata'
export default function BadRequest () {
  const handleRestore = () => {
    urlUpdateLocation()
  }
  return (
    <div className=' flex flex-col items-center justify-center' style={{ width: '100%', height: '100vh', backgroundImage: `url('${backgroundImage}')`, backgroundSize: 'cover' }}>
      <Card className='flex flex-col bg-gray-200' style={{ width: '40%', height: '40%' }}>
        <CardBody className='flex flex-col lg:mt-24 mt-2 text-center items-center justify-center'>
          <Typography style={{ fontWeight: 700, fontSize: 20 }}>
            Bad Request
          </Typography>
          <Typography>
            try again and don`t loss your flight
          </Typography>

          <Button className='lg:mt-4' onClick={handleRestore}> Restore</Button>
        </CardBody>
      </Card>
    </div>
  )
}
