import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'

const Probes = () => (
  <div className="content-box" id="probes">
    <div className="content-headline">
      <h1>Ultrasound Probes</h1>
      <p>Probes list and information</p>
    </div>
    <div className="">
      <div className=""><img src="" /></div>
      <div className="">
        <h2>Linear Probe</h2>
        <p>asdf</p>
      </div>
    </div>
    <div className="">
      <div className=""><img src="" /></div>
      <div className="">
        <h2>Covex Probe</h2>
        <p>asdf</p>
      </div>
    </div>
  </div>
)

/**
 * CONTAINER
 */

export default Probes
