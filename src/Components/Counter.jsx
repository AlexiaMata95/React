import React, {useState} from 'react' //rafce

const Counter = () => {
    const [count, setCount] =  useState(0);

    const handleClick = () =>{
        console.log('Click!')
        setCount(count + 1)
      }

    const handleChange = (e) => {
        console.log(e.target.value)
    }

  return (
    <>
    <h3>Haz hecho click {count} veces</h3>
    <input type="text" onChange={(e) => handleChange(e)}/>
    <button onClick={() => handleClick()}> + 1 </button>
    </>
  )
}

export default Counter