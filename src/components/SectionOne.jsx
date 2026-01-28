import React from 'react'

import RightCodeBox from './RightCodeBox'

const SectionOne = () => {
  return (
    <div className='max-w-[1200px] mx-auto flex justify-between items-center mt-20 text-white'>
        {/* left */}
        <div className='max-w-[650px]'>
            <h2 className='text-4xl font-semibold'>
                Unlock Your{" "}
                <span className='text-4xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-teal-300 to-green-300 bg-clip-text text-transparent'>
                    coding potential
                </span>
                <br/> with out online courses

            </h2>
            <p className="font-bold text-gray-600 text-lg mt-6 leading-relaxed">
          Our courses are designed and taught by industry experts who have years
          of experience in coding and are passionate about sharing their
          knowledge with you.
        </p>
        <div className='flex gap-4 mt-6'>
            <button className='bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold flex items-center dap-2 transition-all duration-300 hover:scale-105 hover:font-bold hover:bg-yellow-500'>
                Try it YourSelf
                <span className="transition-transform duration-300 hover:translate-x-1">
              →
            </span>
            </button>
            <button
            className="border border-[#2C333F] px-6 py-3 rounded-md font-semibold
    flex items-center gap-2
    transition-all duration-300
    hover:scale-105 hover:font-bold hover:bg-gray-500"
          >
            Learn More
          </button>

        </div>

        </div>

        {/* Right code box */}

        <div className='p-6 text-sm'>
           <RightCodeBox/>
        </div>

      
    </div>
  )
}

export default SectionOne
