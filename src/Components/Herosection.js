import React from 'react';
import pic from "../Components/Images/log.png";
import one from "../Components/Images/star.png";
import {Button} from "react-bootstrap"

function Herosection() {
  return (<>
  <section >
  <div className='logo'>
        <img src={pic} alt="" />
      </div>
      <h2 className='hero_hading'>STADIUM <span>STARS</span></h2>
      <div className='video_area'>
        <div className='pic_video'>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/2_rhEtfiBsw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <div className='hero_img_div'>
        <div className='hero_img'>
        <img src={one} alt="" style={{width:"100%",borderRadius:"10px"}}/>
        </div>
      </div>
      <div className='btn-div'>
        <a href=" https://creators.magiceden.io/dashboard"><Button className='list-btn'>ENLIST NOW</Button></a>
      </div>

  </section>
  </>
   
  )
}

export default Herosection
