import { useState } from "react"

const getRandomColor = () => {
  return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
}

/**
 * Handles our input states & updates
 */
const useInputs = () => {
  const [bgColor, setBgColor] = useState("#151513")
  const [title, setTitle] = useState("Some random article title ⚓")
  const [subtitle, setSubtitle] = useState("Written by Pascal")
  const [titleSize, setTitleSize] = useState("50")
  const [subtitleSize, setSubtitleSize] = useState("2")
  const [titleColor, setTitleColor] = useState("white")
  const [subtitleColor, setSubtitleColor] = useState("white")
  const [borderColor, setBorderColor] = useState("white")
  const [borderSize, setBorderSize] = useState(0)

  // Updates both the bg color and the website's border colors
  const randomBgColorChange = (color) => {
    setBgColor(color)
    document.body.style.setProperty('--border-color', color)
  }

  const randomizeInputs = () => {
    randomBgColorChange(getRandomColor())
    setTitleColor(getRandomColor())
    setSubtitleColor(getRandomColor())
    setBorderSize(Math.floor(Math.random() * 11))
    setBorderColor(getRandomColor())
  }

  return [
    { bgColor, title, titleSize, titleColor, subtitle, subtitleSize, subtitleColor, borderColor, borderSize },
    { setBgColor, setTitle, setTitleSize, setTitleColor, setSubtitle, setSubtitleSize, setSubtitleColor, setBorderColor, setBorderSize, randomizeInputs }
  ]
}

export default useInputs
