import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import ContentInput from "./ContentInput"
import Subcontent from "./Subcontent"
import ColorInput from "./ColorInput"
import SizeInput from "./SizeInput"


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

const Detail = styled.details`
  margin-left: 1rem;
`

const Summary = styled.summary`
  text-align: left;
  font-size: 2rem;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:focus {
    outline: transparent;
  }
`

const InputWrapper = ({ values, setters }) => {
  const { bgColor, title, titleSize, subtitle, titleColor, subtitleColor, borderColor, borderSize } = values
  const { setBgColor, setTitle, setTitleSize, setSubtitle, setTitleColor, setSubtitleColor, setBorderColor, setBorderSize } = setters

  return (
    <>
    <Wrapper>
      <ContentInput title={title} setTitle={setTitle} />
      <Subcontent subtitle={subtitle} setSubtitle={setSubtitle} />

      <SizeInput titleSize={titleSize} borderSize={borderSize} setTitleSize={setTitleSize} setBorderSize={setBorderSize} />

    </Wrapper>

    <ColorInput
      bgColor={bgColor} setBgColor={setBgColor}
      titleColor={titleColor} setTitleColor={setTitleColor}
      subtitle={subtitleColor} setSubtitleColor={setSubtitleColor}
      borderColor={borderColor} setBorderColor={setBorderColor}
    />
    </>
  )
}

InputWrapper.propTypes = {
  values: PropTypes.shape({
    bgColor: PropTypes.string,
    title: PropTypes.string,
    titleSize: PropTypes.string,
    titleColor: PropTypes.string,
    borderColor: PropTypes.string,
    hasBorder: PropTypes.bool
  }).isRequired,
  setters: PropTypes.shape({
    setBgColor: PropTypes.func,
    setTitle: PropTypes.func,
    setTitleSize: PropTypes.func,
    setTitleColor: PropTypes.func,
    setBorderColor: PropTypes.func,
    setHasBorder: PropTypes.func
  }).isRequired
}


export default InputWrapper
