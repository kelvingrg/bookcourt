import React from 'react'
import './cards.css'
import { useNavigate } from 'react-router-dom'

function Cards({court}) {
    const navigate=useNavigate()
  return (
    <main>
    <div class ="card" onClick={()=>navigate('/court/details/'+court._id)}>
      <img src={`${process.env.REACT_APP_API_URL}/assets/${court?.courtPics?.[0]?.name}`} alt=""/>
      <div class="card-content">
        <h2>
        {court?.name}
        </h2>
        <p>
        {court?.location} <br />
        {court?.type} <br />
     </p>
       
      </div>
    </div>
  </main>
  )
}

export default Cards