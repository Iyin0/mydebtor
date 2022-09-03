import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './css/sendOtp.css'

const SendOtp = () => {

    const navigate = useNavigate();
    const getEmail = useSelector((email) => email.signupInfo.schoolEmail);

    useEffect(() => {
        if (getEmail === '') {
            navigate('/signup')
        }
    })

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    // console.log(getEmail.payload)

    return (
        <div className="verify1">
            <main className="sendOtp">
                <div className="loading">
                    <div className="one-sendOtp">1</div>
                    <p className="loading-text">Verification</p>
                    <div className="line"></div>
                    <div className="two-sendOtp">2</div>
                    <p className="loading-text">Verify Email</p>
                    <div className="line"></div>
                    <div className="three-sendOtp">3</div>
                    <p className="loading-text">Email Verification Successful</p>
                    <div className="line"></div>
                    <div className="four-sendOtp">4</div>
                    <p className="loading-text">Authentication</p>
                </div>
                <div className="verify">
                    <h1>Verification</h1>
                    <p className="choose">A verification code will be sent to the email provided below</p>
                    <p className="proceed">Please proceed to complete your account verification</p>
                    <svg width="250" height="246" viewBox="0 0 250 246" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M225.75 23.8743C218.425 16.6665 211.45 23.4684 187.738 34.686C124.3 64.6857 13.75 125.657 13.75 125.657L108.738 138.99L122.3 232.458C122.3 232.458 184.275 123.689 214.75 61.2909C226.15 37.9455 233.062 31.0821 225.75 23.8743ZM202.95 47.9208L133.962 173.959L126.95 116.702L202.95 47.9208Z" fill="#0A66C2" />
                    </svg>
                    <p className="email">{getEmail.payload}</p>
                    <button onClick={() => navigate('/verify2')}>Proceed</button>
                </div>
            </main>
        </div>
    );
}

export default SendOtp;