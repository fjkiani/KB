import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="edina_tm_contact" id="contact">
      <div className="container px-5 md:px-10">
        <div className="edina_tm_title">
          <h3>Contact</h3>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            ipsum sit nibh amet egestas tellus.
          </p> */}
        </div>
        {/* <div className="extra_info">
          <ul className="wrapper">
            <li
              className="wow fadeInLeft w-full md:w-[33.3%]"
              data-wow-duration="1s"
            >
              <div className="list_inner rounded-lg">
                <h3>Phone:</h3>
                <ul className="in">
                  <li>+452 666 386</li>
                  <li>+465 562 226</li>
                </ul>
              </div>
            </li>
            <li
              className="wow fadeInLeft w-full md:w-[33.3%]"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div className="list_inner rounded-lg">
                <h3>Email:</h3>
                <ul className="in">
                  <li>
                    <a href="/">support@gmail.com</a>
                  </li>
                  <li>
                    <a href="/">example@support.com</a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="wow fadeInLeft w-full md:w-[33.3%]"
              data-wow-duration="1s"
              data-wow-delay="0.4s"
            >
              <div className="list_inner rounded-lg">
                <h3>Address:</h3>
                <ul className="in">
                  <li>
                    <p>
                      Maount View, Oval Road
                      <br />
                      New York, USA
                    </p>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div> */}
        <div className="mainpart">
          <div className="left w-full">
            <div className="title">
              <p>
                Contact
                <br />
                <span>Speaking & Media Enquiries</span>
              </p>
            </div>
            <div className="fields wow fadeInLeft" data-wow-duration="1s">
              <form
                action="https://formsubmit.co/kbeydoun@gmail.com"
                method="POST"
                className="contact_form"
                id="contact_form"
              >
                <div
                  className="returnmessage"
                  data-success="Your message has been received, We will contact you soon."
                ></div>
                <div className="empty_notice">
                  <span>Please Fill Required Fields</span>
                </div>
                <div className="first_row">
                  <input
                    id="name"
                    name="Name"
                    type="text"
                    placeholder="Name*"
                  />
                </div>
                <div className="second">
                  <input
                    name="Email"
                    id="email"
                    type="text"
                    placeholder="Email*"
                  />
                </div>
                <div className="third">
                  <textarea
                    name="Message"
                    id="message"
                    placeholder="Message*"
                  ></textarea>
                </div>
                <div className="edina_tm_button">
                  <a id="send_message" href="/">
                    Submit
                  </a>
                </div>

                {/* <!-- If you want change mail address to yours, just open "modal" folder >> contact.php and go to line 4 and change detail to yours.  --> */}
              </form>
            </div>
          </div>
          {/* <div className="right wow fadeInLeft" data-wow-duration="1s">
            <div className="map" id="ieatmaps"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
