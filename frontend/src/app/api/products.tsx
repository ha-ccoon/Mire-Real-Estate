import { NextApiRequest, NextApiResponse } from 'next'

type Product = {
  id: number
  name: string
  price: number
}

const products: Product[] = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
]

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { page } = req.query
  const itemsPerPage = 10
  const startIndex = (Number(page) - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const pageProducts = products.slice(startIndex, endIndex)

  setTimeout(() => {
    res.status(200).json({ products: pageProducts })
  }, 1000) // API 응답 시간을 위해 1초 딜레이 추가
}
