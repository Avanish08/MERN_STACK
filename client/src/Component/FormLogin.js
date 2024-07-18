import React from 'react'
// import { Link } from "react-router-dom";
import '../Css/FormLogin.css';

function FormLogin() {
  return (
    <>
    <div className="nav">
        <div className="logo"> <h1>PU</h1></div>
        <div className="navtext"> <h4>Project Unlocked </h4></div>
    </div>
    <div className="main">
        <div className="left"></div>
        <div className="right">
            <form action="" method="post" className='form'>
              <div className="form-body">
                <label htmlFor="Username">Username :</label>
                <br />
                <input type="text" name="Username" id="Username"  className='intext'/>
                <br />
                <label htmlFor="Password">Password :</label>
                <br />
                <input type="password" name="Password" id="Password" className='intext'/>
                <br />
                <input type="submit" value="Submit" />
                <hr />
                <div className="new">
                <p>If New Member </p><a href="/">Click Here</a>
                </div>
              </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default FormLogin
