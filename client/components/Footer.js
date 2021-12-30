import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'

const Footer = () => (
  <div id="footer">
    <div className="footer-column-wrapper">
      <div>
        <p>Review materials</p>
        <Link to="/probes">Ultrasound Probes</Link>
        <Link to="/review-materials">Review Materials</Link>
      </div>
      <div>
        <p>Choose Blocks</p>
        <Link to="/cardiothoracic">Cardiothoracic</Link>
        <a href="">Renal</a>
        <a href="">EFAST</a>
        <a href="">RUQ</a>
      </div>
      <div>
        <Link to="/home"><h1>ULTRASOUND BOX</h1></Link>
        <a href="">About</a>
        <a href="">Report bug</a>
        <a href="">Contact</a>
      </div>
    </div>
    <div className="footer-credit">
      <p>© 2021 ULTRASOUND BOX. All rights reserved. Version 0.4</p>
    </div>
  </div>
)

/**
 * CONTAINER
 */

export default Footer
