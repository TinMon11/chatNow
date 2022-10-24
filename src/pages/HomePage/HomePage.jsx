import React from 'react'
import Sidebar from "./components/Sidebar"
import Chat from "./components/Chat"

import "./components/styles/styles.scss"

export const HomePage = () => {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}
