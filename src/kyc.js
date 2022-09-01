import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './css/kyc.css'
import { addSchoolCac, addSchoolId } from './store/signupDetails';

const Kyc = () => {

    const [cac, setCac] = useState(null);
    const [id, setId] = useState(null);
    const [confirmed, setConfirmed] = useState(false);
    const [popup, setPopup] = useState(false)
    const cac_text = useRef();
    const id_text = useRef();
    const checkbox = useRef();
    const confirm_text = useRef();
    const navigate = useNavigate()

    const addKyc = useDispatch();

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const importCac = () => {      // imports the file
        let input = document.createElement('input');
        input.type = 'file';
        input.onchange = _this => {
            setCac(Array.from(input.files)[0])   // to get the file from local storage
        };
        addKyc(addSchoolCac(cac));
        input.click();
    }

    const importID = () => {      // imports the file
        let input = document.createElement('input');
        input.type = 'file';
        input.onchange = _this => {
            setId(Array.from(input.files)[0])    // to get the file from local storage
        };
        addKyc(addSchoolId(id));
        input.click();
    }

    const uploadKyc = () => {
        if (checkbox.current.checked === false) {
            confirm_text.current.classList.add('confirm-err');
        }
        else {
            confirm_text.current.classList.remove('confirm-err');
            setPopup(true)
        }
    }

    return (
        <div className="kyc-back">
            <main className="kyc">
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
                <div className="cac">
                    <div className="title">
                        <h2>CAC Document</h2>
                        <p className="document">Please upload the document you were issued when your school was registered
                        </p>
                    </div>
                    <div className="upload" id="cac">
                        {cac !== null ? (
                            <div className='doc_upload cac_upload'>
                                <p className="drag">{cac.name}</p>
                                <button className='delete_upload' onClick={() => setCac(null)}>Delete</button>
                            </div>
                        ) : (
                            <div className="before-upload"
                                id="before_cac_upload"
                                onDragOver={(e) => {
                                    e.preventDefault();
                                    cac_text.current.innerText = "Drop your file here"
                                }}
                                onDragLeave={(e) => {
                                    e.preventDefault();
                                    cac_text.current.innerText = "Drag & drop your file here"
                                }}
                                onDrop={(e) => {
                                    e.preventDefault();
                                    setCac(e.dataTransfer.files[0])
                                }}>
                                {window.innerWidth > 576 ? (
                                    <svg width="135" height="172" viewBox="0 0 135 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_d_2390_9315)">
                                            <rect x="4.1665" width="126.667" height="163.333" rx="10" fill="white" shapeRendering="crispEdges" />
                                            <path d="M75.8332 41.123V58.3336C75.8332 60.6672 75.8332 61.834 76.2873 62.7253C76.6868 63.5093 77.3242 64.1467 78.1082 64.5462C78.9995 65.0003 80.1663 65.0003 82.4998 65.0003H99.7104M84.1665 85.8333H50.8332M84.1665 102.5H50.8332M59.1665 69.1667H50.8332M75.8332 40H54.1665C47.1658 40 43.6655 40 40.9916 41.3624C38.6396 42.5608 36.7273 44.4731 35.5289 46.8251C34.1665 49.499 34.1665 52.9993 34.1665 60V103.333C34.1665 110.334 34.1665 113.834 35.5289 116.508C36.7273 118.86 38.6396 120.772 40.9916 121.971C43.6655 123.333 47.1658 123.333 54.1665 123.333H80.8332C87.8338 123.333 91.3342 123.333 94.0081 121.971C96.3601 120.772 98.2723 118.86 99.4708 116.508C100.833 113.834 100.833 110.334 100.833 103.333V65L75.8332 40Z" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <rect x="4.6665" y="0.5" width="125.667" height="162.333" rx="9.5" stroke="#0A66C2" shapeRendering="crispEdges" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_d_2390_9315" x="0.166504" y="0" width="134.667" height="171.333" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="4" />
                                                <feGaussianBlur stdDeviation="2" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2390_9315" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2390_9315" result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>
                                ) : (
                                    <svg width="76" height="78" viewBox="0 0 76 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_d_2574_7395)">
                                            <rect x="4" width="68" height="70" rx="10" fill="white" shapeRendering="crispEdges" />
                                            <path d="M42.125 15.5391V23.8001C42.125 24.9202 42.125 25.4803 42.3498 25.9081C42.5475 26.2844 42.8631 26.5904 43.2511 26.7822C43.6923 27.0001 44.2699 27.0001 45.425 27.0001H53.9442M46.25 37H29.75M46.25 45H29.75M33.875 29H29.75M42.125 15H31.4C27.9347 15 26.202 15 24.8784 15.654C23.7142 16.2292 22.7676 17.1471 22.1744 18.2761C21.5 19.5595 21.5 21.2397 21.5 24.6V45.4C21.5 48.7603 21.5 50.4405 22.1744 51.7239C22.7676 52.8529 23.7142 53.7708 24.8784 54.346C26.202 55 27.9347 55 31.4 55H44.6C48.0653 55 49.798 55 51.1216 54.346C52.2858 53.7708 53.2324 52.8529 53.8256 51.7239C54.5 50.4405 54.5 48.7603 54.5 45.4V27L42.125 15Z" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <rect x="4.5" y="0.5" width="67" height="69" rx="9.5" stroke="#0A66C2" shapeRendering="crispEdges" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_d_2574_7395" x="0" y="0" width="76" height="78" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="4" />
                                                <feGaussianBlur stdDeviation="2" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2574_7395" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2574_7395" result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>
                                )}
                                <p id="cac_text" className="drag" ref={cac_text}>Drag & drop your file here</p>
                                <span className="or">OR</span>
                                <button className="browse" onClick={() => importCac()}>Browse file</button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="school_id" id="school_id">
                    <div className="title">
                        <h2>School ID</h2>
                        <p className="document">Please upload a copy of your identity with a clear photo to proof
                            the document holder</p>
                    </div>
                    <div className="upload" id="id">
                        {id !== null ? (
                            <div className='doc_upload id_upload'>
                                <p className="drag">{id.name}</p>
                                <button className='delete_upload' onClick={() => setId(null)}>Delete</button>
                            </div>
                        ) : (
                            <div className="before-upload"
                                id="before_id_upload"
                                onDragOver={(e) => {
                                    e.preventDefault();
                                    id_text.current.innerText = "Drop your file here"
                                }}
                                onDragLeave={(e) => {
                                    e.preventDefault();
                                    id_text.current.innerText = "Drag & drop your file here"
                                }}
                                onDrop={(e) => {
                                    e.preventDefault();
                                    setId(e.dataTransfer.files[0])
                                }}>
                                {window.innerWidth > 576 ? (
                                    <svg width="153" height="164" viewBox="0 0 153 164" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_d_2390_9317)">
                                            <rect x="4.8335" y="0.5" width="143.333" height="155" rx="10" fill="white" shapeRendering="crispEdges" />
                                            <path d="M44.3005 114.366L71.7861 86.8807C73.4362 85.2306 74.2612 84.4056 75.2126 84.0965C76.0494 83.8246 76.9509 83.8246 77.7877 84.0965C78.7391 84.4056 79.5642 85.2307 81.2142 86.8807L108.516 114.183M84.8335 90.5L96.7861 78.5474C98.4362 76.8973 99.2612 76.0723 100.213 75.7632C101.049 75.4912 101.951 75.4912 102.788 75.7632C103.739 76.0723 104.564 76.8973 106.214 78.5474L118.167 90.5M68.1668 65.5C68.1668 70.1024 64.4359 73.8333 59.8335 73.8333C55.2311 73.8333 51.5002 70.1024 51.5002 65.5C51.5002 60.8976 55.2311 57.1667 59.8335 57.1667C64.4359 57.1667 68.1668 60.8976 68.1668 65.5ZM54.8335 115.5H98.1668C105.167 115.5 108.668 115.5 111.342 114.138C113.694 112.939 115.606 111.027 116.804 108.675C118.167 106.001 118.167 102.501 118.167 95.5V60.5C118.167 53.4993 118.167 49.999 116.804 47.3251C115.606 44.9731 113.694 43.0608 111.342 41.8624C108.668 40.5 105.167 40.5 98.1668 40.5H54.8335C47.8328 40.5 44.3325 40.5 41.6586 41.8624C39.3066 43.0608 37.3943 44.9731 36.1959 47.3251C34.8335 49.999 34.8335 53.4993 34.8335 60.5V95.5C34.8335 102.501 34.8335 106.001 36.1959 108.675C37.3943 111.027 39.3066 112.939 41.6586 114.138C44.3325 115.5 47.8328 115.5 54.8335 115.5Z" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <rect x="5.3335" y="1" width="142.333" height="154" rx="9.5" stroke="#0A66C2" shapeRendering="crispEdges" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_d_2390_9317" x="0.833496" y="0.5" width="151.333" height="163" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="4" />
                                                <feGaussianBlur stdDeviation="2" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2390_9317" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2390_9317" result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>
                                ) : (
                                    <svg width="76" height="78" viewBox="0 0 76 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_d_2574_7449)">
                                            <rect x="4" width="68" height="70" rx="10" fill="white" shapeRendering="crispEdges" />
                                            <path d="M24.9155 49.9709L35.7997 37.1443C36.4532 36.3743 36.7799 35.9893 37.1566 35.845C37.488 35.7181 37.845 35.7181 38.1764 35.845C38.5531 35.9893 38.8798 36.3743 39.5333 37.1443L50.345 49.8854M40.9665 38.8333L45.6997 33.2554C46.3532 32.4854 46.6799 32.1004 47.0566 31.9561C47.388 31.8292 47.745 31.8292 48.0764 31.9561C48.4531 32.1004 48.7798 32.4854 49.4333 33.2554L54.1665 38.8333M34.3665 27.1667C34.3665 29.3144 32.889 31.0556 31.0665 31.0556C29.244 31.0556 27.7665 29.3144 27.7665 27.1667C27.7665 25.0189 29.244 23.2778 31.0665 23.2778C32.889 23.2778 34.3665 25.0189 34.3665 27.1667ZM29.0865 50.5H46.2465C49.0188 50.5 50.4049 50.5 51.4638 49.8642C52.3952 49.3049 53.1524 48.4126 53.627 47.3149C54.1665 46.0671 54.1665 44.4336 54.1665 41.1667V24.8333C54.1665 21.5664 54.1665 19.9329 53.627 18.6851C53.1524 17.5874 52.3952 16.6951 51.4638 16.1358C50.4049 15.5 49.0188 15.5 46.2465 15.5H29.0865C26.3142 15.5 24.9281 15.5 23.8693 16.1358C22.9378 16.6951 22.1806 17.5874 21.706 18.6851C21.1665 19.9329 21.1665 21.5664 21.1665 24.8333V41.1667C21.1665 44.4336 21.1665 46.0671 21.706 47.3149C22.1806 48.4126 22.9378 49.3049 23.8693 49.8642C24.9281 50.5 26.3142 50.5 29.0865 50.5Z" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <rect x="4.5" y="0.5" width="67" height="69" rx="9.5" stroke="#0A66C2" shapeRendering="crispEdges" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_d_2574_7449" x="0" y="0" width="76" height="78" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="4" />
                                                <feGaussianBlur stdDeviation="2" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2574_7449" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2574_7449" result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>
                                )}
                                <p id="id_text" className="drag" ref={id_text}>Drag & drop your file here</p>
                                <span className="or">OR</span>
                                <button className="browse" onClick={() => importID()}>Browse file</button>
                            </div>
                        )}
                    </div>
                </div>
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
                    <p ref={confirm_text}>I confirm ID is valid until the expiry date and is in color.</p>
                </div>
                <div className="kyc-btn">
                    <button className="enter" onClick={() => uploadKyc()}>Upload</button>
                </div>
                {popup ? (
                    <div className="cover">
                        <div className="popup">
                            <div className="color"></div>
                            {cac !== null && id !== null ? (
                                <div className="blank">
                                    <div className="msg">
                                        <svg className='kyc-svg' width="87" height="87" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M79.75 40.1858V43.5208C79.7456 51.3378 77.2143 58.944 72.5338 65.2049C67.8534 71.4658 61.2744 76.046 53.7782 78.2624C46.2819 80.4788 38.2701 80.2126 30.9375 77.5036C23.6048 74.7946 17.3444 69.7879 13.0897 63.2301C8.83509 56.6724 6.81424 48.915 7.32858 41.1149C7.84291 33.3148 10.8649 25.8899 15.9438 19.9476C21.0227 14.0053 27.8863 9.86401 35.5112 8.14128C43.136 6.41855 51.1135 7.20672 58.2538 10.3883M79.75 14.5L43.5 50.7863L32.625 39.9113" stroke="#4ECA5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <h3 className="kyc-status status-success">Success!</h3>
                                        <p className="para">Your document as been uploaded successfully, you will receive response as soon as your documents are verified.</p>
                                        <button className="kyc-dom-btn" onClick={() => { setPopup(false); navigate('/') }}>Ok</button>
                                    </div>
                                </div>
                            ) : (
                                <div className="blank">
                                    <div className="kyc-btn-container">
                                        <button className="kyc-close-btn" onClick={() => setPopup(false)}>
                                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.35382 4.45868C3.04873 4.15358 3.04873 3.65892 3.35382 3.35382C3.65892 3.04873 4.15358 3.04873 4.45868 3.35382L12.5 11.3951L20.5413 3.35382C20.8464 3.04873 21.3411 3.04873 21.6462 3.35382C21.9513 3.65892 21.9513 4.15358 21.6462 4.45868L13.6049 12.5L21.6462 20.5413C21.9513 20.8464 21.9513 21.3411 21.6462 21.6462C21.3411 21.9513 20.8464 21.9513 20.5413 21.6462L12.5 13.6049L4.45868 21.6462C4.15358 21.9513 3.65892 21.9513 3.35382 21.6462C3.04873 21.3411 3.04873 20.8464 3.35382 20.5413L11.3951 12.5L3.35382 4.45868Z" fill="black" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="msg">
                                        <svg className='kyc-svg' width="87" height="87" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M58 58C58 58 52.5625 50.75 43.5 50.75C34.4375 50.75 29 58 29 58M61.625 33.495C60.1931 35.2531 58.2356 36.25 56.1875 36.25C54.1394 36.25 52.2362 35.2531 50.75 33.495M36.25 33.495C34.8181 35.2531 32.8606 36.25 30.8125 36.25C28.7644 36.25 26.8612 35.2531 25.375 33.495M79.75 43.5C79.75 63.5203 63.5203 79.75 43.5 79.75C23.4797 79.75 7.25 63.5203 7.25 43.5C7.25 23.4797 23.4797 7.25 43.5 7.25C63.5203 7.25 79.75 23.4797 79.75 43.5Z" stroke="#FF4040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <h3 className="kyc-status status-failed">Failed!</h3>
                                        <p className="para">Sorry! something went wrong while uploading your documents. please try again.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (null)}
            </main>
        </div>
    );
}

export default Kyc;