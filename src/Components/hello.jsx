import React from 'react'

const hello = ({name}) => {
  console.log('Propiedades: ',name)
  return (
    <div>hello { name }</div>
  )
}

export default hello