import {
  Card,
  Typography,
  Button,
  CardFooter,
  IconButton, Select, Option
} from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import GetFlightsData from '../../adapters/getFlightsData'
import urlParseData, { urlUpdateLocation } from '../../utils/urlParsedata'
import CreateFlightsButton from './components/createFlightsButton'
const TABLE_HEAD = ['code', 'capacity', 'departure Date']

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
    <div
      className='flex items-center justify-center' style={{
        width: '100%',
        height: '100vh'
      }}
    >
      <Card
        className='' style={{
          width: '50%',
          height: '80%'
        }}
      >
        <table className='w-full min-w-max table-auto  flex flex-col overflow-y-scroll' style={{ width: '100%' }}>
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'
                >
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
          <tbody className=''>
            {TABLE_ROWS.map(({ code, capacity, departureDate }, index) => {
              const isLast = index === TABLE_ROWS.length - 1
              const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50'
              return (
                <tr key={index}>
                  <td className={classes}>
                    <Typography
                      variant='small'
                      color='blue-gray'
                      className='font-normal'
                    >
                      {code}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant='small'
                      color='blue-gray'
                      className='font-normal'
                    >
                      {capacity}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant='small'
                      color='blue-gray'
                      className='font-normal'
                    >
                      {departureDate}
                    </Typography>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <CardFooter className='flex flex-col items-center justify-between border-t border-blue-gray-50 p-4' style={{ width: '90%' }}>
          <div className='flex items-center justify-between border-t border-blue-gray-50 p-4' style={{ width: '90%', margin: '2%' }}>
            <Button variant='outlined' size='sm' onClick={() => { changeActualPage(actualPage - 1) }}>
              Previous
            </Button>
            <div className='flex items-center gap-2'>
              {(() => {
                const elements = []
                for (let i = 1; i <= totalPage; i += 1) {
                  elements.push(<IconButton variant='outlined' size='sm' key={i} onClick={() => { changeActualPage(i) }}>{i}</IconButton>)
                  if (i === 10) {
                    elements.push(<p>...</p>)
                    break
                  }
                }
                return elements
              })()}
            </div>
            <Button variant='outlined' size='sm' onClick={() => { changeActualPage(actualPage + 1) }}>
              Next
            </Button>
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
  )
}
