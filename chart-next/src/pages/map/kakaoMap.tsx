import KakaoMap from 'components/map/kakaoMap'
import LikePosition from 'components/map/LikePosition'
import Search from 'components/map/Search'
import React from 'react'

const kakaoMapPage = () => {
  return (
    <>
        <h1>카카오 맵</h1>
        <Search />
        <LikePosition />
        <KakaoMap />
    </>
  )
}

export default kakaoMapPage