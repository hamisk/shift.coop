import React from 'react'
import './CTAButton.scss'

interface Props {
    buttonText: string;
    bgColour?: string;
    link?: string
}

const CTAButton: React.FC<Props> = ({ buttonText, bgColour, link }) => {
  return (
    <button className='ctabutton'>
        <p className="ctabutton__text">{buttonText}</p>
    </button>
  )
}

export default CTAButton