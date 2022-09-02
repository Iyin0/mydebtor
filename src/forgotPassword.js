import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/forgotPassword.css'

const ForgotPassword = () => {

    const pwd_err = useRef();
    const email_input = useRef();
    const pwd = useRef();
    const cpwd = useRef();
    const [password, setPassword] = useState('');   // value for password
    const [cpassword, setCPassword] = useState(''); // value for confirm password
    const [showpwd, setShowpwd] = useState(false);
    const [cshowpwd, setCShowpwd] = useState(false);
    const navigate = useNavigate();
    const [first, setFirst] = useState(true);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [invalidPwd, setInvalidPwd] = useState(false);
    const [email, setEmail] = useState("");

    const togglePwdVisibility = () => {
        if (showpwd === false) {
            pwd.current.type = 'text'
        }
        else {
            pwd.current.type = 'password'
        }
    }

    const toggleCPwdVisibility = () => {
        if (cshowpwd === false) {
            cpwd.current.type = 'text'
        }
        else {
            cpwd.current.type = 'password'
        }
    }

    const navFirst = () => {
        if (email === '') {
            email_input.current.classList.add('reset-email-err');
            setInvalidEmail(true);
        }
        else if (email.includes('@') === false || email.includes('.') === false) {
            email_input.current.classList.add('reset-email-err');
            setInvalidEmail(true);
        }
        else {
            email_input.current.classList.remove('reset-email-err');
            setFirst(false);
            setSecond(true);
            setInvalidEmail(false);
        }
    }

    const navSecond = () => {
        setSecond(false);
        setThird(true);
    }

    const resetPwd = () => {
        if (password === '' || cpassword === '') {
            setInvalidPwd(true)
            setTimeout(() => {
                pwd_err.current.innerText = "Input cannot be empty";
            }, 5)
        }
        else if (password.length < 8 || cpassword.length < 8) {
            setInvalidPwd(true)
            setTimeout(() => {
                pwd_err.current.innerText = "Password must be at least 8 characters";
            }, 5)
        }
        else if (password !== cpassword) {
            setInvalidPwd(true)
            setTimeout(() => {
                pwd_err.current.innerText = "Password does not match";
            }, 5)
        }
        else {
            navigate('/login')
        }
    }

    return (
        <div className="forgot-password">
            <div className="forgot-logo">
                <svg width="214" height="64" viewBox="0 0 214 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M63.3372 0H0V63.3372H63.3372V0ZM4.87209 58.4651V4.87209H58.4651V58.4651H4.87209ZM12.5701 19.7807C12.4095 19.6603 12.1803 19.7749 12.1803 19.9756V43.6052C12.1803 43.7398 12.2894 43.8489 12.4239 43.8489H16.8088C16.9433 43.8489 17.0524 43.7398 17.0524 43.6052V29.7198C17.0524 29.519 17.2816 29.4045 17.4422 29.5249L24.2144 34.6041C24.301 34.669 24.4201 34.669 24.5067 34.6041L31.2789 29.5249C31.4395 29.4045 31.6687 29.519 31.6687 29.7198V43.6052C31.6687 43.7398 31.7777 43.8489 31.9123 43.8489H41.4128C48.1398 43.8489 53.5931 38.3956 53.5931 31.6686C53.5931 24.9417 48.1398 19.4884 41.4128 19.4884H36.5407L24.5067 28.5139C24.4201 28.5789 24.301 28.5789 24.2144 28.5139L12.5701 19.7807ZM36.5407 38.7332V24.1169C36.5407 24.2514 36.6498 24.3605 36.7844 24.3605H41.4128C45.449 24.3605 48.721 27.6325 48.721 31.6686C48.721 35.7048 45.449 38.9768 41.4128 38.9768H36.7844C36.6498 38.9768 36.5407 38.8677 36.5407 38.7332Z" fill="#0A66C2" />
                    <path d="M73.1543 40.4384V22.8989H76.1263L81.9241 34.5431L87.7218 22.8989H90.6938V40.4384H87.6V29.9634L82.5087 40.4384H81.3394L76.2481 29.9634V40.4384H73.1543Z" fill="#0A66C2" />
                    <path d="M96.9387 40.4384V33.3008L90.946 22.8989H94.8193L98.6195 29.5005L102.42 22.8989H106.293L100.3 33.3008V40.4384H96.9387Z" fill="#0A66C2" />
                    <path d="M112.389 40.4384V22.8989H118.065C118.203 22.8989 118.487 22.9029 118.917 22.911C119.348 22.9192 119.762 22.9476 120.16 22.9963C121.573 23.1668 122.771 23.6581 123.753 24.4701C124.736 25.2821 125.483 26.3134 125.994 27.5639C126.506 28.8144 126.762 30.1826 126.762 31.6686C126.762 33.1546 126.506 34.5228 125.994 35.7734C125.483 37.0239 124.736 38.0551 123.753 38.8671C122.771 39.6791 121.573 40.1704 120.16 40.3409C119.762 40.3897 119.348 40.4181 118.917 40.4262C118.487 40.4343 118.203 40.4384 118.065 40.4384H112.389ZM115.751 37.3202H118.065C118.284 37.3202 118.581 37.3162 118.954 37.3081C119.328 37.2918 119.665 37.2553 119.965 37.1984C120.728 37.0442 121.349 36.6869 121.829 36.1266C122.316 35.5663 122.673 34.8923 122.9 34.1047C123.136 33.317 123.254 32.505 123.254 31.6686C123.254 30.7916 123.132 29.9593 122.888 29.1717C122.653 28.384 122.291 27.7182 121.804 27.1741C121.317 26.6301 120.704 26.285 119.965 26.1388C119.665 26.0738 119.328 26.0373 118.954 26.0292C118.581 26.0211 118.284 26.017 118.065 26.017H115.751V37.3202Z" fill="#0A66C2" />
                    <path d="M128.222 40.4384V22.8989H139.672V25.9926H131.535V29.7441H138.21V32.8379H131.535V37.3446H139.672V40.4384H128.222Z" fill="#0A66C2" />
                    <path d="M141.129 40.4384V22.8989H148.145C149.396 22.8989 150.407 23.1506 151.178 23.654C151.95 24.1494 152.514 24.7746 152.871 25.5298C153.228 26.285 153.407 27.0483 153.407 27.8197C153.407 28.8022 153.184 29.6183 152.737 30.2679C152.299 30.9175 151.694 31.3519 150.922 31.5712V30.9622C152.019 31.1895 152.839 31.697 153.383 32.4847C153.935 33.2723 154.211 34.1534 154.211 35.1278C154.211 36.1753 154.016 37.0969 153.626 37.8927C153.245 38.6885 152.66 39.3137 151.872 39.7685C151.085 40.2151 150.094 40.4384 148.9 40.4384H141.129ZM144.491 37.3202H148.559C149.006 37.3202 149.404 37.2269 149.753 37.0401C150.102 36.8452 150.374 36.5772 150.569 36.2362C150.772 35.887 150.874 35.477 150.874 35.006C150.874 34.5919 150.788 34.2224 150.618 33.8976C150.447 33.5728 150.187 33.317 149.838 33.1302C149.497 32.9354 149.071 32.8379 148.559 32.8379H144.491V37.3202ZM144.491 29.7441H148.097C148.47 29.7441 148.803 29.6792 149.095 29.5493C149.388 29.4193 149.619 29.2204 149.79 28.9524C149.96 28.6763 150.045 28.3231 150.045 27.8927C150.045 27.3568 149.879 26.9061 149.546 26.5407C149.213 26.1753 148.73 25.9926 148.097 25.9926H144.491V29.7441Z" fill="#0A66C2" />
                    <path d="M158.771 40.4384V25.9926H153.241V22.8989H167.614V25.9926H162.084V40.4384H158.771Z" fill="#0A66C2" />
                    <path d="M175.637 40.8038C173.883 40.8038 172.369 40.4221 171.094 39.6588C169.827 38.8955 168.849 37.8277 168.158 36.4554C167.476 35.0831 167.135 33.4875 167.135 31.6686C167.135 29.8497 167.476 28.2541 168.158 26.8818C168.849 25.5095 169.827 24.4417 171.094 23.6784C172.369 22.9151 173.883 22.5334 175.637 22.5334C177.391 22.5334 178.901 22.9151 180.168 23.6784C181.443 24.4417 182.421 25.5095 183.103 26.8818C183.794 28.2541 184.139 29.8497 184.139 31.6686C184.139 33.4875 183.794 35.0831 183.103 36.4554C182.421 37.8277 181.443 38.8955 180.168 39.6588C178.901 40.4221 177.391 40.8038 175.637 40.8038ZM175.637 37.6856C176.749 37.7019 177.675 37.4623 178.414 36.967C179.153 36.4717 179.705 35.7693 180.071 34.8598C180.444 33.9504 180.631 32.8866 180.631 31.6686C180.631 30.4506 180.444 29.395 180.071 28.5018C179.705 27.6085 179.153 26.9143 178.414 26.4189C177.675 25.9236 176.749 25.6678 175.637 25.6516C174.525 25.6353 173.599 25.8749 172.86 26.3702C172.121 26.8655 171.565 27.5679 171.191 28.4774C170.826 29.3869 170.643 30.4506 170.643 31.6686C170.643 32.8866 170.826 33.9423 171.191 34.8355C171.565 35.7287 172.121 36.423 172.86 36.9183C173.599 37.4136 174.525 37.6694 175.637 37.6856Z" fill="#0A66C2" />
                    <path d="M185.109 40.4384V22.8989H192.514C192.685 22.8989 192.912 22.907 193.196 22.9232C193.489 22.9313 193.748 22.9557 193.976 22.9963C195.023 23.1587 195.88 23.5038 196.546 24.0316C197.22 24.5594 197.715 25.2253 198.032 26.0292C198.349 26.8249 198.507 27.7141 198.507 28.6966C198.507 30.1664 198.141 31.425 197.411 32.4725C196.68 33.5119 195.535 34.1534 193.976 34.397L192.514 34.4944H188.422V40.4384H185.109ZM194.999 40.4384L191.54 33.3008L194.95 32.643L198.75 40.4384H194.999ZM188.422 31.4007H192.368C192.539 31.4007 192.725 31.3925 192.928 31.3763C193.131 31.36 193.318 31.3276 193.489 31.2788C193.935 31.157 194.28 30.954 194.524 30.6698C194.768 30.3775 194.934 30.0568 195.023 29.7076C195.121 29.3503 195.17 29.0133 195.17 28.6966C195.17 28.38 195.121 28.047 195.023 27.6979C194.934 27.3406 194.768 27.0198 194.524 26.7356C194.28 26.4433 193.935 26.2362 193.489 26.1144C193.318 26.0657 193.131 26.0332 192.928 26.017C192.725 26.0008 192.539 25.9926 192.368 25.9926H188.422V31.4007Z" fill="#0A66C2" />
                    <path d="M206.593 40.8038C205.293 40.8038 204.12 40.5764 203.073 40.1217C202.033 39.6588 201.177 39.0011 200.503 38.1485C199.837 37.2878 199.414 36.2646 199.236 35.0791L202.695 34.5675C202.939 35.5744 203.442 36.3499 204.205 36.8939C204.969 37.438 205.837 37.71 206.812 37.71C207.356 37.71 207.884 37.6247 208.395 37.4542C208.907 37.2837 209.325 37.032 209.65 36.699C209.983 36.3661 210.149 35.9561 210.149 35.4688C210.149 35.2902 210.121 35.1197 210.064 34.9573C210.015 34.7868 209.93 34.6284 209.808 34.4822C209.686 34.3361 209.512 34.198 209.284 34.0681C209.065 33.9382 208.785 33.8205 208.444 33.7149L203.889 32.3751C203.548 32.2776 203.15 32.1396 202.695 31.9609C202.248 31.7823 201.814 31.5265 201.392 31.1936C200.969 30.8607 200.616 30.4222 200.332 29.8781C200.056 29.326 199.918 28.6317 199.918 27.7953C199.918 26.6179 200.214 25.6394 200.807 24.8599C201.4 24.0803 202.192 23.4997 203.182 23.1181C204.173 22.7364 205.269 22.5497 206.471 22.5578C207.681 22.574 208.761 22.7811 209.711 23.179C210.661 23.5769 211.457 24.1575 212.098 24.9208C212.74 25.6759 213.202 26.6016 213.487 27.6979L209.906 28.3069C209.776 27.7385 209.536 27.2594 209.187 26.8696C208.838 26.4798 208.42 26.1835 207.932 25.9805C207.453 25.7774 206.95 25.6678 206.422 25.6516C205.902 25.6353 205.411 25.7084 204.948 25.8708C204.494 26.0251 204.12 26.2525 203.828 26.5529C203.544 26.8534 203.401 27.2107 203.401 27.6248C203.401 28.0064 203.519 28.3191 203.755 28.5627C203.99 28.7981 204.287 28.989 204.644 29.1351C205.001 29.2813 205.367 29.4031 205.74 29.5005L208.785 30.3288C209.24 30.4506 209.743 30.613 210.295 30.816C210.848 31.0109 211.375 31.287 211.879 31.6443C212.39 31.9934 212.809 32.4563 213.133 33.0328C213.466 33.6093 213.633 34.3401 213.633 35.2252C213.633 36.1672 213.434 36.9914 213.036 37.6978C212.646 38.3962 212.118 38.9767 211.453 39.4396C210.787 39.8943 210.032 40.2354 209.187 40.4627C208.351 40.6901 207.486 40.8038 206.593 40.8038Z" fill="#0A66C2" />
                </svg>
            </div>
            <div className="reset-section-container">
                {first ? (
                    <div className="reset-section">
                        <div className="reset-close">
                            <button className="reset-close-btn" onClick={() => navigate('/login')}>
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.478823 1.33368C0.173726 1.02858 0.173726 0.53392 0.478823 0.228823C0.78392 -0.0762743 1.27858 -0.0762743 1.58368 0.228823L9.625 8.27015L17.6663 0.228823C17.9714 -0.0762743 18.4661 -0.0762743 18.7712 0.228823C19.0763 0.53392 19.0763 1.02858 18.7712 1.33368L10.7299 9.375L18.7712 17.4163C19.0763 17.7214 19.0763 18.2161 18.7712 18.5212C18.4661 18.8263 17.9714 18.8263 17.6663 18.5212L9.625 10.4799L1.58368 18.5212C1.27858 18.8263 0.783921 18.8263 0.478824 18.5212C0.173727 18.2161 0.173727 17.7214 0.478824 17.4163L8.52015 9.375L0.478823 1.33368Z" fill="#292929" />
                                </svg>
                            </button>
                        </div>
                        <div className="reset-content">
                            <h2 className="reset-head">Forgot your password?</h2>
                            <p className="reset-text">Enter the email linked to this account to reset your password.</p>
                            <form action="" className="reset-form">
                                <label htmlFor="" className="reset-email">Email</label><br />
                                <input type="text" className="reset-input" value={email}
                                    onChange={(e) => setEmail(e.target.value)} ref={email_input}
                                    placeholder='firstexamplecollege@gmail.com' /><br />
                                {invalidEmail ? (
                                    <div className="reset-invalid-email">
                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.11357 10.5491C5.9869 10.5491 5.86023 10.5025 5.76023 10.4025C5.5669 10.2091 5.5669 9.88913 5.76023 9.6958L9.53357 5.92247C9.7269 5.72913 10.0469 5.72913 10.2402 5.92247C10.4336 6.1158 10.4336 6.4358 10.2402 6.62913L6.4669 10.4025C6.37357 10.5025 6.24023 10.5491 6.11357 10.5491Z" fill="#FF4040" />
                                            <path d="M9.8869 10.5491C9.76023 10.5491 9.63357 10.5025 9.53357 10.4025L5.76023 6.62913C5.5669 6.4358 5.5669 6.1158 5.76023 5.92247C5.95357 5.72913 6.27357 5.72913 6.4669 5.92247L10.2402 9.6958C10.4336 9.88913 10.4336 10.2091 10.2402 10.4025C10.1402 10.5025 10.0136 10.5491 9.8869 10.5491Z" fill="#FF4040" />
                                            <path d="M9.99967 15.3293H5.99967C2.37967 15.3293 0.833008 13.7826 0.833008 10.1626V6.16264C0.833008 2.54264 2.37967 0.995972 5.99967 0.995972H9.99967C13.6197 0.995972 15.1663 2.54264 15.1663 6.16264V10.1626C15.1663 13.7826 13.6197 15.3293 9.99967 15.3293ZM5.99967 1.99597C2.92634 1.99597 1.83301 3.0893 1.83301 6.16264V10.1626C1.83301 13.236 2.92634 14.3293 5.99967 14.3293H9.99967C13.073 14.3293 14.1663 13.236 14.1663 10.1626V6.16264C14.1663 3.0893 13.073 1.99597 9.99967 1.99597H5.99967Z" fill="#FF4040" />
                                            <path d="M6.11357 10.5491C5.9869 10.5491 5.86023 10.5025 5.76023 10.4025C5.5669 10.2091 5.5669 9.88913 5.76023 9.6958L9.53357 5.92247C9.7269 5.72913 10.0469 5.72913 10.2402 5.92247C10.4336 6.1158 10.4336 6.4358 10.2402 6.62913L6.4669 10.4025C6.37357 10.5025 6.24023 10.5491 6.11357 10.5491Z" fill="#FF4040" />
                                            <path d="M9.8869 10.5491C9.76023 10.5491 9.63357 10.5025 9.53357 10.4025L5.76023 6.62913C5.5669 6.4358 5.5669 6.1158 5.76023 5.92247C5.95357 5.72913 6.27357 5.72913 6.4669 5.92247L10.2402 9.6958C10.4336 9.88913 10.4336 10.2091 10.2402 10.4025C10.1402 10.5025 10.0136 10.5491 9.8869 10.5491Z" fill="#FF4040" />
                                            <path d="M9.99967 15.3293H5.99967C2.37967 15.3293 0.833008 13.7826 0.833008 10.1626V6.16264C0.833008 2.54264 2.37967 0.995972 5.99967 0.995972H9.99967C13.6197 0.995972 15.1663 2.54264 15.1663 6.16264V10.1626C15.1663 13.7826 13.6197 15.3293 9.99967 15.3293ZM5.99967 1.99597C2.92634 1.99597 1.83301 3.0893 1.83301 6.16264V10.1626C1.83301 13.236 2.92634 14.3293 5.99967 14.3293H9.99967C13.073 14.3293 14.1663 13.236 14.1663 10.1626V6.16264C14.1663 3.0893 13.073 1.99597 9.99967 1.99597H5.99967Z" fill="#FF4040" />
                                            <path d="M6.11357 10.5491C5.9869 10.5491 5.86023 10.5025 5.76023 10.4025C5.5669 10.2091 5.5669 9.88913 5.76023 9.6958L9.53357 5.92247C9.7269 5.72913 10.0469 5.72913 10.2402 5.92247C10.4336 6.1158 10.4336 6.4358 10.2402 6.62913L6.4669 10.4025C6.37357 10.5025 6.24023 10.5491 6.11357 10.5491Z" fill="#FF4040" />
                                            <path d="M9.8869 10.5491C9.76023 10.5491 9.63357 10.5025 9.53357 10.4025L5.76023 6.62913C5.5669 6.4358 5.5669 6.1158 5.76023 5.92247C5.95357 5.72913 6.27357 5.72913 6.4669 5.92247L10.2402 9.6958C10.4336 9.88913 10.4336 10.2091 10.2402 10.4025C10.1402 10.5025 10.0136 10.5491 9.8869 10.5491Z" fill="#FF4040" />
                                            <path d="M9.99967 15.3293H5.99967C2.37967 15.3293 0.833008 13.7826 0.833008 10.1626V6.16264C0.833008 2.54264 2.37967 0.995972 5.99967 0.995972H9.99967C13.6197 0.995972 15.1663 2.54264 15.1663 6.16264V10.1626C15.1663 13.7826 13.6197 15.3293 9.99967 15.3293ZM5.99967 1.99597C2.92634 1.99597 1.83301 3.0893 1.83301 6.16264V10.1626C1.83301 13.236 2.92634 14.3293 5.99967 14.3293H9.99967C13.073 14.3293 14.1663 13.236 14.1663 10.1626V6.16264C14.1663 3.0893 13.073 1.99597 9.99967 1.99597H5.99967Z" fill="#FF4040" />
                                        </svg>
                                        <p className="invalid-email-text">Invalid email</p>
                                    </div>
                                ) : (null)}
                                <button className="reset-submit" onClick={(e) => { e.preventDefault(); navFirst() }}>Continue</button>
                            </form>
                            <p className="reset-signup-text">Don't have an account? <Link className='reset-signup' to='/signup'>Sign up</Link></p>
                        </div>
                    </div>
                ) : (null)}

                {second ? (
                    <div className="reset-section2">
                        <div className="reset-close">
                            <button className="reset-close-btn" onClick={() => navigate('/login')}>
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.478823 1.33368C0.173726 1.02858 0.173726 0.53392 0.478823 0.228823C0.78392 -0.0762743 1.27858 -0.0762743 1.58368 0.228823L9.625 8.27015L17.6663 0.228823C17.9714 -0.0762743 18.4661 -0.0762743 18.7712 0.228823C19.0763 0.53392 19.0763 1.02858 18.7712 1.33368L10.7299 9.375L18.7712 17.4163C19.0763 17.7214 19.0763 18.2161 18.7712 18.5212C18.4661 18.8263 17.9714 18.8263 17.6663 18.5212L9.625 10.4799L1.58368 18.5212C1.27858 18.8263 0.783921 18.8263 0.478824 18.5212C0.173727 18.2161 0.173727 17.7214 0.478824 17.4163L8.52015 9.375L0.478823 1.33368Z" fill="#292929" />
                                </svg>
                            </button>
                        </div>
                        <div className="reset-content">
                            <h2 className="reset-head2">Check your email</h2>
                            <p className="reset-text2">An email has been sent to "{email}" with instructions to reset your password.</p>
                            <svg width="153" height="135" viewBox="0 0 153 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M150.331 1.88975C145.145 -2.68105 140.206 1.63235 123.418 8.74595C78.5043 27.7702 0.234863 66.4348 0.234863 66.4348L67.486 74.89L77.0883 134.162C77.0883 134.162 120.967 65.1867 142.543 25.6173C150.614 10.813 155.508 6.46055 150.331 1.88975ZM134.188 17.1388L85.3453 97.0654L80.3805 60.7564L134.188 17.1388Z" fill="#0A66C2" />
                            </svg>
                            <button className="reset-proceed" onClick={(e) => { e.preventDefault(); navSecond() }}>Proceed</button>
                            <p className="reset-spam">Didn't get the mail? Check your spam folder</p>
                        </div>
                    </div>
                ) : (null)}

                {third ? (
                    <div className="reset-section">
                        <div className="reset-close">
                            <button className="reset-close-btn" onClick={() => navigate('/login')}>
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.478823 1.33368C0.173726 1.02858 0.173726 0.53392 0.478823 0.228823C0.78392 -0.0762743 1.27858 -0.0762743 1.58368 0.228823L9.625 8.27015L17.6663 0.228823C17.9714 -0.0762743 18.4661 -0.0762743 18.7712 0.228823C19.0763 0.53392 19.0763 1.02858 18.7712 1.33368L10.7299 9.375L18.7712 17.4163C19.0763 17.7214 19.0763 18.2161 18.7712 18.5212C18.4661 18.8263 17.9714 18.8263 17.6663 18.5212L9.625 10.4799L1.58368 18.5212C1.27858 18.8263 0.783921 18.8263 0.478824 18.5212C0.173727 18.2161 0.173727 17.7214 0.478824 17.4163L8.52015 9.375L0.478823 1.33368Z" fill="#292929" />
                                </svg>
                            </button>
                        </div>
                        <div className="reset-content">
                            <h2 className="reset-head">Reset account Password</h2>
                            <p className="reset-text">Your new password must be different from previously used passwords</p>
                            <form action="" className="reset-form">
                                <label htmlFor="" className="reset-email">New Password</label><br />
                                <div className="reset-pswd" >
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} ref={pwd} placeholder='********************' />
                                    <button className="reset-showpwd" onClick={(e) => { e.preventDefault(); setShowpwd(!showpwd); togglePwdVisibility() }}>
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
                                <label htmlFor="" className="reset-email" >Confirm Password</label><br />
                                <div className="reset-pswd">
                                    <input type="password" value={cpassword} onChange={(e) => setCPassword(e.target.value)} ref={cpwd} placeholder='********************' />
                                    <button className="reset-showpwd" onClick={(e) => { e.preventDefault(); setCShowpwd(!cshowpwd); toggleCPwdVisibility() }}>
                                        {cshowpwd ? (
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
                                {invalidPwd ? (
                                    <div className="reset-invalid-email">
                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.11357 10.5491C5.9869 10.5491 5.86023 10.5025 5.76023 10.4025C5.5669 10.2091 5.5669 9.88913 5.76023 9.6958L9.53357 5.92247C9.7269 5.72913 10.0469 5.72913 10.2402 5.92247C10.4336 6.1158 10.4336 6.4358 10.2402 6.62913L6.4669 10.4025C6.37357 10.5025 6.24023 10.5491 6.11357 10.5491Z" fill="#FF4040" />
                                            <path d="M9.8869 10.5491C9.76023 10.5491 9.63357 10.5025 9.53357 10.4025L5.76023 6.62913C5.5669 6.4358 5.5669 6.1158 5.76023 5.92247C5.95357 5.72913 6.27357 5.72913 6.4669 5.92247L10.2402 9.6958C10.4336 9.88913 10.4336 10.2091 10.2402 10.4025C10.1402 10.5025 10.0136 10.5491 9.8869 10.5491Z" fill="#FF4040" />
                                            <path d="M9.99967 15.3293H5.99967C2.37967 15.3293 0.833008 13.7826 0.833008 10.1626V6.16264C0.833008 2.54264 2.37967 0.995972 5.99967 0.995972H9.99967C13.6197 0.995972 15.1663 2.54264 15.1663 6.16264V10.1626C15.1663 13.7826 13.6197 15.3293 9.99967 15.3293ZM5.99967 1.99597C2.92634 1.99597 1.83301 3.0893 1.83301 6.16264V10.1626C1.83301 13.236 2.92634 14.3293 5.99967 14.3293H9.99967C13.073 14.3293 14.1663 13.236 14.1663 10.1626V6.16264C14.1663 3.0893 13.073 1.99597 9.99967 1.99597H5.99967Z" fill="#FF4040" />
                                            <path d="M6.11357 10.5491C5.9869 10.5491 5.86023 10.5025 5.76023 10.4025C5.5669 10.2091 5.5669 9.88913 5.76023 9.6958L9.53357 5.92247C9.7269 5.72913 10.0469 5.72913 10.2402 5.92247C10.4336 6.1158 10.4336 6.4358 10.2402 6.62913L6.4669 10.4025C6.37357 10.5025 6.24023 10.5491 6.11357 10.5491Z" fill="#FF4040" />
                                            <path d="M9.8869 10.5491C9.76023 10.5491 9.63357 10.5025 9.53357 10.4025L5.76023 6.62913C5.5669 6.4358 5.5669 6.1158 5.76023 5.92247C5.95357 5.72913 6.27357 5.72913 6.4669 5.92247L10.2402 9.6958C10.4336 9.88913 10.4336 10.2091 10.2402 10.4025C10.1402 10.5025 10.0136 10.5491 9.8869 10.5491Z" fill="#FF4040" />
                                            <path d="M9.99967 15.3293H5.99967C2.37967 15.3293 0.833008 13.7826 0.833008 10.1626V6.16264C0.833008 2.54264 2.37967 0.995972 5.99967 0.995972H9.99967C13.6197 0.995972 15.1663 2.54264 15.1663 6.16264V10.1626C15.1663 13.7826 13.6197 15.3293 9.99967 15.3293ZM5.99967 1.99597C2.92634 1.99597 1.83301 3.0893 1.83301 6.16264V10.1626C1.83301 13.236 2.92634 14.3293 5.99967 14.3293H9.99967C13.073 14.3293 14.1663 13.236 14.1663 10.1626V6.16264C14.1663 3.0893 13.073 1.99597 9.99967 1.99597H5.99967Z" fill="#FF4040" />
                                            <path d="M6.11357 10.5491C5.9869 10.5491 5.86023 10.5025 5.76023 10.4025C5.5669 10.2091 5.5669 9.88913 5.76023 9.6958L9.53357 5.92247C9.7269 5.72913 10.0469 5.72913 10.2402 5.92247C10.4336 6.1158 10.4336 6.4358 10.2402 6.62913L6.4669 10.4025C6.37357 10.5025 6.24023 10.5491 6.11357 10.5491Z" fill="#FF4040" />
                                            <path d="M9.8869 10.5491C9.76023 10.5491 9.63357 10.5025 9.53357 10.4025L5.76023 6.62913C5.5669 6.4358 5.5669 6.1158 5.76023 5.92247C5.95357 5.72913 6.27357 5.72913 6.4669 5.92247L10.2402 9.6958C10.4336 9.88913 10.4336 10.2091 10.2402 10.4025C10.1402 10.5025 10.0136 10.5491 9.8869 10.5491Z" fill="#FF4040" />
                                            <path d="M9.99967 15.3293H5.99967C2.37967 15.3293 0.833008 13.7826 0.833008 10.1626V6.16264C0.833008 2.54264 2.37967 0.995972 5.99967 0.995972H9.99967C13.6197 0.995972 15.1663 2.54264 15.1663 6.16264V10.1626C15.1663 13.7826 13.6197 15.3293 9.99967 15.3293ZM5.99967 1.99597C2.92634 1.99597 1.83301 3.0893 1.83301 6.16264V10.1626C1.83301 13.236 2.92634 14.3293 5.99967 14.3293H9.99967C13.073 14.3293 14.1663 13.236 14.1663 10.1626V6.16264C14.1663 3.0893 13.073 1.99597 9.99967 1.99597H5.99967Z" fill="#FF4040" />
                                        </svg>
                                        <p className="invalid-email-text" ref={pwd_err}></p>
                                    </div>
                                ) : (null)}
                                <div className="reset-pwd-container">
                                    <button className="reset-pwd-btn" onClick={(e) => { e.preventDefault(); resetPwd() }}>Reset Password</button>
                                </div>
                            </form>
                        </div>
                    </div>
                ) : (null)}
            </div>
        </div>
    );
}

export default ForgotPassword;