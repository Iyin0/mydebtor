import SearchBar from "./searchBar";
import SideNavbar from "./sideNavbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleSideNav } from "./store/landingDropdown";
import './css/debtSummary.css'


const DebtSummary = () => {

    const toggleSideNavbar = useDispatch();

    useEffect(() => {
        toggleSideNavbar(toggleSideNav(false));
    }, [toggleSideNavbar])

    return (
        <div>
            <SideNavbar />
            <main className="debt-summary-page">
                <SearchBar />
            </main>
        </div>
    );
}

export default DebtSummary;