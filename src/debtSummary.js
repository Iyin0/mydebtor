import SearchBar from "./searchBar";
import SideNavbar from "./sideNavbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleSideNav } from "./store/landingDropdown";


const DebtSummary = () => {

    const toggleSideNavbar = useDispatch();

    useEffect(() => {
        toggleSideNavbar(toggleSideNav(false));
    }, [toggleSideNavbar])

    return (
        <div>
            <SideNavbar />
            <main className="debt-summary">
                <SearchBar />
            </main>
        </div>
    );
}

export default DebtSummary;