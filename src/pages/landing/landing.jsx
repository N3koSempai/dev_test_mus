import {
  Card,
  Typography,
  Button,
  CardFooter,
  IconButton
} from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import GetFlightsData from '../../adapters/getFlightsData'
const TABLE_HEAD = ['code', 'capacity', 'departure Date']

export default function LandingPage () {
  const [TABLE_ROWS, setTableRows] = useState([{}, {}, {}])
  const [totalPage, setTotalPage] = useState(1)

  const getFlights = async (key = 0) => {
    const resp = await GetFlightsData(key)
    setTableRows(resp.resources)
    if (resp.total > 10) {
      const pagesQuantity = resp.total / 10
      setTotalPage(pagesQuantity)
    } else {
      setTotalPage(1)
    }
  }
  useEffect(() => {
    getFlights()
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
          height: 'auto'
        }}
      >
        <table className='w-full min-w-max table-auto text-left'>
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
          <tbody>
            {TABLE_ROWS.map(({ code, capacity, departureDate }, index) => {
              const isLast = index === TABLE_ROWS.length - 1
              const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50'

              return (
                <tr key={code}>
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
                  <td className={classes}>
                    <Typography
                      as='a'
                      href='#'
                      variant='small'
                      color='blue-gray'
                      className='font-medium'
                    >
                      Edit
                    </Typography>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <CardFooter className='flex items-center justify-between border-t border-blue-gray-50 p-4' style={{ width: '90%', margin: '2%' }}>
          <Button variant='outlined' size='sm'>
            Previous
          </Button>
          <div className='flex items-center gap-2'>
            {(() => {
              const elements = []
              for (let i = 0; i < totalPage; i += 1) {
                elements.push(<IconButton variant='outlined' size='sm' key={i} onClick={() => { getFlights(i) }}>{i}</IconButton>)
                if (i === 10) {
                  elements.push(<p>...</p>)
                  break
                }
              }
              return elements
            })()}
          </div>
          <Button variant='outlined' size='sm'>
            Next
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
