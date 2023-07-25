import { useEffect, useRef, useState } from 'react'
import './MypageMap.css'

declare global {
  interface Window {
    kakao: any
  }
}

const MypageMap = () => {
  const keywordRef = useRef<HTMLInputElement>(null)
  const [places, setPlaces] = useState<any[]>([])
  const ps = useRef<any>()
  const markers: Kakao.maps.Marker[] = []
  const [map, setMap] = useState<Kakao.maps.Map | null>(null) // map 상태 변수로 변경

  function removeAllChildNods(el: HTMLElement) {
    while (el.hasChildNodes()) {
      el.removeChild(el.lastChild!)
    }
  }
  function removeMarker() {
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(null)
    }
    markers.length = 0 // markers 배열 비우기
  }

  // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
  function addMarker(position: kakao.maps.LatLng, idx: number, title?: string) {
    const imageSrc =
      'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png' // 마커 이미지 url, 스프라이트 이미지를 씁니다
    const imageSize = new kakao.maps.Size(36, 37) // 마커 이미지의 크기
    const imgOptions = {
      spriteSize: new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
      spriteOrigin: new kakao.maps.Point(0, idx * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
      offset: new kakao.maps.Point(13, 37), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
    }
    const markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imgOptions,
    )
    const marker = new kakao.maps.Marker({
      position: position, // 마커의 위치
      image: markerImage,
    })

    marker.setMap(map) // 지도 위에 마커를 표출합니다
    markers.push(marker) // 배열에 생성된 마커를 추가합니다

    return marker
  }

  // 지도 위에 표시되고 있는 마커를 모두 제거합니다

  // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
  // 인포윈도우에 장소명을 표시합니다
  let infowindow: kakao.maps.InfoWindow | null = null

  // 인포윈도우를 표시하는 함수입니다.
  function displayInfowindow(marker: kakao.maps.Marker, title: string) {
    const content =
      '<div style="padding:5px;z-index:1;color:black">' + title + '</div>'

    // 인포윈도우가 없을 경우 생성하고, 있을 경우 기존 인포윈도우의 내용을 갱신합니다.
    if (!infowindow) {
      infowindow = new kakao.maps.InfoWindow({ zIndex: 1 })
    }

    // 인포윈도우의 내용을 설정하고 지도 위에 표시합니다.
    infowindow.setContent(content)
    infowindow.open(map, marker)
  }

  // 검색 결과 목록과 마커를 표출하는 함수입니다
  function displayPlaces(places: any) {
    const listEl = document.getElementById('placesList')
    const menuEl = document.getElementById('menu_wrap')
    const fragment = document.createDocumentFragment()
    const bounds = new kakao.maps.LatLngBounds()
    let listStr = ''

    // 검색 결과 목록에 추가된 항목들을 제거합니다
    removeAllChildNods(listEl)

    // 지도에 표시되고 있는 마커를 제거합니다
    removeMarker()

    function getListItem(index: number, places: any) {
      const el = document.createElement('li')
      let itemStr =
        '<span class="markerbg marker_' +
        (index + 1) +
        '"></span>' +
        '<div class="info">' +
        '   <h5>' +
        places.place_name +
        '</h5>'

      if (places.road_address_name) {
        itemStr +=
          '    <span>' +
          places.road_address_name +
          '</span>' +
          '   <span class="jibun gray">' +
          places.address_name +
          '</span>'
      } else {
        itemStr += '    <span>' + places.address_name + '</span>'
      }

      itemStr += '  <span class="tel">' + places.phone + '</span>' + '</div>'

      el.innerHTML = itemStr
      el.className = 'item'

      return el
    }

    for (let i = 0; i < places.length; i++) {
      // 마커를 생성하고 지도에 표시합니다
      const placePosition = new kakao.maps.LatLng(places[i].y, places[i].x)
      const marker = addMarker(placePosition, i)
      const itemEl = getListItem(i, places[i]) // 검색 결과 항목 Element를 생성합니다

      // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
      // LatLngBounds 객체에 좌표를 추가합니다
      bounds.extend(placePosition)

      // 마커와 검색결과 항목에 mouseover 했을때
      // 해당 장소에 인포윈도우에 장소명을 표시합니다
      // mouseout 했을 때는 인포윈도우를 닫습니다
      kakao.maps.event.addListener(marker, 'mouseover', function () {
        displayInfowindow(marker, places[i].place_name)
      })

      kakao.maps.event.addListener(marker, 'mouseout', function () {
        marker.infowindow.close()
      })

      itemEl.onmouseover = function () {
        displayInfowindow(marker, places[i].place_name)
      }

      itemEl.onmouseout = function () {
        marker.infowindow.close()
      }

      // 커스텀 프로퍼티로 infowindow를 저장합니다.
      marker.infowindow = new kakao.maps.InfoWindow({ zIndex: 1 })

      fragment.appendChild(itemEl)
    }

    // 검색결과 항목들을 검색결과 목록 Element에 추가합니다
    listEl.appendChild(fragment)
    menuEl.scrollTop = 0

    // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다.
    if (places.length > 0) {
      map?.setBounds(bounds)
    }
  }

  // 키워드 검색을 요청하는 함수입니다
  const searchPlaces = (event: React.FormEvent) => {
    event.preventDefault()
    const keyword = keywordRef.current?.value?.trim()

    function placesSearchCB(data: any, status: any, pagination: any) {
      if (status === kakao.maps.services.Status.OK) {
        setPlaces(data)
        displayPlaces(data)
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert('검색 결과가 존재하지 않습니다.')
        setPlaces([]) // 검색 결과가 없을 경우 places를 빈 배열로 설정합니다.
      } else if (status === kakao.maps.services.Status.ERROR) {
        alert('검색 결과 중 오류가 발생했습니다.')
      }
    }

    if (!keyword) {
      alert('키워드를 입력해주세요!')
      return false
    }

    ps.current.keywordSearch(keyword, placesSearchCB as any)
  }

  useEffect(() => {
    const { kakao } = window
    ps.current = new kakao.maps.services.Places()

    const mapContainer = document.getElementById('map') as HTMLElement // 지도를 표시할 div
    const mapOption = {
      center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    }

    // 지도를 생성합니다
    if (!map) {
      const newMap = new kakao.maps.Map(mapContainer, mapOption)
      setMap(newMap) // 생성한 지도를 map 상태 변수에 저장

      // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
      const mapTypeControl = new kakao.maps.MapTypeControl()
      newMap.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT)

      // 지도 확대 축소를 제어할 수 있는 줌 컨트롤을 생성합니다
      const zoomControl = new kakao.maps.ZoomControl()
      newMap.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT)
    }
  }, [map])

  return (
    <div className="map_wrap">
      <div
        id="map"
        style={{
          width: '80%',
          height: '500px',
          position: 'relative',
          overflow: 'hidden',
        }}
      ></div>
      <div id="menu_wrap" className="bg_white">
        <div className="option">
          <div>
            <form onSubmit={searchPlaces}>
              키워드 :{' '}
              <input
                type="text"
                placeholder="키워드를 입력하세요"
                id="keyword"
                size={15}
                ref={keywordRef}
              />
              <button type="submit">검색하기</button>
            </form>
          </div>
        </div>
        <hr />
        <ul id="placesList"></ul>
        <div id="pagination"></div>
      </div>
    </div>
  )
}

export default MypageMap
