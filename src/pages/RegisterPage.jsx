import React from 'react'

export const RegisterPage = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">ChatNow</span>
            <span className="title">Register</span>
            <form >
                <input type="text" placeholder='User Name' />
                <input type="email" placeholder='User E-Mail'/>
                <input type="password" placeholder='Insert Password'/>
                <input type="file" />
                <button className='ChatButton'>Sign Up</button>
            </form>
            <p>Do your have an account? LOGIN HERE</p>
        </div>
    </div>
  )
}
