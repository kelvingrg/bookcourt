import React from 'react'
import Input from './common/Input'
import './LoginBox.css'

function SignupBox({setBoxType}) {
  const onchange=(e)=>{
    console.log(e.target.parentElement);
    e.target.parentElement.style.borderColor = 'red';

  }
    return (
        <div className='d-flex flex-column'>
            <div className='mt-3'>
            <Input   className="" label={'first Name'} type={'text'} onchange={onchange}/>
            </div>
            <div className='mt-3'>
            <Input   className="" label={'last Name'} type={'text'}/>
            </div>
            <div className='mt-3'>
            <Input   className="" label={'Email'} type={'text'}/>
            </div>
            <div className='mt-3'>
            <Input   className="" label={'mobile number'} type={'number'}/>
            </div>
            <div className='mt-3'>
            <Input label={'password'} type={'password'}/>
            </div>
            <div className='mt-3'>
            <Input label={'confirm password'} type={'password'}/>
            </div>
      <button className='common-button align-self-center  mt-3'>Sign Up</button>
    <p className='already-account mt-4'>already have an account? <i onClick={()=>setBoxType('login')}>Login here</i></p>
    </div>
      )
}

export default SignupBox