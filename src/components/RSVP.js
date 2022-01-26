import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function RSVP() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9n8pqsr",
        "template_36bf7tj",
        form.current,
        "user_lH7VuA9l059MGRrJfFqPW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert("Mensaje enviado");
  };

  return (
    <div id="rsvp" className="section-padding bg-img bg-fixed">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-white p-40">
            {" "}
            <span className="oliven-title-meta text-center">¿Asistirás?</span>
            <h2 className="oliven-title text-center">¿Contamos contigo?</h2>
            <br />
            <form ref={form} onSubmit={sendEmail} className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    name="user_name"
                    required
                  />{" "}
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="user_email"
                  />{" "}
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="7"
                    className="form-control"
                    placeholder="Mensaje"
                  ></textarea>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input type="submit" className="btn buttono" value="Enviar" />{" "}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RSVP;
