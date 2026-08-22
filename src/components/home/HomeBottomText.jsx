
// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// const HomeBottomText = () => {

//   return (
//     <div className='font-[font2] flex items-center justify-center gap-2 text-white '>
     
//       <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-44 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase'>
//         <Link className='text-[6vw] leading-tight lg:mt-6' to='/projects'>Projects</Link>
//       </div>
//       <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50]  lg:h-44 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase'>
//         <Link className='leading-tight text-[6vw] lg:mt-6' to='/agence'>agence</Link>
//       </div>
//     </div>
//   )
// }

// export default HomeBottomText

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomeBottomText = () => {

  return (
    <div className='font-[font2] flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-white'>

      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] h-20 sm:h-28 lg:h-44 flex items-center justify-center px-6 lg:px-14 border-white rounded-full uppercase -translate-y-6 sm:-translate-y-12 lg:-translate-y-6 -mt-30'>
        <Link className='text-[7vw] sm:text-[5vw] lg:text-[2.2vw] leading-none' to='/projects'>Projects</Link>
      </div>
      <div className='lg:border-3 -mt-30 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] h-20 sm:h-28 lg:h-44 flex items-center justify-center px-6 lg:px-14 border-white rounded-full uppercase -translate-y-6 sm:-translate-y-12 lg:-translate-y-6'>
        <Link className='text-[7vw] sm:text-[5vw] lg:text-[2.2vw] leading-none' to='/agence'>agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText