import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import TopNavbar from "./topNavbar";
import './css/contendEntry.css'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleLandingDropdown } from './store/landingDropdown';

const ContendEntry = () => {

    const navigate = useNavigate();

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const hideDropdown = useDispatch();

    const hideTopNav = () => {
        hideDropdown(toggleLandingDropdown(false))
    }


    return (
        <div>
            <TopNavbar />
            <main className="contend-entry" onClick={() => hideTopNav()}>
                <div className="contend-entry-card">
                    <h1 className="contend-entry-head">Input your debt details</h1>
                    <form action="" className="contend-entry-form">
                        <label htmlFor="" className="contend-label">Email Address</label>
                        <input type="email" placeholder="Email@mydebtor.com" className="contend-input" />
                        <label htmlFor="" className="contend-label">Debt ID</label>
                        <input type="text" placeholder="FGC-GL-1021-27082022" className="contend-input" />
                        <button className="submit-entry" onClick={(e) => { e.preventDefault(); navigate('/contend-debt') }}>Submit</button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default ContendEntry;