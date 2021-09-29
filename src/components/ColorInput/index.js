import React from "react"
import { CompactPicker } from "react-color"
import './style.css'


const ColorInput = ({ bgColor, setBgColor, titleColor, subtitleColor,
   setTitleColor, setSubtitleColor, borderColor, setBorderColor 
  }) => {
  const changeBgColor = ({ hex }) => {
    setBgColor(hex)
    document.body.style.setProperty('--border-color', hex)
  }

  return (
    <div className="color-wrapper">
      <div className="color-block">
        <div>Background color</div>
        <CompactPicker
          triangle="hide"
          color={bgColor}
          onChangeComplete={(color) => changeBgColor(color)}
        />
      </div>

      <div className="color-block">
        <div>Title color</div>
        <CompactPicker
          triangle="hide"
          color={titleColor}
          onChangeComplete={(color) => setTitleColor(color.hex)}
        />
      </div>

      <div className="color-block">
        <div>Subtitle color</div>
        <CompactPicker
          triangle="hide"
          color={subtitleColor}
          onChangeComplete={(color) => setSubtitleColor(color.hex)}
        />
      </div>

      <div className="color-block">
        <div>Border color</div>
        <CompactPicker
          triangle="hide"
          color={borderColor}
          onChangeComplete={(color) => setBorderColor(color.hex)}
        />
      </div>
    </div>
  )
}

export default ColorInput
