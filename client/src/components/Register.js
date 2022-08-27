import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import imag   from "./image/imag.jpg";
import { userRegister } from '../js/slice/UserSlice';
import "./connexion.css";


const Register = () => {
  const[ register, setregister] = useState({
    name:"",
    lastName:"",
    email:"",
    password:""
  });

  const dispatch = useDispatch();
  return (
    <div>
     
        <title>Register</title>
        <div className="regis">
          <div className="regis1">
            <div className="div1">
              <div className="d1">
                <p>BestPlans</p>
              </div>
              <div className="d2">
                <h1>Sign up</h1>
                <p>Let's create your account</p>
                <div className="form">
                  <input type="text" id="email" className="form__input" autoComplete="off" placeholder=" "
                  onChange={(e)=>setregister({...register, name: e.target.value})}  />
                  <label htmlFor="email" className="form__label">UserName</label>
                </div>
                <div className="form">
                  <input type="text" id="email" className="form__input" autoComplete="off" placeholder=" "
                  onChange={(e)=>setregister({...register, lastName: e.target.value})}  />
                  <label htmlFor="email" className="form__label">LastName</label>
                </div>
                <div className="form">
                  <input type="email" id="email" className="form__input" autoComplete="off" placeholder=" " 
                  onChange={(e)=>setregister({...register, email: e.target.value})}/>
                  <label htmlFor="email" className="form__label">Email</label>
                </div>
                <div />
                <div className="form">
                  <input type="password" id="email" className="form__input" autoComplete="off" placeholder=" " 
                  onChange={(e)=>setregister({...register, password: e.target.value})}/>
                  <label htmlFor="email" className="form__label">Password</label>
                </div>
                <button className="buttonsign" onClick={()=>{
                  dispatch(userRegister(register));
                }}>Sign up</button>
              </div>
            </div>
            <div className="div2">
              <img src={imag} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }

   

export default Register