import React from 'react'

const Footer = () => {
  return (
    <div className='footer-main'>

      <div>
        <div className='footer-logo'>
          <span className='footer-logo-text'>
            <strong>Job</strong>Found
          </span>
        </div>

        <p className='footer-logo-subtext'> We always make our seekers and company find the best jobs and employers find the best candidates.</p>
      </div>

      <div className='grid' >
        <span className='footer-grid'> Company</span>

        <div className='footer-grid-list'>
          <li className='footer-grid-list-section'>About Us</li>
          <li className='footer-grid-list-section'>Features</li>
          <li className='footer-grid-list-section'>News</li>
          <li className='footer-grid-list-section'>FAQ</li>
        </div>
      </div>

      <div className='grid' >
        <span className='footer-grid'> Resources</span>

        <div className='footer-grid-list'>
          <li className='footer-grid-list-section'>Account</li>
          <li className='footer-grid-list-section'>Support Center</li>
          <li className='footer-grid-list-section'>Feedback</li>
          <li className='footer-grid-list-section'>Contact us</li>
        </div>
      </div>

      <div className='grid' >
        <span className='footer-grid'> Support</span>

        <div className='footer-grid-list'>
          <li className='footer-grid-list-section'>Events</li>
          <li className='footer-grid-list-section'>Promo</li>
          <li className='footer-grid-list-section'>Request Demo</li>
          <li className='footer-grid-list-section'>Carrers</li>
        </div>
      </div>

      <div className='grid' >
        <span className='footer-grid'> Contact info</span>

        <div className='footer-contact'>
          <span className='footer-contactinfo'>support@jobfound.com</span>
        </div>
      </div>


    </div>
  )
}

export default Footer