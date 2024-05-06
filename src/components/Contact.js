import axios from "axios";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState ({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://web-production-a0bb7.up.railway.app/contacts/contacts/", formData);
      console.log(response);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="contacts-container">
      <div className="contact-left">
        <div className="contact-left-text">
          <h1>CONTACT INFO</h1>
          <h5>LOREM IPSUM DOLOR AMET</h5>
          <p>
            Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in repreh.
            Lorem ipsum dolor sit amet. Duis aute irure dolor in repreh. Lorem
            ipsum dolor sit amet. Conse ctetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in repreh.
          </p>
        </div>
      </div>
      <div className="contact-right">
        <div className="form-container">
          <h1>CONTACT US</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <div className="input-field">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <hr/>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <hr/>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
                <hr />
                <textarea
                  name="message"  // Keep as 'message'
                  placeholder="Message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              
              </div>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
