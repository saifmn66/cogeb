import React from 'react';

export default function StateCard() {
  return (
    <div>
      <div className="text-white sm:mt-16 mt-2 m-2 absolute right-0 font-[sans-serif]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 bg-[#715E56] rounded-lg md:grid-cols-2 lg:grid-cols-3 sm:gap-8 gap-4 max-md:max-w-md mx-auto">
            <div className="rounded-lg overflow-hidden">
              <div className="sm:p-4 md:p-6 flex flex-col items-center">
                <h3 className="text-base md:text-lg font-semibold uppercase mb-2">logements</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="url(#gradient)"
                  className="w-10 h-10 md:w-16 md:h-16 mb-4"
                >
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#B88824" />
                      <stop offset="39%" stopColor="#E1C550" />
                      <stop offset="74%" stopColor="#CEA93B" />
                      <stop offset="100%" stopColor="#B07A12" />
                    </linearGradient>
                  </defs>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                  />
                </svg>
                <h3 className="text-lg md:text-xl font-semibold mb-2">7.999 <span className='text-[#B88824]'>+</span></h3>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden">
              <div className="p-4 md:p-6 flex flex-col items-center">
                <h3 className="text-base md:text-lg font-semibold uppercase mb-2">espace commercial</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="url(#gradient)"
                  className="w-10 h-10 md:w-16 md:h-16 mb-4"
                >
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#B88824" />
                      <stop offset="25%" stopColor="#E1C550" />
                      <stop offset="50%" stopColor="#CEA93B" />
                      <stop offset="75%" stopColor="#B07A12" />
                    </linearGradient>
                  </defs>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                  />
                </svg>
                <h3 className="text-lg md:text-xl font-semibold mb-2">7.999 <span className='text-[#B88824]'>+</span></h3>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden">
              <div className="p-4 md:p-6 flex flex-col items-center">
                <h3 className="text-base md:text-lg font-semibold uppercase mb-2">place parking</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="url(#parkingGradient)"
                  className="w-10 h-10 md:w-16 md:h-16 mb-4"
                >
                  <defs>
                    <linearGradient id="parkingGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#B88824" />
                      <stop offset="25%" stopColor="#E1C550" />
                      <stop offset="50%" stopColor="#CEA93B" />
                      <stop offset="75%" stopColor="#B07A12" />
                    </linearGradient>
                  </defs>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 3h6a4 4 0 0 1 0 8H9v6m-4 0h14m-4-6h4M9 7h2a2 2 0 0 0 0-4H9v4Z"
                  />
                </svg>
                <h3 className="text-lg md:text-xl font-semibold mb-2">7.999 <span className='text-[#B88824]'>+</span></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
