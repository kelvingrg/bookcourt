import React from 'react'
import './input.css'

function Input({label,type,onchange,onblur}) {
  return (
    <div className='common-input'>
           <input type={type} required className='input' id='input' onChange={onchange} onBlur={onblur ?? null }/>
      <label htmlFor="" className='label'>{label}</label>
    </div>
    
  )
}

export default Input