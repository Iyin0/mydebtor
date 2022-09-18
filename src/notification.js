import SearchBar from "./searchBar";
import SideNavbar from "./sideNavbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleSideNav } from "./store/landingDropdown";
import './css/notification.css';
import { Link } from "react-router-dom";

const Notification = () => {

    const toggleSideNavbar = useDispatch();

    useEffect(() => {
        toggleSideNavbar(toggleSideNav(false));
    }, [toggleSideNavbar])

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div>
            <SideNavbar />
            <main className="notification-page">
                <SearchBar />
                <div className="notificaton">
                    <h1>Notifications</h1>
                    <div className="notifications-container">
                        <h2 className="notification-header">New</h2>
                        <div className="notification-container">
                            <div className="notification-item">
                                <div className="notification-img">
                                    <img src={require("./img/Ellipse 5.png")} alt="" />
                                </div>
                                <div className="notification-content">
                                    <p className="notification-info">First Example School <span className="notification-action">commented on your post</span></p>
                                    <p className="notification-time">2 hours ago</p>
                                </div>
                            </div>
                            <div className="notification-item">
                                <div className="notification-img">
                                    <img src={require("./img/invi 1 1.png")} alt="" />
                                </div>
                                <div className="notification-content">
                                    <p className="notification-info">Mrs. Goodness Oloruntoyin <span className="notification-action">contended on your your debt post</span></p>
                                    <p className="notification-time">3 hours ago</p>
                                </div>
                            </div>
                            <div className="notification-item">
                                <div className="notification-img">
                                    <img src={require("./img/OakfieldLogo 1.png")} alt="" />
                                </div>
                                <div className="notification-content">
                                    <p className="notification-info">Seventh Example School <span className="notification-action">commented on your post</span></p>
                                    <p className="notification-time">5 hours ago</p>
                                </div>
                            </div>
                            <div className="notification-item">
                                <div className="notification-img">
                                    <img src={require("./img/School-Badge.png")} alt="" />
                                </div>
                                <div className="notification-content">
                                    <p className="notification-info">Fifteenth Example School <span className="notification-action">and 2 others commented on your post</span></p>
                                    <p className="notification-time">6 hours ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="notifications-container">
                        <h2 className="notification-header">Earlier</h2>
                        <div className="notification-container">
                            <div className="notification-item">
                                <div className="notification-img">
                                    <img src={require("./img/preloader 1.png")} alt="" />
                                </div>
                                <div className="notification-content">
                                    <p className="notification-info">Eleventh Example School <span className="notification-action">and 4 others commented on your post</span></p>
                                    <p className="notification-time">Yesterday at 12:45pm</p>
                                </div>
                            </div>
                            <div className="notification-item">
                                <div className="notification-img">
                                    <img src={require("./img/invi 1 1.png")} alt="" />
                                </div>
                                <div className="notification-content">
                                    <p className="notification-info">Mr. Alex Joe <span className="notification-action">contended on your your debt post</span></p>
                                    <p className="notification-time">Yesterday at 8:20am</p>
                                </div>
                            </div>
                            <div className="notification-item">
                                <div className="notification-img">
                                    <img src={require("./img/kuala.png")} alt="" />
                                </div>
                                <div className="notification-content">
                                    <p className="notification-info">Sixth Example School <span className="notification-action">commented on your post</span></p>
                                    <p className="notification-time">Tuesday at 15:25pm</p>
                                </div>
                            </div>
                            <div className="notification-item">
                                <div className="notification-img">
                                    <img src={require("./img/preload.png")} alt="" />
                                </div>
                                <div className="notification-content">
                                    <p className="notification-info">Tenth Example School <span className="notification-action">and 5 others commented on your post</span></p>
                                    <p className="notification-time">Monday at 11:23am</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="more-notifications">See more</button>
                </div>
            </main>
        </div>
    );
}

export default Notification;