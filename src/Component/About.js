import React, { useEffect, useState } from 'react';
import johnpic from "../images/john.jpg";
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const[userData, setUserData] = useState({});

  const callAboutPage = async () => {
    try {
      const res = await fetch('/about', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: 'include'
      });
  
      const data = await res.json();
      console.log(data);
      setUserData(data)
  
      if (!res.status === 200) {
        const error = new Error(res.error);
         throw error;
        
      } else {
        throw new Error(res.error);
      }
    } catch (err) {
      console.log(err);
      navigate('/login');
    }
  };
  

  useEffect(() => {
    // Your effect code here
    
  }, [callAboutPage]);
  
  return (
    <>
      <div className="container emp-profile">
        <form method="GET">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={johnpic} alt="johnpic" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>{userData.name}</h5>
                <h6>{userData.work}</h6>
                <p className="profile-rating mt-3 mb-5"> Ranking: <span>1/10</span></p>
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link" id="Home-tab" data-toggle="tab" href="#home" role="tab" aria-selected="true">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-selected="true">Timeline</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <input type="submit" className="profile-edit-btn" name="btnaddMore" value="Edit Profile" />
            </div>
          </div>
          <div className="row">
            {/* left side url */}
            <div className="col-md-4">
              <div className="profile-work">
                <p>WORK LINK</p>
                <a href="https://www.youtube.com/channel/UCzuES9FzmuqweC3ymGomI3w" target="_negi">Youtube</a> <br />
                <a href="https://www.linkedin.com/in/nitin-singh122/" target="_negi">LinkedIn</a>  <br />
                <a href="https://www.instagram.com/_nitin_negi_21/" target="_negi">Instagram</a>  <br />
              </div>
            </div>
            {/* right side toggle */}
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab">

                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <label>User ID</label>
                    </div>
                    <div className="col-md-6">
                      <p>34i34i23rnnewr</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.name}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.email}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.phone}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Profession</label>
                    </div>
                    <div className="col-md-6">
                      <p>web-developer</p>
                    </div>
                  </div>
                </div>


                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <label>Experience</label>
                    </div>
                    <div className="col-md-6">
                      <p>Beginner</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Learning</label>
                    </div>
                    <div className="col-md-6">
                      <p>Time is mine</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Total Project</label>
                    </div>
                    <div className="col-md-6">
                      <p>5</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default About;
