import React from 'react';
import border from "./Images/border.png";
import pic from "../Components/Images/log.png";
import v1 from "../Components/Images/Vector (1).png";
import v2 from "../Components/Images/Vector (2).png";
import v3 from "../Components/Images/Vector (3).png";
import v4 from "../Components/Images/Vector (4).png";
import fp from "../Components/Images/footerbg.png";
import Accordion from 'react-bootstrap/Accordion';


function Footer() {
  return (<>

    {/* <div className='border_div'>
      <img src={border} alt="" />
    </div> */}
    <div>
      <div className='footer_container container'>
        <div className='row' id="footer">
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <p className='footer_heading1'>FREQUENTLY</p>
            <p className='footer_heading2'>ASKED</p>
            <p className='footer_heading2'>QUESTION</p>
          </div>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <div className='spacing'>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    How many NFTs are in the Stadium Stars NFT collection?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    What blockchain will home the Stadium Stars NFT collection?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>This is the second item's accordion body.</strong>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Who made the art for Stadium Stars?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    How can I mint a Stadium Stars NFT?
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong> 
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    How much does it cost to mint a Stadium Stars NFT?
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong> 
                    </div>
                  </div>
                </div>
              </div>
            </div>




          </div>
        </div>
      </div>
    </div>
    <div className='footer_main_div'>
      <div className='footer-pic'>
        <img src={pic} alt="" />

      </div>
    </div>
    <p className='footer_heading3'>CONNECT WITH</p>
    <p className='footer_heading3'> STADIUM STARS</p>
    <div className='socal_div'>
      {/* <div className='pic_social'>
        <a href=''><img src={v1} alt="" /></a>
      </div> */}
      <div className='pic_social'>
        <a href='https://twitter.com/stadiumstarsnft'><img src={v2} alt="" /></a>
      </div>
      {/* <div className='pic_social'>
        <a href=''><img src={v3} alt="" /></a>
      </div> */}
      <div className='pic_social'>
        <a href='https://discord.gg/stadiumstars'><img src={v4} alt="" /></a>
      </div>
    </div>
    <p className='last_text mb-5'>Stadium Stars, LLC © 2022. All rights reserved</p>





  </>

  )
}

export default Footer
