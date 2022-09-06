import SearchBar from "./searchBar";
import SideNavbar from "./sideNavbar";
import './css/editProfile.css'
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSideNav } from "./store/landingDropdown";
import { states } from './states'

const EditProfile = () => {

    const toggleSideNavbar = useDispatch();
    const [schoolName, setSchoolName] = useState('First Example College');
    const [schoolImg, setSchoolImg] = useState(require('./img/Ellipse 5.png'))
    const [schoolEmail, setSchoolEmail] = useState('firstexamplecollege@gmail.com');
    const [schoolId, setSchoolId] = useState("RC00000000");
    const [schoolState, setSchoolState] = useState('Lagos')
    const [schoolLga, setSchoolLga] = useState('Oshodi-Isolo')
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [toggleState, setToggleState] = useState(false);
    const [toggleLga, setToggleLga] = useState(false);
    const [lga, setLga] = useState([]);

    const [showpwd, setShowpwd] = useState(false);
    const [shownewpwd, setShowNewpwd] = useState(false);
    const [cshowpwd, setCShowpwd] = useState(false);
    const currentpwd = useRef();
    const newpwd = useRef();
    const confirmpwd = useRef();


    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        toggleSideNavbar(toggleSideNav(false));
    }, [toggleSideNavbar])

    const hideEditDropdown = () => {
        if (toggleState === true || toggleLga === true) {
            setToggleLga(false);
            setToggleState(false);
        }
    }

    const toggleCurrentPwdVisibility = () => {
        if (showpwd === false) {
            currentpwd.current.type = 'text'
        }
        else {
            currentpwd.current.type = 'password'
        }
    }

    const toggleNewPwdVisibility = () => {
        if (shownewpwd === false) {
            newpwd.current.type = 'text'
        }
        else {
            newpwd.current.type = 'password'
        }
    }

    const toggleConfirmPwdVisibility = () => {
        if (cshowpwd === false) {
            confirmpwd.current.type = 'text'
        }
        else {
            confirmpwd.current.type = 'password'
        }
    }

    const uploadImg = () => {      // imports the file
        let input = document.createElement('input');
        input.type = 'file';
        input.onchange = _this => {
            if (Array.from(input.files)[0].type.includes('image')) {
                setSchoolImg(URL.createObjectURL(Array.from(input.files)[0]))
            }
            else {
                window.alert('Invalid upload')
                setSchoolImg(require('./img/user.png'))
            }
        };
        // addKyc(addSchoolCac(cac));
        input.click();
    }

    return (
        <div onClick={() => { hideEditDropdown() }}>
            <SideNavbar />
            <div className="edit-profile-page">
                <SearchBar />
                <main className="edit-profile" >
                    <h1>Edit profile</h1>
                    <div className="user-detail">
                        <div className="user-img">
                            <img src={schoolImg} alt="" />
                        </div>
                        <div className="user-info">
                            <p className="user-name" id="user-name">{schoolName}</p>
                            <p className="user-address" id="user-address">{schoolLga}, {schoolState}</p>
                        </div>
                    </div>
                    <div className="user-btns">
                        <button className="change-pic" onClick={() => uploadImg()}>Change picture</button>
                        <button className="delete-pic" onClick={() => setSchoolImg(require('./img/user.png'))}>Delete picture</button>
                    </div>
                    <form action="">
                        <h2>Account Information</h2>
                        <div className="account-info">
                            <div className="user-input">
                                <label htmlFor="school-name">School name</label><br />
                                <input type="text" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} />
                            </div>
                            <div className="user-input">
                                <label htmlFor="email">Email address</label><br />
                                <input type="email" value={schoolEmail} onChange={(e) => setSchoolEmail(e.target.value)} />
                            </div>
                            <div className="user-input">
                                <label htmlFor="school-id">School identity number</label><br />
                                <input type="text" value={schoolId} onChange={(e) => setSchoolId(e.target.value)} />
                            </div>
                            <div className="user-input edit-profile-dropdown">
                                <div className="select">
                                    <label htmlFor="school-state">State</label><br />
                                    <button className="edit-dropdown-btn" onClick={(e) => { e.preventDefault(); setToggleState(!toggleState); setToggleLga(false) }}>
                                        <p className="edit-dropdown-text">{schoolState}</p>
                                        <svg width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" xmlns="http://www.w3.org/2000/svg"
                                            className={toggleState ? ("signup-dropdown-down") : (null)}>
                                            <path d="M19.92 8.95001L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.07996 8.95001" stroke="#9E9E9E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    {toggleState ? (
                                        <div className="edit-dropdown"
                                            onClick={(e) => {
                                                setSchoolState(e.target.innerText);
                                                setToggleState(false);
                                                setLga(Object.values(states[0])[Object.keys(states[0]).indexOf(e.target.innerText)]);
                                                setSchoolLga('')
                                            }
                                            }>
                                            {Object.keys(states[0]).map((state, index) => (
                                                <button key={index} onClick={(e) => e.preventDefault()}>{state}</button>
                                            ))}
                                        </div>
                                    ) : (null)}
                                </div>
                                <div className="select">
                                    <label htmlFor="school-state">LGA</label><br />
                                    <button className="edit-dropdown-btn" onClick={(e) => { e.preventDefault(); setToggleLga(!toggleLga); setToggleState(false); }}>
                                        <p className="edit-dropdown-text">{schoolLga}</p>
                                        <svg width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" xmlns="http://www.w3.org/2000/svg"
                                            className={toggleLga ? ("signup-dropdown-down") : (null)}>
                                            <path d="M19.92 8.95001L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.07996 8.95001" stroke="#9E9E9E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    {toggleLga ? (
                                        <div className="edit-dropdown" onClick={(e) => { setSchoolLga(e.target.innerText); setToggleLga(false) }}>
                                            {lga.map((lga, index) => (
                                                <button key={index} onClick={(e) => e.preventDefault()}>{lga}</button>
                                            ))}
                                        </div>
                                    ) : (null)}
                                </div>
                            </div>
                            <h2 id="change-pwd">Change password</h2>
                            <div className="pwd-change">
                                <div className="user-pwd">
                                    <label htmlFor="current-pwd">Current password</label><br />
                                    <div className="pswd">
                                        <input type="password" className="edit-password" placeholder="********************" ref={currentpwd} value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
                                        <button className="signup-showpwd" onClick={(e) => { e.preventDefault(); setShowpwd(!showpwd); toggleCurrentPwdVisibility() }}>
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
                                    </div>
                                </div>
                                <div className="user-pwd">
                                    <label htmlFor="new-pwd">New password</label><br />
                                    <div className="pswd">
                                        <input type="password" className="edit-password" placeholder="********************" ref={newpwd} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                                        <button className="signup-showpwd" onClick={(e) => { e.preventDefault(); setShowNewpwd(!shownewpwd); toggleNewPwdVisibility() }}>
                                            {shownewpwd ? (
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
                                    </div>
                                </div>
                                <div className="user-pwd">
                                    <label htmlFor="confirm-pwd">Confirm password</label><br />
                                    <div className="pswd">
                                        <input type="password" className="edit-password" placeholder="********************" ref={confirmpwd} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                        <button className="signup-showpwd" onClick={(e) => { e.preventDefault(); setCShowpwd(!confirmPassword); toggleConfirmPwdVisibility() }}>
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
                                    </div>
                                </div>
                            </div>
                            <input type="submit" className="submit" onClick={(e) => { e.preventDefault() }} />
                        </div>
                    </form>
                </main>
            </div>
        </div>
    );
}

export default EditProfile;