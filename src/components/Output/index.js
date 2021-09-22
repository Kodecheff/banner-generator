import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 1000px;
  height: 420px;
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.titleColor};
  border: 1px solid #dbdbdb;
  border: ${(props) => `${props.borderSize}px solid ${props.borderColor}`};
  box-sizing: border-box;

  @media (max-width: 1279px) {
    width: auto;
    height: auto;
  }
`

const TitleWrapper = styled.div`
  align-items: center;
  color: ${(props) => props.titleColor};
  box-sizing: border-box;

  @media (max-width: 1279px) {
    width: auto;
    height: auto;
  }
`

const SubWrapper = styled.div`
  align-items: center;
  color: ${(props) => props.subtitleColor};
  box-sizing: border-box;

  @media (max-width: 1279px) {
    width: auto;
    height: auto;
  }
`

const Title = styled.h1`
  font-weight: 300;
  font-size: ${ (props) => props.size}rem;
`

const Subtitle = styled.h5`
  font-weight: 300;
  font-size: ${ (props) => props.size}rem;
`


const Output = ({ values }) => {
  const { bgColor, title, subtitle, titleSize, subtitleSize, titleColor, subtitleColor, borderColor, borderSize } = values

  return (
    <>
    <Wrapper bgColor={bgColor} borderColor={borderColor} borderSize={borderSize} id="capture">
      <TitleWrapper titleColor={titleColor} >
        <Title size={titleSize}>{title}</Title>
      </TitleWrapper>

      <SubWrapper subtitleColor={subtitleColor}>
        <Subtitle size={subtitleSize}>{subtitle}</Subtitle>
      </SubWrapper>
    </Wrapper>

   </>
  )
}

Output.propTypes = {
  values: PropTypes.shape({
    bgColor: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    titleSize: PropTypes.string,
    titleColor: PropTypes.string,
    borderColor: PropTypes.string,
    hasBorder: PropTypes.bool
  }).isRequired
}

export default Output
