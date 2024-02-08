import { Button } from '@material-tailwind/react'
import './App.css'

function App () {
  return (
    <>
      <div className='flex w-full h-full'>
        <h1 className='flex  text-3xl font-bold underline'>
          <Button>hello</Button>
          Hello world!
        </h1>
      </div>
    </>
  )
}

export default App
