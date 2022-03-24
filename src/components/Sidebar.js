import React, { useState } from 'react'
import Logo from '../assets/images/logo.png'
function Sidebar () {
  const [show, setShow] = useState(false);

  const openMenu = (e) => {
    e.preventDefault();
    setShow(!show);
    document.body.classList.toggle('slide');
  }

  return (
    <>
      <a href='/' onClick={openMenu} className={`js-oliven-nav-toggle oliven-nav-toggle${show ? ' active': ''}`}>
        <i></i>
      </a>
      <aside id='oliven-aside'>
        <div className='oliven-logo'>
          <a href='/'>
            <img src={Logo} alt='' />
            <span>
              Miguel <small>&</small> Emma
            </span>
            <h6>8.7.2022</h6>
          </a>
        </div>
        <nav className='oliven-main-menu'>
          <ul>
            <li>
              <a href='#home'>Inicio</a>
            </li>
            <li>
              <a href='#couple'>Pareja</a>
            </li>
            <li>
              <a href='#story'>Bienvenidos</a>
            </li>
            <li>
              <a href='#organization'>Organización</a>
            </li>
            <li>
              <a href='#whenwhere'>Información</a>
            </li>
            <li>
              <a href='#gallery'>Recuerdos</a>
            </li>
            <li>
              <a href='#rsvp'>¿Asistirás?</a>
            </li>
            <li>
              <a href='https://migmma.github.io/Migmma/'>Galería de boda</a>
            </li>
          </ul>
        </nav>
        <div className='footer1'>
          {' '}
          <span className='separator'></span>
          <p>
            Boda de Miguel & Emma
            <br />
            8 Julio 2022, Madrid
          </p>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
