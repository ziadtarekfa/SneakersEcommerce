import { Link } from 'react-router-dom';
import '../pagesStyles/Register.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../config/firebaseConfig';
import { getDatabase, ref, set } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
const Register = () => {




    let navigate = useNavigate();
    const database = getDatabase();

    const createUser = (e) => {

        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        createUserWithEmailAndPassword(auth, email, password).then(userCredential => {
            // Account created successfully
            set(ref(database, `users/${userCredential.user.uid}`), {
                firstName: document.getElementById('first-name').value,
                lastName: document.getElementById('last-name').value,
                email: email
            });
            e.target.reset();
            navigate('/');

        }).catch(error => {
            console.log(error.message);
        });

    }

    return (
        <div className="register">
            <div className="register-container">
                <h1>CREATE AN ACCOUNT</h1>
                <form className="register-form" onSubmit={createUser}>
                    <div>
                        <input id='first-name' className='default-input' placeholder="First Name" required></input>
                        <input id='last-name' className='default-input' placeholder="Last Name" required ></input>
                    </div>
                    <input id='email' className='default-input' placeholder="Email" type="email" required></input>
                    <div>
                        <input id='password' className='default-input' placeholder="Password" type='password' required></input>
                        <input className='default-input' placeholder="Confirm Password" type='password' required></input>
                    </div>
                    <p>By creating an account, I consent to the processing of my personal data in accordance with the <span>PRIVACY POLICY</span></p>
                    <button className='default-button'>CREATE</button>
                </form>

                <p>Already have an account?&emsp;<Link to='/login'>LOGIN</Link></p>
            </div>
        </div>
    );
}


export default Register;