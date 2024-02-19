import React from 'react'
import './input.css'

function Input({label,type,onchange,onblur,name}) {
  return (
    <div className='common-input'>
           <input type={type} required className='input' name={name} value={null} id='input' onChange={onchange} onBlur={onblur ?? null }/>
      <label htmlFor="" className='label'>{label}</label>
    </div>
    
  )
}

export default Input