import React from 'react'

const Counter = () => {
  return (
    <>
    <div className="flex items-center text-xl">
        <button className="border rounded-md py-2 px-4 mr-2">-</button>
        <span className="text-center w-8">1</span>
        <button className="border rounded-md py-2 px-4 ml-2">+</button>
    </div>
    </>
  )
}

export default Counter