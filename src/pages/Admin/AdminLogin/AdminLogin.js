import React from 'react'

function AdminLogin({login, setpassword, setusername, message}) {
    return (
        <div className='row'>
                <div className='col-lg-4 col-10 offset-lg-4 offset-1'>
                    <p className='text-center my-2'>Username</p>
                    <input className='form-control' onChange={(e) => setusername(e.target.value)}></input>
                </div>
                <div className='col-lg-4 col-10 offset-lg-4 offset-1'>
                    <p className='text-center my-2'>Password</p>
                    <input className='form-control' type="password"  onChange={(e) => setpassword(e.target.value)}></input>
                </div>
                <div className='col-lg-4 col-10 offset-lg-4 offset-1 text-center my-3'>
                   <button className='btn btn-primary col-8' onClick={login}>Login</button>
                </div>

                {message != undefined ?
                
                <div className='col-lg-4 col-10 offset-lg-4 offset-1 text-center my-3'>
                   <div className='alert alert-danger'>{message}</div>
                </div>
                : ""    
                }
        </div>
    )
}

export default AdminLogin
