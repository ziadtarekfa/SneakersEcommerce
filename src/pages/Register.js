import { Link } from 'react-router-dom';
import '../pagesStyles/Register.css';
const Login = () => {
    return (
        <div className="register">
            <div className="register-container">
                <h1>CREATE AN ACCOUNT</h1>
                <form className="register-form">
                    <div>
                        <input className='default-input' placeholder="First Name" required></input>
                        <input className='default-input' placeholder="Last Name" required ></input>
                    </div>
                    <input className='default-input' placeholder="username" required></input>
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