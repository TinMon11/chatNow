import React from 'react'
import addAvatar from "../assets/images/addAvatar.png"

export const LoginPage = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">ChatNow</span>
            <span className="title">Register</span>
            <form >
                <input type="email" placeholder='User E-Mail'/>
                <input type="password" placeholder='Insert Password'/>
                <button className='ChatButton'>Sign In</button>
            </form>
            <p>Don't your have an account? CREATE IT HERE</p>
        </div>
    </div>
  )
}
