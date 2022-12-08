import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import app from '../../firebase.init';
import './Header.css';


const auth = getAuth(app)

const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <div className='header'>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/orders">Orders</NavLink>
                <NavLink to="/register">Register</NavLink>

                <span>{user?.displayName && user.displayName}</span>

                {
                    user?.uid ?
                        <button onClick={() => signOut(auth)}>sign out</button>
                        :
                        <NavLink to="/login">Login</NavLink>
                }
            </nav>

        </div>
    );
};

export default Header;