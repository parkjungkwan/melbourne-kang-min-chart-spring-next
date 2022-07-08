import React from 'react'

const LikePosition = () => {
    const likeposi = [ "비트캠프", "성산일출봉" ]
    const likeposiList = likeposi.map((likeposi) => (<button key="idx">{likeposi}</button>))
  return (
    <div>
        {likeposiList}
    </div>
  )
}
export default LikePosition