import React, { useContext } from 'react'
import "./styles/styles.scss"
import {signOut} from 'firebase/auth'
import {auth} from '../../../connections/firebase'
import { AuthContext } from '../../../context/AuthContext'


const Navbar = () => {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className='logo'>ChatNow</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar