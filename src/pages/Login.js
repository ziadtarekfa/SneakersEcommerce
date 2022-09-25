import { Link } from 'react-router-dom';
import { app } from '../config/firebaseConfig';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase as database, ref, set } from 'firebase/database';
import '../pagesStyles/Login.css';
const Login = () => {

    const auth = getAuth(app);

    // const writeUserData = (userID) => {

    //     set(ref(database, 'users/'), {
    //         username: "ziad",
    //         email: "hello@gmail.com"
    //     });
    // }

    // const signInUser = () => {
    //     const email = document.getElementById("email").value;
    //     const password = document.getElementById("password").value;
    //     console.log(email + " " + password);
    //     signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    //         //signed in
    //         console.log("signed in");
    //         console.log(auth.currentUser.uid);
    //         writeUserData(auth.currentUser.uid);
    //     }).catch((error) => {
    //         // error occurred

    //         console.log(error.message);
    //     });
    // }

    return (
        <main className="login">
            <div className="login-container">
                <h1>SIGN IN</h1>
                <form className="login-form" >
                    <input id='email' className='default-input' placeholder="Email" type="email" required></input>
                    <input id='password' className='default-input' placeholder="Password" required></input>

                </form>
                <button className='default-button'>Login</button>
                <div>
                    <Link to='/'>FORGET PASSWORD?</Link>
                    <Link to='/register'>CREATE NEW ACCOUNT</Link>
                </div>
            </div>
        </main>
    );
}

export default Login;