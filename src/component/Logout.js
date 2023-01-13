import React from 'react'
import {useDispatch} from "react-redux"
import {logout} from "../features/userSlice"
import './Logout.css'
import {selectUser} from "../features/userSlice"
import {useSelector} from "react-redux"
const Logout = () => {
    const user=useSelector(selectUser);
    const dispatch=useDispatch();
    const handleOut=(e)=>{
        e.preventDefault();
        dispatch(logout())
    }
  return (
    <div className="logout">
        <h1>Well Come <span className="user">{user.name}</span> 
        </h1>
        <button className="button" onClick={(e)=>handleOut(e)}>logout</button>
    </div>
  )
}

export default Logout
