import { Link } from 'react-router-dom';
import '../pagesStyles/Login.css';
const Login = () => {
    return (
        <div className="login">
            <div className="login-container">
                <h1>SIGN IN</h1>
                <form className="login-form">
                    <input placeholder="Username or Email"></input>
                    <input placeholder="Password" ></input>
                    <button>Login</button>
                </form>
                <div>
                    <Link to='/'>FORGET PASSWORD?</Link>
                    <Link to='/register'>CREATE NEW ACCOUNT</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;