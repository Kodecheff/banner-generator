import React, { useEffect, useState } from "react"
import html2canvas from "html2canvas"
// import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
// import {AdvancedImage} from '@cloudinary/react'
import {Cloudinary} from "@cloudinary/url-gen";


import InputWrapper from "../Input/InputWrapper"
import Output from "../Output"
import useInputs from "../../hooks/useInputs"

import './style.css'



const BannerWrapper = () => {
  const [values, setters] = useInputs()
  const [imgURL, setImgURL] = useState("#")

  /**
   * Called when the user updates the banner
   * Renders the output as a canvas with html2canvas
   * Transforms the canvas to a data URI, and save it for later download
   */
  useEffect(() => {
    const output = document.getElementById("capture")
    html2canvas(output, {
      width: 1000,
      height: 420,
      scale: 1
    }).then(canvas => {
      setImgURL(canvas.toDataURL('image/png'))
    });
  }, [values])


  const generateLink = () => {

    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
      cloud: {
        cloudName: 'khal',
        publicId: 'banner'
      }
    });

    const output = document.getElementById("capture")
    html2canvas(output, {
      width: 1000,
      height: 420,
      scale: 1
    }).then(canvas => {

      // const myImage = cld.image(canvas.toDataURL('image/png')).setPublicID('banner');
      // console.log(myImage)

      fetch('https://api.cloudinary.com/v1_1/khal', {
        method: 'POST',
        data: {
          file: canvas.toDataURL('image/png'),
          cloud_name: 'khal',
          upload_preset: 'khal_preset',
          apikey: '786396851446142',
          apisecret: 'aASnvWYQLUjNWZpy27NZy9oVfas'
        }
      })
      .then(res => res.json())
      .then(data => {
        setImgURL(data.url)
        console.log(data.url)
      })
      .catch(err => console.log(err))
      // console.log(canvas.toDataURL('image/png'))
    });
  }

  return (
    <>

      <div className="wrapper">
        <div>
          <Output values={values} />
        </div>
        <div className="actionWrapper">
          <InputWrapper values={values} setters={setters} />

          <button className="btn btn-success" id="download-button" download="banner.png" href={imgURL}>
            DOWNLOAD BANNER
          </button>
          <button className="btn btn-info" style={{color: "white"}} onClick={generateLink}>
            GENERATE LINK
          </button>
        </div>
      </div>
    </>
  )
}

export default BannerWrapper
