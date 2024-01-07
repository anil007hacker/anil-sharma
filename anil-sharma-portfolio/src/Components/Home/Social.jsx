/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'

const Social = () => {
  return (
    <div className="home_social">
        {/* Add Links here */}
        <a href="" className="home_social-icon" target='_blank'>
            <i class="uil uil-instagram"></i>
        </a>
        <a href="https://github.com/anil007hacker" className="home_social-icon" target='_blank'>
            <i class="uil uil-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/sharma-anil/" className="home_social-icon" target='_blank'>
            <i class="uil uil-linkedin"></i>
        </a>
    </div>
  )
}

export default Social