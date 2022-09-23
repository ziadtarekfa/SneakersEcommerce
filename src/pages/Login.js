import { Link } from 'react-router-dom';
import '../pagesStyles/Login.css';
const Login = () => {
    return (
        <main className="login">
            <div className="login-container">
                <h1>SIGN IN</h1>
                <form className="login-form">
                    <input className='default-input' placeholder="Username or Email" required></input>
                    <input className='default-input' placeholder="Password" required></input>
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