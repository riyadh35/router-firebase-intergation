import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {

    const { singInWithGoogle } = useFirebase();
    return (
        <div>
            <h2>Please login</h2>
            <button onClick={singInWithGoogle}>Google Sign In</button>
            <form action="">
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" placeholder='password' />
                <br />
                <input type="submit" value="Login" />
            </form>

        </div>
    );
};

export default Login;