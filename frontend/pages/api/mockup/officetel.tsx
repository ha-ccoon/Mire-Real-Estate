import { NextApiRequest, NextApiResponse } from 'next'

interface Property {
  name: string
  price: number
  id: number
}

const properties: Property[] = [
  { id: 1, name: '오피스텔 1', price: 100000000 },
  { id: 2, name: '오피스텔 2', price: 200000000 },
  { id: 3, name: '오피스텔 3', price: 300000000 },
  { id: 4, name: '오피스텔 4', price: 400000000 },
  { id: 5, name: '오피스텔 5', price: 500000000 },
  { id: 6, name: '오피스텔 6', price: 600000000 },
  { id: 7, name: '오피스텔 7', price: 700000000 },
  { id: 8, name: '오피스텔 8', price: 800000000 },
  { id: 9, name: '오피스텔 9', price: 900000000 },
  { id: 10, name: '오피스텔 10', price: 1000000000 },
  { id: 11, name: '오피스텔 11', price: 1100000000 },
  { id: 12, name: '오피스텔 12', price: 1200000000 },
  { id: 13, name: '오피스텔 13', price: 1300000000 },
  { id: 14, name: '오피스텔 14', price: 1400000000 },
  { id: 15, name: '오피스텔 15', price: 1500000000 },
  { id: 16, name: '오피스텔 16', price: 1600000000 },
  { id: 17, name: '오피스텔 17', price: 1700000000 },
  { id: 18, name: '오피스텔 18', price: 1800000000 },
  { id: 19, name: '오피스텔 19', price: 1900000000 },
  { id: 20, name: '오피스텔 20', price: 2000000000 },
  { id: 21, name: '오피스텔 21', price: 2100000000 },
  { id: 22, name: '오피스텔 22', price: 2200000000 },
  { id: 23, name: '오피스텔 23', price: 2300000000 },
  { id: 24, name: '오피스텔 24', price: 2400000000 },
  { id: 25, name: '오피스텔 25', price: 2500000000 },
  { id: 26, name: '오피스텔 26', price: 2600000000 },
  { id: 27, name: '오피스텔 27', price: 2700000000 },
  { id: 28, name: '오피스텔 28', price: 2800000000 },
  { id: 29, name: '오피스텔 29', price: 2900000000 },
  { id: 30, name: '오피스텔 30', price: 3000000000 },
  { id: 31, name: '오피스텔 31', price: 3100000000 },
  { id: 32, name: '오피스텔 32', price: 3200000000 },
  { id: 33, name: '오피스텔 33', price: 3300000000 },
  { id: 34, name: '오피스텔 34', price: 3400000000 },
  { id: 35, name: '오피스텔 35', price: 3500000000 },
  { id: 36, name: '오피스텔 36', price: 3600000000 },
  { id: 37, name: '오피스텔 37', price: 3700000000 },
  { id: 38, name: '오피스텔 38', price: 3800000000 },
  { id: 39, name: '오피스텔 39', price: 3900000000 },
  { id: 40, name: '오피스텔 40', price: 4000000000 },
  { id: 41, name: '오피스텔 41', price: 4100000000 },
  { id: 42, name: '오피스텔 42', price: 4200000000 },
  { id: 43, name: '오피스텔 43', price: 4300000000 },
  { id: 44, name: '오피스텔 44', price: 4400000000 },
  { id: 45, name: '오피스텔 45', price: 4500000000 },
  { id: 46, name: '오피스텔 46', price: 4600000000 },
  { id: 47, name: '오피스텔 47', price: 4700000000 },
  { id: 48, name: '오피스텔 48', price: 4800000000 },
  { id: 49, name: '오피스텔 49', price: 4900000000 },
  { id: 50, name: '오피스텔 50', price: 5000000000 },
]

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(properties)
}
