import React, { useState } from 'react'
import Input from '../components/common/Input'
import './LoginPage.css'
import LoginBox from '../components/LoginBox'
import SignupBox from '../components/SignupBox'

function Loginpage() {
  const [boxtype,setBoxType]=useState('login')
  return (
    <div className='container-fluid d-flex justify-content-center align-items-center vh-100 vw-100'>
<div className="row ">
<div className="col-md-6 left-image " style={{backgroundImage:`url(${'https://media.istockphoto.com/id/520999573/photo/indoor-soccer-football-field.jpg?s=612x612&w=0&k=20&c=X2PinGm51YPcqCAFCqDh7GvJxoG2WnJ19aadfRYk2dI='})`}}>
   <p> Reserve your spot, create memories, and let the games begin!</p>
</div>
<div className="col-md-6 right-side  ">

<h3 className='w-100  text-center mt-4 mb-4  brand-dark'>
    {boxtype==='login'? 'Login': 'Signup'}
</h3>
{boxtype==='login'? <LoginBox setBoxType={setBoxType}/>: <SignupBox setBoxType={setBoxType} />}


</div>

</div>

    </div>
  )
}

export default Loginpage