//import React from 'react'

const Input = ({option ,setOption,placeholder}) => {
  return (
      <input
            type="text"
            value={option}
            onChange={(e) => {
              setOption(e.target.value);
            }}
            className="border-black border-2 border-solid w-60 h-10 p-3 rounded-md"
            placeholder={placeholder}
          />

  )
}

export default Input
