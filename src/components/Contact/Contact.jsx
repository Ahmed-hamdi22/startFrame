import React from 'react'
import './contact.css';
export default function Contact() {
  return (
    
    <div className='py-5 contact min-vh-100  '>
    <div className="container ">
      <h2 className='mt-5 pt-5  text-center fw-bold'>CONTACT SECTION</h2>
      <div className=' d-flex align-items-center justify-content-center mb-4 mt-3'>
      <div className='line-port me-3'></div>
      <i className='fa-solid fa-star icon-port'></i>
      <div className='line-port ms-3'></div>

      </div>
      <div className="container w-75 d-flex align-items-center justify-content-center">

       <form className='contact-form px-3 py-4 mt-5 '>
       <div>
        <input id="name" type="text" placeholder='UserName' name="userName" className='form-control border-0 border-bottom position-relative' />
        <label htmlFor='name' className='position-relative'>UserName</label>
       </div>
       <div>
        <input id="userAge" type="number" placeholder='UserAge' name="userAge" className='form-control border-0 border-bottom position-relative' />
        <label htmlFor='userAge' className='position-relative'>UserAge</label>
       </div>
       <div>
        <input id="userEmail" type="email" placeholder='UserEmail' name="userEmail" className='form-control border-0 border-bottom position-relative' />
        <label htmlFor='userEmail' className='position-relative'>UserEmail</label>
       </div>
       <div>
        <input id="passward" type="passward" placeholder='UserPassward' name="UserPassward" className='form-control border-0 border-bottom position-relative' />
        <label htmlFor='passward' className='position-relative'>UserPassward</label>
       </div>
       <button className='btn text-white' type="button" style={{backgroundColor:"#1abc9c"}}>Send Message</button>
       </form>
      </div>
      </div>
      </div>
      
  )
}
