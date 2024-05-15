
import React, { useState, useEffect } from 'react';
import port1 from '../../assets/imgs/portfolio/poert1.png';
import port2 from '../../assets/imgs/portfolio/port2.png';
import port3 from '../../assets/imgs/portfolio/port3.png';
import './portfolio.css'

export default function Portfolio() {
  useEffect(() => {
    document.title = 'Portfolio';
  }, []);

  let [overlay, setOverlay] = useState(false);
  let [imgSrc, setImgSrc] = useState('');

  function toggleOverlay(e) {
    setImgSrc(e);
    setOverlay(!overlay);
  }

  const arrPort = [port1, port2, port3, port1, port2, port3];

  return (
    <div
      id="portfolio"
      className="d-flex flex-column justify-content-center align-items-center text-navy py-5 min-vh-100 bg-white"
    >
      <h2 className='mt-5 pt-5  text-center fw-bolder'>PORTFOLIO COMPONENT</h2>
      <div className=' d-flex align-items-center justify-content-center mb-4 mt-3'>
      <div className='line-port me-3'></div>
      <i className='fa-solid fa-star icon-port'></i>
      <div className='line-port ms-3'></div>
      </div>

      
      <div className="portfolioGallery w-100">
        <div className="container mt-3">
          <div className="row align-items-start g-5">
            {arrPort.map((items, index) => {
              return (
                <div
                  onClick={() => toggleOverlay(items)}
                  key={index}
                  className="col-md-4 porfolioCard"
                >
                  <div className="rounded-3 overflow-hidden position-relative">
                    <img className="w-100 rounded-3" src={items} />
                    <div className="portfolioOverlay position-absolute poin-event start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                      <i className="text-white fa-solid fa-plus fa-6x  icon-plus" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {overlay && (
        <div
          className="position-fixed start-0 w-100 top-20 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center image-Overlay"
          onClick={toggleOverlay}
        >
          <img alt="imgOverlay" src={imgSrc} />
        </div>
      )}
    </div>
  );
}