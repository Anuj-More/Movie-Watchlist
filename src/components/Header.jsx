import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between m-3">
      <div className="title font-bold ">Movies Watchlist App</div>
        <div className="search flex gap-2">
          <input type="text" className="border-2 border-gray-600 rounded-lg w-full max-w-30 min-w-2.5"/>
          <button className="font-bold">Search</button>
        </div>
    </div>
  )
}

export default Header
