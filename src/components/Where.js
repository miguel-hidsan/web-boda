import React from "react";
import where1 from "../assets/images/where-1.jpg";
import where2 from "../assets/images/where-2.jpg";
import where3 from "../assets/images/where-3.jpg";
function Where() {
  return (
    <div id="whenwhere" className="whenwhere section-padding bg-pink">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-30">
            {" "}
            <span className="oliven-title-meta">Información</span>
            {/* <h2 className='oliven-title'>Dónde y Cuándo</h2>{' '} */}
          </div>
        </div>
        <div className="row">
          <div className="item col-12 col-md-4">
            <div className="whenwhere-img">
              {" "}
              <img src={where1} alt="" />
            </div>
            <div className="content">
              <h5>Lugar</h5>
              <p>
                <i className="ti-location-pin"></i> Finca La Montaña, Aranjuez.
                Av. Amazonas Central, 2, 4, 28300 Aranjuez, Madrid.
              </p>
              <p>
                {/* <i className='ti-time'></i> <span>19:00am – 19:30pm</span> */}
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
              </p>
            </div>
          </div>
          <div className="item col-12 col-md-4">
            <div className="whenwhere-img">
              {" "}
              <img src={where2} alt="" />
            </div>
            <div className="content">
              <h6>ALERGIAS E INTOLERANCIAS</h6>
              <p>
                <i className="ti-location-pin"></i> Si tenéis alguna alergia,
                intolerancia, o si necesitáis un menú especial, no dudéis en
                decírnoslo.
              </p>
              <p>{/* <i className="ti-time"></i> <span>20:30pm</span> */}</p>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
            </div>
          </div>
          <div className="item col-12 col-md-4">
            <div className="whenwhere-img">
              {" "}
              <img src={where3} alt="" />
            </div>
            <div className="content">
              <h5>Alojamiento</h5>
              <p>
                <i className="ti-direction-alt"></i> Si necesitáis reservar
                alojamiento, podéis hacerlo antes del 8 de junio y haciendo
                referencia al bloqueo de habitaciones por nuestro enlace.
              </p>
              <p>
                <i className="ti-direction"></i> Hotel Occidental Aranjuez
                <br/> Pl. De la Unesco, 2, 28300 Aranjuez, Madrid
                <br/> Tel. 918099399 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Where;
