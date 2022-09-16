import SearchBar from "./searchBar";
import SideNavbar from "./sideNavbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleSideNav } from "./store/landingDropdown";
import './css/dashboard.css';
import { school_debtors } from "./allSchoolDebtors";
import { Link } from "react-router-dom";

const Dashboard = () => {

    const toggleSideNavbar = useDispatch();

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
            <SideNavbar />
            <main className="dashboard-page">
                <SearchBar />
                <div className="dashboard">
                    <div className="school-list">
                        <h1>School List</h1>
                        {school_debtors.slice(0, 6).map((school, index) => (
                            <div className="school" key={index}>
                                <p className="list-school-name">{school.name}</p>
                                <p className="list-school-location">{school.lga}, {school.state}</p>
                                <Link to={`/dashboard/schools/${school.school_id}&${school.id}`}>View details</Link>
                            </div>
                        ))}
                        <div className="view-schools-btn">
                            <Link className="view-all-schools" to='/dashboard/schools'>View all</Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;