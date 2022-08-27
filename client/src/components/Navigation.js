import React, { useState } from "react";
import logo1 from "./image/logo1";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../js/slice/UserSlice";
import icons8male24 from "./image/icons8male24.png";
import icons864 from "./image/icons864.png";
import icons8logout24 from "./image/icons8logout24.png";



const Navigation = () => {
  const user = useSelector((state)=>state?.user?.user );

  const isAuth = localStorage.getItem("token");
  const path = window.location.pathname
  console.log(path)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (path.includes("ashboard") ? null :
    <div className={color ? "header header1" : "header"}>
      <img src={logo1} alt="logo" style={{ width: "70px" }} />
      <h1 style={{ fontSize: "20px" , marginBottom:"0px" , paddingLeft:"10px"}}>Best plans</h1>
      <ul style={{ width: "80%", marginLeft: "40%" }}>
        <Link to="/">
          <li className={color ? "li li1" : "li"}>Home</li>
        </Link>
        <Link to="/destination">
          <li className={color ? "li li1" : "li"}>Destination</li>
        </Link>
        <Link to="/experience">
          <li className={color ? "li li1" : "li"}>Experience</li>
        </Link>
        {isAuth && (
          <Link to="/favoris">
            <li className={color ? "li li1" : "li"}>Favoris</li>
          </Link>
        )}

        <Link to="/contact">
          <li className={color ? "li li1" : "li"}>Contact</li>
        </Link>
        {/* <li className='eb3ed-8adi-ok'><a href="#"><input type="text" placeholder='search movie...' onChange={(e)=> setText(e.target.value)}></input></a></li> */}
        {!isAuth && (
          <Link to="/login">
            <li
              className="li">
             <img
              src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
              width="30"
              height="30"/>
            </li>
          </Link>
        )}
        {/* <Link to="/Dashboard/deslist">
          <li className={color ? "li li1" : "li"}>Dashboard</li>
        </Link> */}
      </ul>
      {isAuth ? (
        <>
          {/* ================================================================================= */}
          {/* ==================================================================================== */}
          <div className="action">
            <div className="profile">
              <img
                src="https://cdn5.vectorstock.com/i/1000x1000/01/69/businesswoman-character-avatar-icon-vector-12800169.jpg"
                width="30"
                height="30"
                onClick={() => 
                  document.querySelector(".menu-profil").classList.toggle("active")
                }
              />
              <li className="li">Login</li>
            </div>
            <div className="menu-profil" style={{backgroundColor:"#80808030"}}>
              <ul style={{listStyle:"none"}}> 
                <Link to="/profil">
                  <li>
                    <img src={icons8male24} />
                    My profile
                  </li>
                </Link>
               {user?.isAdmin ?<Link to="/Dashboard/deslist">
                  <li>
                    { <img src={icons864} style={{width:"20px"}} /> }
                    Dashboard
                  </li>
                </Link> : null} 
             
              <Link
            to="/"
            onClick={() => {
              dispatch(logout());
              navigate("/login");
            }}
          >
            <li>
              {<img src={icons8logout24} /> }
              Log out
            </li>
            </Link>
            
            </ul>
            </div>
            
          </div>
          

          {/* ======================================================================================== */}
          {/* =================================================================================== */}
        </>
      ) : null}
    </div>
  );
};

export default Navigation;
