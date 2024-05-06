
import limo from "../images/mt-0152-slide_2.jpg";


const About = () => {
  
  return (
    <div className="about-container">
      <div className="about-items">
        <div className="about-left">
          <h3 className=''>OVER 45 YEARS EXPERIENCE</h3>
          <p>
            Ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in repreh. Lorem ipsum dolor sit
            amet. Conse ctetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in repreh.
          </p>
        </div>
        <div className="about-right">
          <h1 className='about-animated-text'>ABOUT US</h1>
          <h5 className='about-animated-text'>OVER 15,000 HAPPY CUSTOMERS</h5>
          <p className='about-animated-text' >
            Nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo
            consequat. Duis auteirure dolor in repreh. Lorem ipsum dolor sit
            amet. Conse ctetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in repreh. Lorem ipsum
            dolor sit amet. Conse ctetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.
          </p>
        </div>
      </div>
      <div className="about-image">
      <img src={limo} alt="" />
        <p className="overlay-text"><strong>CLASSIC TOUCH</strong> Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
       
      </div>
    </div>
  );
};

export default About;
