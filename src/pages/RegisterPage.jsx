import React from 'react'
import { useState } from "react";
import addAvatar from "../assets/images/addAvatar.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from '../connections/firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";



export const RegisterPage = () => {

  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {

    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {

      /*Create User*/
      const resp = await createUserWithEmailAndPassword(auth, email, password)

      /*Upload Profile Image*/
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setError(true)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(resp.user,
              {
                displayName,
                photoURL: downloadURL
              });
            await setDoc(doc(db, "users", resp.user.uid), {
              uid: resp.user.uid,
              displayName,
              email,
              photoURL: downloadURL
            });
          });
        }
      )


    }

    catch (error) {
      setError(true)
    }
  }


  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className="logo">ChatNow</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='User Name' />
          <input type="email" placeholder='User E-Mail' />
          <input type="password" placeholder='Insert Password' />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={addAvatar} alt="" />
            <span>Add your Avatar</span>
          </label>
          <button className='ChatButton'>Sign Up</button>
          {error && <span className='loginError'>Something went wrong</span>}
        </form>
        <p>Do your have an account? LOGIN HERE</p>
      </div>
    </div>
  )
}
