import React from 'react';
import body from "../Components/Images/body.png";
import c1 from "./Images/c1.png"
import c3 from "./Images/c3.png";
import c2 from "./Images/c2.png";
import c4 from './Images/c4.png';
import player from "./Images/Player.png";
import p from "./Images/p.png";
import p1 from "./Images/1.png";
import p2 from "./Images/2.png";
import p3 from "./Images/3.png";
import p4 from "./Images/4.png";
import p5 from "./Images/5.png";
import p6 from "./Images/6.png";
import p7 from "./Images/7.png";
import p8 from "./Images/8.png";
import p9 from "./Images/9.png";
import p10 from "./Images/10.png";
import p11 from "./Images/11.png";




function Body() {
  return (<>
    <div className='container-fluid' id="main">
      <div className="container" id="about-container">

        <div className='row' id="grid">
          <div className='col-lg-6 col-md-6 col-sm-12 grid_sys '>
            <div className='grid_player'>
              <img src={body} alt="" />
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className='sec3'>
              <p className='sec2_grid'>ABOUT</p>
              <p className='sec2_line'>STADIUM</p>
              <p className='sec2_line'>STARS</p>
              <p className='sec2-sub-line'>Our friendly companions are forever on-chain.<br></br> Play-to-Earn $STARS and $FANS and redeem<br></br> them for actual utility. Football fans rejoice.<br></br> Discord Closed.</p>
              <div className='p_div'>
                <div className='c-1'>
                  <img src={c1} alt="" />
                  <p className='sec2-sub-line'>Goalkeeper</p>
                </div>
                <div className='c-1'>
                  <img src={c2} alt="" />
                  <p className='sec2-sub-line'>Defance</p>
                </div>
                <div className='c-1'>
                  <img src={c3} alt="" />
                  <p className='sec2-sub-line'>Midfielder</p>
                </div>
                <div className='c-1'>
                  <img src={c4} alt="" />
                  <p className='sec2-sub-line'>Attacer</p>
                </div>
              </div>
            </div>
          </div>

        </div>



      </div>
      <div className='line_up'><p className='sec4h' id="sec4h">LINEUP</p></div>
      <div className='ground_main'>
        <div className='ground-player'>
        <div className='mobile_data'>
          <div className='p-3' >
            <div>
              <img src={p9} alt="" />
              <div className='r2-box'>
                <p className='p-name'>Kelvin Akparanta</p>
                <p className='p-position'>Goalkeeper</p>

              </div>
            </div>
            <div>
              <img src={p10} alt="" />
              <div className='r2-box'>
                <p className='p-name'>Kelvin Akparanta</p>
                <p className='p-position'>Goalkeeper</p>

              </div>
            </div>
          </div>
          </div>
          <div className='mobile_data'>
          <div className='p-3' >
            <div>
              <img src={p9} alt="" />
              <div className='r2-box'>
                <p className='p-name'>Kelvin Akparanta</p>
                <p className='p-position'>Goalkeeper</p>

              </div>
            </div>
            <div>
              <img src={p10} alt="" />
              <div className='r2-box'>
                <p className='p-name'>Kelvin Akparanta</p>
                <p className='p-position'>Goalkeeper</p>

              </div>
            </div>
          </div>
          <div className='p-3' >
            <div>
              <img src={p9} alt="" />
              <div className='r2-box'>
                <p className='p-name'>Kelvin Akparanta</p>
                <p className='p-position'>Goalkeeper</p>

              </div>
            </div>
            <div>
              <img src={p10} alt="" />
              <div className='r2-box'>
                <p className='p-name'>Kelvin Akparanta</p>
                <p className='p-position'>Goalkeeper</p>

              </div>
            </div>
          </div>
          </div>
          <div className='p1'>
            <div>
              <img className='img-1' src={p11} alt="" />
              <div className='r-box'>
                <p className='p-name'>Kelvin Akparanta</p>
                <p className='p-position'>Goalkeeper</p>

              </div>
            </div>
          </div>
          {/* PLAYER 2 */}

          <div className='p2'>
            <div>
              <img src={p9} alt="" />
              <div className='r2-box'>
                <p className='p-name'>Kelvin Akparanta</p>
                <p className='p-position'>Goalkeeper</p>

              </div>
            </div>
            <div>
              <img src={p10} alt="" />
              <div className='r2-box'>
                <p className='p-name'>Kelvin Akparanta</p>
                <p className='p-position'>Goalkeeper</p>

              </div>
            </div>
          </div>
          {/* player 3 */}

          <div className='p3'>
            <div>
              <img src={p6} alt="" />
              <div className='r3-box'>
                <p className='p-name'>Kelvin Akparanta</p>
                <p className='p-position'>Goalkeeper</p>

              </div>
            </div>
            <div>
              <img src={p7} alt="" />
              <div className='r3-box'>
                <p className='p-name'>Kelvin Akparanta</p>
                <p className='p-position'>Goalkeeper</p>

              </div>
            </div>
          </div>
          {/* player 4 */}
          <div className='p4'>
            <div>
              <img src={p8} alt="" />
              <div className='r4-box'>
                <p className='p-name'>Kelvin Akparanta</p>
                <p className='p-position'>Goalkeeper</p>

              </div>
            </div>
          </div>
          {/* player 5 */}
          <div className='p5'>
            <div>
              <img src={p5} alt="" />
              <div className='r5-box'>
                <p className='p-name'>Kelvin Akparanta</p>
                <p className='p-position'>Goalkeeper</p>

              </div>
            </div>
            <div>
              <img src={p4} alt="" />
              <div className='r5-box'>
                <p className='p-name'>Kelvin Akparanta</p>
                <p className='p-position'>Goalkeeper</p>

              </div>
            </div>
          </div>
          {/* player 6 */}
          <div className='p6'>
            <div>
              <img src={p3} alt="" />
              <div className='r6-box'>
                <p className='p-name'>Kelvin Akparanta</p>
                <p className='p-position'>Goalkeeper</p>

              </div>
            </div>
            <div>
              <img src={p2} alt="" />
              <div className='r6-box'>
                <p className='p-name'>Kelvin Akparanta</p>
                <p className='p-position'>Goalkeeper</p>

              </div>
            </div>
          </div>
          {/* player 8 */}
          <div className='p7'>
            <div>
              <img src={p1} alt="" />
              <div className='r7-box'>
                <p className='p-name'>Kelvin Akparanta</p>
                <p className='p-position'>Goalkeeper</p>

              </div>
            </div>
          </div>
          {/* player 12 */}


        </div>
      </div>
      {/* player 12 */}
      <div className='mobile_data'>
        <div className='p-2'>
          <div>
            <img className='p-2-img' src={p6} alt="" />
            <div className='r3-box'>
              <p className='p-name'>Kelvin Akparanta</p>
              <p className='p-position'>Goalkeeper</p>

            </div>
          </div>
          <div>
            <img className='p-2-img' src={p7} alt="" />
            <div className='r3-box'>
              <p className='p-name'>Kelvin Akparanta</p>
              <p className='p-position'>Goalkeeper</p>

            </div>
          </div>
        </div>
      </div>
      <div className='mobile_data'>
        <div className='p-2'>
          <div>
            <img className='p-2-img' src={p6} alt="" />
            <div className='r3-box'>
              <p className='p-name'>Kelvin Akparanta</p>
              <p className='p-position'>Goalkeeper</p>

            </div>
          </div>
          <div>
            <img className='p-2-img' src={p7} alt="" />
            <div className='r3-box'>
              <p className='p-name'>Kelvin Akparanta</p>
              <p className='p-position'>Goalkeeper</p>

            </div>
          </div>
        </div>
      </div>
      <div className='mobile_data ' id="-m" style={{marginTop:"30px"}}>
      <div className='p-2'>
            <div>
              <img className='p-2-img' src={p1} alt="" />
              <div className='r7-box'>
                <p className='p-name'>Kelvin Akparanta</p>
                <p className='p-position'>Goalkeeper</p>

              </div>
            </div>
          </div>
          </div>
      
   
    </div>


  </>

  )
}

export default Body
