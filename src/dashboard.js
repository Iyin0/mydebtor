import SearchBar from "./searchBar";
import SideNavbar from "./sideNavbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleSideNav } from "./store/landingDropdown";
import './css/dashboard.css'

const Dashboard = () => {

    const toggleSideNavbar = useDispatch();

    useEffect(() => {
        toggleSideNavbar(toggleSideNav(false));
    }, [toggleSideNavbar])

    return (
        <div>
            <SideNavbar />
            <main className="dashboard-page">
                <SearchBar />
            </main>
        </div>
    );
}

export default Dashboard;