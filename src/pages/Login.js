import { Link } from 'react-router-dom';
import app from '../config/firebaseConfig';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase as database, ref, set } from 'firebase/database';
import '../pagesStyles/Login.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    let navigate = useNavigate();
    const auth = getAuth(app);




    function signInUser(e) {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            //signed in
            console.log("signed in");
            console.log(auth.currentUser.uid);
            navigate('/');
            // writeUserData(auth.currentUser.uid);
        }).catch((error) => {
            // error occurred
            console.log(error.message);
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
                    <Link to='/'>FORGET PASSWORD?</Link>
                    <Link to='/register'>CREATE NEW ACCOUNT</Link>
                </div>
            </div>
        </main>
    );
}

export default Login;