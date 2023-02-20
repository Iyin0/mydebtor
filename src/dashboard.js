import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleSideNav } from "./store/landingDropdown";
import './css/dashboard.css';
import { school_debtors } from "./allSchoolDebtors";
import { Link, useNavigate } from "react-router-dom";
import { posts } from "./posts";

const Dashboard = () => {

    const toggleSideNavbar = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        toggleSideNavbar(toggleSideNav(false));
    }, [toggleSideNavbar])

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {

    }, [])

    return (
        <div>
            <main className="dashboard-page">
                <div className="dashboard">
                    <div className="school-list">
                        <h1>School List</h1>
                        {school_debtors.slice(0, 6).map((school, index) => (
                            <div className="school" key={index}>
                                <p className="list-school-name">{school.name}</p>
                                <p className="list-school-location">{school.lga}, {school.state}</p>
                                <Link to={`/dashboard/schools/${school.school_id}/${school.id}`}>View details</Link>
                            </div>
                        ))}
                        <div className="view-schools-btn">
                            <Link className="view-all-schools" to='/dashboard/schools'>View all</Link>
                        </div>
                    </div>
                    <div className="feeds">
                        <h1>Feed</h1>
                        {posts.slice(0, 6).map((feed, index) => (
                            <div className="feed" key={index} onClick={() => navigate(`/dashboard/feed/${feed.school_id}/${feed.id}`)}>
                                <div className="feed-header">
                                    <img src={feed.image} alt="" className="feed-school-pic" />
                                    <div className="feed-school-info">
                                        <p className="feed-name">{feed.name}</p>
                                        <p className="feed-location">{feed.lga} &#8226; {feed.state}</p>
                                    </div>
                                </div>
                                <p className="feed-body">{feed.message}</p>
                                <div className="feed-bottom">
                                    <div className="feed-iteraction">
                                        <button className="feed-like" onClick={(e) => e.stopPropagation()}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.47998 18.35L10.58 20.75C10.98 21.15 11.88 21.35 12.48 21.35H16.28C17.48 21.35 18.78 20.45 19.08 19.25L21.48 11.95C21.98 10.55 21.08 9.34997 19.58 9.34997H15.58C14.98 9.34997 14.48 8.84997 14.58 8.14997L15.08 4.94997C15.28 4.04997 14.68 3.04997 13.78 2.74997C12.98 2.44997 11.98 2.84997 11.58 3.44997L7.47998 9.54997" stroke="#0C0C0C" strokeWidth="1.5" strokeMiterlimit="10" />
                                                <path d="M2.37988 18.3499V8.5499C2.37988 7.1499 2.97988 6.6499 4.37988 6.6499H5.37988C6.77988 6.6499 7.37988 7.1499 7.37988 8.5499V18.3499C7.37988 19.7499 6.77988 20.2499 5.37988 20.2499H4.37988C2.97988 20.2499 2.37988 19.7499 2.37988 18.3499Z" stroke="#0C0C0C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            {feed.likes.length}
                                        </button>
                                        <button className="feed-comment" onClick={(e) => e.stopPropagation()}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="#0C0C0C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M7 8H17" stroke="#0C0C0C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M7 13H13" stroke="#0C0C0C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            {feed.comment.length}
                                        </button>
                                        <button className="feed-save" onClick={(e) => e.stopPropagation()}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.89 5.87988H5.10999C3.39999 5.87988 2 7.27987 2 8.98987V20.3499C2 21.7999 3.04 22.4199 4.31 21.7099L8.23999 19.5199C8.65999 19.2899 9.34 19.2899 9.75 19.5199L13.68 21.7099C14.95 22.4199 15.99 21.7999 15.99 20.3499V8.98987C16 7.27987 14.6 5.87988 12.89 5.87988Z" stroke="#0C0C0C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M16 8.98987V20.3499C16 21.7999 14.96 22.4099 13.69 21.7099L9.76001 19.5199C9.34001 19.2899 8.65999 19.2899 8.23999 19.5199L4.31 21.7099C3.04 22.4099 2 21.7999 2 20.3499V8.98987C2 7.27987 3.39999 5.87988 5.10999 5.87988H12.89C14.6 5.87988 16 7.27987 16 8.98987Z" stroke="#0C0C0C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z" stroke="#0C0C0C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="feed-timstamp">
                                        <p className="feed-day">{feed.day}</p>
                                        <p className="feed-time">{feed.time}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="view-schools-btn">
                            <Link className="view-all-schools" to='/dashboard/feed'>See more</Link>
                        </div>
                    </div>
                    <button className="add-debtor" onClick={() => navigate("/current-debtors/add-debtor")}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12.75C8.83 12.75 6.25 10.17 6.25 7C6.25 3.83 8.83 1.25 12 1.25C15.17 1.25 17.75 3.83 17.75 7C17.75 10.17 15.17 12.75 12 12.75ZM12 2.75C9.66 2.75 7.75 4.66 7.75 7C7.75 9.34 9.66 11.25 12 11.25C14.34 11.25 16.25 9.34 16.25 7C16.25 4.66 14.34 2.75 12 2.75Z" fill="#FEFEFE" />
                            <path d="M14.8248 15.1313L14.8248 15.1314L14.8276 15.1321C14.9581 15.168 15.0357 15.3005 14.9981 15.4374C14.9622 15.5677 14.8303 15.6453 14.6936 15.6082C13.8264 15.3651 12.9212 15.25 12.0002 15.25C7.51602 15.25 3.66016 18.1738 3.66016 22C3.66016 22.1339 3.54401 22.25 3.41016 22.25C3.2763 22.25 3.16016 22.1339 3.16016 22C3.16016 18.0893 7.03505 14.75 12.0002 14.75C12.9669 14.75 13.9112 14.8744 14.8248 15.1313Z" stroke="#FEFEFE" />
                            <path d="M19.4998 18.73H16.5098C16.0998 18.73 15.7598 18.39 15.7598 17.98C15.7598 17.57 16.0998 17.23 16.5098 17.23H19.4998C19.9098 17.23 20.2498 17.57 20.2498 17.98C20.2498 18.39 19.9098 18.73 19.4998 18.73Z" fill="#FEFEFE" />
                            <path d="M18 20.26C17.59 20.26 17.25 19.92 17.25 19.51V16.52C17.25 16.11 17.59 15.77 18 15.77C18.41 15.77 18.75 16.11 18.75 16.52V19.51C18.75 19.93 18.41 20.26 18 20.26Z" fill="#FEFEFE" />
                        </svg>
                        <p className="new-debtor">Add new debtor</p>
                    </button>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;