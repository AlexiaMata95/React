import React from 'react'

const nvoreg = () => {
  return (
    <input type="text" placeholder='Escribe tu nombre' onChange={(e) => (handleEvent(e))}/>
  )
}

export default nvoreg