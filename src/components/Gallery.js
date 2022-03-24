import React from "react";
import Disqus from "disqus-react";


import gallery1 from "../assets/images/1.jpg";
import gallery2 from "../assets/images/2.jpg";
import gallery3 from "../assets/images/3.jpg";
import gallery4 from "../assets/images/4.jpg";
import gallery5 from "../assets/images/5.jpg";
import gallery6 from "../assets/images/6.jpg";
import gallery7 from "../assets/images/7.jpg";
import gallery8 from "../assets/images/8.jpg";
import gallery9 from "../assets/images/9.jpg";
import gallery10 from "../assets/images/10.jpg";
import gallery11 from "../assets/images/11.jpg";
import gallery12 from "../assets/images/12.jpg";
import gallery13 from "../assets/images/13.jpg";
import gallery14 from "../assets/images/14.jpg";
import gallery15 from "../assets/images/15.jpg";
import gallery16 from "../assets/images/16.jpg";

const disqusShortname = "boda-de-miguel-emma";
const disqusConfig = {
  url: "http://localhost:3000",
  identifier: "article-id",
  title: "Title of Your Article",
};

function Gallery() {
  return (
    <div id="gallery" className="section-padding">
     

      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-30">
            <span className="oliven-title-meta">Nuestros recuerdos</span>
            {/* <h2 className="oliven-title"></h2> */}
          </div>
        </div>
      </div>
      

        <div className="row gallery-filter mt-3">

          <div className="col-md-4 gallery-item ceremony">
            <a href="/" className="img-zoom">
              <div className="gallery-box">
                <div className="gallery-img">
                  {" "}
                  <img
                    src={gallery1}
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />{" "}
                </div>
                <div className="gallery-detail">
                  <h4 className="mb-0"></h4>
                </div>
              </div>
            </a>
          </div>

          <div className="col-md-4 gallery-item party">
            <a href="/" className="img-zoom">
              <div className="gallery-box">
                <div className="gallery-img">
                  {" "}
                  <img
                    src={gallery2}
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />{" "}
                </div>
                <div className="gallery-detail">
                  <h4 className="mb-0"> </h4>{" "}
                </div>
              </div>
            </a>
          </div>

          <div className="col-md-4 gallery-item ceremony">
            <a href="/" className="img-zoom">
              <div className="gallery-box">
                <div className="gallery-img">
                  {" "}
                  <img
                    src={gallery3}
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />{" "}
                </div>
                <div className="gallery-detail">
                  <h4 className="mb-0"> </h4>{" "}
                </div>
              </div>
            </a>
          </div>

          <div className="col-md-4 gallery-item party">
            <a href="/" className="img-zoom">
              <div className="gallery-box">
                <div className="gallery-img">
                  {" "}
                  <img
                    src={gallery4}
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />{" "}
                </div>
                <div className="gallery-detail">
                  <h4 className="mb-0"> </h4>{" "}
                </div>
              </div>
            </a>
          </div>

          <div className="col-md-4 gallery-item ceremony">
            <a href="/" className="img-zoom">
              <div className="gallery-box">
                <div className="gallery-img">
                  {" "}
                  <img
                    src={gallery5}
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />{" "}
                </div>
                <div className="gallery-detail">
                  <h4 className="mb-0"> </h4>{" "}
                </div>
              </div>
            </a>
          </div>
          
          <div className="col-md-4 gallery-item party">
            <a href="/" className="img-zoom">
              <div className="gallery-box">
                <div className="gallery-img">
                  {" "}
                  <img
                    src={gallery6}
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />{" "}
                </div>
                <div className="gallery-detail">
                  <h4 className="mb-0"> </h4>{" "}
                </div>
              </div>
            </a>
          </div>

      

           <div className='col-md-4 gallery-item ceremony'>
            <a href='/' className='img-zoom'>
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={gallery7}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'></h4>
                </div>
              </div>
            </a>
          </div>

          <div className='col-md-4 gallery-item ceremony'>
            <a href='/' className='img-zoom'>
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={gallery8}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'></h4>
                </div>
              </div>
            </a>
          </div>

          <div className='col-md-4 gallery-item ceremony'>
            <a href='/' className='img-zoom'>
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={gallery9}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'></h4>
                </div>
              </div>
            </a>
          </div>

          <div className='col-md-4 gallery-item ceremony'>
            <a href='/' className='img-zoom'>
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={gallery10}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'></h4>
                </div>
              </div>
            </a>
          </div>

          <div className='col-md-4 gallery-item ceremony'>
            <a href='/' className='img-zoom'>
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={gallery11}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'></h4>
                </div>
              </div>
            </a>
          </div>

          <div className='col-md-4 gallery-item ceremony'>
            <a href='/' className='img-zoom'>
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={gallery12}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'></h4>
                </div>
              </div>
            </a>
          </div>

          <div className='col-md-4 gallery-item ceremony'>
            <a href='/' className='img-zoom'>
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={gallery13}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'></h4>
                </div>
              </div>
            </a>
          </div>

          <div className='col-md-4 gallery-item ceremony'>
            <a href='/' className='img-zoom'>
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={gallery14}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'></h4>
                </div>
              </div>
            </a>
          </div>

          <div className='col-md-4 gallery-item ceremony'>
            <a href='/' className='img-zoom'>
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={gallery15}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'></h4>
                </div>
              </div>
            </a>
          </div>

          <div className="col-md-4 gallery-item ceremony">
            <a href="/" className="img-zoom">
              <div className="gallery-box">
                <div className="gallery-img">
                  {" "}
                  <img
                    src={gallery16}
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />{" "}
                </div>
                <div className="gallery-detail">
                  <h4 className="mb-0"></h4>
                </div>
              </div>
            </a>
          </div>


          

      <div className="article-container">

        <p>Añade un comentario.</p>

        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    </div>
    </div>
  );
}

export default Gallery;
