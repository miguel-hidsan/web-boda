import React from 'react'
import storyImage from '../assets/images/story.jpg'
function Story () {
  return (
    <div id='story' className='story section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5 mb-30'>
            <div className='story-img animate-box'>
              <div className='img'>
                {' '}
                <img src={storyImage} className='img-fluid' alt='' />{' '}
              </div>
              
            </div>
          </div>
          <div className='col-md-7 animate-box'>
            <h4 className='oliven-story-subtitle'>Nosotros.</h4>
            <h3 className='oliven-story-title'>Nuestra historia</h3>
            <p>
              dfgskadfg.kajbkflñdskfjkalsdfkajsfdjaksndfkjasdnfjkasdjkfadfa
              adsfasdffdafdasdfafdafda
              asdfafdafasdda
            </p>
            <p>
            dfgskadfg.kajbkflñdskfjkalsdfkajsfdjaksndfkjasdnfjkasdjkfadfa
              adsfasdffdafdasdfafdafda
              asdfafdafasdda
            </p>
            <p>
            dfgskadfg.kajbkflñdskfjkalsdfkajsfdjaksndfkjasdnfjkasdjkfadfa
              adsfasdffdafdasdfafdafda
              asdfafdafasdda
            </p>
            <h4>Jul 8, 2022, ¡Ha dicho sí!</h4>
            <p>
            dfgskadfg.kajbkflñdskfjkalsdfkajsfdjaksndfkjasdnfjkasdjkfadfa
              adsfasdffdafdasdfafdafda
              asdfafdafasdda
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story
