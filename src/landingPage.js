import Footer from "./footer";
import TopNavbar from "./topNavbar";
import './css/landingPage.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleLandingDropdown } from './store/landingDropdown';



const LandingPage = () => {

    const navigate = useNavigate();

    const hideDropdown = useDispatch();

    const [cookiesState, setCookieState] = useState(false);
    const [checked, setChecked] = useState(true);

    const cookies_list = [

        {
            type: "checkbox",
            label: "Marketing and Analytics",
            name: "marketing",
            value: "marketing",
            for: "marketing",
            body: "These Cookies help us deliver personalized marketing content to you and to operate serve and track ads."
        },

        {
            type: "checkbox",
            label: "Preferences",
            name: "preferences",
            value: "preferences",
            for: "preferences",
            body: "These trackers help us provide a personalized user experience by improving the quality of your preference management options and by enabling interaction with external network and platforms,"
        }
    ]

    useEffect(() => {
        setTimeout(() => setCookieState(true), 3000)
    }, [])

    const hideTopNav = () => {
        hideDropdown(toggleLandingDropdown(false))
    }

    return (
        <div>
            <TopNavbar />

            <main onClick={() => hideTopNav()}>

                {/* Cookies */}
                {cookiesState ? (
                    <div className="cookies-back">
                        <div className="cookies">
                            <div className="cookies-top">
                                <h4 className="cookies-head">This website uses cookies</h4>
                                <button className="svg-btn" onClick={() => setCookieState(false)}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 6L6 18" stroke="#667080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6 6L18 18" stroke="#667080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <p className="cookies-body">We use cookies to improve user experince</p>
                            <p className="cookies-body">Choose what cookies you allow us to use.</p>
                            <p className="cookies-body">You can read more about our cookies policy in our <Link to='/privacy-policy' className="cookies-link">Privacy Policy</Link></p>
                            <div className="necessary">
                                <div className="text">
                                    <p className="text-head">Strictly Necessary</p>
                                    <p className="text-body">These cookies are used for activities strictly necessary to operate and deliver the service you requested.</p>
                                </div>
                                <svg className="lock" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="#667080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="#667080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            {cookies_list.map((each_cookie, index) => (
                                <div className="cookie" key={index}>
                                    <div className="text">
                                        <p className="text-head">{each_cookie.label}</p>
                                        <p className="text-body">{each_cookie.body}</p>
                                    </div>
                                    <label className="switch">
                                        <input type={each_cookie.type}
                                            name={each_cookie.name}
                                            value={each_cookie.value}
                                            className="checkbox"
                                            defaultChecked={checked}
                                            onChange={() => setChecked(!checked)}
                                        />
                                        <span className="slider"></span>
                                    </label>
                                </div>
                            ))}
                            <div className="btn-container">
                                <button className="btn" onClick={() => setCookieState(false)}>Accept</button>
                                <button className="btn" onClick={() => setCookieState(false)}>Decline</button>
                            </div>
                        </div>
                    </div>
                ) : (null)}

                <div className="mobile-welcome">
                    <div className="welcome">
                        <div className="welcome-top">
                            <article className="welcome-top-left">
                                <p className="tired">Increase profitability, manage student debts as a school owner.</p>
                                <p className="tired2">Let My Debtor help you keep an accurate list directory of wards in debt and
                                    debtor list of schools in your locality.</p>
                                <div className="welcome-top-btn">
                                    <button className="get_started" onClick={() => navigate('/signup')}>Get started</button>
                                </div>
                            </article>

                            <div className="welcome-top-right">
                                <img src={require("./img/Group 100.png")} alt="" className="welcome-top-right-pics" />
                            </div>
                        </div>
                    </div>
                    <div className="welcome-bottom">
                        <p className="welcome-bottom-text">My debtor currently serves over 2000+ schools in over 20+ countries</p>
                        <div className="welcome-bottom-icons">
                            <img className="welcome-bottom-icon icon1" src={require("./img/122-1224567_stafford-county-public-school-logo-best-logo-for 1.png")} alt="" />
                            <img className="welcome-bottom-icon icon2" src={require("./img/cropped-School-Badge 1.png")} alt="" />
                            <img className="welcome-bottom-icon icon3" src={require("./img/png-transparent-british-international-school-in-cairo-sun-of-knowledge-british-international-school-sbis-school-text-egypt-logo 1.png")} alt="" />
                            <img className="welcome-bottom-icon icon4" src={require("./img/png-transparent-british-international-school-of-kuala-lumpur-british-school-of-brasilia-british-school-of-nanjing-doha-college-school-label-logo-international 1.png")} alt="" />
                            <img className="welcome-bottom-icon icon5" src={require("./img/preloader 1.png")} alt="" />
                        </div>
                    </div>
                </div>
                {/* <div id="cookies-close-src" src={% static './img/cookies.svg' %} style="display: none;"></div> */}

                <div className="after-welcome">
                    <div className="after-welcome-container">
                        <p className="after-welcome-head">We have built an incredible platform that is reliable, accurate and easy
                            to use. Relax, let us go about the business of worrying about your debtors.</p>
                        <div className="snippet-container">
                            <div className="snippet">
                                <div className="snippet-icon">
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18.0003 8.41002C17.9703 8.41002 17.9503 8.41002 17.9203 8.41002H17.8703C15.9803 8.35002 14.5703 6.89001 14.5703 5.09001C14.5703 3.25001 16.0703 1.76001 17.9003 1.76001C19.7303 1.76001 21.2303 3.26001 21.2303 5.09001C21.2203 6.90001 19.8103 8.36001 18.0103 8.42001C18.0103 8.41001 18.0103 8.41002 18.0003 8.41002ZM17.9003 3.25002C16.8903 3.25002 16.0703 4.07002 16.0703 5.08002C16.0703 6.07002 16.8403 6.87002 17.8303 6.91002C17.8403 6.90002 17.9203 6.90002 18.0103 6.91002C18.9803 6.86002 19.7303 6.06002 19.7403 5.08002C19.7403 4.07002 18.9203 3.25002 17.9003 3.25002Z"
                                            fill="#0855A2" />
                                        <path
                                            d="M18.0105 15.78C17.6205 15.78 17.2305 15.75 16.8405 15.68C16.4305 15.61 16.1605 15.22 16.2305 14.81C16.3005 14.4 16.6905 14.13 17.1005 14.2C18.3305 14.41 19.6305 14.18 20.5005 13.6C20.9705 13.29 21.2205 12.9 21.2205 12.51C21.2205 12.12 20.9605 11.74 20.5005 11.43C19.6305 10.85 18.3105 10.62 17.0705 10.84C16.6605 10.92 16.2705 10.64 16.2005 10.23C16.1305 9.82002 16.4005 9.43003 16.8105 9.36003C18.4405 9.07003 20.1305 9.38002 21.3305 10.18C22.2105 10.77 22.7205 11.61 22.7205 12.51C22.7205 13.4 22.2205 14.25 21.3305 14.85C20.4205 15.45 19.2405 15.78 18.0105 15.78Z"
                                            fill="#0855A2" />
                                        <path
                                            d="M5.97047 8.41C5.96047 8.41 5.95047 8.41 5.95047 8.41C4.15047 8.35 2.74047 6.89 2.73047 5.09C2.73047 3.25 4.23047 1.75 6.06047 1.75C7.89047 1.75 9.39047 3.25 9.39047 5.08C9.39047 6.89 7.98047 8.35 6.18047 8.41L5.97047 7.66L6.04047 8.41C6.02047 8.41 5.99047 8.41 5.97047 8.41ZM6.07047 6.91C6.13047 6.91 6.18047 6.91 6.24047 6.92C7.13047 6.88 7.91047 6.08 7.91047 5.09C7.91047 4.08 7.09047 3.25999 6.08047 3.25999C5.07047 3.25999 4.25047 4.08 4.25047 5.09C4.25047 6.07 5.01047 6.86 5.98047 6.92C5.99047 6.91 6.03047 6.91 6.07047 6.91Z"
                                            fill="#0855A2" />
                                        <path
                                            d="M5.96 15.78C4.73 15.78 3.55 15.45 2.64 14.85C1.76 14.26 1.25 13.41 1.25 12.51C1.25 11.62 1.76 10.77 2.64 10.18C3.84 9.38002 5.53 9.07003 7.16 9.36003C7.57 9.43003 7.84 9.82002 7.77 10.23C7.7 10.64 7.31 10.92 6.9 10.84C5.66 10.62 4.35 10.85 3.47 11.43C3 11.74 2.75 12.12 2.75 12.51C2.75 12.9 3.01 13.29 3.47 13.6C4.34 14.18 5.64 14.41 6.87 14.2C7.28 14.13 7.67 14.41 7.74 14.81C7.81 15.22 7.54 15.61 7.13 15.68C6.74 15.75 6.35 15.78 5.96 15.78Z"
                                            fill="#0855A2" />
                                        <path
                                            d="M12.0003 15.88C11.9703 15.88 11.9503 15.88 11.9203 15.88H11.8703C9.98031 15.82 8.57031 14.36 8.57031 12.56C8.57031 10.72 10.0703 9.22998 11.9003 9.22998C13.7303 9.22998 15.2303 10.73 15.2303 12.56C15.2203 14.37 13.8103 15.83 12.0103 15.89C12.0103 15.88 12.0103 15.88 12.0003 15.88ZM11.9003 10.72C10.8903 10.72 10.0703 11.54 10.0703 12.55C10.0703 13.54 10.8403 14.34 11.8303 14.38C11.8403 14.37 11.9203 14.37 12.0103 14.38C12.9803 14.33 13.7303 13.53 13.7403 12.55C13.7403 11.55 12.9203 10.72 11.9003 10.72Z"
                                            fill="#0855A2" />
                                        <path
                                            d="M11.9993 23.26C10.7993 23.26 9.5993 22.95 8.6693 22.32C7.7893 21.73 7.2793 20.89 7.2793 19.99C7.2793 19.1 7.7793 18.24 8.6693 17.65C10.5393 16.41 13.4693 16.41 15.3293 17.65C16.2093 18.24 16.7193 19.08 16.7193 19.98C16.7193 20.87 16.2193 21.73 15.3293 22.32C14.3993 22.94 13.1993 23.26 11.9993 23.26ZM9.4993 18.91C9.0293 19.22 8.7793 19.61 8.7793 20C8.7793 20.39 9.0393 20.77 9.4993 21.08C10.8493 21.99 13.1393 21.99 14.4893 21.08C14.9593 20.77 15.2093 20.38 15.2093 19.99C15.2093 19.6 14.9493 19.22 14.4893 18.91C13.1493 18 10.8593 18.01 9.4993 18.91Z"
                                            fill="#0855A2" />
                                    </svg>
                                </div>
                                <p className="snippet-head">User Friendly</p>
                                <p className="snippet-message">Made with you in mind, this product is easy to navigate even as a
                                    first time user.</p>
                            </div>
                            <div className="snippet">
                                <div className="snippet-icon">
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2.03009 12.92C2.39009 18.07 6.76009 22.26 11.9901 22.49C15.6801 22.65 18.9801 20.93 20.9601 18.22C21.7801 17.11 21.3401 16.37 19.9701 16.62C19.3001 16.74 18.6101 16.79 17.8901 16.76C13.0001 16.56 9.00009 12.47 8.98009 7.63996C8.97009 6.33996 9.24009 5.10996 9.73009 3.98996C10.2701 2.74996 9.62009 2.15996 8.37009 2.68996C4.41009 4.35996 1.70009 8.34996 2.03009 12.92Z"
                                            stroke="#0855A2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p className="snippet-head">Dark Theme</p>
                                <p className="snippet-message">Working at night? Reduce the strain <br />on your eyes, easily switch to
                                    dark mode.</p>
                            </div>
                            <div className="snippet">
                                <div className="snippet-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.09987 14.25L5.6667 13.9956L4.79987 17.25C4.66987 16.92 4.72987 16.53 4.94987 16.16L6.09987 14.25ZM6.09987 14.25C6.46987 13.62 6.76987 12.54 6.76987 11.81V8.92004C6.76987 6.02004 9.12987 3.67004 12.0199 3.67004C14.9199 3.67004 17.2699 6.02004 17.2699 8.92004V11.8C17.2699 12.53 17.5599 13.6 17.9399 14.25M6.09987 14.25L5.66952 13.9909C5.854 13.6823 5.99747 13.2874 6.094 12.9367C6.19107 12.5841 6.26987 12.1702 6.26987 11.81V8.92004C6.26987 5.75233 8.85215 3.17004 12.0199 3.17004C15.1876 3.17004 17.7699 5.75233 17.7699 8.92004V11.8V11.81C17.7699 12.1659 17.849 12.58 17.9452 12.9322C18.0415 13.285 18.1842 13.6826 18.3659 13.9935L17.9399 14.25M17.9399 14.25L18.3691 13.9991L5.62987 17.99C9.80987 19.39 14.2399 19.39 18.4199 17.99C18.7799 17.87 19.0599 17.6 19.1899 17.24C19.3199 16.88 19.2899 16.49 19.0899 16.16L17.9399 14.25Z" fill="#0855A2" stroke="#0855A2" strokeWidth="2" />
                                        <path d="M12.0306 2.18005C12.5724 2.18005 13.0569 2.41612 13.3771 2.81144C13.2428 2.78402 13.1094 2.76045 12.9772 2.74085L12.9681 2.7395L12.9589 2.73832C12.1876 2.63851 11.4269 2.65913 10.6921 2.80584C11.0139 2.41568 11.4965 2.18005 12.0306 2.18005Z" fill="#0855A2" stroke="#292D32" strokeWidth="2" />
                                        <mask id="path-3-inside-1_2095_7898" fill="white">
                                            <path d="M12.0195 22.8101C11.0295 22.8101 10.0695 22.4101 9.36953 21.7101C8.66953 21.0101 8.26953 20.0501 8.26953 19.0601H9.76953C9.76953 19.6501 10.0095 20.2301 10.4295 20.6501C10.8495 21.0701 11.4295 21.3101 12.0195 21.3101C13.2595 21.3101 14.2695 20.3001 14.2695 19.0601H15.7695C15.7695 21.1301 14.0895 22.8101 12.0195 22.8101Z" />
                                        </mask>
                                        <path d="M12.0195 22.8101C11.0295 22.8101 10.0695 22.4101 9.36953 21.7101C8.66953 21.0101 8.26953 20.0501 8.26953 19.0601H9.76953C9.76953 19.6501 10.0095 20.2301 10.4295 20.6501C10.8495 21.0701 11.4295 21.3101 12.0195 21.3101C13.2595 21.3101 14.2695 20.3001 14.2695 19.0601H15.7695C15.7695 21.1301 14.0895 22.8101 12.0195 22.8101Z" fill="#0855A2" />
                                        <path d="M8.26953 19.0601V17.0601H6.26953V19.0601H8.26953ZM9.76953 19.0601H11.7695V17.0601H9.76953V19.0601ZM14.2695 19.0601V17.0601H12.2695V19.0601H14.2695ZM15.7695 19.0601H17.7695V17.0601H15.7695V19.0601ZM12.0195 20.8101C11.5632 20.8101 11.1109 20.623 10.7837 20.2958L7.95532 23.1243C9.02812 24.1971 10.4959 24.8101 12.0195 24.8101V20.8101ZM10.7837 20.2958C10.4566 19.9687 10.2695 19.5164 10.2695 19.0601H6.26953C6.26953 20.5837 6.88251 22.0515 7.95532 23.1243L10.7837 20.2958ZM8.26953 21.0601H9.76953V17.0601H8.26953V21.0601ZM7.76953 19.0601C7.76953 20.1818 8.22117 21.2701 9.01532 22.0643L11.8437 19.2358C11.7979 19.19 11.7695 19.1183 11.7695 19.0601H7.76953ZM9.01532 22.0643C9.80946 22.8584 10.8978 23.3101 12.0195 23.3101V19.3101C11.9613 19.3101 11.8896 19.2817 11.8437 19.2358L9.01532 22.0643ZM12.0195 23.3101C14.3641 23.3101 16.2695 21.4046 16.2695 19.0601H12.2695C12.2695 19.1955 12.155 19.3101 12.0195 19.3101V23.3101ZM14.2695 21.0601H15.7695V17.0601H14.2695V21.0601ZM13.7695 19.0601C13.7695 20.0255 12.985 20.8101 12.0195 20.8101V24.8101C15.1941 24.8101 17.7695 22.2346 17.7695 19.0601H13.7695Z" fill="#0855A2" mask="url(#path-3-inside-1_2095_7898)" />
                                    </svg>
                                </div>
                                <p className="snippet-head">Get Notifications</p>
                                <p className="snippet-message">Get real time notifications when a school around yours updates their
                                    debtor list.</p>
                            </div>
                            <div className="snippet">
                                <div className="snippet-icon">
                                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 9C19 6.87827 18.1571 4.84344 16.6569 3.34315C15.1566 1.84285 13.1217 1 11 1C8.87827 1 6.84344 1.84285 5.34315 3.34315C3.84285 4.84344 3 6.87827 3 9"
                                            stroke="#0855A2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path
                                            d="M19 16V16.5C19 17.0304 18.7893 17.5391 18.4142 17.9142C18.0391 18.2893 17.5304 18.5 17 18.5H13.5M1 13.438V11.562C1.00007 11.116 1.1492 10.6828 1.4237 10.3313C1.69821 9.97982 2.08232 9.73015 2.515 9.622L4.255 9.186C4.34342 9.16398 4.43569 9.16238 4.52481 9.18134C4.61393 9.20029 4.69757 9.23929 4.76937 9.29539C4.84118 9.35148 4.89926 9.42319 4.93922 9.50508C4.97918 9.58697 4.99997 9.67688 5 9.768V15.231C5.00016 15.3223 4.97947 15.4124 4.93952 15.4946C4.89957 15.5767 4.84141 15.6486 4.76946 15.7048C4.69752 15.761 4.61369 15.8001 4.52436 15.819C4.43503 15.8379 4.34257 15.8362 4.254 15.814L2.514 15.379C2.08151 15.2707 1.69762 15.0209 1.42331 14.6694C1.149 14.3179 1.00001 13.8849 1 13.439V13.438ZM21 13.438V11.562C20.9999 11.116 20.8508 10.6828 20.5763 10.3313C20.3018 9.97982 19.9177 9.73015 19.485 9.622L17.745 9.186C17.6566 9.16398 17.5643 9.16238 17.4752 9.18134C17.3861 9.20029 17.3024 9.23929 17.2306 9.29539C17.1588 9.35148 17.1007 9.42319 17.0608 9.50508C17.0208 9.58697 17 9.67688 17 9.768V15.231C16.9999 15.3222 17.0206 15.4122 17.0604 15.4942C17.1003 15.5763 17.1584 15.6481 17.2302 15.7043C17.3021 15.7605 17.3857 15.7996 17.4749 15.8186C17.5641 15.8376 17.6565 15.836 17.745 15.814L19.485 15.379C19.9177 15.2708 20.3018 15.0212 20.5763 14.6697C20.8508 14.3182 20.9999 13.885 21 13.439V13.438Z"
                                            stroke="#0855A2" strokeWidth="2" />
                                        <path
                                            d="M12.5 20H9.5C9.10218 20 8.72064 19.842 8.43934 19.5607C8.15804 19.2794 8 18.8978 8 18.5C8 18.1022 8.15804 17.7206 8.43934 17.4393C8.72064 17.158 9.10218 17 9.5 17H12.5C12.8978 17 13.2794 17.158 13.5607 17.4393C13.842 17.7206 14 18.1022 14 18.5C14 18.8978 13.842 19.2794 13.5607 19.5607C13.2794 19.842 12.8978 20 12.5 20Z"
                                            stroke="#0855A2" strokeWidth="2" />
                                    </svg>
                                </div>
                                <p className="snippet-head">Fast Support</p>
                                <p className="snippet-message">You ran into an issue? contact out customer support available 24/7
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="welcome-contd">
                    <div className="welcome-section one">
                        <article>
                            <p className="welcome-sect-head">Accurate List Directory</p>
                            <p className="welcome-sect-body">My debtor enables you keep an accurate directory list of students/wards
                                owing the school.we also provide you with a place to manage debtor information. You can; add a
                                new debtor, view the debt status, attach a note to the debtors details
                                all this information is available to you at a glance.
                            </p>
                        </article>
                        <div className="welcome-contd-pic">
                            <img src={require("./img/Group 114.png")} alt="" />
                        </div>
                    </div>
                    <div className="welcome-section two">
                        <div className="welcome-contd-pic">
                            <img src={require("./img/unsplash_IrRbSND5EUc.png")} alt="" />
                        </div>
                        <article>
                            <p className="welcome-sect-head">Faster Debt Recovery</p>
                            <p className="welcome-sect-body">Work hand in hand with schools in your locality and share updates on
                                wards with pending debt. This ensures faster debt recovery and also reduces bad debt as parents
                                will be encouraged to settle old debts before moving on to another
                                school.
                            </p>
                        </article>
                    </div>
                    <div className="welcome-section three">
                        <article>
                            <p className="welcome-sect-head">Easily resolve collection disputes</p>
                            <p className="welcome-sect-body">Avoid the drama With our “contend debt” feature. it is easier to
                                resolve issues that come with collecting your debt as the entire process is automated for you
                                from alerting your debtor to resolving disputes this also helps you reach
                                out to more customers at a time.
                            </p>
                        </article>
                        <div className="welcome-contd-pic">
                            <img src={require("./img/Group 115.png")} alt="" />
                        </div>
                    </div>
                </div>
                <div className="schools">
                    <h2>What Schools using our platform <br />are saying</h2>
                    <div className="school-say">
                        <div className="school-card-left">
                            <div className="card-container left-top">
                                <div className="card1">
                                    <div className="card-header">
                                        <div className="school-pic"></div>
                                        <p className="school-person">Miss. Taiwo Odeyemi<br />Principal. Royal girls college
                                        </p>
                                    </div>
                                    <article className="card-body">
                                        <p>“ With my debtor, <br />we can list out everyone <br />that owes us they pay up
                                            faster when they<br />realise they could not go to other schools because <br />they
                                            can see thier debt history “
                                        </p>
                                    </article>
                                </div>
                            </div>
                            <div className="card-container left-bottom">
                                <div className="card2">
                                    <div className="card-header">
                                        <div className="school-pic"></div>
                                        <p className="school-person">Mrs. Jane Lambert<br />Director. British Grammer School
                                        </p>
                                    </div>
                                    <article className="card-body">
                                        <p>“ This platform has saved me a lot <br />of money, time and resources and i have
                                            <br />recovered debt a lot faster “
                                        </p>
                                    </article>
                                </div>
                            </div>
                        </div>
                        <div className="school-card-right">
                            <div className="card-container right-top">
                                <div className="card2">
                                    <div className="card-header">
                                        <div className="school-pic"></div>
                                        <p className="school-person">Doc. John Maduka<br />Primary school owner</p>
                                    </div>
                                    <article className="card-body">
                                        <p>“ My debtor has made it easier for <br />me to get my money back from parents “
                                        </p>
                                    </article>
                                </div>
                            </div>
                            <div className="card-container right-bottom">
                                <div className="card1">
                                    <div className="card-header">
                                        <div className="school-pic"></div>
                                        <p className="school-person">Mr. Gbemi Adura<br />School Bursar</p>
                                    </div>
                                    <article className="card-body">
                                        <p>“ With my debtor, <br />we can list out everyone <br />that owes us they pay up
                                            faster when they <br />realise they could not go to other schools because <br />they
                                            can see thier debt history “</p>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="try-debtor">
                    <h2>Try my debtor for free</h2>
                    <p>Set up your school's account, free forever and never worry<br />about a student with unpaid debt in your
                        school again.</p>
                    <button onClick={() => navigate('/signup')}>List Your School For Free!</button>
                </div>
                <div className="faq" id="faq">
                    <div className="faq-top">
                        <div className="faq-header">
                            <h2>Frequently Asked Questions</h2>
                            <p>If you have further questions, please contact us</p>
                        </div>
                    </div>
                    <div className="faq-bottom">
                        <div className="faq-bottom-container">
                            <div className="faq-left">
                                <button className="faq-closed">
                                    <p className="faq-question-head">What is my debtor</p>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 5.5V19.5" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                        <path d="M5 12.5H19" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <button className="faq-opened">
                                    <div className="faq-question">
                                        <p className="faq-question-head">Who can see and use information</p>
                                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12.5H19" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="faq-answer">
                                        <p className="faq-answer-body">Information provided by registered schools<br />can only be seen and accessed by other<br />schools registered with us.
                                            Information<br />gotten from the platform cannot be<br />copied or published elsewhere.</p>
                                    </div>
                                </button>
                            </div>
                            <div className="faq-right">
                                <button className="faq-closed">
                                    <p className="faq-question-head">Is the platform free to use?</p>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 5.5V19.5" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                        <path d="M5 12.5H19" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <button className="faq-closed">
                                    <p className="faq-question-head">Who can use my Debtor?</p>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 5.5V19.5" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                        <path d="M5 12.5H19" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <button className="faq-closed">
                                    <p className="faq-question-head">Who can use my Debtor?</p>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 5.5V19.5" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                        <path d="M5 12.5H19" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default LandingPage;