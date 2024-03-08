import React, { useEffect } from 'react'
import NavBar from '../components/common/NavBar'
import './MYbook.css'
import AxiosInstance from '../api/apicall'

function MyBokkings() {
    useEffect(()=>{
        getOrdersData()
    },[])
    const getOrdersData=()=>{
        AxiosInstance.get('/users/ordersdata').then(res=>{

        })
        .catch(err=>{
            console.log(err);
        })
    }
  return (
 <>
 <NavBar/>
 <div className='w-100  bookinListContainer d-flex flex-wrap gap-2'>
    <div className='booking-box p-3 '>
<p> date</p>
<h3>court name</h3>
<p>location</p>
    </div>
 </div>
 </>
  )
}

export default MyBokkings