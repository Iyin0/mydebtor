import { useEffect, useRef, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import './css/login.css';

const Login = () => {

    const [confirmed, setConfirmed] = useState(false);
    const checkbox = useRef();
    const confirm_text = useRef();
    const password_len = useRef();
    const password_text = useRef();
    const pwd = useRef();
    const [schoolEmail, setSchoolEmail] = useState(''); // value for school email
    const [password, setPassword] = useState('');   // value for password
    const [showpwd, setShowpwd] = useState(false);
    const navigate = useNavigate();
    const schEmail = useRef();
    const schPwd = useRef();

    // const addSignupDetails = useDispatch();
    const email = 'firstexampleschool@gmail.com';
    const pass = 'firstexampleschool';

    useEffect(() => {
        setShowpwd(false);
    }, [])

    const login = () => {
        if (schoolEmail === '') {
            password_len.current.classList.add('password-err');
            password_text.current.innerText = "Email cannot be empty";
            schEmail.current.classList.add('login-error');
        }
        else if (schoolEmail.includes('@') === false || schoolEmail.includes('.') === false) {
            password_len.current.classList.add('password-err');
            password_text.current.innerText = "Email is invalid";
            schEmail.current.classList.add('login-error');
        }
        else if (password === '') {
            password_len.current.classList.add('password-err');
            password_text.current.innerText = "Password cannot be empty";
            schEmail.current.classList.remove('login-error');
            schPwd.current.classList.add('login-error');
        }
        else if (schoolEmail !== email || password !== pass) {
            password_len.current.classList.add('password-err');
            password_text.current.innerText = "Incorrect email and password";
            schEmail.current.classList.add('login-error');
            schPwd.current.classList.add('login-error');
        }
        else {
            password_len.current.classList.remove('password-err');
            schPwd.current.classList.remove('login-error');
            schEmail.current.classList.remove('login-error');

            setTimeout(() => navigate('/'), 1000)
        }
    }

    const togglePwdVisibility = () => {
        if (showpwd === false) {
            pwd.current.type = 'text'
        }
        else {
            pwd.current.type = 'password'
        }
        // console.log(showpwd)
    }
    return (
        <div className='login'>
            <div className="login-entry-image">
                <div className="login-image-cover">
                    <div className="login-entry-logo" >
                        <button className="login-home" onClick={() => navigate('/')}>
                            <svg width="189" height="56" viewBox="0 0 189 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M56 0H0V56H56V0ZM4.30769 51.6923V4.30769H51.6923V51.6923H4.30769ZM11.1139 17.4893C10.9719 17.3828 10.7693 17.4841 10.7693 17.6616V38.5539C10.7693 38.6728 10.8657 38.7693 10.9847 38.7693H14.8616C14.9806 38.7693 15.077 38.6728 15.077 38.5539V26.277C15.077 26.0995 15.2796 25.9982 15.4216 26.1046L21.4093 30.5954C21.4859 30.6529 21.5912 30.6529 21.6678 30.5954L27.6555 26.1046C27.7974 25.9982 28.0001 26.0995 28.0001 26.277V38.5539C28.0001 38.6728 28.0965 38.7693 28.2155 38.7693H36.6155C42.5631 38.7693 47.3847 33.9477 47.3847 28C47.3847 22.0524 42.5631 17.2308 36.6155 17.2308H32.3078L21.6678 25.2108C21.5912 25.2682 21.4859 25.2682 21.4093 25.2108L11.1139 17.4893ZM32.3078 34.2462V21.3231C32.3078 21.4421 32.4042 21.5385 32.5231 21.5385H36.6155C40.1841 21.5385 43.077 24.4314 43.077 28C43.077 31.5686 40.1841 34.4616 36.6155 34.4616H32.5231C32.4042 34.4616 32.3078 34.3651 32.3078 34.2462Z" fill="#FEFEFE" />
                                <path d="M64 35.7539V20.2462H66.6277L71.7538 30.5416L76.88 20.2462H79.5077V35.7539H76.7723V26.4923L72.2708 35.7539H71.2369L66.7354 26.4923V35.7539H64Z" fill="#FEFEFE" />
                                <path d="M85.0291 35.7539V29.4431L79.7307 20.2462H83.1553L86.5153 26.0831L89.8753 20.2462H93.2999L88.0014 29.4431V35.7539H85.0291Z" fill="#FEFEFE" />
                                <path d="M98.6895 35.7539V20.2462H103.708C103.83 20.2462 104.081 20.2498 104.462 20.2569C104.842 20.2641 105.209 20.2892 105.56 20.3323C106.81 20.4831 107.869 20.9175 108.737 21.6354C109.606 22.3534 110.266 23.2651 110.719 24.3708C111.171 25.4764 111.397 26.6862 111.397 28C111.397 29.3139 111.171 30.5236 110.719 31.6293C110.266 32.7349 109.606 33.6467 108.737 34.3646C107.869 35.0826 106.81 35.5169 105.56 35.6677C105.209 35.7108 104.842 35.7359 104.462 35.7431C104.081 35.7503 103.83 35.7539 103.708 35.7539H98.6895ZM101.662 32.9969H103.708C103.902 32.9969 104.164 32.9934 104.494 32.9862C104.824 32.9718 105.122 32.9395 105.388 32.8892C106.063 32.7528 106.612 32.4369 107.036 31.9416C107.466 31.4462 107.782 30.8503 107.983 30.1539C108.192 29.4575 108.296 28.7395 108.296 28C108.296 27.2246 108.188 26.4887 107.973 25.7923C107.764 25.0959 107.445 24.5072 107.014 24.0262C106.583 23.5451 106.041 23.24 105.388 23.1108C105.122 23.0534 104.824 23.021 104.494 23.0139C104.164 23.0067 103.902 23.0031 103.708 23.0031H101.662V32.9969Z" fill="#FEFEFE" />
                                <path d="M112.689 35.7539V20.2462H122.812V22.9816H115.618V26.2985H121.519V29.0339H115.618V33.0185H122.812V35.7539H112.689Z" fill="#FEFEFE" />
                                <path d="M124.101 35.7539V20.2462H130.304C131.409 20.2462 132.303 20.4687 132.985 20.9139C133.667 21.3518 134.166 21.9046 134.482 22.5723C134.798 23.24 134.956 23.9149 134.956 24.5969C134.956 25.4657 134.759 26.1872 134.364 26.7616C133.976 27.3359 133.441 27.72 132.759 27.9139V27.3754C133.728 27.5764 134.454 28.0251 134.935 28.7216C135.423 29.418 135.667 30.1969 135.667 31.0585C135.667 31.9846 135.495 32.7995 135.15 33.5031C134.813 34.2067 134.296 34.7595 133.599 35.1616C132.903 35.5564 132.027 35.7539 130.971 35.7539H124.101ZM127.073 32.9969H130.67C131.065 32.9969 131.417 32.9144 131.725 32.7492C132.034 32.5769 132.275 32.34 132.447 32.0385C132.626 31.7298 132.716 31.3672 132.716 30.9508C132.716 30.5846 132.641 30.258 132.49 29.9708C132.339 29.6836 132.109 29.4575 131.801 29.2923C131.499 29.12 131.122 29.0339 130.67 29.0339H127.073V32.9969ZM127.073 26.2985H130.261C130.591 26.2985 130.885 26.241 131.144 26.1262C131.402 26.0113 131.607 25.8354 131.758 25.5985C131.908 25.3544 131.984 25.0421 131.984 24.6616C131.984 24.1877 131.837 23.7892 131.542 23.4662C131.248 23.1431 130.821 22.9816 130.261 22.9816H127.073V26.2985Z" fill="#FEFEFE" />
                                <path d="M139.699 35.7539V22.9816H134.809V20.2462H147.517V22.9816H142.628V35.7539H139.699Z" fill="#FEFEFE" />
                                <path d="M154.611 36.0769C153.06 36.0769 151.721 35.7395 150.594 35.0646C149.474 34.3898 148.609 33.4457 147.998 32.2323C147.395 31.019 147.094 29.6082 147.094 28C147.094 26.3918 147.395 24.981 147.998 23.7677C148.609 22.5544 149.474 21.6103 150.594 20.9354C151.721 20.2605 153.06 19.9231 154.611 19.9231C156.162 19.9231 157.497 20.2605 158.617 20.9354C159.744 21.6103 160.609 22.5544 161.212 23.7677C161.823 24.981 162.128 26.3918 162.128 28C162.128 29.6082 161.823 31.019 161.212 32.2323C160.609 33.4457 159.744 34.3898 158.617 35.0646C157.497 35.7395 156.162 36.0769 154.611 36.0769ZM154.611 33.32C155.594 33.3344 156.413 33.1226 157.066 32.6846C157.72 32.2467 158.208 31.6257 158.531 30.8216C158.861 30.0175 159.026 29.0769 159.026 28C159.026 26.9231 158.861 25.9898 158.531 25.2C158.208 24.4103 157.72 23.7964 157.066 23.3585C156.413 22.9205 155.594 22.6944 154.611 22.68C153.627 22.6657 152.809 22.8775 152.155 23.3154C151.502 23.7534 151.01 24.3744 150.68 25.1785C150.357 25.9826 150.195 26.9231 150.195 28C150.195 29.0769 150.357 30.0103 150.68 30.8C151.01 31.5898 151.502 32.2036 152.155 32.6416C152.809 33.0795 153.627 33.3057 154.611 33.32Z" fill="#FEFEFE" />
                                <path d="M162.985 35.7539V20.2462H169.533C169.684 20.2462 169.885 20.2534 170.136 20.2677C170.394 20.2749 170.624 20.2964 170.825 20.3323C171.751 20.4759 172.509 20.781 173.098 21.2477C173.693 21.7144 174.131 22.3031 174.411 23.0139C174.691 23.7175 174.831 24.5036 174.831 25.3723C174.831 26.6718 174.508 27.7846 173.862 28.7108C173.216 29.6298 172.204 30.1969 170.825 30.4123L169.533 30.4985H165.914V35.7539H162.985ZM171.73 35.7539L168.671 29.4431L171.687 28.8616L175.047 35.7539H171.73ZM165.914 27.7631H169.404C169.554 27.7631 169.72 27.7559 169.899 27.7416C170.079 27.7272 170.244 27.6985 170.394 27.6554C170.789 27.5477 171.094 27.3682 171.31 27.1169C171.525 26.8585 171.672 26.5749 171.751 26.2662C171.838 25.9503 171.881 25.6523 171.881 25.3723C171.881 25.0923 171.838 24.798 171.751 24.4892C171.672 24.1734 171.525 23.8898 171.31 23.6385C171.094 23.38 170.789 23.1969 170.394 23.0892C170.244 23.0462 170.079 23.0175 169.899 23.0031C169.72 22.9887 169.554 22.9816 169.404 22.9816H165.914V27.7631Z" fill="#FEFEFE" />
                                <path d="M181.98 36.0769C180.832 36.0769 179.794 35.8759 178.868 35.4739C177.949 35.0646 177.192 34.4831 176.596 33.7292C176.007 32.9682 175.634 32.0636 175.476 31.0154L178.534 30.5631C178.75 31.4534 179.195 32.139 179.87 32.62C180.545 33.101 181.313 33.3416 182.174 33.3416C182.655 33.3416 183.122 33.2662 183.574 33.1154C184.027 32.9646 184.396 32.7421 184.684 32.4477C184.978 32.1534 185.125 31.7908 185.125 31.36C185.125 31.2021 185.1 31.0513 185.05 30.9077C185.007 30.7569 184.931 30.6169 184.824 30.4877C184.716 30.3585 184.561 30.2364 184.36 30.1216C184.167 30.0067 183.919 29.9026 183.617 29.8092L179.59 28.6246C179.288 28.5385 178.936 28.4164 178.534 28.2585C178.139 28.1005 177.755 27.8744 177.382 27.58C177.009 27.2857 176.696 26.898 176.445 26.4169C176.201 25.9287 176.079 25.3149 176.079 24.5754C176.079 23.5344 176.341 22.6692 176.865 21.98C177.389 21.2908 178.089 20.7775 178.965 20.44C179.841 20.1026 180.81 19.9375 181.873 19.9446C182.943 19.959 183.897 20.1421 184.737 20.4939C185.577 20.8457 186.281 21.359 186.848 22.0339C187.415 22.7016 187.825 23.52 188.076 24.4892L184.91 25.0277C184.795 24.5251 184.583 24.1016 184.274 23.7569C183.966 23.4123 183.596 23.1503 183.165 22.9708C182.741 22.7913 182.296 22.6944 181.83 22.68C181.37 22.6657 180.936 22.7303 180.527 22.8739C180.125 23.0103 179.794 23.2113 179.536 23.4769C179.285 23.7426 179.159 24.0585 179.159 24.4246C179.159 24.7621 179.263 25.0385 179.471 25.2539C179.679 25.4621 179.941 25.6308 180.257 25.76C180.573 25.8892 180.896 25.9969 181.227 26.0831L183.919 26.8154C184.321 26.9231 184.766 27.0667 185.254 27.2462C185.743 27.4185 186.209 27.6626 186.654 27.9785C187.107 28.2872 187.476 28.6964 187.764 29.2062C188.058 29.7159 188.205 30.3621 188.205 31.1446C188.205 31.9775 188.029 32.7062 187.677 33.3308C187.333 33.9482 186.866 34.4616 186.277 34.8708C185.689 35.2728 185.021 35.5744 184.274 35.7754C183.535 35.9764 182.77 36.0769 181.98 36.0769Z" fill="#FEFEFE" />
                            </svg>
                        </button>
                    </div>
                    <div className="login-entry-text">
                        <h1 className="login-entry-head">Increase profitability and manage
                            student debts as a school owner.</h1>
                        <p className="login-entry-body">Let My Debtor help you keep an accurate list directory
                            of wards in debt and debtor lists of schools in your locality.
                        </p>
                    </div>
                </div>
            </div>
            <div className="login-form-container" >
                <div className="login-logo">
                    <button className="login-home" onClick={() => navigate('/')}>
                        <svg width="120" height="35" viewBox="0 0 120 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M34.9029 0H0V34.9029H34.9029V0ZM2.68484 32.2181V2.68484H32.2181V32.2181H2.68484ZM7.05675 10.9977C6.91476 10.8913 6.71213 10.9926 6.71213 11.1701V23.9481C6.71213 24.067 6.80856 24.1635 6.92752 24.1635H9.18159C9.30054 24.1635 9.39697 24.067 9.39697 23.9481V16.5397C9.39697 16.3622 9.5996 16.2609 9.74159 16.3674L13.295 19.0325C13.3716 19.0899 13.4769 19.0899 13.5535 19.0325L17.1069 16.3674C17.2489 16.2609 17.4515 16.3622 17.4515 16.5397V23.9481C17.4515 24.067 17.5479 24.1635 17.6669 24.1635H22.8212C26.5282 24.1635 29.5333 21.1584 29.5333 17.4514C29.5333 13.7444 26.5282 10.7393 22.8212 10.7393H20.1363L13.5535 15.6764C13.4769 15.7339 13.3716 15.7339 13.295 15.6764L7.05675 10.9977ZM20.1363 21.2633V13.2087C20.1363 13.3277 20.2328 13.4241 20.3517 13.4241H22.8212C25.0454 13.4241 26.8484 15.2272 26.8484 17.4514C26.8484 19.6756 25.0454 21.4786 22.8212 21.4786H20.3517C20.2328 21.4786 20.1363 21.3822 20.1363 21.2633Z" fill="#0855A2" />
                            <path d="M42.3821 22.3321V12.6667H44.0199L47.2148 19.0835L50.4098 12.6667H52.0475V22.3321H50.3427V16.5597L47.537 22.3321H46.8926L44.087 16.5597V22.3321H42.3821Z" fill="#0855A2" />
                            <path d="M55.4888 22.3321V18.3988L52.1865 12.6667H54.3209L56.4151 16.3047L58.5093 12.6667H60.6437L57.3414 18.3988V22.3321H55.4888Z" fill="#0855A2" />
                            <path d="M64.0029 22.3321V12.6667H67.1308C67.2068 12.6667 67.3635 12.6689 67.6006 12.6734C67.8378 12.6779 68.066 12.6935 68.2852 12.7204C69.0639 12.8144 69.7239 13.0851 70.2653 13.5326C70.8068 13.98 71.2184 14.5483 71.5003 15.2374C71.7823 15.9265 71.9232 16.6805 71.9232 17.4994C71.9232 18.3183 71.7823 19.0723 71.5003 19.7614C71.2184 20.4505 70.8068 21.0188 70.2653 21.4663C69.7239 21.9137 69.0639 22.1844 68.2852 22.2784C68.066 22.3053 67.8378 22.3209 67.6006 22.3254C67.3635 22.3299 67.2068 22.3321 67.1308 22.3321H64.0029ZM65.8555 20.6138H67.1308C67.2516 20.6138 67.4149 20.6116 67.6208 20.6071C67.8266 20.5982 68.0123 20.578 68.1779 20.5467C68.5985 20.4617 68.9408 20.2648 69.2048 19.956C69.4733 19.6473 69.6702 19.2759 69.7955 18.8418C69.9252 18.4078 69.9901 17.9603 69.9901 17.4994C69.9901 17.0161 69.923 16.5575 69.7888 16.1234C69.659 15.6894 69.4599 15.3224 69.1914 15.0226C68.9229 14.7228 68.5851 14.5327 68.1779 14.4521C68.0123 14.4163 67.8266 14.3962 67.6208 14.3917C67.4149 14.3872 67.2516 14.385 67.1308 14.385H65.8555V20.6138Z" fill="#0855A2" />
                            <path d="M72.7281 22.3321V12.6667H79.0375V14.3716H74.5538V16.4389H78.2321V18.1438H74.5538V20.6272H79.0375V22.3321H72.7281Z" fill="#0855A2" />
                            <path d="M79.8409 22.3321V12.6667H83.707C84.3961 12.6667 84.9532 12.8054 85.3783 13.0828C85.8034 13.3558 86.1144 13.7004 86.3113 14.1165C86.5082 14.5327 86.6067 14.9533 86.6067 15.3784C86.6067 15.9198 86.4836 16.3695 86.2375 16.7275C85.9959 17.0855 85.6625 17.3249 85.2374 17.4457V17.1101C85.8415 17.2354 86.2934 17.5151 86.5932 17.9491C86.8975 18.3832 87.0497 18.8687 87.0497 19.4056C87.0497 19.9829 86.9423 20.4908 86.7275 20.9293C86.5172 21.3678 86.195 21.7124 85.7609 21.9629C85.3269 22.2091 84.781 22.3321 84.1232 22.3321H79.8409ZM81.6934 20.6138H83.9352C84.1813 20.6138 84.4006 20.5624 84.593 20.4594C84.7854 20.352 84.9353 20.2044 85.0427 20.0164C85.1546 19.824 85.2105 19.5981 85.2105 19.3385C85.2105 19.1103 85.1636 18.9067 85.0696 18.7277C84.9756 18.5487 84.8324 18.4078 84.64 18.3049C84.4521 18.1975 84.2171 18.1438 83.9352 18.1438H81.6934V20.6138ZM81.6934 16.4389H83.6802C83.886 16.4389 84.0695 16.4031 84.2306 16.3315C84.3917 16.2599 84.5192 16.1503 84.6132 16.0026C84.7071 15.8505 84.7541 15.6558 84.7541 15.4187C84.7541 15.1233 84.6624 14.875 84.4789 14.6736C84.2955 14.4722 84.0292 14.3716 83.6802 14.3716H81.6934V16.4389Z" fill="#0855A2" />
                            <path d="M89.5625 22.3321V14.3716H86.5152V12.6667H94.4355V14.3716H91.3882V22.3321H89.5625Z" fill="#0855A2" />
                            <path d="M98.8568 22.5335C97.8902 22.5335 97.0557 22.3232 96.3531 21.9025C95.6551 21.4819 95.1159 20.8935 94.7355 20.1373C94.3596 19.381 94.1717 18.5017 94.1717 17.4994C94.1717 16.4971 94.3596 15.6178 94.7355 14.8616C95.1159 14.1053 95.6551 13.5169 96.3531 13.0963C97.0557 12.6756 97.8902 12.4653 98.8568 12.4653C99.8233 12.4653 100.656 12.6756 101.354 13.0963C102.056 13.5169 102.595 14.1053 102.971 14.8616C103.352 15.6178 103.542 16.4971 103.542 17.4994C103.542 18.5017 103.352 19.381 102.971 20.1373C102.595 20.8935 102.056 21.4819 101.354 21.9025C100.656 22.3232 99.8233 22.5335 98.8568 22.5335ZM98.8568 20.8152C99.4698 20.8241 99.9799 20.6921 100.387 20.4192C100.794 20.1462 101.099 19.7591 101.3 19.258C101.506 18.7568 101.609 18.1706 101.609 17.4994C101.609 16.8282 101.506 16.2465 101.3 15.7543C101.099 15.262 100.794 14.8794 100.387 14.6065C99.9799 14.3335 99.4698 14.1926 98.8568 14.1836C98.2437 14.1747 97.7336 14.3067 97.3264 14.5796C96.9192 14.8526 96.6127 15.2397 96.4068 15.7408C96.2055 16.242 96.1048 16.8282 96.1048 17.4994C96.1048 18.1706 96.2055 18.7523 96.4068 19.2445C96.6127 19.7368 96.9192 20.1194 97.3264 20.3923C97.7336 20.6653 98.2437 20.8062 98.8568 20.8152Z" fill="#0855A2" />
                            <path d="M104.076 22.3321V12.6667H108.157C108.251 12.6667 108.376 12.6712 108.533 12.6801C108.694 12.6846 108.837 12.698 108.963 12.7204C109.54 12.8099 110.012 13.0001 110.379 13.2909C110.75 13.5818 111.023 13.9487 111.198 14.3917C111.372 14.8302 111.46 15.3202 111.46 15.8617C111.46 16.6716 111.258 17.3652 110.855 17.9424C110.453 18.5152 109.822 18.8687 108.963 19.0029L108.157 19.0566H105.902V22.3321H104.076ZM109.526 22.3321L107.62 18.3988L109.5 18.0364L111.594 22.3321H109.526ZM105.902 17.3517H108.077C108.171 17.3517 108.274 17.3473 108.385 17.3383C108.497 17.3294 108.6 17.3115 108.694 17.2846C108.94 17.2175 109.13 17.1056 109.265 16.949C109.399 16.7879 109.491 16.6112 109.54 16.4188C109.594 16.2219 109.62 16.0362 109.62 15.8617C109.62 15.6871 109.594 15.5037 109.54 15.3113C109.491 15.1144 109.399 14.9376 109.265 14.781C109.13 14.6199 108.94 14.5058 108.694 14.4387C108.6 14.4118 108.497 14.3939 108.385 14.385C108.274 14.376 108.171 14.3716 108.077 14.3716H105.902V17.3517Z" fill="#0855A2" />
                            <path d="M115.915 22.5335C115.199 22.5335 114.553 22.4082 113.976 22.1576C113.403 21.9025 112.931 21.5401 112.559 21.0702C112.192 20.5959 111.96 20.0321 111.861 19.3788L113.767 19.0969C113.902 19.6518 114.179 20.0791 114.6 20.3789C115.02 20.6787 115.499 20.8286 116.036 20.8286C116.336 20.8286 116.627 20.7816 116.909 20.6877C117.191 20.5937 117.421 20.455 117.6 20.2715C117.784 20.088 117.875 19.8621 117.875 19.5936C117.875 19.4951 117.86 19.4012 117.828 19.3117C117.801 19.2177 117.754 19.1304 117.687 19.0499C117.62 18.9694 117.524 18.8933 117.399 18.8217C117.278 18.7501 117.124 18.6852 116.936 18.627L114.425 17.8887C114.237 17.835 114.018 17.7589 113.767 17.6605C113.521 17.5621 113.282 17.4211 113.049 17.2376C112.817 17.0542 112.622 16.8125 112.465 16.5127C112.313 16.2084 112.237 15.8259 112.237 15.365C112.237 14.7161 112.4 14.1769 112.727 13.7473C113.054 13.3178 113.49 12.9978 114.036 12.7875C114.582 12.5772 115.186 12.4743 115.848 12.4788C116.515 12.4877 117.11 12.6018 117.634 12.8211C118.157 13.0403 118.596 13.3603 118.949 13.7809C119.303 14.1971 119.558 14.7072 119.714 15.3113L117.741 15.6469C117.669 15.3336 117.537 15.0696 117.345 14.8548C117.153 14.6401 116.922 14.4767 116.654 14.3649C116.39 14.253 116.112 14.1926 115.821 14.1836C115.535 14.1747 115.264 14.215 115.009 14.3044C114.759 14.3895 114.553 14.5148 114.392 14.6803C114.235 14.8459 114.157 15.0428 114.157 15.271C114.157 15.4813 114.222 15.6536 114.351 15.7878C114.481 15.9176 114.645 16.0227 114.841 16.1033C115.038 16.1838 115.24 16.251 115.445 16.3047L117.124 16.7611C117.374 16.8282 117.652 16.9177 117.956 17.0296C118.26 17.137 118.551 17.2891 118.828 17.486C119.11 17.6784 119.341 17.9335 119.52 18.2512C119.703 18.5689 119.795 18.9716 119.795 19.4593C119.795 19.9784 119.685 20.4326 119.466 20.8219C119.251 21.2067 118.96 21.5267 118.593 21.7817C118.227 22.0323 117.81 22.2202 117.345 22.3455C116.884 22.4708 116.408 22.5335 115.915 22.5335Z" fill="#0855A2" />
                        </svg>
                    </button>
                </div>
                <h1 className="login-head">Welcome Back</h1>
                <p className="login-text">Welcome back! please enter your details.</p>
                <div className="login-invalid" ref={password_len}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#FEFEFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 8V13" stroke="#FEFEFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11.9945 16H12.0035" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="login-invalid-text" ref={password_text}></p>
                </div>
                <form action="" className='login-form'>
                    <label htmlFor="" className="login-label">Email Address</label><br />
                    <input type="text" className="login-input" ref={schEmail} value={schoolEmail}
                        placeholder="Myschoolemail@gmail.com"
                        onChange={(e) => setSchoolEmail(e.target.value)} /><br />
                    <label htmlFor="" className="login-label">Password</label><br />
                    <div className="login-input login-pswd" ref={schPwd} >
                        <input type="password" value={password}
                            placeholder="*****************"
                            onChange={(e) => setPassword(e.target.value)} ref={pwd} />
                        <button className="login-showpwd" onClick={(e) => { e.preventDefault(); setShowpwd(!showpwd); togglePwdVisibility() }}>
                            {showpwd ? (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.53 9.46998L9.47004 14.53C8.82004 13.88 8.42004 12.99 8.42004 12C8.42004 10.02 10.02 8.41998 12 8.41998C12.99 8.41998 13.88 8.81998 14.53 9.46998Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M17.82 5.76998C16.07 4.44998 14.07 3.72998 12 3.72998C8.46997 3.72998 5.17997 5.80998 2.88997 9.40998C1.98997 10.82 1.98997 13.19 2.88997 14.6C3.67997 15.84 4.59997 16.91 5.59997 17.77" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8.42004 19.53C9.56004 20.01 10.77 20.27 12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39999C20.78 8.87999 20.42 8.38999 20.05 7.92999" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.5104 12.7C15.2504 14.11 14.1004 15.26 12.6904 15.52" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.47 14.53L2 22" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M22.0003 2L14.5303 9.47" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            ) : (
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.5799 12.5824C15.5799 14.5624 13.9799 16.1624 11.9999 16.1624C10.0199 16.1624 8.41992 14.5624 8.41992 12.5824C8.41992 10.6024 10.0199 9.00244 11.9999 9.00244C13.9799 9.00244 15.5799 10.6024 15.5799 12.5824Z" stroke="#0C0C0C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.9998 20.8527C15.5298 20.8527 18.8198 18.7727 21.1098 15.1727C22.0098 13.7627 22.0098 11.3927 21.1098 9.98273C18.8198 6.38273 15.5298 4.30273 11.9998 4.30273C8.46984 4.30273 5.17984 6.38273 2.88984 9.98273C1.98984 11.3927 1.98984 13.7627 2.88984 15.1727C5.17984 18.7727 8.46984 20.8527 11.9998 20.8527Z" stroke="#0C0C0C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )}
                        </button>
                    </div> <br />
                    <div className="login-remember">
                        <div className="valid">
                            <label htmlFor="validate">
                                <input type="checkbox" name="validate" id="validate" value="validate" ref={checkbox} />
                                <span id="valid"
                                    onClick={() => {
                                        setConfirmed(!confirmed);
                                        checkbox.current.checked = confirmed
                                    }}>
                                    <svg width="15" height="11" viewBox="0 0 15 11" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.30333 7.66083L12.9633 0L14.1425 1.17833L5.30333 10.0175L0 4.71417L1.17833 3.53583L5.30333 7.66083Z"
                                            fill="white" />
                                    </svg>
                                </span>
                            </label>
                            <p ref={confirm_text}>Remember me</p>
                        </div>
                        <Link className="forgot-pwd" to='/forgot-password'>Forgot Password?</Link>
                    </div>
                    <div className="login-bottom">
                        <button className="login-btn" onClick={(e) => { login(); e.preventDefault() }}>Login</button>
                        <p className="already-user">Don't have an account? <Link to='/signup'>Sign up</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;