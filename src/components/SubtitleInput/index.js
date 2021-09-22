import React from "react"

import Input from "../Input/Input"
import './style.css'


const Subcontent = ({ subtitle, setSubtitle }) => {
  return (
    <div className="subtitle-block">
      <div>Subtitle</div>
      <Input value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
    </div>
  )
}

export default Subcontent
