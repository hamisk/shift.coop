import React from 'react'
import './BodyB.scss'

const BodyB: React.FC = () => {
  return (
    <section className='bodyB'>
        <div className="bodyB__columns">
            <div className="bodyB__columnA">
                <div className="bodyB__column-image"></div>
            </div>
            <div className="bodyB__columnB">
                <div className="bodyB__copy-wrapper">
                    <h3 className="bodyB__subheading">Copy Title</h3>
                    <p className="bodyB__copy-text">Copy text, lorum epsum </p>
                </div>
                <div className="bodyB__copy-wrapper">
                    <h3 className="bodyB__subheading">Copy Title</h3>
                    <p className="bodyB__copy-text">Copy text, lorum epsum </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BodyB