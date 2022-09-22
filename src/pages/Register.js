import { Link } from 'react-router-dom';
import '../pagesStyles/Register.css';
const Login = () => {
    return (
        <div className="register">
            <div className="register-container">
                <h1>CREATE AN ACCOUNT</h1>
                <form className="register-form">
                    <div>
                        <input placeholder="First Name"></input>
                        <input placeholder="Last Name" ></input>
                    </div>
                    <input placeholder="username" ></input>
                    <input placeholder="Email" type="email"></input>
                    <div>
                        <input placeholder="Password" ></input>
                        <input placeholder="Confirm Password" ></input>
                    </div>
                    <p>By creating an account, I consent to the processing of my personal data in accordance with the <span>PRIVACY POLICY</span></p>

                    <button>CREATE</button>
                </form>
                <p>Already have an account?<Link> LOGIN</Link></p>
            </div>
        </div>
    );
}

export default Login;