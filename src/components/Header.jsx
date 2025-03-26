import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between m-3">
      <div className="title font-bold text-3xl">Watchlist</div>
        <div className="search flex gap-[8px]">
          <input type="text" className="border-2 border-gray-600 rounded-lg"/>
          <button className="font-bold">Search</button>
        </div>
    </div>
  )
}

export default Header
