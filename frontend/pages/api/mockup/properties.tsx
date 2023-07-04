import { NextApiRequest, NextApiResponse } from 'next'

interface Property {
  name: string
  price: number
}

const properties: Property[] = [
  { name: '매물 1', price: 100000000 },
  { name: '매물 2', price: 200000000 },
  { name: '매물 3', price: 300000000 },
]

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(properties)
}
