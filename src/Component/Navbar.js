import React, {useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from "../images/NEGI.png";
import { UserContext } from '../App';


const headerMenuList = [
  {
    name: "Home",
    url: "/"
  },
  {
    name: "About",
    url: "/about"
  },
  {
    name: "Contact",
    url: "/contact"
  },
]

const Navbar = () => {
  const location = useLocation();
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    alert("Logout Successfully!");
    navigate("/login");
  }


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light main-header">
        <Link className="navbar-brand" to="#">
          <img src={logo} alt="logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m'-auto">
            {headerMenuList.map((item, key) => <li key={key} className={`nav-item ${location.pathname === item.url && "active"}`}>
              <Link className="nav-link" to={item.url}>{item.name}</Link>
            </li>)}
            <li><button type='button' onClick={handleLogout}>Logout</button></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
