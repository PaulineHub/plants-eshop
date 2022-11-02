import React, { useState, useEffect } from 'react'

const Hero = (props) => {
  const { title, subtitle, imageClass } = props
  const [growWidth, setgrowWidth] = useState(false)

  useEffect(() => {
    setgrowWidth(true);
  }, [])

  return (
    <>
      <section className=' hero-mid-split-wrapper '>
        <div
          className={`hero-split-left-column hero-split-left-column--${imageClass} ${
            growWidth ? 'grow-width' : ''
          }`}
        >
          <div className='hero-split-content no-margin-bottom'>
            <h1>{title}</h1>
            <p className='feature-paragraph width-70'>{subtitle}</p>
          </div>
        </div>
        <div className={`hero-split-right-column `}>
          <div className={`split-image split-image--${imageClass} `}></div>
        </div>
      </section>
    </>
  )
}

export default Hero
