import React from 'react'
import "./styles/styles.scss"
import Navbar from "./Navbar"
import Search from "./Search"
import Chats from "./Chats"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Navbar/>
      <Search/>
      <Chats/>
    </div>
  )
}

export default Sidebar
