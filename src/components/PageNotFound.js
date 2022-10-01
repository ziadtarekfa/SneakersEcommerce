import { Link } from "react-router-dom";
import '../ComponentsStyles/PageNotFound.css';

const PageNotFound = () => {
    return (
        <div className="page-not-found">
            <h2>Page Not Found..</h2>
            <Link to='/'>
                <button className="default-button">Go to Home</button>
            </Link>
        </div>
    );
}

export default PageNotFound;