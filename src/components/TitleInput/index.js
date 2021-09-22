import React from "react"

import Input from "../Input/Input"
import './style.css'


const TitleInput = ({ title, setTitle }) => {
  return (
    <div className="title-block">
      <div>Title</div>
      <Input value={title} onChange={(e) => setTitle(e.target.value)} />
    </div>
  )
}

export default TitleInput
