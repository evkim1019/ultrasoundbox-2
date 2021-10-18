import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'

const ReviewMaterials = () => (
  <div className="content-box" id="ReviewMaterials">
    <div className="content-headline">
      <h1>Review Materials</h1>
      <p>Listed below are some good resources to review and learn about ultrasound:</p>
    </div>
    <div className="Review-materials-wrapper">
      <a href="" className="Review-materials-block">
        <div className="r-m-1-img">
        </div>
        <div className="r-m-1-txt">
          <h2>Emergency Ultrasound Teaching</h2>
          <p>Video series for each ultrasound topic</p>
        </div>
      </a>

      <a href="" className="Review-materials-block">
        <div className="r-m-2-img">
        </div>
        <div className="r-m-2-txt">
          <h2>sonoguide</h2>
          <p>Introductory review of the basics of ultrasound (Has introduction sections for each of the basic views and pictures of those views if you need to review those)</p>
        </div>
      </a>

      <a href="" className="Review-materials-block">
        <div className="r-m-3-img">
        </div>
        <div className="r-m-3-txt">
          <h2>CORE ULTRASOUND</h2>
          <p>Bank of example clips of each pathology</p>
        </div>
      </a>

      <a href="" className="Review-materials-block">
        <div className="r-m-4-img">
        </div>
        <div className="r-m-4-txt">
          <h2>Ultrasound G.E.L. Podcast</h2>
          <p>Podcast which reviews the landmark papers within the ultrasound world</p>
        </div>
      </a>

      <a href="" className="Review-materials-block">
        <div className="r-m-5-img">
        </div>
        <div className="r-m-5-txt">
          <h2>THE POCUS ATLAS</h2>
          <p>Open source atlas of ultrasound clips</p>
        </div>
      </a>
    </div>

  </div>
)

/**
 * CONTAINER
 */

export default ReviewMaterials
