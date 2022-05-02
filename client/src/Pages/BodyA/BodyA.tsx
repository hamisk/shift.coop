import React from 'react'
import './BodyA.scss'

const BodyA: React.FC = () => {
  return (
    <section className='bodyA'>
        <h1 className="bodyA__title">Title of section</h1>
        <div className="bodyA__columns">
            <div className="bodyA__columnA">
                <div className="bodyA__copy-wrapper">
                    <h3 className="bodyA__subheading">Copy Title</h3>
                    <p className="bodyA__copy-text">Copy text, lorum epsum </p>
                </div>
                <div className="bodyA__copy-wrapper">
                    <h3 className="bodyA__subheading">Copy Title</h3>
                    <p className="bodyA__copy-text">Copy text, lorum epsum </p>
                </div>
            </div>
            <div className="bodyA__columnB">
                <div className="bodyA__copy-wrapper">
                    <h3 className="bodyA__subheading">Copy Title</h3>
                    <p className="bodyA__copy-text">Copy text, lorum epsum </p>
                </div>
                <div className="bodyA__copy-wrapper">
                    <h3 className="bodyA__subheading">Copy Title</h3>
                    <p className="bodyA__copy-text">Copy text, lorum epsum </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BodyA