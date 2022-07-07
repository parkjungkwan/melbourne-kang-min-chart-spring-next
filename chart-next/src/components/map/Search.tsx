import React, { useState } from 'react'

const Search = () => {
  
  const [markerPositions, setMarkerPositions] = useState([])

  return (
    <>
        <input type="text" />
        <button>검색</button>
    </>
  )
}

export default Search