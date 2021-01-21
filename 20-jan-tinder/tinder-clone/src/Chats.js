import React from 'react'
import Chat from './Chat'
import './Chats.css'

function Chats() {
  return (
    <div classN ame="chats">
      <Chat 
        name="Sarah"
        message="Hey! how are you"
        timestamp="35 miniutes ago"
        profilePic="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE4MDAzNDEwNTUyNTIyMjU0/audrey-hepburn-9335788-2-402.jpg"
      />
      <Chat 
        name="Sarah"
        message="Hey! how are you"
        timestamp="35 miniutes ago"
        profilePic="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTI1MDkzMjc2OTQzNDIyNzM4/poeportrait-600x487jpg.jpg"
      />
      <Chat 
        name="Sarah"
        message="Hey! how are you"
        timestamp="35 miniutes ago"
        //profilePic="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTI1MDkzMjc2OTQzNDIyNzM4/poeportrait-600x487jpg.jpg"
      />
    </div>
  )
}

export default Chats
