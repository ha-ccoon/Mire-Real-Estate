import { NextApiRequest, NextApiResponse } from 'next'

interface Property {
  name: string
  price: number
  id: number
}

const properties: Property[] = [
  { id: 1, name: '매물 1', price: 100000000 },
  { id: 2, name: '매물 2', price: 200000000 },
  { id: 3, name: '매물 3', price: 300000000 },
  { id: 4, name: '매물 4', price: 400000000 },
  { id: 5, name: '매물 5', price: 500000000 },
  { id: 6, name: '매물 6', price: 600000000 },
  { id: 7, name: '매물 7', price: 700000000 },
  { id: 8, name: '매물 8', price: 800000000 },
  { id: 9, name: '매물 9', price: 900000000 },
  { id: 10, name: '매물 10', price: 1000000000 },
  { id: 11, name: '매물 11', price: 1100000000 },
  { id: 12, name: '매물 12', price: 1200000000 },
  { id: 13, name: '매물 13', price: 1300000000 },
  { id: 14, name: '매물 14', price: 1400000000 },
  { id: 15, name: '매물 15', price: 1500000000 },
  { id: 16, name: '매물 16', price: 1600000000 },
  { id: 17, name: '매물 17', price: 1700000000 },
  { id: 18, name: '매물 18', price: 1800000000 },
  { id: 19, name: '매물 19', price: 1900000000 },
  { id: 20, name: '매물 20', price: 2000000000 },
  { id: 21, name: '매물 21', price: 2100000000 },
  { id: 22, name: '매물 22', price: 2200000000 },
  { id: 23, name: '매물 23', price: 2300000000 },
  { id: 24, name: '매물 24', price: 2400000000 },
  { id: 25, name: '매물 25', price: 2500000000 },
  { id: 26, name: '매물 26', price: 2600000000 },
  { id: 27, name: '매물 27', price: 2700000000 },
  { id: 28, name: '매물 28', price: 2800000000 },
  { id: 29, name: '매물 29', price: 2900000000 },
  { id: 30, name: '매물 30', price: 3000000000 },
  { id: 31, name: '매물 31', price: 3100000000 },
  { id: 32, name: '매물 32', price: 3200000000 },
  { id: 33, name: '매물 33', price: 3300000000 },
  { id: 34, name: '매물 34', price: 3400000000 },
  { id: 35, name: '매물 35', price: 3500000000 },
  { id: 36, name: '매물 36', price: 3600000000 },
  { id: 37, name: '매물 37', price: 3700000000 },
  { id: 38, name: '매물 38', price: 3800000000 },
  { id: 39, name: '매물 39', price: 3900000000 },
  { id: 40, name: '매물 40', price: 4000000000 },
  { id: 41, name: '매물 41', price: 4100000000 },
  { id: 42, name: '매물 42', price: 4200000000 },
  { id: 43, name: '매물 43', price: 4300000000 },
  { id: 44, name: '매물 44', price: 4400000000 },
  { id: 45, name: '매물 45', price: 4500000000 },
  { id: 46, name: '매물 46', price: 4600000000 },
  { id: 47, name: '매물 47', price: 4700000000 },
  { id: 48, name: '매물 48', price: 4800000000 },
  { id: 49, name: '매물 49', price: 4900000000 },
  { id: 50, name: '매물 50', price: 5000000000 },
]

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(properties)
}
