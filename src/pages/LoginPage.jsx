import React from 'react'
import addAvatar from "../assets/images/addAvatar.png"
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../connections/firebase'
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';


export const LoginPage = () => {

  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {

    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/')
    } catch (error) {
      setError(true)
    }
  }
 
  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className="logo">ChatNow</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder='User E-Mail' />
          <input type="password" placeholder='Insert Password' />
          <button className='ChatButton'>Sign In</button>
        </form>
        {error && <span className='loginError'>Something went wrong</span>}
        <p>Don't your have an account? <Link to="/register">CREATE IT HERE</Link> </p>
      </div>
    </div>
  )
}
