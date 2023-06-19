import Script from 'next/script'
import { Map } from 'react-kakao-maps-sdk'

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=bc9a1a6e3d248caad693cd88df390c11&autoload=false`

const KakaoMap = () => {
  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map
        center={{ lat: 33.450701, lng: 126.570667 }}
        style={{ width: '50%', height: '50%' }}
      ></Map>
    </>
  )
}

export default KakaoMap
