import './css/about.css'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleLandingDropdown } from './store/landingDropdown';

const About = () => {

    const navigate = useNavigate();

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const hideDropdown = useDispatch();

    const hideTopNav = () => {
        hideDropdown(toggleLandingDropdown(false))
    }

    return (
        <div>
            <main className="about" onClick={() => hideTopNav()} >
                <div className="about-first">
                    <div className="about-first-left">
                        <h2 className="about-text1">Think About This...</h2>
                        <p className="about-text2">It is not fair to schools, it's owners and staff when students owe a fee and move on to other
                            schools to start on a fresh slate without clearing the debts from their previous schools. Infact, chances are that they
                            go on to owe and move on again and again, and again!</p>
                        <p className="about-text2">What if we could check this 'virus' before it completely ruins our educational system?</p>
                    </div>
                    <div className="about-first-right">
                        <img src={require('./img/Group 533.png')} alt="" />
                    </div>
                </div>
                <div className="about-second-container">
                    <div className="about-second">
                        <div className="about-second-left">
                            <img src={require('./img/Group 535.png')} alt="" />
                        </div>
                        <div className="about-second-right">
                            <h2 className="about-text1">What Do We Offer You?</h2>
                            <p className="about-text2">'My Debtors' is an online database that helps schools keep record of, and track defaulting
                                students within a locality, to ensure that they do not enrol in any other school 'registered' within that locality
                                until their debts are well sorted.</p>
                            <button className="about-btn1" onClick={() => navigate('/signup')}>Click to get started</button>
                        </div>
                    </div>
                </div>
                <div className="about-third-container">
                    <div className="about-third">
                        <div className="about-card1">
                            <div className="about-card-head1">
                                <h3>Update</h3>
                            </div>
                            <div className="about-card-body">
                                <p>We update our data as soon as there's a new Debtor detail available.</p>
                            </div>
                        </div>
                        <div className="about-card2">
                            <div className="about-card-head2">
                                <h3>Track</h3>
                            </div>
                            <div className="about-card-body">
                                <p>We track your Debtor so they do not enroll in another school without paying you.</p>
                            </div>
                        </div>
                        <div className="about-card3">
                            <div className="about-card-head3">
                                <h3>Retrieve</h3>
                            </div>
                            <div className="about-card-body">
                                <p>We help you Retrieve all your money without stress.</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-fourth">
                        <div className="our-vision-container">
                            <div className="our-vision">
                                <div className="vision-head">
                                    <div className="vision-head-line"></div>
                                    <div className="vision-head-text">
                                        <p>Our <span>Vision</span></p>
                                    </div>
                                </div>
                                <p className="vision-body">To ensure that there's less number of school's beeing owed any fee, hence resulting in the growth of the Educational System</p>
                            </div>
                        </div>
                        <div className="our-mission-container">
                            <div className="our-mission">
                                <div className="mission-head">
                                    <div className="mission-head-text">
                                        <p>Our <span>Mission</span></p>
                                    </div>
                                    <div className="mission-head-line"></div>
                                </div>
                                <p className="mission-body">We compile, keep and track data of students that are indebted to a school.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-fifth-container">
                    <div className="about-fifth">
                        <h2>Here Are a Number of Registered Schools</h2>
                        <div className="about-fifth-schools1">
                            <img src={require('./img/stafford-county-public-school.png')} alt="" />
                            <img src={require('./img/School-Badge.png')} alt="" />
                            <img src={require('./img/cairo.png')} alt="" />
                            <img src={require('./img/kuala.png')} alt="" />
                            <img className="about-school-last" src={require('./img/preload.png')} alt="" />
                        </div>
                        <div className="about-fifth-schools2">
                            <img src={require('./img/School_Logo_1 1.png')} alt="" />
                            <img src={require('./img/Rectangle 67.png')} alt="" />
                            <img src={require('./img/OakfieldLogo 1.png')} alt="" />
                            <img src={require('./img/Rectangle 68.png')} alt="" />
                        </div>
                        <p>Register to start viewing and exploring the records of schools in your locality.</p>
                        <div className="about-btn-container"><button className="about-btn1" onClick={() => navigate('/signup')}>Click to get started</button></div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default About;