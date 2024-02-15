import {
  Card,
  Typography,
  CardFooter,
  IconButton, Select, Option
  , ThemeProvider
  , Button
} from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import GetFlightsData from '../../adapters/getFlightsData'
import urlParseData, { urlUpdateLocation } from '../../utils/urlParsedata'
import CreateFlightsButton from './components/createFlightsButton'
import { NavbarTool } from '../../components/navBar/navBar'
// personalization module
const customTheme = {
  TableCard: {
    style: {
      backgroundColor: 'red'
    }
  }
}
const TABLE_HEAD = ['code', 'capacity', 'departure Date', 'photo']

export default function LandingPage () {
  const [TABLE_ROWS, setTableRows] = useState([{}, {}, {}])
  const [totalPage, setTotalPage] = useState(1)
  const [actualPage, setActualPage] = useState(1)
  const [size, setSize] = useState('10')

  const changeActualPage = (page) => {
    if (page >= 1) {
      setActualPage(page)
      urlUpdateLocation(page, size)
    }
  }

  const changeSize = (value) => {
    setSize(value)
    urlUpdateLocation(actualPage, value)
  }

  // get list of flights from server
  const getFlights = async (key = 1, size = 10) => {
    const resp = await GetFlightsData(key, size)

    setTableRows(resp.resources)
    if (resp.total > 10 && resp.total > resp.resources.length) {
      const pagesQuantity = Math.ceil(resp.total / 10)
      setTotalPage(pagesQuantity)
    } else {
      setTotalPage(1)
    }
  }
  useEffect(() => {
    const currentUrl = window.location.href

    const { page = 1, size = 10 } = urlParseData(currentUrl)
    getFlights(page, size)
  }, [])
  return (
    <ThemeProvider value={customTheme}>
      <div
        className='flex flex-col items-center justify-center -mt-14' style={{
          width: '100%',
          height: '100%'
        }}
      >
        <Card className='!TableCard flex h-[90%] lg:w-[60%]  w-[80%] items-center pb-2 !shadow-2xl' style={{ borderRadius: '2rem' }}>
          <table className='flex flex-col w-[100%] h-[80%] '>
            <thead className=' w-full'>
              <tr className='grid grid-flow-col'>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className='border-b  border-blue-gray-100 bg-blue-gray-50 p-4'>
                    <Typography
                      variant='small'
                      color='blue-gray'
                      className='font-normal leading-none opacity-70'
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className='flex flex-col w-full h-[100%] overflow-y-scroll '>
              {TABLE_ROWS.map(({ code, capacity, departureDate, img }, index) => {
                const isLast = index === TABLE_ROWS.length - 1
                const classes = isLast ? 'p-4 text-center ' : 'p-4 text-center border-b border-blue-gray-50'
                return (
                  <tr key={index} className='grid grid-flow-col '>
                    <td className={`${classes}  `}>
                      <Typography
                        variant='small'
                        className='font-normal'
                      >
                        {code}
                      </Typography>
                    </td>
                    <td className={`${classes} `}>
                      <Typography
                        variant='small'
                        className='font-normal'
                      >
                        {capacity}
                      </Typography>
                    </td>
                    <td className={`${classes} `}>
                      <Typography
                        variant='small'
                        className='font-normal'
                      >
                        {departureDate}
                      </Typography>

                    </td>
                    <td className={`${classes}`}>
                      <Typography>
                        {img ? <Button className='' variant='small'>view Photo</Button> : 'no photo'}
                      </Typography>

                    </td>
                  </tr>

                )
              })}

            </tbody>
          </table>
          <CardFooter className=''>
            <div className='flex items-center  justify-between border-t border-blue-gray-50 p-4 ' style={{ width: '90%', margin: '2%' }}>

              <div className='flex items-center justify-center gap-2 ' style={{ overflowX: 'auto' }}>
                {(() => {
                  const elements = []
                  for (let i = 1; i <= totalPage; i += 1) {
                    elements.push(<IconButton variant='outlined' size='sm' key={i} onClick={() => { changeActualPage(i) }}>{i}</IconButton>)
                  }
                  return elements
                })()}
              </div>

            </div>
            <div className='flex flex-row items-center justify-center gap-4'>
              <Select value={size} onChange={(value) => { changeSize(value) }} label='size of list'>
                <Option value='10'>10</Option>
                <Option value='15'>15</Option>
                <Option value='20'>20</Option>
                <Option value='25'>25</Option>
              </Select>
              <CreateFlightsButton get={getFlights} />
            </div>
          </CardFooter>
        </Card>

      </div>
    </ThemeProvider>
  )
}
