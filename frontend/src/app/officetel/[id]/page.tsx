import axios from 'axios'

// 오피스텔 상세 페이지
interface Property {
  name: string
  price: number
  id: number
  // 오피스텔
  // 위치(도로명 주소) : postal_code
  // 월전세(전세 : key_money/월세 : rent) + 보증금/월세(deposit/rental)
  // 전세금 : keymoney_price
  // 관리비 : management_cost

  // 지어진 년도 : year_built
  // 입주가능일 : move_in
  // 전용 면적 : exclusive_area
  // 방향 : derection
  // 몇층인지 층수 : floor
  // 총 층수 : number_of_house -> floor/number_of_house로 출력
  // 세대수 -> 오피스텔까지는 필요없을듯
  // 방 개수??? 오피스텔에 방개수가 있나
  // 주차 여부 : parking

  // 위치(카카오 지도)
}

const OfficetelDetailPage = () => {
  return (
    <>
      <p>오피스텔상세페이지입니당</p>
      <p>위치</p>
    </>
  )
}

export default OfficetelDetailPage
