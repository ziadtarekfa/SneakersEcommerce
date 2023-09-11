import '../pagesStyles/Login.css';

import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {
    let navigate = useNavigate();

    function signInUser(e) {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        signInWithEmailAndPassword(auth, email, password).then(() => {
            //signed in
            // console.log("signed in");
            // console.log(auth.currentUser.uid);
            navigate('/');
        }).catch((error) => {
            // error occurred
            toast.error((error.message), {
                position: 'top-right'
            })
        });
    }

    return (

        <main className="login">
            <div className="login-container">
                <h1>SIGN IN</h1>
                <form className="login-form" onSubmit={signInUser} >
                    <input id='email' className='default-input' placeholder="Email" type="email" required></input>
                    <input id='password' className='default-input' placeholder="Password" type="password" required></input>
                    <button className='default-button'>Login</button>
                </form>

                <div>
                    <Link to='/register'>CREATE NEW ACCOUNT</Link>
                </div>
            </div>
            <ToastContainer />
        </main>

    );
}

export default Login;