import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE={
    userDetails:JSON.parse(localStorage.getItem('user')) ?? {},

}
const generalSlice=createSlice({
    name:'user',
    initialState:INITIAL_STATE,
    reducers:{
        setUserDetails:(state,action)=>{
          localStorage.setItem('user',JSON.stringify(action.payload))
            state.userDetails=action.payload
        },

    }
})

export const {setUserDetails,setUserRole}=generalSlice.actions
export default generalSlice.reducer