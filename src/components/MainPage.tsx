import React from 'react';
import Login from '../auth/Login'
import { Link } from 'react-router-dom'


const MainPage = () => {
    return (
        <div>MainPage
            <br/>
            <Link to="/about">
                <button>About Page</button>
            </Link>
            <Link to="/admin">
                <button>Admin Page</button>
            </Link>
            <Link to="/client">
                <button>Client Page</button>
            </Link>
            <Login/>
        </div>
    )
}

export default MainPage;