import React from "react";
// import { Link } from "react-router-dom";
import "../Css/FormLogin.css";
import Wb from "../Assest/WB.jpg"
import logow from "../Assest/Wb-white.png";

function FormLogin() {
  return (
    <>
      <div className="nav">
        <div className="logo">
        <img src={logow} alt="logo" />
          {/* <h1>PU</h1> */}
        </div>
        <div className="navtext">
          
          <h4>Project Unlocked </h4>
        </div>
      </div>
      <div className="main">
        <div className="left"><img src={Wb} alt="logo" /></div>
        <div className="right">
          <form action="" method="post" className="form">
            
            <div className="form-body">
            <h4>Login</h4>
             <div className="form-login">
              <label htmlFor="Username" className="textname">Username :</label>
              <br />
              <input
                type="text"
                name="Username"
                id="Username"
                className="intext"
              />
              <br />
              <label htmlFor="Password" className="textname">Password :</label>
              <br />
              <input
                type="password"
                name="Password"
                id="Password"
                className="intext"
              />
              <br />
              <input type="submit" value="Login"  className="btn"/>
              </div>
              <hr />
              <div className="new">
                <p>If New Member 
                <a href="/">Click Here</a></p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormLogin;
