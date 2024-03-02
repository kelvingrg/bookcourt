import React from 'react'
import './cards.css'
import { useNavigate } from 'react-router-dom'

function Cards() {
    const navigate=useNavigate()
  return (
    <main>
    <div class ="card" onClick={()=>navigate('/court/details')}>
      <img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt=""/>
      <div class="card-content">
        <h2>
        Court Name
        </h2>
        <p>
         Location <br />
     lets paly the game         </p>
       
      </div>
    </div>
  </main>
  )
}

export default Cards