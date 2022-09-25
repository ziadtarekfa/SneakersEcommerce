import { Link } from 'react-router-dom';
import '../pagesStyles/Register.css';
import { app } from '../config/firebaseConfig';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { getDatabase as database, ref, set } from 'firebase/database';
const Login = () => {

    const auth = getAuth(app);

    let email, password;

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password).then(userCredential => {
            // Account created successfully

            // console.log("account created successfullu")


        }).catch(error => {
            //error occurred

        });
    }
    // const writeUserData = (userID) => {

    //     set(ref(database, 'users/' + userID), {
    //         username: "ziad",
    //         email: "hello@gmail.com"
    //     });
    // }





    return (
        <div className="register">
            <div className="register-container">
                <h1>CREATE AN ACCOUNT</h1>
                <form className="register-form">
                    <div>
                        <input className='default-input' placeholder="First Name" required></input>
                        <input className='default-input' placeholder="Last Name" required ></input>
                    </div>
                    <input className='default-input' placeholder="Email" type="email" required></input>
                    <div>
                        <input className='default-input' placeholder="Password" required></input>
                        <input className='default-input' placeholder="Confirm Password" required></input>
                    </div>
                    <p>By creating an account, I consent to the processing of my personal data in accordance with the <span>PRIVACY POLICY</span></p>

                    <button className='default-button'>CREATE</button>
                </form>
                <p>Already have an account?&emsp;<Link to='/login'>LOGIN</Link></p>
            </div>
        </div>
    );
}

export default Login;