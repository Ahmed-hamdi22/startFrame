
import React from 'react'
import img from '../../assets/imgs/avataaars.svg'
export default function Home() {
  return (
    <div style={{backgroundColor:"#1abc9c"}}>
  <div  className= "  d-flex justify-content-center align-items-center min-vh-100">
    <div className='container d-flex flex-column justify-content-center align-items-center '>
       <img src={img} alt='img' className=' w-25'></img>
       <h1 className='fw-bold my-2 text-white'>START FRAMEWORK</h1>
       <div className=' d-flex align-items-center justify-content-center mb-3'>
       <div className="line "></div>
       <i className='fa-solid fa-star text-white'></i>
        <div className="line  "></div>
        </div>
        <div className='text-white'>
        Graphic Artist - Web Designer - Illustrator
        </div>
    </div>
  </div>
    </div>
  )
}
