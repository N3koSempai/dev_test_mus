import { Button } from '@material-tailwind/react'
import './App.css'
import useFlightInfo from './stores/store'
function App () {
  const { code, changeCode } = useFlightInfo()

  const handlerChangeCode = () => {
    changeCode('523Block')
  }
  return (
    <>
      <div className='flex w-full h-full'>
        <h1 className='flex  text-3xl font-bold underline'>

          {code || <p> nothing</p>}
        </h1>
        <Button onClick={handlerChangeCode}>change to 523Block</Button>
      </div>
    </>
  )
}

export default App
