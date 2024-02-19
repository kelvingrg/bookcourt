import React, { useState } from 'react'
import Input from './common/Input'
import './LoginBox.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Alert, success } from '../utils/toast';

function SignupBox({setBoxType}) {
const [signupData,setSignUpData]=useState({})
  const handleSignup=(e)=>{
    setSignUpData({...signupData,[e.target.name]:e.target.value})
  }
  const doSignup =()=>{
    axios({
      url:'http://localhost:5000/auth/dosignup',
      method:'POST',
      data:signupData
    }).then((res)=>{
      success(res.message)
      setBoxType('login')
    })
    .catch((err)=>{
      
Alert(err.response.data.message || 'something went wrong')
    })
  }
    return (
        <div className='d-flex flex-column'>
            <div className='mt-3'>
            <Input   className="" label={'first Name'} type={'text'} name={'firstName'} value={signupData.firstName} onchange={handleSignup}/>
            </div>
            <div className='mt-3'>
            <Input   className="" label={'last Name'} type={'text'} name={'lastName'}  value={signupData.lastName}  onchange={handleSignup}/>
            </div>
            <div className='mt-3'>
            <Input   className="" label={'Email'} type={'text'} name={'email'}  value={signupData.email}  onchange={handleSignup}/>
            </div>
            <div className='mt-3'>
            <Input   className="" label={'mobile number'} type={'number'} name={'mobileNumber'}  value={signupData.mobileNumber}   onchange={handleSignup}/>
            </div>
            <div className='mt-3'>
            <Input label={'password'} type={'password'} name={'password'}  value={signupData.password}  onchange={handleSignup}/>
            </div>
            <div className='mt-3'>
            <Input label={'confirm password'} type={'password'} name={'confirmPassword'}  value={signupData.confirmPassword}  onchange={handleSignup}/>
            </div>
      <button className='common-button align-self-center  mt-3' onClick={doSignup}>Sign Up</button>
    <p className='already-account mt-4'>already have an account? <i onClick={()=>setBoxType('login')}>Login here</i></p>
    </div>
      )
}

export default SignupBox