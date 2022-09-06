import SideNavbar from "./sideNavbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleSideNav } from "./store/landingDropdown";
import SearchBar from "./searchBar";

const Help = () => {

    const toggleSideNavbar = useDispatch();

    useEffect(() => {
        toggleSideNavbar(toggleSideNav(false));
    }, [toggleSideNavbar])


    return (
        <div>
            <SideNavbar />
            <main className="help">
                <SearchBar />
            </main>
        </div>
    );
}

export default Help;