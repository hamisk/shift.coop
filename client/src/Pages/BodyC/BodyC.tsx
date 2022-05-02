import React from 'react'
import './BodyC.scss'

const BodyC: React.FC = () => {
  return (
    <section className='bodyC'>
        <div className="bodyC__columns">
            <div className="bodyC__columnB">
                <div className="bodyC__copy-wrapper">
                    <h3 className="bodyC__subheading">Copy Title</h3>
                    <p className="bodyC__copy-text">Copy text, lorum epsum </p>
                </div>
                <div className="bodyC__copy-wrapper">
                    <h3 className="bodyC__subheading">Copy Title</h3>
                    <p className="bodyC__copy-text">Copy text, lorum epsum </p>
                </div>
            </div>
            <div className="bodyC__columnA">
                <div className="bodyC__column-image"></div>
            </div>
        </div>
    </section>
  )
}

export default BodyC