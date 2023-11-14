import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
 import {BsFillChatDotsFill} from 'react-icons/bs'
 import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container ">
        {/* left-side  */}
        <div className=" flexColStart c-left">
          <span className="orangeText">Our contacts</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providing the best servicefor you.
            <br />
            We beleve a good to blace to live can make your life better
            <div className="flexColStart contactModes">
              {/* first row */}
              <div className="flexStart row">
                {/* first mode */}
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdCall size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span>
                        Call<span> 9133870617</span>
                      </span>
                    </div>
                  </div>
                  <div className="flexCenter button">Call Now</div>
                </div>

                {/* second mode */}
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <BsFillChatDotsFill size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span>
                        Chat<span> 9133870617</span>
                      </span>
                    </div>
                  </div>
                  <div className="flexCenter button">Chat Now</div>
                </div>
              </div>

              {/* second row */}

              <div className="flexStart row">
                {/* first mode */}
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdCall size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span>
                      Video Call<span> 9133870617</span>
                      </span>
                    </div>
                  </div>
                  <div className="flexCenter button"> Video Call Now </div>
                </div>

                {/* second mode */}
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <HiChatBubbleBottomCenter size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span>
                        Message<span> 9133870617</span>
                      </span>
                    </div>
                  </div>
                  <div className="flexCenter button">Message Now</div>
                </div>
              </div>
            </div>
          </span>
        </div>
        {/* right-side  */}
        <div className="c-right">
          <div className="image-containers">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  ); 
};

export default Contact;
