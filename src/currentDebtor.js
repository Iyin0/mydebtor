import SearchBar from "./searchBar";
import SideNavbar from "./sideNavbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleSideNav } from "./store/landingDropdown";


const CurrentDebtor = () => {

    const toggleSideNavbar = useDispatch();

    useEffect(() => {
        toggleSideNavbar(toggleSideNav(false));
    }, [toggleSideNavbar])

    return (
        <div>
            <SideNavbar />
            <main className="current-debtor">
                <SearchBar />
            </main>
        </div>
    );
}

export default CurrentDebtor;