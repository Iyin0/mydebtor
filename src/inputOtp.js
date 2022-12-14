import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/inputOtp.css'

const InputOtp = () => {

    const navigate = useNavigate();
    let code = "";
    const [inputs, setInputs] = useState(null)
    const otpInput = useRef(null);
    const [otp, setOtp] = useState(Math.round(Math.random() * 1000000).toString());
    const Ref = useRef(null);
    // The state for our timer
    const [timer, setTimer] = useState(': 00:00');

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);


    useEffect(() => {
        setInputs(Array.from(otpInput.current.children));
        // setOtp(Math.round(Math.random() * 1000000).toString());
    }, [])

    useEffect(() => {
        console.log('Your OTP is ' + otp);
        setTimeout(() => window.alert('Your OTP is ' + otp), 5000)
    }, [otp])


    const handleOtpPaste = (e) => {
        const data = e.clipboardData.getData("text");
        const value = data.split("");
        if (value.length === inputs.length) {
            inputs.forEach((input, index) => input.value = value[index]);
        }
    }

    const handleOtp = (e) => {
        const input = e.target;
        let value = input.value;
        input.value = "";
        input.value = value ? value[0] : "";

        let fieldIndex = input.dataset.index;
        if (value.length > 0 && fieldIndex < inputs.length - 1) {
            input.nextElementSibling.focus();
        }

        if (e.key === "Backspace" && fieldIndex > 0) {
            input.previousElementSibling.focus();
        }
    }

    // To implement countdown timer

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        return {
            total, minutes, seconds
        };
    }


    const startTimer = (e) => {
        let { total, minutes, seconds }
            = getTimeRemaining(e);
        if (total >= 0) {
            inputs.forEach((input) => {
                input.disabled = false;
                // input.current.classList.add("otp-disabled");
                // console.log(input)
            })

            // update the timer
            // check if less than 10 then we need to 
            // add '0' at the beginning of the variable
            setTimer(
                // (hours > 9 ? hours : '0' + hours) + ':' +
                ": " +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
        else {
            inputs.forEach((input) => {
                input.disabled = true;
                input.className = "otp-disabled";
                // input.classList.add("otp-disabled");
                // console.log(input)
            })
            // console.log(inputs)
        }
    }


    const clearTimer = (e) => {

        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next    
        setTimer(': 00:00');

        // If you try to remove this line the 
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }

    const getDeadTime = () => {
        let deadline = new Date();

        // This is where you need to adjust if 
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + 60);     // to set the timer
        return deadline;
    }

    // We can use useEffect so that when the component
    // mount the timer will start as soon as possible

    // We put empty array to act as componentDid
    // mount only
    useEffect(() => {
        clearTimer(getDeadTime());

        // The code below disables useEffect warning
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputs]);   // dependency used to trigger re-render so as to set the input from null

    const submit = () => {
        inputs.forEach((input) => {
            code += input.value;
            input.disabled = true;
            // input.classList.add("otp-disabled");
        })
        // console.log(code);
        if (code.length < 6) {      // checks if user input is up to 6 digits
            // console.log("otp incomplete")
            inputs.forEach((input) => {
                input.className = "otp-err";
                // input.current.classList.add("otp-disabled");
                // console.log(input)
            });
            // document.getElementById("otp").classList.add("err");
        }
        else {
            // IMPLEMENT YOUR OTP VERIFICATION HERE
            // console.log("Submitting.....");
            if (code === otp) {        // "123456" is to be changed to the OTP generated by the server. This is then cross-referenced with the user input
                navigate('/verify-success')      // redirect to success page if the otp is correct
            }
            else {
                navigate('/verify-fail')      // redirect to fail page if the otp is incorrect
            }

            code = "";  // resets the code variable
        }
    }

    if (inputs !== null) {
        inputs.forEach((input, index) => {
            input.dataset.index = index;
            input.addEventListener("paste", handleOtpPaste);
            input.addEventListener("keyup", handleOtp);
        })
    }

    // to resend the code 
    const resend = () => {
        inputs.forEach((input) => {
            input.disabled = false;
            input.value = "";
            input.className = "otp";
            // input.current.classList.add("otp-disabled");
            // console.log(input)
        });
        code = "";
        clearTimer(getDeadTime());
        setOtp(Math.round(Math.random() * 1000000).toString());
    }


    return (
        <div className='verify2'>
            <main className="inputOtp">
                <div className="loading">
                    <div className="one-inputOtp">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 0.75L7.05 16.0875L3 13.0125H0.75L7.05 23.25L23.25 0.75H21Z" fill="#ECEBEB" />
                        </svg>
                    </div>
                    <p className="loading-text">Verification</p>
                    <div className="line"></div>
                    <div className="two-inputOtp">2</div>
                    <p className="loading-text">Verify Email</p>
                    <div className="line"></div>
                    <div className="three-inputOtp">3</div>
                    <p className="loading-text">Email Verification Successful</p>
                    <div className="line"></div>
                    <div className="four-inputOtp">4</div>
                    <p className="loading-text">Authentication</p>
                </div>
                <div className="verify">
                    <h1>Verify Your Email</h1>
                    <p className="check">Please Check your email</p>
                    <p className="enter">Enter the six digits verification code sent to Jones23@gmail.com to complete your
                        account creation.</p>
                    <div className="code" ref={otpInput}>
                        <input type="text" name="otp" id="otp" className="otp" maxLength="1" />
                        <input type="text" name="otp" id="otp" className="otp" maxLength="1" />
                        <input type="text" name="otp" id="otp" className="otp" maxLength="1" />
                        <input type="text" name="otp" id="otp" className="otp" maxLength="1" />
                        <input type="text" name="otp" id="otp" className="otp" maxLength="1" />
                        <input type="text" name="otp" id="otp" className="otp" maxLength="1" />
                    </div>
                    <div className="timer">
                        <p className="time-text">Code expires in<span id="countdown-timer">{timer}</span></p>
                    </div>
                    <button id="verify-btn" className="verify-btn" onClick={() => submit()}>Verify</button>
                    <p className="resend">Didn't get the code? <Link to='/verify2' onClick={() => resend()}>Resend Code</Link></p>
                </div>
            </main>
        </div>
    );
}

export default InputOtp;