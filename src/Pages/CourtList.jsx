import React, { useEffect, useState } from 'react'
import NavBar from '../components/common/NavBar'
import Cards from '../components/Cards'
import AxiosInstance from '../api/apicall'

function CourtList() {
  const [courtData,setCourtData]=useState([])
  useEffect(()=>{getCourtData()},[])
  const getCourtData=()=>{
    AxiosInstance.get('users/getCourtData').then((response)=>{
      setCourtData(response.data)
    })
    .catch((err)=>{
debugger
    })
  }
  return (
    <div className='d-flex flex-column vh-100'>
<NavBar/>
<div className='court_list_body flex-grow-1 d-flex flex-wrap overflow-y-auto p-4 gap-3 justify-content-center '>
{courtData.map(court=><Cards court={court} key={court._id}/>)}

<Cards/>

</div>
<div className=''>sscscds</div>

    </div>
  )
}

export default CourtList