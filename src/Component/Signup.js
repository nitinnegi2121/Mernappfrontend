import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Signup = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "", email: "", phone: "", work: "", password: "", cpassword: ""
  });


  let name, value;

  const handleInputs = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }
    else {

      window.alert("Registration Successfully");
      console.log("Registration Successfully");


      navigate("/login");
    }

    // console.log(343434, user)
  }

  return (


    <>
      
      <section className="" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                      <form method="POST" className="mx-1 mx-md-4" onSubmit={handleSubmit}>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" name="name" id="name" className={`form-control form-control-lg bg-transparent ${user.name !== "" && "active"}`} autoComplete="off"
                              value={user.name}
                              onChange={handleInputs}

                            />
                            <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" name="email" id="email" 
                            autoComplete="off"
                             className={`form-control form-control-lg bg-transparent ${user.email !== "" && "active"}`}
                              value={user.email}
                              onChange={handleInputs}
                            />
                            <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                          </div>
                        </div>


                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="number" name="phone" id="phone" autoComplete="off" className={`form-control form-control-lg bg-transparent ${user.phone !== "" && "active"}`}
                              value={user.phone}
                              onChange={handleInputs}
                            />
                            <label className="form-label" htmlFor="form3Example3c">Your Phone number</label>
                          </div>
                        </div>

                        {/* <input type="number" name="phone" id="phone" autoComplete="off"
                          value={user.phone}
                          onChange={handleInputs}
                          placeholder="Enter your phone number"
                        /> */}

                        {/* <input type="text" name="work" id="work" autoComplete="off"
                            value={user.work}
                            onChange={handleInputs}
                            placeholder="your profession"
                          /> */}

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-slideshow fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" name="work" id="work" autoComplete="off" className={`form-control form-control-lg bg-transparent ${user.work !== "" && "active"}`}
                              value={user.work}
                              onChange={handleInputs}
                            />
                            <label className="form-label" htmlFor="form3Example3c">Your occupation</label>
                          </div>
                        </div>


                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" name="password" id="password" autoComplete="off" className={`form-control form-control-lg bg-transparent ${user.password !== "" && "active"}`}
                              value={user.password}
                              onChange={handleInputs}
                            />
                            <label className="form-label" htmlFor="form3Example4c">Password</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" name="cpassword" id="cpassword" autoComplete="off" className={`form-control form-control-lg bg-transparent ${user.cpassword !== "" && "active"}`}
                              value={user.cpassword}
                              onChange={handleInputs}
                            />
                            <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                          <label className="form-check-label" for="form2Example3">
                            I agree all statements in <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" className="btn btn-primary btn-lg" onClick={handleSubmit}>Register</button>
                        </div>

                      </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid" alt="Sample image" />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signup
