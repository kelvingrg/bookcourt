import React from 'react'
import './Loader.css'
import footBallgif from '@assets/football-player.gif'

function Loader() {
  return (
    <div className='loader-container'>
      <div className='position-relative spinner-container'>
      <img height={'30px'}  src={footBallgif} alt="" srcset="" />
      <div className='spinner '>
  </div>
      </div>
 
    </div>
  )
}

export default Loader