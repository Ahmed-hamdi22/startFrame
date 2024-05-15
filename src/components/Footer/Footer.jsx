import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <>
    <div className="footer-head py-5">
      <div className="container">
        <div className="row gy-4">
           <div className="col-md-4">
            <div className="footer-location text-center text-white">
              <h3 className='fw-bold'>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
           </div>
           <div className="col-md-4">
            <div className="footer-web text-center text-white">
            <h3 className='fw-bold'>AROUND THE WEB</h3>
            <div className="footer-links text-center   d-flex gap-2 justify-content-center align-items-center">
              <a href='https://www.facebook.com/' target='_blank'><i className='fa-brands fa-facebook text-white p-2 border rounded-circle border-solid border-white'></i></a>
              <a href='https://www.twitter.com' target='_blank'><i className='fa-brands fa-twitter text-white p-2 border rounded-circle border-solid border-white'></i></a>
              <a href='https://www.linkedin.com' target='_blank'><i className='fa-brands fa-linkedin-in text-white p-2 border rounded-circle border-solid border-white'></i></a>
              <a href='https://www.google.com' target='_blank'><i className='fa-solid fa-globe text-white p-2 border rounded-circle border-solid border-white'></i></a>
            </div>
            </div>
            
           </div>
           <div className="col-md-4">
                <div className="footer-freelance text-center text-white">
                    <h3 className='fw-bold'>ABOUT FREELANCER</h3>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
           </div>
        </div>
      </div>
    </div>
    <div className="footer-end py-4">
       <p className='text-white text-center'>Copyright © Your Website 2021</p>
    </div>
    </>
  )
}
