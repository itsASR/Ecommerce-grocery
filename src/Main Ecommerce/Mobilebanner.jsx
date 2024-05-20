import React from 'react'
import BlackFriday from '/BlackFriday.jpg'

function Mobilebanner() {
  return (
    <> 
    <div className='w-screen h-40 pt-10 md:hidden'>
        <img src={BlackFriday} className='w-full h-full object-fit'></img>
    </div>
    </>
  )
}

export default Mobilebanner