import './css/verifyOtpSuccess.css';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const VerifyOtpSuccess = () => {

    const navigate = useNavigate();

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className='verify-success-back'>
            <main className='verify-success'>
                <div className="loading">
                    <div className="one">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 0.75L7.05 16.0875L3 13.0125H0.75L7.05 23.25L23.25 0.75H21Z" fill="#ECEBEB" />
                        </svg>
                    </div>
                    <p className="loading-text">Verification</p>
                    <div className="line"></div>
                    <div className="two">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 0.75L7.05 16.0875L3 13.0125H0.75L7.05 23.25L23.25 0.75H21Z" fill="#ECEBEB" />
                        </svg>
                    </div>
                    <p className="loading-text">Verify Email</p>
                    <div className="line"></div>
                    <div className="three">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 0.75L7.05 16.0875L3 13.0125H0.75L7.05 23.25L23.25 0.75H21Z" fill="#ECEBEB" />
                        </svg>
                    </div>
                    <p className="loading-text">Email Verification Successful</p>
                    <div className="line"></div>
                    <div className="four">4</div>
                    <p className="loading-text">Authentication</p>
                </div>
                <div className="status">
                    <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M111 50.9715V56.0315C110.993 67.8918 107.153 79.4322 100.051 88.9315C92.9499 98.4308 82.968 105.38 71.5944 108.743C60.2209 112.106 48.0649 111.702 36.9396 107.592C25.8142 103.481 16.3156 95.885 9.86028 85.9353C3.40496 75.9856 0.338852 64.2158 1.11922 52.3812C1.89959 40.5466 6.48464 29.2813 14.1905 20.2654C21.8964 11.2495 32.3103 4.96608 43.879 2.35228C55.4477 -0.261515 67.5515 0.934334 78.385 5.76148M111 12L56 67.055L39.5 50.555" stroke="#4ECA5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <h1>Verification Successful !</h1>
                </div>
                <p className="sit">Sit back and relax</p>
                <p className="message">Hi,<br />Your're almost there! Please click on the button below to finish up account
                    creation and enjoy exclusive services with us!</p>
                <button className='verify-success-btn' onClick={() => navigate('/kyc')}>Continue</button>
            </main>
        </div>
    );
}

export default VerifyOtpSuccess;