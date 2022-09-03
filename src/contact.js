import TopNavbar from "./topNavbar";
import Footer from "./footer";
import { useEffect } from "react";

const Contact = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div>
            <TopNavbar />
            Contact
            <Footer />
        </div>
    );
}

export default Contact;