import { useEffect } from "react";
import Footer from "./footer";
import TopNavbar from "./topNavbar";

const Privacy = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div>
            <TopNavbar />
            Privacy Policy
            <Footer />
        </div>
    );
}

export default Privacy;