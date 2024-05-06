// import React from "react";
// import homepageImg from "../images/mt-0152-slide-1.jpg";
// import homepageImg2 from "../images/mt-0152-slide_2.jpg";
// import images from "../importImages"; 
// import ImageSlider from "./ImageSlider"; // Import the ImageSlider component


// const Home = () => {
//   return (
//     <div className="homePage">
//       <div className="homepageImgContainer">
//         {/* <img src={homepageImg} alt="" className="homepageImg" /> */}
//         <ImageSlider  images={images} />
//       </div>

//       <div className="content">
//         <div className="left">
//           <div className="left-content">
//             <h1 className="animated-text">LUXURY LIMOUSINES</h1>
//             <p className="animated-text">10% OFF ANY RESERVATION WEEKENDS OR WEEKDAYS</p>
//             <button className="animated-text">Read More</button>
//           </div>
//           <div className="left-content">
//             <h1 className="animated-text">SPECIAL OFFER</h1>
//             <p className="animated-text">$10 OFF AIRPORT LIMOUSINE SERVICE</p>
//             <button className="animated-text">Read More</button>
//           </div>
//           <div className="left-content">
//             <h1>WEDDING LIMOUSINES</h1>
//             <p>FOR YOUR MOST SPECIAL DAY</p>
//             <button>Read More</button>
//           </div>
//           <div className="contacts">
//             <h1>Contacts</h1>
//             <p>
//               <strong>Free phone:</strong> +93786034903
//             </p>
//             <p>
//               <strong>Address: </strong>4578 Marmora Road, Glasgow D04 89GR
//             </p>
//             <p>
//               <strong>Hours: </strong>6am-4pm PST M-Th;   6am-3pm PST Fri
//             </p>
//             <p>
//               <strong>E-mail: </strong>nuristanyqais@gmail.com
//             </p>
//           </div>
//         </div>
//         <div className="right">
//           <div className="right-content">
//             <h1>THE BEST PLACE FOR FINDING LIMO SERVICES AND RENTALS</h1>
//             <p>
//               Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
//               reprehenderit in voluptate velit esse cillum dolore eu fugiat
//               nulla pariatur.{" "}
//             </p>
//             <div className="overlay">
//               <h1>LIMOUSINES</h1>
//               <p>
//                 Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
//                 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolo.
//               </p>
//               <img src={homepageImg} alt="" className="right-content-img" />
//             </div>
//             <div className="services">
//               <div className="services-title">
//                 <h3>Our Services</h3>
//               </div>
//               <div className="services-content">
//                 <p>01/</p>
//                 <p>LOREM IPSUM DOLOR SIT AMET</p>
//               </div>
//               <div className="services-content">
//                 <p className="service-text">
//                   Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed
//                   do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                   Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                   laboris nisi ut aliquip ex ea commodo consequat. Duis aute
//                   irure dolor in repreh.
//                 </p>
//               </div>
//               <div className="services-title">
//                 <h3>Our Services</h3>
//               </div>
//               <div className="services-content">
//                 <p>02/</p>
//                 <p>LOREM IPSUM DOLOR SIT AMET</p>
//               </div>
//               <div className="services-content">
//                 <p className="service-text">
//                   Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed
//                   do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                   Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                   laboris nisi ut aliquip ex ea commodo consequat. Duis aute
//                   irure dolor in repreh.
//                 </p>
//               </div>
//               <div className="services-title">
//                 <h3>Our Services</h3>
//               </div>
//               <div className="services-content">
//                 <p>02/</p>
//                 <p>LOREM IPSUM DOLOR SIT AMET</p>
//               </div>
//               <div className="services-content">
//                 <p className="service-text">
//                   Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed
//                   do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                   Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                   laboris nisi ut aliquip ex ea commodo consequat. Duis aute
//                   irure dolor in repreh.
//                 </p>
//               </div>

//               <div>
//                 <img src={homepageImg2} alt="" className="right-content-img" />
//               </div>
//             </div>

//             <div className="about">
//               <h2>About</h2>
//               <h4>LOREM IPSUM DOLOR SIT AMET</h4>
//               <p>
//                 Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
//                 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
//                 in repreh. Lorem ipsum dolor sit amet conse ctetur adipisicing
//                 elit, sed do eiusmod tempor incididunt ut labore et dolore magna
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons"; // Import WhatsApp icon
import React, { useState, useEffect } from "react";
import homepageImg from "../images/mt-0152-slide-1.jpg";
import homepageImg2 from "../images/mt-0152-slide_2.jpg";
import ImageSlider from "./ImageSlider"; // Import the ImageSlider component


const Home = () => {
  const [animate, setAnimate] = useState(false);

  const whatsappNumber = "+930786034903"; // Replace with your WhatsApp number
  const facebookProfile = "https://www.facebook.com/nuristany";

  useEffect(() => {
    const handleScroll = () => {
      const contentElement = document.querySelector('.content');
      const elementPosition = contentElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (window.innerWidth > 768) {
        // For larger screens, trigger animation when scrolling
        if (elementPosition < windowHeight * 0.75) {
          setAnimate(true);
        }
      } else {
        // For smaller screens, trigger animation immediately
        setAnimate(true);
      }
    }


    window.addEventListener('scroll', handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="homePage">
      <div className="homepageImgContainer">
        {/* <img src={homepageImg} alt="" className="homepageImg" /> */}
        <ImageSlider  images={[homepageImg, homepageImg2]} />
      </div>

      <div className="content">
        <div className="left">
          <div className="left-content">
            <h1 className={`animated-text ${animate ? 'animate' : ''}`}>LUXURY LIMOUSINES</h1>
            <p className={`animated-text ${animate ? 'animate' : ''}`}>10% OFF ANY RESERVATION WEEKENDS OR WEEKDAYS</p>
            <button className={`animated-text ${animate ? 'animate' : ''}`}>Read More</button>
          </div>
          <div className="left-content">
            <h1 className={`animated-text ${animate ? 'animate' : ''}`}>SPECIAL OFFER</h1>
            <p className={`animated-text ${animate ? 'animate' : ''}`}>$10 OFF AIRPORT LIMOUSINE SERVICE</p>
            <button className={`animated-text ${animate ? 'animate' : ''}`}>Read More</button>
          </div>
          <div className="left-content">
            <h1 className={`animated-text ${animate ? 'animate' : ''}`}>WEDDING LIMOUSINES</h1>
            <p className={`animated-text ${animate ? 'animate ' : ''}`}>FOR YOUR MOST SPECIAL DAY</p>
            <button>Read More</button>
          </div>
          <div className="contacts">
            <h1>Contacts</h1>
            <p>
              <strong>Free phone:</strong> +93786034903
            </p>
            <p>
              <strong>Address: </strong>4578 Marmora Road, Glasgow D04 89GR
            </p>
            <p>
              <strong>Hours: </strong>6am-4pm PST M-Th;   6am-3pm PST Fri
            </p>
            <p>
              <strong>E-mail: </strong>nuristanyqais@gmail.com
            </p>
          </div>
          <div className="social-links">
          <a href={facebookProfile}  target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="facebook" />
          </a>

          <a
            href={`tel:${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="whatsapp" />
          </a>
          </div>
        </div>
        <div className="right">
          <div className="right-content">
            <h1>THE BEST PLACE FOR FINDING LIMO SERVICES AND RENTALS</h1>
            <p>
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.{" "}
            </p>
            <div className="overlay">
              <h1>LIMOUSINES</h1>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolo.
              </p>
              <img src={homepageImg} alt="" className="right-content-img" />
            </div>
            <div className="services">
              <div className="services-title">
                <h3>Our Services</h3>
              </div>
              <div className="services-content">
                <p>01/</p>
                <p>LOREM IPSUM DOLOR SIT AMET</p>
              </div>
              <div className="services-content">
                <p className="service-text">
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in repreh.
                </p>
              </div>
              <div className="services-title">
                <h3>Our Services</h3>
              </div>
              <div className="services-content">
                <p>02/</p>
                <p>LOREM IPSUM DOLOR SIT AMET</p>
              </div>
              <div className="services-content">
                <p className="service-text">
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in repreh.
                </p>
              </div>
              <div className="services-title">
                <h3>Our Services</h3>
              </div>
              <div className="services-content">
                <p>02/</p>
                <p>LOREM IPSUM DOLOR SIT AMET</p>
              </div>
              <div className="services-content">
                <p className="service-text">
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in repreh.
                </p>
              </div>

              <div>
                <img src={homepageImg2} alt="" className="right-content-img" />
              </div>
            </div>

            <div className="about">
              <h2>About</h2>
              <h4>LOREM IPSUM DOLOR SIT AMET</h4>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in repreh. Lorem ipsum dolor sit amet conse ctetur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

