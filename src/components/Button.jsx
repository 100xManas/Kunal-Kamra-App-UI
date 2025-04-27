import React from 'react'

function Button({title, px = "px-4", py = "py-2", bgColor ="bg-red-500", rounded = "rounded-md"}) {
  return (
    <button className={`${px} ${py} ${bgColor} ${rounded} capitalize font-medium rounded-md font-roboto cursor-pointer transition duration-300 ${bgColor == "bg-red-500"? 'text-white hover:bg-red-600' : 'text-black'}`}>{title}</button>
  )
}

export default Button
