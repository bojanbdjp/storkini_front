import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AdminLogin from '../AdminLogin/AdminLogin'

function AdminMain() {
    const [loggedIn, setloggedIn] = useState(false)
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [message, setMessage] = useState(undefined)


    const login = () => {
        if(username === 'admin' && password === 'admin321') {
            localStorage.setItem('loggedin', true)
            setloggedIn(true)
        } else {
            setMessage("Pogresan username ili password")
        }
    }

    useEffect(() => {
        setloggedIn(localStorage.getItem('loggedin'))
    }, [])

    return (
        <div>
            <div className='col-12 heading text-center my-3'>
                <h2 className='m-0 heading-text '>Admin strana</h2>
            </div>

            
            
            {loggedIn 
            ? 
            <div className='col-12'>
            <Link to='newObj'><button className='btn btn-success mx-3'>Dodavanje objekta</button></Link>
            <Link to='deleteObjs'><button className='btn btn-danger'>Brisanje objekata</button></Link>
            </div> 
            :
            <AdminLogin login={login} setpassword={setpassword} setusername={setusername} message={message}/> 
            }
        </div>
    )
}

export default AdminMain
