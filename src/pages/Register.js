import { Link } from 'react-router-dom';
import '../pagesStyles/Register.css';
import { app } from '../config/firebaseConfig';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { getDatabase, push, ref, set } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
const Register = () => {


    let navigate = useNavigate();
    const auth = getAuth();
    const database = getDatabase();

    const createUser = () => {

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        createUserWithEmailAndPassword(auth, email, password).then(userCredential => {
            // Account created successfully
            set(ref(database, `users/${userCredential.user.uid}`), {
                firstName: document.getElementById('first-name').value,
                lastName: document.getElementById('last-name').value,
                email: email
            });
            navigate('/');

        }).catch(error => {
            console.log(error.message);
        });
    }

    return (
        <div className="register">
            <div className="register-container">
                <h1>CREATE AN ACCOUNT</h1>
                <form className="register-form">
                    <div>
                        <input id='first-name' className='default-input' placeholder="First Name" required></input>
                        <input id='last-name' className='default-input' placeholder="Last Name" required ></input>
                    </div>
                    <input id='email' className='default-input' placeholder="Email" type="email" required></input>
                    <div>
                        <input id='password' className='default-input' placeholder="Password" required></input>
                        <input className='default-input' placeholder="Confirm Password" required></input>
                    </div>
                    <p>By creating an account, I consent to the processing of my personal data in accordance with the <span>PRIVACY POLICY</span></p>

                </form>
                <button className='default-button' onClick={createUser}>CREATE</button>
                <p>Already have an account?&emsp;<Link to='/login'>LOGIN</Link></p>
            </div>
        </div>
    );
}

export default Register;