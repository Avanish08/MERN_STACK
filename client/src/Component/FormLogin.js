import React from 'react'

function FormLogin() {
  return (
    <>
    <div className="nav">
        <div className="logo"></div>
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
              </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default FormLogin
