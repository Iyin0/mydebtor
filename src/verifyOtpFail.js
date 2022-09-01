import './css/verifyOtpFail.css'
import { useNavigate } from "react-router-dom";

const VerifyOtpFail = () => {

    const navigate = useNavigate()

    return (
        <div className="verify-fail-back">
            <main className="verify-fail">
                <div className="loading">
                    <div className="one-verify-fail">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 0.75L7.05 16.0875L3 13.0125H0.75L7.05 23.25L23.25 0.75H21Z" fill="#ECEBEB" />
                        </svg>
                    </div>
                    <p className="loading-text">Verification</p>
                    <div className="line"></div>
                    <div className="two-verify-fail">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 0.75L7.05 16.0875L3 13.0125H0.75L7.05 23.25L23.25 0.75H21Z" fill="#ECEBEB" />
                        </svg>
                    </div>
                    <p className="loading-text">Verify Email</p>
                    <div className="line"></div>
                    <div className="three-verify-fail">3</div>
                    <p className="loading-text">Email Verification Successful</p>
                    <div className="line"></div>
                    <div className="four-verify-fail">4</div>
                    <p className="loading-text">Authentication</p>
                </div>
                <div className="status-fail">
                    <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M78 78C78 78 69.75 67 56 67C42.25 67 34 78 34 78M83.5 40.82C81.3275 43.4875 78.3575 45 75.25 45C72.1425 45 69.255 43.4875 67 40.82M45 40.82C42.8275 43.4875 39.8575 45 36.75 45C33.6425 45 30.755 43.4875 28.5 40.82M111 56C111 86.3757 86.3757 111 56 111C25.6243 111 1 86.3757 1 56C1 25.6243 25.6243 1 56 1C86.3757 1 111 25.6243 111 56Z" stroke="#FF4040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h1>Verification Failed !</h1>
                </div>
                <p className="sit-fail">Something went wrong!</p>
                <p className="message-fail">Hi,<br />The code <strong>DID NOT</strong> match. Please try again.</p>
                <button className='verify-fail-btn' onClick={() => navigate('/verify2')}>Try again</button>
            </main>
        </div>
    );
}

export default VerifyOtpFail;