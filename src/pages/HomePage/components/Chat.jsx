import React from 'react'
import "./styles/styles.scss"
import Cam from "../../../assets/images/cam.png"
import Add from "../../../assets/images/add.png"
import More from "../../../assets/images/more.png"
import Input from "./Input"
import Messages from './Messages'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Tincho</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat