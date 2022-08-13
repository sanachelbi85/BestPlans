import e from 'express';
import React, { useState } from 'react';

const Register = () => {
  const[ register, setregister] = useState({
    name:"",
    lastName:"",
    email:"",
    password:""
  });
  return (
    <div>
     
        <title>Register</title>
        <div className="register">
          <div className="register1">
            <div className="div1">
              <div className="d1">
                <p>BestPlans</p>
              </div>
              <div className="d2">
                <h1>Sign up</h1>
                <p>Let's create your account</p>
                <div className="form">
                  <input type="text" id="email" className="form__input" autoComplete="off" placeholder="name "
                  onChange={setregister({...register, name: e.target.value})}  />
                  <label htmlFor="email" className="form__label">UserName</label>
                  
                </div>
                <div className="form">
                  <input type="email" id="email" className="form__input" autoComplete="off" placeholder=" " />
                  <label htmlFor="email" className="form__label">Email</label>
                </div>
                <div />
                <div className="form">
                  <input type="password" id="email" className="form__input" autoComplete="off" placeholder=" " />
                  <label htmlFor="email" className="form__label">Password</label>
                </div>
                <button className="buttonsign">Sign up</button>
              </div>
            </div>
            <div className="div2">
              <img src="img.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }

   

export default Register