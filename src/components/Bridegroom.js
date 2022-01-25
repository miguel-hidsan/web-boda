import React from 'react'
import Bride from '../assets/images/bride.jpg'
import Groom from '../assets/images/groom.jpg'
function Bridegroom () {
  return (
    <div id='couple' className='bridegroom clear section-padding bg-pink'>
      <div className='container'>
        <div className='row mb-60'>
          <div className='col-md-6'>
            <div
              className='item toright mb-30 animate-box'
              data-animate-effect='fadeInLeft'
            >
              <div className='img'>
                {' '}
                <img src={Groom} alt='' />{' '}
              </div>
              <div className='info valign'>
                <div className='full-width'>
                  <h6>
                    Miguel<i className='ti-heart'></i>
                  </h6>{' '}
                  <span>El Novio</span>
                  <p>
                    bla bla balbalblasdfga
                    dfgskadfg.kajbkflñdskfjkalsdfkajsfdjaksndfkjasdnfjkasdjkfadfa
              adsfasdffdafdasdfafdafda
              asdfafdafasdda
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div
              className='item mb-30 animate-box'
              data-animate-effect='fadeInRight'
            >
              <div className='img'>
                {' '}
                <img src={Bride} alt='' />{' '}
              </div>
              <div className='info valign'>
                <div className='full-width'>
                  <h6>
                    Emma <i className='ti-heart'></i>
                  </h6>{' '}
                  <span>La Novia</span>
                  <p>
                  dfgskadfg.kajbkflñdskfjkalsdfka
                  jsfdjaksndfkjasdnfjkasdjkfadfa
              adsfasdffdafdasdfafdafda
              asdfafdafasdda
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div
            className='col-md-12 text-center animate-box'
            data-animate-effect='fadeInUp'
          >
            <h3 className='oliven-couple-title'>¡Nos casamos!</h3>
            <h4 className='oliven-couple-subtitle'>
              8 Julio, 2022 — Madrid
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bridegroom
