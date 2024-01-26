import React from 'react'
import Input from './common/Input'
import './LoginBox.css'

function LoginBox({setBoxType}) {
  return (
    <div className='d-flex flex-column'>
        <div className='mt-3'>
        <Input  className="" label={'Email'} type={'text'}/>
        </div>
        <div className='mt-4'>
        <Input label={'password'} type={'text'}/>
        </div>
  <button className='common-button align-self-center  mt-3'>Login</button>
<p className='already-account mt-4'>dont have an account? <i onClick={()=>setBoxType('signup')}>signup here</i></p>
</div>
  )
}

export default LoginBox