import { NextApiRequest, NextApiResponse } from 'next'

interface Property {
  name: string
  price: number
  id: number
}

const properties: Property[] = [
  { id: 1, name: '투룸 1', price: 100000000 },
  { id: 2, name: '투룸 2', price: 200000000 },
  { id: 3, name: '투룸 3', price: 300000000 },
  { id: 4, name: '투룸 4', price: 400000000 },
  { id: 5, name: '투룸 5', price: 500000000 },
  { id: 6, name: '투룸 6', price: 600000000 },
  { id: 7, name: '투룸 7', price: 700000000 },
  { id: 8, name: '투룸 8', price: 800000000 },
  { id: 9, name: '투룸 9', price: 900000000 },
  { id: 10, name: '투룸 10', price: 1000000000 },
  { id: 11, name: '투룸 11', price: 1100000000 },
  { id: 12, name: '투룸 12', price: 1200000000 },
  { id: 13, name: '투룸 13', price: 1300000000 },
  { id: 14, name: '투룸 14', price: 1400000000 },
  { id: 15, name: '투룸 15', price: 1500000000 },
  { id: 16, name: '투룸 16', price: 1600000000 },
  { id: 17, name: '투룸 17', price: 1700000000 },
  { id: 18, name: '투룸 18', price: 1800000000 },
  { id: 19, name: '투룸 19', price: 1900000000 },
  { id: 20, name: '투룸 20', price: 2000000000 },
  { id: 21, name: '투룸 21', price: 2100000000 },
  { id: 22, name: '투룸 22', price: 2200000000 },
  { id: 23, name: '투룸 23', price: 2300000000 },
  { id: 24, name: '투룸 24', price: 2400000000 },
  { id: 25, name: '투룸 25', price: 2500000000 },
  { id: 26, name: '투룸 26', price: 2600000000 },
  { id: 27, name: '투룸 27', price: 2700000000 },
  { id: 28, name: '투룸 28', price: 2800000000 },
  { id: 29, name: '투룸 29', price: 2900000000 },
  { id: 30, name: '투룸 30', price: 3000000000 },
  { id: 31, name: '투룸 31', price: 3100000000 },
  { id: 32, name: '투룸 32', price: 3200000000 },
  { id: 33, name: '투룸 33', price: 3300000000 },
  { id: 34, name: '투룸 34', price: 3400000000 },
  { id: 35, name: '투룸 35', price: 3500000000 },
  { id: 36, name: '투룸 36', price: 3600000000 },
  { id: 37, name: '투룸 37', price: 3700000000 },
  { id: 38, name: '투룸 38', price: 3800000000 },
  { id: 39, name: '투룸 39', price: 3900000000 },
  { id: 40, name: '투룸 40', price: 4000000000 },
  { id: 41, name: '투룸 41', price: 4100000000 },
  { id: 42, name: '투룸 42', price: 4200000000 },
  { id: 43, name: '투룸 43', price: 4300000000 },
  { id: 44, name: '투룸 44', price: 4400000000 },
  { id: 45, name: '투룸 45', price: 4500000000 },
  { id: 46, name: '투룸 46', price: 4600000000 },
  { id: 47, name: '투룸 47', price: 4700000000 },
  { id: 48, name: '투룸 48', price: 4800000000 },
  { id: 49, name: '투룸 49', price: 4900000000 },
  { id: 50, name: '투룸 50', price: 5000000000 },
]

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(properties)
}
