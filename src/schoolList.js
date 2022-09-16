import SearchBar from "./searchBar";
import SideNavbar from "./sideNavbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleSideNav } from "./store/landingDropdown";
import './css/dashboard.css';
import { school_debtors } from "./allSchoolDebtors";
import { Link } from "react-router-dom";

const SchoolList = () => {

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
            <main className="dashboard-page">
                <SearchBar />
                <div className="display-current-page">
                    <Link to='/dashboard' className="not-current-page">Home</Link>
                    <div className="page-svg-arrow">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.9502 4.07992L15.4702 10.5999C16.2402 11.3699 16.2402 12.6299 15.4702 13.3999L8.9502 19.9199" stroke="#A8A8A8" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <p className="current-page">Schools</p>
                </div>
                <div className="all-schools">
                    <h1>School List</h1>
                    <div className="schools-header">
                        <p>School name</p>
                        <p className="school-header-location">Location</p>
                        <button>View details</button>
                    </div>
                    {school_debtors.map((school, index) => (
                        <div className="school" key={index}>
                            <p className="list-school-name">{school.name}</p>
                            <p className="list-school-location">{school.lga}, {school.state}</p>
                            <Link to={`/dashboard/schools/${school.school_id}&${school.id}`}>View details</Link>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default SchoolList;