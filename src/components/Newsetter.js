import React from 'react'

export default function Newsetter() {
  return (
    <div>
      <div className="flex border-2 my-10 rounded-md  overflow-hidden max-w-md mx-auto font-[sans-serif]">
        <input type="email" placeholder="EMAIL"
          className="w-full outline-none rounded-l-md bg-white text-gray-600 text-sm px-4 py-3" />
        <button type='button' className="flex items-center justify-center bg-[#0B4F48] px-5 text-sm text-white">
        ENVOYER
        </button>
      </div>
    </div>
  )
}
