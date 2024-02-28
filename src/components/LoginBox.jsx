import React, { useState } from 'react'
import Input from './common/Input'
import './LoginBox.css'
import { Alert, success } from '../utils/toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUserDetails } from '../redux/userSlice'

function LoginBox({setBoxType}) {
  const [loginData,setLoginData]=useState({})
  const navigate=useNavigate()
const dispatch=useDispatch()
  const handleLogin=(e)=>{
    setLoginData({...loginData,[e.target.name]:e.target.value})
  }
  const doLogin =()=>{
    axios({
      url:'http://localhost:5000/auth/dologin',
      method:'POST',
      data:loginData
    }).then((res)=>{
      success('login successfull')
      localStorage.setItem('token',res.data.token)
      setBoxType('login')
      dispatch(setUserDetails(res.data.user))
      navigate('/home')
    })
    .catch((err)=>{
Alert(err.response.data.message || 'something went wrong')
    })
  }
  return (
    <div className='d-flex flex-column'>
        <div className='mt-3'>
        <Input  className="" label={'Email'} type={'text'} name={'email'} value={loginData.email} onchange={handleLogin}/>
        </div>
        <div className='mt-4'>
        <Input label={'password'} type={'text'} name={'password'} value={loginData.password} onchange={handleLogin}/>
        </div>
  <button className='common-button align-self-center  mt-3' onClick={doLogin}>Login</button>
<p className='already-account mt-4'>dont have an account? <i onClick={()=>setBoxType('signup')}>signup here</i></p>
</div>
  )
}

export default LoginBox