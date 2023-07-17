import { NextApiRequest, NextApiResponse } from 'next'

interface Property {
  property_name: string
  sale_price: string
  urgent_sale: number
  sale_method: string
  exclusive_area: number
  detail_address: string
  deposit: string
  property_id: number
}

const generateMockData = (): Property[] => {
  const properties: Property[] = []

  for (let i = 1; i <= 50; i++) {
    const urgent_sale = Math.random() < 0.5 ? 0 : 1
    const sale_method = ['전세', '매매', '월세'][Math.floor(Math.random() * 3)]
    const sale_price = `${Math.floor(Math.random() * 1000) + 1}억`
    const exclusive_area = Math.floor(Math.random() * 33) + 18
    const detail_address = '101동 101호'
    const deposit = `${Math.floor(Math.random() * 100)}만원`
    const property_id = 1

    const property: Property = {
      property_name: `아파트 ${i}`,
      sale_price,
      urgent_sale,
      sale_method,
      exclusive_area,
      detail_address,
      deposit,
      property_id,
    }

    properties.push(property)
  }

  return properties
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  const properties = generateMockData()
  res.status(200).json(properties)
}
