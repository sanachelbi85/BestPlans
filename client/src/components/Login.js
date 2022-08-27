import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../js/slice/UserSlice';
import imglogo from "./image/imglogo.png";
import "./connexion.css";
import { Link } from 'react-router-dom';



const Login = () => {
  const[ login, setlogin] = useState({
    email:"",
    password:""
  });

  const dispatch = useDispatch();
  const isAuth = localStorage.getItem("token");
let navigate = useNavigate();

  return (
    <div>
     
        <title>Login</title>
        <div className="regis">
          <div className="regis1">
            <div className="div1">
              <div className="d1">
                <p>BestPlans</p>
              </div>
              <div className="d2">
                <h1>Sign in</h1>
                <div> 
                <div onSubmit={(e)=> e.preventDefault()} className="form">
                  <input type="email" id="email" className="form__input" autoComplete="off" placeholder=" " 
                  onChange={(e)=>setlogin({...login, email: e.target.value})}/>
                  <label htmlFor="email" className="form__label">Email</label>
                  </div>
                </div>
                <div />
                <div className="form">
                  <input type="password" id="email" className="form__input" autoComplete="off" placeholder=" " 
                  onChange={(e)=>setlogin({...login, password: e.target.value})}/>
                  <label htmlFor="email" className="form__label">Password</label>
                </div>
                <button className="buttonsign" onClick={()=>{
                  dispatch(userLogin(login));
                  setTimeout(() => {
                    navigate("/profil");
                  }, 1000);
                  // setTimeout(() => {
                  //   window.location.reload();
                  // }, 1000);
                 }}
                >Sign in</button>
               <br /><p> <Link to="/register"> Let's create your account</Link > </p>
              </div>
            </div>
            <div className="div2">
              <img src={imglogo} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Login