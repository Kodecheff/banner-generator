import React, { useEffect, useState } from "react"
import html2canvas from "html2canvas"
import { useAuth0 } from "@auth0/auth0-react";

import InputWrapper from "../Input/InputWrapper"
import Output from "../Output"
import useInputs from "../../hooks/useInputs"

import './style.css'



const BannerWrapper = () => {
  const [values, setters] = useInputs()
  const [imgURL, setImgURL] = useState("#")

  useEffect(() => {
    const output = document.getElementById("capture")
    html2canvas(output, {
      width: 1000,
      height: 420,
      scale: 1
    }).then(canvas => {
      setImgURL(canvas.toDataURL('image/png'))
      console.log(imgURL)
    });
  }, [values])

  const { isAuthenticated } = useAuth0();

  return (
    <>

      <div className="wrapper">
        <div>
          <Output values={values} />
        </div>
        <div className="actionWrapper">
          <InputWrapper values={values} setters={setters} />

          { isAuthenticated ? (
          <div className="btn btn-success mb-5 mt-3" id="download-button" download="banner.png" href={imgURL}>
            <a download="banner.png" href={imgURL}>DOWNLOAD BANNER</a>
          </div>
        // <button className="btn btn-info" style={{color: "white"}} onClick={generateLink}>
        //   GENERATE LINK
        // </button>
          ) : (
            <h5 className="mb-5 mt-3" style={{color: "red"}}>Login to download your banner</h5>
          )}

        </div>
      </div>
    </>
  )
}

export default BannerWrapper
