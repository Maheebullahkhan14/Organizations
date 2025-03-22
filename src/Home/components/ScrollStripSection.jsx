import React from 'react'
import ScrollingStrip from './ScrollStrip'

const ScrollStripSection = () => {
  return (
    <div className='scroll-strip-section-main-cover-wrapper'>
      <ScrollingStrip rotateAngle={-5} />
      <ScrollingStrip rotateAngle={5} type="2"/>

    </div>
  )
}

export default ScrollStripSection
