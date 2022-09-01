import Footer from "./footer";
import TopNavbar from "./topNavbar";
import './css/contendUpload.css'
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleLandingDropdown } from './store/landingDropdown';

const ContendUpload = () => {

    const [upload, setUpload] = useState([]);
    const [popup, setPopup] = useState(false)
    const contend = useRef();
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const current_date = new Date();
    const current_day = current_date.getDate() + ' ' + month[current_date.getMonth()] + ' ' + current_date.getFullYear();
    const current_time = current_date.getTime();    // it is in milliseconds;
    const navigate = useNavigate();

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const browseFile = () => {      // imports the file
        let input = document.createElement('input');
        input.type = 'file';
        input.onchange = _this => {
            if (Array.from(input.files)[0].size > 10000000) {
                window.alert("file too large")
            }
            else {
                // to get the file from local storage
                let file = [...upload, { doc: Array.from(input.files)[0], day: current_day, time: current_time }];
                setUpload(file)
            }
        };
        input.click();
    }

    const uploadDocs = () => {
        setPopup(true)
    }

    const hideDropdown = useDispatch();

    const hideTopNav = () => {
        hideDropdown(toggleLandingDropdown(false))
    }

    return (
        <div>
            <TopNavbar />
            <main className="contend-upload" onClick={() => hideTopNav()}>
                <div className="file-upload">
                    <h1>File Upload</h1>
                    <h2 className="proof">Provide proof of payment</h2>
                    <div className="title">
                        <p>The file upload form allows you to upload verifiable documents, and images to support your clain of
                            payment.</p>
                        <p className="nb">N.B-</p>
                        <ul>
                            <li>You can upload multiple documents.</li>
                            <li>Files supported: PDF, JPG, PNG, GIF.</li>
                            <li>Document must be clear and not more than 10MB.</li>
                        </ul>
                    </div>
                    <div className="contend-upload-container"
                        onDragOver={(e) => {
                            e.preventDefault();
                            contend.current.innerText = "Drop your file here"
                        }}
                        onDragLeave={(e) => {
                            e.preventDefault();
                            contend.current.innerText = "Drag & drop your file here"
                        }}
                        onDrop={(e) => {
                            e.preventDefault();
                            if (e.dataTransfer.files[0].size > 10000000) {
                                window.alert("file too large")
                            }
                            else {
                                let file = [...upload, { doc: e.dataTransfer.files[0], day: current_day, time: current_time }];
                                setUpload(file)
                                // console.log(upload)
                            }
                            contend.current.innerText = "Drag & drop your file here"
                        }}>
                        <div className="contend-upload-region" id="before_cac_upload">
                            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M60 52.5002V108.75M33.75 82.5002C1.41859e-05 86.2502 3.75001 45.0002 33.75 48.7502C22.5 7.50023 86.25 7.50024 82.5 37.5002C120 26.2502 120 86.2502 86.25 82.5002H33.75ZM41.25 67.5002L60 52.5002L78.75 67.5002H41.25Z" stroke="#021427" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="drag" ref={contend}>Drag and drop your files here</p>
                            <span className="or">or</span>
                            <button className="browse" onClick={() => browseFile()}>Browse files</button>
                            <p className="supported-files">Files supported: PDF, JPG, PNG, GIF</p>
                            <p className="maximum-size">Maximum size: 10 MB</p>
                            <p className="external">EXTERNAL DRIVES</p>
                            <div className="drives">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_1388_4973)">
                                        <path d="M21.818 10C25.586 10 28.652 13.196 28.652 17.122C28.652 17.394 28.628 17.702 28.578 18.09L28.166 21.278C28.08 21.942 28.538 22.578 29.222 22.584L32.522 22.604C34.438 22.616 36 24.274 36 26.3C36 28.34 34.43 30 32.5 30H8.33402C5.94402 30 4.00002 27.956 4.00002 25.444C4.00002 23.618 5.03802 21.974 6.64602 21.254L7.94802 20.672C8.40802 20.466 8.96402 19.81 8.98002 19.122L9.01202 17.694C9.03602 16.624 9.85402 15.754 10.832 15.754C10.896 15.754 11.02 15.766 11.246 15.824L13.324 16.352C13.854 16.486 14.536 16.22 14.784 15.734L15.79 13.772C16.986 11.446 19.296 10 21.818 10ZM21.818 6C17.656 6 14.046 8.414 12.232 11.948C11.7758 11.826 11.3062 11.7615 10.834 11.756C7.66002 11.756 5.08802 14.364 5.01402 17.604C3.51114 18.288 2.23817 19.392 1.34853 20.7831C0.458897 22.1742 -0.0094242 23.7928 1.79395e-05 25.444C1.79395e-05 30.17 3.73002 34 8.33402 34H32.5C36.642 34 40 30.552 40 26.3C40 22.064 36.666 18.63 32.544 18.604C32.606 18.118 32.65 17.626 32.65 17.122C32.652 10.98 27.802 6 21.818 6Z" fill="#0A66C2" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1388_4973">
                                            <rect width="40" height="40" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.35 26L9.702 38H33.35L40 26H16.35ZM11.73 4.598L0 25.828L6.744 37.996L18.476 16.766L11.73 4.598ZM38.89 24L26.698 2H13.208L25.384 24H38.89Z" fill="#0A66C2" />
                                </svg>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 3.33301L20 9.58301L10 15.833L0 9.58301L10 3.33301ZM30 3.33301L40 9.58301L30 15.833L20 9.58301L30 3.33301ZM0 22.083L10 15.833L20 22.083L10 28.333L0 22.083ZM30 15.833L40 22.083L30 28.333L20 22.083L30 15.833ZM10 30.4163L20 24.1663L30 30.4163L20 36.6663L10 30.4163Z" fill="#0A66C2" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <p className="comment">Leave a comment</p>
                    <textarea name="comment" id="comment"></textarea>
                </div>
                <div className="contend-upload-btns">
                    {/* onclick="location.href = 'contend-debt.html'" */}
                    <button className="contend-upload-cancel" onClick={() => navigate('/contend-debt')}>Cancel</button>
                    {/* onclick="uploadFiles()" */}
                    <button className="contend-upload-enter" onClick={() => uploadDocs()}>Upload</button>
                </div>
                {upload.length > 0 ? (
                    <div className="recent">
                        <h2 className="recent-upload">RECENT UPLOADS</h2>
                        <div className="all-uploads" id="all-uploads">
                            {upload.map((file, index) => (
                                <div className="uploaded" key={index}>
                                    <div className="left">
                                        <div className="pic-container">
                                            <img src={URL.createObjectURL(file.doc)} alt="" className="pic" />
                                        </div>
                                        <div className="desc">
                                            <div className="file-desc">
                                                <p className="fileName">{file.doc.name}</p>
                                                <p className="size">({(file.doc.size / 1000000).toFixed(1) + 'MB'})</p>
                                            </div>
                                            <p className="date">{file.day}</p>
                                        </div>
                                    </div>
                                    <div className="right">
                                        {/* Do the calculation for more than 60 mins */}
                                        <p className="time">{Math.round((current_time - file.time) / 60000) + ' mins ago'}</p>
                                        <button className="del-btn"
                                            onClick={() => {
                                                let filteredArr = upload.filter((el) => upload.indexOf(el) !== index);
                                                setUpload(filteredArr);
                                            }}
                                        >
                                            <svg className="del" width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.0443 10V30C3.0443 31.1 4.15199 32 5.50584 32H27.6597C29.0135 32 30.1212 31.1 30.1212 30V10H3.0443ZM10.4289 28H7.96738V14H10.4289V28ZM15.352 28H12.8905V14H15.352V28ZM20.2751 28H17.8135V14H20.2751V28ZM25.1981 28H22.7366V14H25.1981V28ZM30.7366 4H22.7366V1.5C22.7347 1.10266 22.5395 0.722048 22.1937 0.441085C21.8479 0.160122 21.3795 0.00157989 20.8905 0L12.2751 0C11.786 0.00157989 11.3176 0.160122 10.9718 0.441085C10.626 0.722048 10.4309 1.10266 10.4289 1.5V4H2.42892C1.93969 4.00106 1.47086 4.15943 1.12492 4.44051C0.778985 4.72158 0.584063 5.1025 0.582764 5.5V8H32.5828V5.5C32.5815 5.1025 32.3865 4.72158 32.0406 4.44051C31.6947 4.15943 31.2258 4.00106 30.7366 4ZM20.2751 4H12.8905V2.026H20.2751V4Z" fill="#141414" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="clear-all">
                            <button id="clear-all" onClick={() => setUpload([])}>Clear all</button>
                        </div>
                    </div>
                ) : (null)}
                {popup ? (
                    <div className="cover">
                        {upload.length > 0 ? (
                            <div className="contend-upload-popup">
                                <div className="icon">
                                    <div className="back1 success-back1">
                                        <div className="back2 success-back2">
                                            <div className="back3 success-back3">
                                                <svg width="72" height="71" viewBox="0 0 72 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M62.2849 2.46094L21.5438 47.2543L9.71569 38.2737H3.14453L21.5438 68.1725L68.8561 2.46094H62.2849Z" fill="#4ECA5A" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bubble1 success-bubble"></div>
                                    <div className="bubble2 success-bubble"></div>
                                    <div className="bubble3 success-bubble"></div>
                                </div>
                                <div className="contend-upload-msg">
                                    <h3 className="contend-upload-status">File Uploaded Successfully</h3>
                                    <p className="contend-upload-para">Your contention has been submitted, the school will respond to your claim in 24 hours.</p>
                                </div>
                                <div className="contend-upload-btn-container">
                                    <button className="dom-btn success-back-btn" onClick={() => { setPopup(false); navigate('/') }}>Done</button>
                                </div>
                            </div>
                        ) : (
                            <div className="contend-upload-popup">
                                <div className="icon">
                                    <div className="back1 fail-back1">
                                        <div className="back2 fail-back2">
                                            <div className="back3 fail-back3">
                                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.26967 1.47035C1.56228 1.177 1.90988 0.944262 2.29258 0.785461C2.67527 0.62666 3.08553 0.544922 3.49987 0.544922C3.9142 0.544922 4.32447 0.62666 4.70716 0.785461C5.08985 0.944262 5.43746 1.177 5.73007 1.47035L22.3999 18.1465L39.0697 1.47035C39.3625 1.17748 39.7102 0.945156 40.0929 0.786654C40.4756 0.628151 40.8857 0.546571 41.2999 0.546571C41.7141 0.546571 42.1242 0.628151 42.5068 0.786654C42.8895 0.945156 43.2372 1.17748 43.5301 1.47035C43.8229 1.76322 44.0553 2.11092 44.2138 2.49357C44.3723 2.87623 44.4538 3.28637 44.4538 3.70055C44.4538 4.11474 44.3723 4.52487 44.2138 4.90753C44.0553 5.29019 43.8229 5.63788 43.5301 5.93075L26.854 22.6006L43.5301 39.2704C43.8229 39.5632 44.0553 39.9109 44.2138 40.2936C44.3723 40.6762 44.4538 41.0864 44.4538 41.5006C44.4538 41.9147 44.3723 42.3249 44.2138 42.7075C44.0553 43.0902 43.8229 43.4379 43.5301 43.7308C43.2372 44.0236 42.8895 44.2559 42.5068 44.4145C42.1242 44.573 41.7141 44.6545 41.2999 44.6545C40.8857 44.6545 40.4756 44.573 40.0929 44.4145C39.7102 44.2559 39.3625 44.0236 39.0697 43.7308L22.3999 27.0547L5.73007 43.7308C5.43719 44.0236 5.0895 44.2559 4.70684 44.4145C4.32419 44.573 3.91405 44.6545 3.49987 44.6545C3.08568 44.6545 2.67555 44.573 2.29289 44.4145C1.91023 44.2559 1.56254 44.0236 1.26967 43.7308C0.976793 43.4379 0.744472 43.0902 0.58597 42.7075C0.427468 42.3249 0.345888 41.9147 0.345888 41.5006C0.345888 41.0864 0.427468 40.6762 0.58597 40.2936C0.744472 39.9109 0.976793 39.5632 1.26967 39.2704L17.9458 22.6006L1.26967 5.93075C0.976319 5.63814 0.743578 5.29054 0.584778 4.90784C0.425977 4.52515 0.344238 4.11489 0.344238 3.70055C0.344238 3.28622 0.425977 2.87595 0.584778 2.49326C0.743578 2.11056 0.976319 1.76296 1.26967 1.47035Z" fill="#FF4040" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bubble1 fail-bubble"></div>
                                    <div className="bubble2 fail-bubble"></div>
                                    <div className="bubble3 fail-bubble"></div>
                                </div>
                                <div className="contend-upload-msg">
                                    <h3 className="contend-upload-status">File Upload Failed!</h3>
                                    <p className="contend-upload-para">Sorry! something went wrong while uploading tour document</p>
                                </div>
                                <div className="contend-upload-btn-container">
                                    <button className="dom-btn fail-back-btn" onClick={() => setPopup(false)}>Try again</button>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (null)}
            </main>
            <Footer />
        </div>
    );
}

export default ContendUpload;