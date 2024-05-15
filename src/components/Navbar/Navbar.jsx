
import React from 'react'
import { Link } from 'react-router-dom'

import "./navbar.css"

export default function Navbar(){
    return(
      
        <nav id="navbar-example" className='navbar pt-3 pb-1 fixed-top navbar-expand-lg  ' >
              
                    <div className="container">
                    <div className="col-md-8 sm-4" >
                    <h1> <Link className="navbar-brand  text-white text-uppercase fw-bolder fs-2"  to="/home">START FRAMEWORK</Link></h1>
                       
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                          </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown"> 
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link text-white text-uppercase fw-bold "  to="/about">ABOUT</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white text-uppercase fw-bold "  to="/portfolio">PORTFOLIO</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link  text-white text-uppercase fw-bold " to="/contact">CONTACT</Link>
                    </li>
                  
                </ul>
            </div>
        </div>
        
  </nav>

     
        )
    
}





















// import React, { useEffect, useState } from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import './navbar.css'
// export default function Navbar() {
//     const [scrolled,setScroll]=useState(false)
//     const navScroll=scrolled
//     ?"navbar navbar-expand-lg fixed-top shadow"
//     :"navbar navbar-expand-lg py-4 fixed-top";
//     useEffect(()=>{
//         const handeScroll=()=>{
//             let isScroll=window.scrollY>50;
//             setScroll(isScroll)
//         };
//         window.addEventListener("scroll",handeScroll);
//         return ()=>{
//          window.removeEventListener("scroll",handeScroll)   
//         };
//     },[])
//     const handelscrollTop =()=>{
//         window.scrollTo({top:0,behavior:'smooth'})
//     }
//   return (

//      <nav className={navScroll}>
//   <div className="container">
//     <NavLink onClick={handelscrollTop} className="navbar-brand text-white" to='home'><h2 className='fw-bold'>START FRAMEWORK</h2></NavLink>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <NavLink onClick={handelscrollTop} exact="true" activeclassname="active" className="nav-link text-white fw-bold m-2" aria-current="page" to='about'>ABOUT</NavLink>
//         </li>
       
//        <li className="nav-item">
//         <NavLink onClick={handelscrollTop} exact="true" activeclassname="active" className="nav-link text-white fw-bold m-2" to='portfolio'>PORTFOLIO</NavLink>
//        </li>
//        <li className="nav-item">
//         <NavLink onClick={handelscrollTop} exact="true" activeclassname="active" className="nav-link text-white fw-bold m-2" to='contact'>CONTACT</NavLink>
//         </li>
      
//       </ul>
    
//     </div>
//   </div>
// </nav>
    
//   )
// }
// import React from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import './navbar.css'

// export default function Navbar() {
//   return (
//     <>
//     <nav >
      
//       {/* <Link className="navbar-brand ms-5" to="home">
//         Start Framework
//       </Link> */}
//           <NavLink  className="navbar-brand text-white" to='home'><h2 className='fw-bold'>START FRAMEWORK</h2></NavLink>

//               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//      </button>
//       <div className="collapse navbar-collapse" id="collapsibleNavId">
//         <ul className="navbar-nav ms-auto mt-2 mt-lg-0 me-5">
//           <li className="nav-item">
//             <Link className="active nav-link text-white fw-bold m-2" aria-current="page"  to="about">
//               About
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="active nav-link text-white fw-bold m-2"  to="portfolio">
//               Portfolio
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link  className="active nav-link text-white fw-bold m-2" to='contact' >
//               Contact
//             </Link>
//           </li>
         
//         </ul>
//       </div>
//     </nav>
//   </>  )
// }
