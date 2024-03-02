import React from 'react'
import NavBar from '../components/common/NavBar'
import Cards from '../components/Cards'

function CourtList() {
  return (
    <div className='d-flex flex-column vh-100'>
<NavBar/>
<div className='court_list_body flex-grow-1 d-flex flex-wrap overflow-y-auto p-4 gap-3 justify-content-center '>
<Cards/>
<Cards/>
<Cards/>
<Cards/>
<Cards/>
<Cards/>
<Cards/>
<Cards/>
<Cards/>
</div>
<div className=''>sscscds</div>

    </div>
  )
}

export default CourtList