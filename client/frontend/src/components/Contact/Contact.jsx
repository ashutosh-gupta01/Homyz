
import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  const phoneNumber = "6202747638";
  const whatsappNumber = "916202747638";

  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">

        {/* Left Side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>

          <span className="primaryText">
            Easy to Contact Us
          </span>

          <span className="secondaryText">
            We are always ready to provide the best services to you.
            <br />
            We believe a good place to live can make your life better.
          </span>

          <div className="flexColStart contactModes">

            {/* First Row */}
            <div className="flexStart row">

              {/* Call */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>

                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">
                      +91 {phoneNumber}
                    </span>
                  </div>
                </div>

                <a
                  href={`tel:+91${phoneNumber}`}
                  className="flexCenter button"
                >
                  Call now
                </a>
              </div>

              {/* WhatsApp Chat */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>

                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">
                      WhatsApp
                    </span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flexCenter button"
                >
                  Chat now
                </a>
              </div>
            </div>

            {/* Second Row */}
            <div className="flexStart row">

              {/* WhatsApp Video Call */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>

                  <div className="flexColStart detail">
                    <span className="primaryText">
                      Video Call
                    </span>
                    <span className="secondaryText">
                      WhatsApp
                    </span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flexCenter button"
                >
                  Video Call now
                </a>
              </div>

              {/* WhatsApp Message */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>

                  <div className="flexColStart detail">
                    <span className="primaryText">
                      Message
                    </span>
                    <span className="secondaryText">
                      WhatsApp
                    </span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flexCenter button"
                >
                  Message now
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="Contact" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
