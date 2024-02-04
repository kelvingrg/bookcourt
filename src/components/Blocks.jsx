import React from 'react'
import './Block.css'
import footBall from '../assets/sports-soccer-svgrepo-com.svg'
import bookingsvg from '../assets/appointments-svgrepo-com.svg'
import loactionSearch from '../assets/search-globe-svgrepo-com.svg'
function Blocks() {
  return (
    <>
    <div className='d-flex flex-column flex-md-row justify-content-center w-100 h-50  mt-3 home-box-2 '>
<div className='d-flex flex-column align-items-center -dark border-1 text-break p-3 text-center'>
  <img src={loactionSearch} alt="" />
  <h3>Search</h3>
<p>Are you looking to play after work, organize your Sunday Five's football match? Explore the largest network of sports facilities whole over the India</p>
</div>
<div className='d-flex flex-column align-items-center  text-break p-3 text-center'>
  <img src={bookingsvg} alt="" />
  <h3>Book</h3>
<p >
Once you’ve found the perfect ground, court or gym, Connect with the venue through the Book Now Button to make online booking & secure easier payment</p>
</div>
<div className='d-flex flex-column align-items-center  text-break p-3 text-center'>
  <img src={footBall} alt="" />
  <h3>Play</h3>
<p>You’re the hero, you’ve found a stunning turf or court, booked with ease and now its time to play. The scene is set for your epic match.</p>
</div>


    </div>
    <div className="d-flex flex-wrap justify-content-center mt-3 brand-promo-container gap-3 ">
        <div className="brand-promo-box text-center">
          <img src="" alt="" />
          <h4>10000+</h4>
          <p>Happy Customers </p>
        </div>
        <div className="brand-promo-box text-center">
          <h4>100+ location </h4>
          <p>available 20+ states in India </p>
        </div>
        <div className="brand-promo-box text-center">
          <h4>24/7 access</h4>
          <p>choose favorite slots  </p>
        </div>
        <div className="brand-promo-box text-center">
          <h4>welcome Offers </h4>
          <p>get free acess to all courts  </p>
        </div>
        <div className="brand-promo-box text-center">
          <h4>Free and rented accessories</h4>
          <p>Happy Customers </p>
        </div>
      </div></>
  )
}

export default Blocks