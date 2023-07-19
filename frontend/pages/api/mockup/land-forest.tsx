import { NextApiRequest, NextApiResponse } from 'next'

interface Property {
  urgent_sale: number
  property_id: number
  sale_method: string //매매, 임대
  property_type: string // 매물 타입
  postal_code: string // 매물 주소
  property_name: string
  deposit: string
  sale_price: string
  land_area: number
}

const generateMockData = (): Property[] => {
  const properties: Property[] = []

  for (let i = 1; i <= 50; i++) {
    const urgent_sale = Math.random() < 0.5 ? 0 : 1
    const sale_method = ['임대', '매매'][Math.floor(Math.random() * 2)]
    const sale_price = `${Math.floor(Math.random() * 1000) + 1}억`
    const postal_code = '강서구 신호동'
    const deposit = `${Math.floor(Math.random() * 100)}만원`
    const property_type = ['임야', '토지'][Math.floor(Math.random() * 2)]
    const land_area = Math.floor(Math.random() * 100)

    const property: Property = {
      property_name: `${i}`,
      sale_price,
      urgent_sale,
      sale_method,
      postal_code,
      deposit,
      property_id: i,
      property_type,
      land_area,
    }

    properties.push(property)
  }

  return properties
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  const properties = generateMockData()
  res.status(200).json(properties)
}
