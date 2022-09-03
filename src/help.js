import { useEffect } from "react";
import Footer from "./footer";
import TopNavbar from "./topNavbar";

const Help = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div>
            <TopNavbar />
            Help and Support
            <Footer />
        </div>
    );
}

export default Help;