import React from "react";

function Organization() {
  return (
    <div id="organization" className="organization section-padding bg-pink">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-30">
            <span className="oliven-title-meta">La Boda</span>
            <h2 className="oliven-title">Organización</h2>
          </div>
        </div>
        <div
          className="row bord-box bg-img"
          data-background="images/slider.jpg"
        >
          <div className="col-md-3 item-box">
            <h2 className="custom-font numb">01</h2>
            <h6 className="title">Ceremonia</h6>
            <p>
              Nos reuniremos todos a las 19:30 al aire libre en el jardin La
              Finca para celebrar la ceremonia.
              <br/>
              <br/>
              <br/>
            </p>
          </div>
          <div className="col-md-3 item-box">
            <h2 className="custom-font numb">02</h2>
            <h6 className="title">Cóctel</h6>
            <p>
              Sobre las 20:00 disfrutaremos de un cóctel de 17 referencias muy
              variadas que no dejarán a nadie indiferente.
              
            </p>
          </div>
          <div className="col-md-3 item-box">
            <h2 className="custom-font numb">03</h2>
            <h6 className="title">Banquete</h6>
            <p>
              En torno a las 22:00 será la hora de la cena, que esperamos que os sorprenda.
              <br/>
              <br/>
              <br/>
            </p>
          </div>
          <div className="col-md-3 item-box">
            <h2 className="custom-font numb">04</h2>
            <h6 className="title">Barra libre</h6>
            <p>
              3 horas de fiesta y barra libre para cerrar un día especial.
              <br/>
              <br/>
              <br/>
              <br/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organization;
