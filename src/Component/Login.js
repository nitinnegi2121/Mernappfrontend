import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {

    e.preventDefault();

    const res = await fetch('/signin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })

    });

    const data = await res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    }
    else {
      sessionStorage.setItem("token", data.token)
      window.alert("login successfully");
      navigate("/")
    }
  }


  return (
    <>


      <section className="gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                <div className="card-body p-5 text-center">

                  <div className="mb-md-4 mt-md-4 pb-3">

                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">Please enter your login and password!</p>
                    <form method="POST" onSubmit={loginUser}>
                      <div className="form-outline form-white mb-4">
                        <input type="email" id="typeEmailX" className={`form-control form-control-lg bg-transparent ${email !== "" && "active"}`}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)} />
                        <label className="form-label" htmlFor="typeEmailX" >Email</label>
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input type="password" id="typePasswordX" className={`form-control form-control-lg bg-transparent ${password !== "" && "active"}`}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="form-label" htmlFor="typePasswordX">Password</label>
                      </div>

                      <p className="small mb-5 pb-lg-2"><Link className="text-white-50" to="#!">Forgot password?</Link></p>

                      <button className="btn btn-outline-light btn-lg px-5" type="submit" >Login</button>
                    </form>
                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <Link to="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></Link>
                      <Link to="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></Link>
                      <Link to="#!" className="text-white"><i className="fab fa-google fa-lg"></i></Link>
                    </div>

                  </div>

                  <div>
                    <p className="mb-0">Don't have an account? <Link to="/signup" className="text-white-50 fw-bold">Sign Up</Link>
                    </p>
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

export default Login
