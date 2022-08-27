import React from 'react';

import "./contact.css";

const Contact = () => {
  return (
    <div className='bodycontact'>
        <div className="containercontact">
        <div className="contentcontact">
          <div className="left-side">
            <div className="address details">
              {/*?xml version="1.0" encoding="iso-8859-1"?*/}
              {/* Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
              <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="395.71px" height="395.71px" viewBox="0 0 395.71 395.71" style={{enableBackground: 'new 0 0 395.71 395.71'}} xmlSpace="preserve">
                <g>
                  <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
                    c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
                    C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
                    c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z" />
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
              </svg>
              <div className="topic">Address</div>
              <div className="text-one">13 Cite EL Nakhil</div>
              <div className="text-two">Gabes</div>
            </div>
            <div className="phone details">
              {/*?xml version="1.0" encoding="iso-8859-1"?*/}
              {/* Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
              <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="891.024px" height="891.024px" viewBox="0 0 891.024 891.024" style={{enableBackground: 'new 0 0 891.024 891.024'}} xmlSpace="preserve">
                <g>
                  <path d="M2.8,180.875c46.6,134,144.7,286.2,282.9,424.399c138.2,138.2,290.4,236.301,424.4,282.9c18.2,6.3,38.3,1.8,52-11.8
                    l92.7-92.7l21.6-21.6c19.5-19.5,19.5-51.2,0-70.7l-143.5-143.4c-19.5-19.5-51.2-19.5-70.7,0l-38.899,38.9
                    c-20.2,20.2-52.4,22.2-75,4.6c-44.7-34.8-89-73.899-131.9-116.8c-42.9-42.9-82-87.2-116.8-131.9c-17.601-22.6-15.601-54.7,4.6-75
                    l38.9-38.9c19.5-19.5,19.5-51.2,0-70.7l-143.5-143.5c-19.5-19.5-51.2-19.5-70.7,0l-21.6,21.6l-92.7,92.7
                    C1,142.575-3.5,162.675,2.8,180.875z" />
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
              </svg>
              <div className="topic">Phone</div>
              <div className="text-one">+216 54 653 723</div>
            </div>
            <div className="email details">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 96"><path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z" data-name="Layer 2" /></svg>
              <div className="topic">Email</div>
              <div className="text-one">sanachelbi1@gmail.com</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p style={{width:"812px"}}>We'd love to hear from you. Whether you're curious about any destination or you have any feedback for us, be free to leave us a message!</p>
            <form action="#">
              <div className="input-box">
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Enter your email" />
              </div>
              <div className="input-box message-box">
                <input type="text" placeholder="Your message" />
              </div>
              <div className="button">
                <input type="button" defaultValue="Send Now" />
              </div>
            </form>
          </div>
        </div>
       
        </div>
        </div>
    );
  }

  
  

export default Contact