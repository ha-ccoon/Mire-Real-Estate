export interface MRE {
  property_id: number // 매물 아이디
  urgent_sale: number // 급매 여부
  property_name: string // 매물 이름
  property_type: string // 매물 타입
  sale_method: string // 판매 유형
  sale_price: string // 판매 가격
  deposit: string // 보증금
  premium: string //권리금
  management_cost: string // 관리비
  price_nego: number // 가격 조정 여부
  gross_leasable_area: number // 공급 면적
  exclusive_area: number // 전용 면적
  building_area: number // 건물 면적
  land_area: number // 대지 면적
  postal_code: string // 도로명 주소
  detail_address: string // 자세한 주소
  floor_plan: string // 평면도
  property_picture: string // 매물 사진
  year_built: number // 건축 년도
  availability: string // 입주가능일
  parking: string // 주차장
  direction: string // 건물 방향
  floor: number // 층
  total_floors: number // 총 층수
  total_households: number // 세대수
  room: number // 방 개수
  washroom: number // 화장실 개수
  building_type: string // 건물 타입(ex.근린상가, 빌라 등)
  hoist: number // 호이스트
  description: string // 매물 설명
  area_of_use: string // 용도 지역
}
