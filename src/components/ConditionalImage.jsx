import React from 'react'

const ConditionalImage = ({imgWebp, imgJpg, className}) => {

    const isWebpSupported = typeof navigator !== "undefined" && navigator?.webp;
  return (
    <div>
      <img src={isWebpSupported ? imgWebp : imgJpg} alt="background" className={className}/>
    </div>
  )
}

export default ConditionalImage