
import React, { useEffect, useState } from 'react';

const Contact = () => {
  const [userData, setUserData] = useState({ name: "", email: "", phone: "", message: "" });

  const userContact = async () => {
    try {
      const res = await fetch('/getdata', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await res.json();
      console.log(data);
      setUserData({ ...userData, name: data.name, email: data.email, phone: data.phone });

      if (res.status === 200) {
        const error = new Error(res.error);
        throw error;
      } else {
        throw new Error(res.error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userContact();
  }, []);

  const handleInputs = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  //send data to backend
  

  const contactForm = async(e) =>{
    e.preventDefault();
    
    const{name, email, phone, message} = userData;

    const res =  await fetch('/contact', {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name, email, phone, message
      })
    });

    const data =  await res.json();

   if(!data){
    console.log("message not send")
   }else{
    alert("message send");
    setUserData({...userData, message:""});
   }

  }

  return (
    <>
      <div className="contact_info">
        {/* Phone, email, address */}
      </div>

      <div className="Contact_form">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_form_container py-5">
                <div className="contact_form_title">Get In Touch</div>

                <form method="POST" id="contact_form" onSubmit={contactForm}>
                  <div className="contact_form_name d-flex justify-content-between align-item-between">
                    <input
                      type="text"
                      id="contact_form_name"
                      className="contact_form_name input_field"
                      name="name"
                      value={userData.name}
                      onChange={handleInputs}
                      placeholder="Your name"
                      required
                    />

                    <input
                      type="email"
                      id="contact_form_email"
                      className="contact_form_email input_field"
                      name="email"
                      value={userData.email}
                      onChange={handleInputs}
                      placeholder="Your email"
                      required
                    />

                    <input
                      type="number"
                      id="contact_form_phone"
                      className="contact_form_phone input_field"
                      name="phone"
                      value={userData.phone}
                      onChange={handleInputs}
                      placeholder="Your phone number"
                      required
                    />
                  </div>

                  <div className="contact_form_text mt-5">
                    <textarea
                      className="contact_form_message input_field"
                      name="message"
                      value={userData.message}
                      onChange={handleInputs}
                      placeholder="Message"
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>

                  <div className="contact_form_button">
                    <button type="submit" className="button contact_submit_button" onClick={contactForm}>
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
