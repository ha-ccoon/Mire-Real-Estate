import { NextApiRequest, NextApiResponse } from 'next'

interface Property {
  name: string
  price: number
  id: number
}

const properties: Property[] = [
  { id: 1, name: '원룸 1', price: 100000000 },
  { id: 2, name: '원룸 2', price: 200000000 },
  { id: 3, name: '원룸 3', price: 300000000 },
  { id: 4, name: '원룸 4', price: 400000000 },
  { id: 5, name: '원룸 5', price: 500000000 },
  { id: 6, name: '원룸 6', price: 600000000 },
  { id: 7, name: '원룸 7', price: 700000000 },
  { id: 8, name: '원룸 8', price: 800000000 },
  { id: 9, name: '원룸 9', price: 900000000 },
  { id: 10, name: '원룸 10', price: 1000000000 },
  { id: 11, name: '원룸 11', price: 1100000000 },
  { id: 12, name: '원룸 12', price: 1200000000 },
  { id: 13, name: '원룸 13', price: 1300000000 },
  { id: 14, name: '원룸 14', price: 1400000000 },
  { id: 15, name: '원룸 15', price: 1500000000 },
  { id: 16, name: '원룸 16', price: 1600000000 },
  { id: 17, name: '원룸 17', price: 1700000000 },
  { id: 18, name: '원룸 18', price: 1800000000 },
  { id: 19, name: '원룸 19', price: 1900000000 },
  { id: 20, name: '원룸 20', price: 2000000000 },
  { id: 21, name: '원룸 21', price: 2100000000 },
  { id: 22, name: '원룸 22', price: 2200000000 },
  { id: 23, name: '원룸 23', price: 2300000000 },
  { id: 24, name: '원룸 24', price: 2400000000 },
  { id: 25, name: '원룸 25', price: 2500000000 },
  { id: 26, name: '원룸 26', price: 2600000000 },
  { id: 27, name: '원룸 27', price: 2700000000 },
  { id: 28, name: '원룸 28', price: 2800000000 },
  { id: 29, name: '원룸 29', price: 2900000000 },
  { id: 30, name: '원룸 30', price: 3000000000 },
  { id: 31, name: '원룸 31', price: 3100000000 },
  { id: 32, name: '원룸 32', price: 3200000000 },
  { id: 33, name: '원룸 33', price: 3300000000 },
  { id: 34, name: '원룸 34', price: 3400000000 },
  { id: 35, name: '원룸 35', price: 3500000000 },
  { id: 36, name: '원룸 36', price: 3600000000 },
  { id: 37, name: '원룸 37', price: 3700000000 },
  { id: 38, name: '원룸 38', price: 3800000000 },
  { id: 39, name: '원룸 39', price: 3900000000 },
  { id: 40, name: '원룸 40', price: 4000000000 },
  { id: 41, name: '원룸 41', price: 4100000000 },
  { id: 42, name: '원룸 42', price: 4200000000 },
  { id: 43, name: '원룸 43', price: 4300000000 },
  { id: 44, name: '원룸 44', price: 4400000000 },
  { id: 45, name: '원룸 45', price: 4500000000 },
  { id: 46, name: '원룸 46', price: 4600000000 },
  { id: 47, name: '원룸 47', price: 4700000000 },
  { id: 48, name: '원룸 48', price: 4800000000 },
  { id: 49, name: '원룸 49', price: 4900000000 },
  { id: 50, name: '원룸 50', price: 5000000000 },
]

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(properties)
}
