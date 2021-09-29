import React from "react"

import Input from "../Input/Input"
import './style.css'



const SizeInput = ({ titleSize, borderSize, setTitleSize, setBorderSize }) => {
  return (
    <>
      <div className="size-block">
        <div>Title size (in <code>px</code>)</div>
        <Input value={titleSize} type="number" min="50" onChange={(e) => setTitleSize(e.target.value)} />
      </div>

      <div className="size-block">
        <div>Border size (in <code>px</code>)</div>
        <Input value={borderSize} type="number" min="0" onChange={(e) => setBorderSize(e.target.value)} />
      </div>
    </>
  )
}

export default SizeInput
