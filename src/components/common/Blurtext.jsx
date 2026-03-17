import React from 'react'
import BlurText from '../BlurText'

const Blurtext = ({text}) => {
  return (
    <div >
<BlurText
  text={text}
  delay={220}
  animateBy="words"
  direction="top"
/>
    </div>
  )
}

export default Blurtext
