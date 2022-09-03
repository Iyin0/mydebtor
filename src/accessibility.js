import { useEffect } from "react";
import Footer from "./footer";
import TopNavbar from "./topNavbar";

const Accessibility = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div>
            <TopNavbar />
            Accessibility Statement
            <Footer />
        </div>
    );
}

export default Accessibility;