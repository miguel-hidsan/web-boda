import React from "react";
import storyImage from "../assets/images/story.jpg";
function Story() {
  return (
    <div id="story" className="story section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-5 mb-30">
            <div className="story-img animate-box">
              <div className="img">
                {" "}
                <img src={storyImage} className="img-fluid" alt="" />{" "}
              </div>
            </div>
          </div>
          <div className="col-md-7 animate-box">
            <h4 className="oliven-story-subtitle">
              ¡Bienvenidos a nuestra boda!.
            </h4>
            <br/>
            {/* <h3 className='oliven-story-title'></h3> */}
            <p>¡Que sí!, ¡¡¡Que nos casamos!!!</p>
            <p>
              ¡Estamos muy felices y queremos
              compartirlo con vosotros!. Por eso estamos preparando
              una boda en la que lo pasaréis genial.
            </p>

            <p>Mientras llega el gran día hemos creado esta web con varias secciones para que estéis al día de todo y para compartir nuestra
              historia. </p>

            <p>Una cosa importante, en la sección asistencia
              podéis confirmar si vais a la boda o no. Confirrmadnos lo antes
              posible por favor, que así organizarlo todo nos será muchos más
              fácil.</p>

            <p>Disfrutad la web y nos vemos muy pronto, ¡un abrazo enorme!</p>

            <h4>8 Julio 2022</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
