import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import './css/signup.css';
import { states } from './states'
import { addSchoolEmail, addSchoolLevel, addSchoolLga, addSchoolName, addSchoolPassword, addSchoolState } from './store/signupDetails';

const Signup = () => {

    const [confirmed, setConfirmed] = useState(false);
    const checkbox = useRef();
    const confirm_text = useRef();
    const password_len = useRef();
    const password_text = useRef();
    const pwd = useRef();
    const cpwd = useRef();
    const [schoolName, setSchoolName] = useState('');   // value for school name
    const [schoolEmail, setSchoolEmail] = useState(''); // value for school email
    // const pickedState = useRef();
    const [toggleState, setToggleState] = useState(false);
    const [toggleLga, setToggleLga] = useState(false);
    const [toggleLevel, setToggleLevel] = useState(false);
    const [selectState, setSelectState] = useState("Select");   // value for state
    const [selectLga, setSelectLga] = useState("Select");       // value for lga
    const [institution, setInstitution] = useState("Select");   // value for institution level
    const [password, setPassword] = useState('');   // value for password
    const [cpassword, setCPassword] = useState(''); // value for confirm password
    const [showpwd, setShowpwd] = useState(false);
    const [cshowpwd, setCShowpwd] = useState(false);
    const terms = useRef();
    const navigate = useNavigate();
    const [lga, setLga] = useState([]);

    const addSignupDetails = useDispatch();

    useEffect(() => {
        setShowpwd(false);
    }, [])

    const signup = () => {
        if (schoolName === '') {
            password_len.current.classList.add('password-err');
            password_text.current.innerText = "School name cannot be empty";
        }
        else if (schoolEmail === '') {
            password_len.current.classList.add('password-err');
            password_text.current.innerText = "School email cannot be empty";
        }
        else if (schoolEmail.includes('@') === false || schoolEmail.includes('.') === false) {
            password_len.current.classList.add('password-err');
            password_text.current.innerText = "School email is invalid";
        }
        else if (selectState === 'Select') {
            password_len.current.classList.add('password-err');
            password_text.current.innerText = "Invalid school location";
        }
        else if (selectLga === 'Select') {
            password_len.current.classList.add('password-err');
            password_text.current.innerText = "Invalid school location";
        }
        else if (institution === 'Select') {
            password_len.current.classList.add('password-err');
            password_text.current.innerText = "Invalid school level";
        }
        else if (password.length < 8) {
            password_len.current.classList.add('password-err');
            password_text.current.innerText = "Your password must be up to 8 characters";
        }
        else if (password !== cpassword) {
            password_len.current.classList.add('password-err');
            password_text.current.innerText = "The confirm password does not match your password";
        }
        else {
            password_len.current.classList.remove('password-err');

            if (checkbox.current.checked === false) {
                confirm_text.current.classList.add('confirm-err');
                terms.current.classList.add('confirm-err');
            }
            else {
                confirm_text.current.classList.remove('confirm-err');
                terms.current.classList.remove('confirm-err');
                addSignupDetails(addSchoolName(schoolName));
                addSignupDetails(addSchoolEmail(schoolEmail));
                addSignupDetails(addSchoolState(selectState));
                addSignupDetails(addSchoolLga(selectLga));
                addSignupDetails(addSchoolLevel(institution));
                addSignupDetails(addSchoolPassword(password))
                setTimeout(() => navigate('/verify1'), 2000)
            }
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

    const toggleCPwdVisibility = () => {
        if (cshowpwd === false) {
            cpwd.current.type = 'text'
        }
        else {
            cpwd.current.type = 'password'
        }
    }

    return (
        <div className='signup'>
            <div className="entry-image">
                <svg width="561" height="158" viewBox="0 0 561 158" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M166.192 0H0V158H166.192V0ZM12.784 145.846V12.1538H153.408V145.846H12.784ZM33.3721 49.6222C32.7807 49.2006 31.9601 49.6233 31.9601 50.3496V108.491C31.9601 108.985 32.3601 109.385 32.8535 109.385H43.8508C44.3442 109.385 44.7442 108.985 44.7442 108.491V74.6573C44.7442 73.931 45.5648 73.5083 46.1561 73.9299L63.4016 86.2265C63.7119 86.4477 64.1285 86.4477 64.4388 86.2265L81.6843 73.9299C82.2756 73.5083 83.0963 73.931 83.0963 74.6573V108.491C83.0963 108.985 83.4962 109.385 83.9896 109.385H108.664C126.315 109.385 140.624 95.7811 140.624 79.0001C140.624 62.2191 126.315 48.6155 108.664 48.6155H95.8803L64.4388 71.0341C64.1285 71.2554 63.7119 71.2554 63.4016 71.0341L33.3721 49.6222ZM95.8803 96.3376V59.876C95.8803 60.3694 96.2802 60.7693 96.7736 60.7693H108.664C119.255 60.7693 127.84 68.9315 127.84 79.0001C127.84 89.0687 119.255 97.2309 108.664 97.2309H96.7736C96.2802 97.2309 95.8803 96.8309 95.8803 96.3376Z" fill="#FEFEFE" />
                    <path d="M192 100.12V57.88H199.807L215.036 85.9227L230.265 57.88H238.072V100.12H229.945V74.8933L216.572 100.12H213.5L200.127 74.8933V100.12H192Z" fill="#FEFEFE" />
                    <path d="M254.475 100.12V82.9307L238.734 57.88H248.908L258.89 73.7787L268.873 57.88H279.047L263.306 82.9307V100.12H254.475Z" fill="#FEFEFE" />
                    <path d="M295.059 100.12V57.88H309.968C310.331 57.88 311.077 57.8898 312.208 57.9093C313.338 57.9289 314.426 57.9973 315.471 58.1147C319.183 58.5253 322.329 59.7084 324.91 61.664C327.49 63.6196 329.453 66.1031 330.796 69.1147C332.14 72.1262 332.812 75.4213 332.812 79C332.812 82.5787 332.14 85.8738 330.796 88.8853C329.453 91.8969 327.49 94.3804 324.91 96.336C322.329 98.2916 319.183 99.4747 315.471 99.8853C314.426 100.003 313.338 100.071 312.208 100.091C311.077 100.11 310.331 100.12 309.968 100.12H295.059ZM303.889 92.6107H309.968C310.544 92.6107 311.323 92.6009 312.304 92.5813C313.285 92.5422 314.17 92.4542 314.959 92.3173C316.964 91.9458 318.596 91.0853 319.854 89.736C321.134 88.3867 322.073 86.7636 322.67 84.8667C323.289 82.9698 323.598 81.0142 323.598 79C323.598 76.888 323.278 74.8836 322.638 72.9867C322.019 71.0898 321.07 69.4862 319.79 68.176C318.511 66.8658 316.9 66.0347 314.959 65.6827C314.17 65.5262 313.285 65.4382 312.304 65.4187C311.323 65.3991 310.544 65.3893 309.968 65.3893H303.889V92.6107Z" fill="#FEFEFE" />
                    <path d="M336.649 100.12V57.88H366.724V65.3307H345.351V74.3653H362.884V81.816H345.351V92.6693H366.724V100.12H336.649Z" fill="#FEFEFE" />
                    <path d="M370.553 100.12V57.88H388.982C392.266 57.88 394.922 58.4862 396.948 59.6987C398.974 60.8916 400.457 62.3973 401.395 64.216C402.334 66.0347 402.803 67.8729 402.803 69.7307C402.803 72.0969 402.216 74.0622 401.043 75.6267C399.892 77.1911 398.303 78.2373 396.276 78.7653V77.2987C399.156 77.8462 401.31 79.0684 402.739 80.9653C404.189 82.8622 404.915 84.984 404.915 87.3307C404.915 89.8533 404.403 92.0729 403.379 93.9893C402.376 95.9058 400.841 97.4116 398.772 98.5067C396.703 99.5822 394.101 100.12 390.965 100.12H370.553ZM379.383 92.6107H390.069C391.242 92.6107 392.288 92.3858 393.205 91.936C394.122 91.4667 394.836 90.8213 395.348 90C395.882 89.1591 396.148 88.1716 396.148 87.0373C396.148 86.04 395.924 85.1502 395.476 84.368C395.028 83.5858 394.346 82.9698 393.429 82.52C392.533 82.0507 391.413 81.816 390.069 81.816H379.383V92.6107ZM379.383 74.3653H388.854C389.835 74.3653 390.709 74.2089 391.477 73.896C392.245 73.5831 392.853 73.104 393.301 72.4587C393.749 71.7938 393.973 70.9431 393.973 69.9067C393.973 68.616 393.535 67.5307 392.661 66.6507C391.786 65.7707 390.517 65.3307 388.854 65.3307H379.383V74.3653Z" fill="#FEFEFE" />
                    <path d="M416.892 100.12V65.3307H402.367V57.88H440.12V65.3307H425.595V100.12H416.892Z" fill="#FEFEFE" />
                    <path d="M461.195 101C456.588 101 452.61 100.081 449.261 98.2427C445.934 96.4044 443.364 93.8329 441.551 90.528C439.759 87.2231 438.863 83.3804 438.863 79C438.863 74.6196 439.759 70.7769 441.551 67.472C443.364 64.1671 445.934 61.5956 449.261 59.7573C452.61 57.9191 456.588 57 461.195 57C465.802 57 469.769 57.9191 473.097 59.7573C476.446 61.5956 479.016 64.1671 480.807 67.472C482.62 70.7769 483.527 74.6196 483.527 79C483.527 83.3804 482.62 87.2231 480.807 90.528C479.016 93.8329 476.446 96.4044 473.097 98.2427C469.769 100.081 465.802 101 461.195 101ZM461.195 93.4907C464.117 93.5298 466.549 92.9529 468.49 91.76C470.431 90.5671 471.881 88.8756 472.841 86.6853C473.822 84.4951 474.313 81.9333 474.313 79C474.313 76.0667 473.822 73.5244 472.841 71.3733C471.881 69.2222 470.431 67.5502 468.49 66.3573C466.549 65.1644 464.117 64.5484 461.195 64.5093C458.273 64.4702 455.841 65.0471 453.9 66.24C451.959 67.4329 450.498 69.1244 449.517 71.3147C448.557 73.5049 448.077 76.0667 448.077 79C448.077 81.9333 448.557 84.4756 449.517 86.6267C450.498 88.7778 451.959 90.4498 453.9 91.6427C455.841 92.8356 458.273 93.4516 461.195 93.4907Z" fill="#FEFEFE" />
                    <path d="M486.075 100.12V57.88H505.527C505.975 57.88 506.572 57.8996 507.319 57.9387C508.087 57.9582 508.769 58.0169 509.366 58.1147C512.118 58.5058 514.368 59.3369 516.117 60.608C517.887 61.8791 519.189 63.4827 520.02 65.4187C520.852 67.3351 521.268 69.4764 521.268 71.8427C521.268 75.3822 520.308 78.4133 518.389 80.936C516.469 83.4391 513.462 84.984 509.366 85.5707L505.527 85.8053H494.777V100.12H486.075ZM512.054 100.12L502.967 82.9307L511.926 81.3467L521.908 100.12H512.054ZM494.777 78.3547H505.143C505.591 78.3547 506.082 78.3351 506.615 78.296C507.148 78.2569 507.639 78.1787 508.087 78.0613C509.26 77.768 510.166 77.2791 510.806 76.5947C511.446 75.8907 511.883 75.1182 512.118 74.2773C512.374 73.4169 512.502 72.6053 512.502 71.8427C512.502 71.08 512.374 70.2782 512.118 69.4373C511.883 68.5769 511.446 67.8044 510.806 67.12C510.166 66.416 509.26 65.9173 508.087 65.624C507.639 65.5067 507.148 65.4284 506.615 65.3893C506.082 65.3502 505.591 65.3307 505.143 65.3307H494.777V78.3547Z" fill="#FEFEFE" />
                    <path d="M542.507 101C539.095 101 536.013 100.452 533.261 99.3573C530.531 98.2427 528.281 96.6587 526.51 94.6053C524.761 92.5324 523.652 90.0684 523.183 87.2133L532.269 85.9813C532.909 88.4062 534.232 90.2738 536.236 91.584C538.241 92.8942 540.524 93.5493 543.083 93.5493C544.512 93.5493 545.899 93.344 547.242 92.9333C548.586 92.5227 549.685 91.9164 550.538 91.1147C551.412 90.3129 551.85 89.3253 551.85 88.152C551.85 87.7218 551.775 87.3111 551.626 86.92C551.498 86.5093 551.274 86.128 550.954 85.776C550.634 85.424 550.175 85.0916 549.578 84.7787C549.002 84.4658 548.266 84.1822 547.37 83.928L535.405 80.7013C534.509 80.4667 533.464 80.1342 532.269 79.704C531.096 79.2738 529.955 78.6578 528.846 77.856C527.737 77.0542 526.809 75.9982 526.062 74.688C525.337 73.3582 524.975 71.6862 524.975 69.672C524.975 66.8364 525.753 64.48 527.31 62.6027C528.867 60.7253 530.947 59.3271 533.549 58.408C536.151 57.4889 539.031 57.0391 542.187 57.0587C545.366 57.0978 548.202 57.5964 550.698 58.5547C553.193 59.5129 555.284 60.9111 556.969 62.7493C558.654 64.568 559.87 66.7973 560.616 69.4373L551.21 70.904C550.868 69.5351 550.239 68.3813 549.322 67.4427C548.405 66.504 547.306 65.7902 546.027 65.3013C544.768 64.8124 543.446 64.5484 542.059 64.5093C540.694 64.4702 539.404 64.6462 538.188 65.0373C536.994 65.4089 536.013 65.9564 535.245 66.68C534.498 67.4036 534.125 68.264 534.125 69.2613C534.125 70.1804 534.434 70.9333 535.053 71.52C535.671 72.0871 536.45 72.5467 537.388 72.8987C538.327 73.2507 539.287 73.544 540.268 73.7787L548.266 75.7733C549.461 76.0667 550.783 76.4578 552.234 76.9467C553.684 77.416 555.07 78.0809 556.393 78.9413C557.737 79.7822 558.835 80.8969 559.688 82.2853C560.563 83.6738 561 85.4338 561 87.5653C561 89.8338 560.477 91.8187 559.432 93.52C558.408 95.2018 557.022 96.6 555.273 97.7147C553.524 98.8098 551.54 99.6311 549.322 100.179C547.125 100.726 544.854 101 542.507 101Z" fill="#FEFEFE" />
                </svg>
            </div>
            <div className="signup-form-container" >
                <div className="signup-logo">
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
                </div>
                <h1 className="signup-head">Sign Up</h1>
                <p className="signup-text">Please fill this form to create an account.</p>
                <div className="signup-invalid" ref={password_len}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#FEFEFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 8V13" stroke="#FEFEFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11.9945 16H12.0035" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="signup-invalid-text" ref={password_text}></p>
                </div>
                <form action="">
                    <label htmlFor="" className="signup-label">Name of School</label><br />
                    <input type="text" className="signup-input" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} /><br />
                    <label htmlFor="" className="signup-label">School Email Address</label><br />
                    <input type="text" className="signup-input" value={schoolEmail} onChange={(e) => setSchoolEmail(e.target.value)} /><br />
                    <div className="sigup-location">
                        <div className="sigup-location-selection">
                            <label htmlFor="" className="signup-label">State</label><br />
                            {/* <select name="" id="state" defaultValue="" ref={pickedState}
                                onChange={() => {
                                    setLga(Object.values(states[0])[Object.keys(states[0]).indexOf(pickedState.current.value)])
                                }}>
                                <option value="" disabled hidden>Select</option>
                                {Object.keys(states[0]).map((state, index) => (
                                    <option value={state} key={index}>{state}</option>
                                ))}
                            </select><br /> */}
                            <button className="signup-level" onClick={(e) => { e.preventDefault(); setToggleState(!toggleState) }}>
                                <p className="signup-dropdown-text">{selectState}</p>
                                <svg width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className={toggleState ? ("signup-dropdown-down") : (null)}>
                                    <path d="M19.92 8.95001L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.07996 8.95001" stroke="#9E9E9E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            {toggleState ? (
                                <div className="signup-dropdown"
                                    onClick={(e) => {
                                        setSelectState(e.target.innerText);
                                        setToggleState(false);
                                        setLga(Object.values(states[0])[Object.keys(states[0]).indexOf(e.target.innerText)])
                                    }
                                    }>
                                    {Object.keys(states[0]).map((state, index) => (
                                        <button key={index} onClick={(e) => e.preventDefault()}>{state}</button>
                                    ))}
                                </div>
                            ) : (null)}
                        </div>
                        <div className="sigup-location-selection">
                            <label htmlFor="" className="signup-label">LGA</label><br />
                            {/* <select name="" id="lga" defaultValue="">
                                <option value="" disabled hidden>Select</option>
                                {lga.map((lga, index) => (
                                    <option value={lga} key={index}>{lga}</option>
                                ))}
                            </select> */}
                            <button className="signup-level" onClick={(e) => { e.preventDefault(); setToggleLga(!toggleLga) }}>
                                <p className="signup-dropdown-text">{selectLga}</p>
                                <svg width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className={toggleLga ? ("signup-dropdown-down") : (null)}>
                                    <path d="M19.92 8.95001L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.07996 8.95001" stroke="#9E9E9E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            {toggleLga ? (
                                <div className="signup-dropdown" onClick={(e) => { setSelectLga(e.target.innerText); setToggleLga(false) }}>
                                    {lga.map((lga, index) => (
                                        <button key={index} onClick={(e) => e.preventDefault()}>{lga}</button>
                                    ))}
                                </div>
                            ) : (null)}
                        </div>
                    </div>
                    <label htmlFor="" className="signup-label">Level of Institution</label><br />
                    {/* <select name="" id="school-level" defaultValue="" className='signup-level'>
                        <option value="" disabled hidden>Select</option>
                        <option value="Elementary">Elementary</option>
                        <option value="Secondary">Secondary</option>
                        <option value="Tertiary">Tertiary</option>
                    </select><br /> */}
                    <button className="signup-level" onClick={(e) => { e.preventDefault(); setToggleLevel(!toggleLevel) }}>
                        <p className="signup-dropdown-text">{institution}</p>
                        <svg width="24" height="24" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg"
                            className={toggleLevel ? ("signup-dropdown-down") : (null)}>
                            <path d="M19.92 8.95001L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.07996 8.95001" stroke="#9E9E9E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    {toggleLevel ? (
                        <div className="signup-dropdown" onClick={(e) => { setInstitution(e.target.innerText); setToggleLevel(false) }}>
                            <button onClick={(e) => e.preventDefault()}>Elementary</button>
                            <button onClick={(e) => e.preventDefault()}>Secondary</button>
                            <button onClick={(e) => e.preventDefault()}>Tertiary</button>
                        </div>
                    ) : (null)}
                    <label htmlFor="" className="signup-label">Password</label><br />
                    <div className="signup-input signup-pswd" >
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} ref={pwd} />
                        <button className="signup-showpwd" onClick={(e) => { e.preventDefault(); setShowpwd(!showpwd); togglePwdVisibility() }}>
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
                    <p className="signup-password">(Password should be up to 8 characters)</p>
                    <label htmlFor="" className="signup-label" >Confirm Password</label><br />
                    <div className="signup-input signup-pswd" >
                        <input type="password" value={cpassword} onChange={(e) => setCPassword(e.target.value)} ref={cpwd} />
                        <button className="signup-showpwd" onClick={(e) => { e.preventDefault(); setCShowpwd(!cshowpwd); toggleCPwdVisibility() }}>
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
                        <p ref={confirm_text}>I agree to the <Link to='/t&c' className='signup-tc' ref={terms}>terms and conditions</Link></p>
                    </div>
                    <div className="signup-bottom">
                        <button className="signup-btn" onClick={(e) => { signup(); e.preventDefault() }}>Sign Up</button>
                        <p className="already-user">Already have an account? <Link to='/login'>Sign in</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;