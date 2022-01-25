import React from 'react'
import where1 from '../assets/images/where-1.jpg'
import where2 from '../assets/images/where-2.jpg'
import where3 from '../assets/images/where-3.jpg'
function Where () {
  return (
    <div id='whenwhere' className='whenwhere section-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            {' '}
            <span className='oliven-title-meta'>Preguntas</span>
            <h2 className='oliven-title'>Dónde y Cuándo</h2>{' '}
          </div>
        </div>
        <div className='row'>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where1} alt='' />
            </div>
            <div className='content'>
              <h5>Ceremonia</h5>
              <p>
                <i className='ti-location-pin'></i> Finca La Montaña, Madrid.
              </p>
              <p>
                <i className='ti-time'></i> <span>19:00am – 19:30pm</span>
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where2} alt='' />
            </div>
            <div className='content'>
              <h5>Banquete</h5>
              <p>
                <i className='ti-location-pin'></i> Finca La Montaña, Madrid.
              </p>
              <p>
                <i className='ti-time'></i> <span>20:30pm</span>
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where3} alt='' />
            </div>
            <div className='content'>
              <h5>Alojamiento</h5>
              <p>
                <i className='ti-direction-alt'></i> La distancia de la finca al hotel es de 100 metros:
              </p>
              <p>
                <i className='ti-direction'></i> Nombre del Hotel (4 min)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Where
