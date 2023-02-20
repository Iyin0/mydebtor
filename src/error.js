import { useNavigate } from "react-router-dom";
import './css/error.css';
import { useDispatch } from "react-redux";
import { toggleLandingDropdown } from './store/landingDropdown';

const ErrorPage = () => {

    const navigate = useNavigate();

    const hideDropdown = useDispatch();

    const hideTopNav = () => {
        hideDropdown(toggleLandingDropdown(false))
    }

    return (
        <div>
            <main className="error-page" onClick={() => hideTopNav()}>
                <div className="error-left">
                    <h1 className="error-text1">Ooops...</h1>
                    <p className="error-text2">Page not found</p>
                    <p className="error-text3">The page you are looking for doesn't exist or an error occured.</p>
                    <button className="error-btn" onClick={() => navigate('/')}>Go back to home page</button>
                </div>
                <div className="error-img">
                    <img src={require('./img/image 1.png')} alt="" />
                </div>
            </main>
        </div>
    );
}

export default ErrorPage;