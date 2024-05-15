import React from 'react'
import './about.css'
export default function About() {
  return (
    <>
    <div className='py-5 about min-vh-100 d-flex justify-content-center align-items-center '>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h2 className='mt-5 text-white text-center fw-bold'>ABOUT COMPONENT</h2>
        <div className=' d-flex align-items-center justify-content-center mb-4 mt-3'>
        <div className='line me-3'></div>
        <i className='fa-solid fa-star text-white'></i>
        <div className='line ms-3'></div>
        </div>
        <div className="about-container text-white mb-5 mt-2">
          <div className="container w-75">
           <div className="row">
            <div className="col-md-6">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col-md-6">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            </div> 
            </div> 
        </div>
    </div>
    </div>
    </>
  )
}
