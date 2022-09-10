import SearchBar from "./searchBar";
import SideNavbar from "./sideNavbar";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSideNav } from "./store/landingDropdown";
import './css/debtSummary.css';
import { all_debtors } from "./allDebtors";


const DebtSummary = () => {

    const [isResolved, setIsResolved] = useState([]);
    const [isPending, setIsPending] = useState([]);
    const [showResolved, setShowResolved] = useState(false)

    const toggleSideNavbar = useDispatch();

    useEffect(() => {
        toggleSideNavbar(toggleSideNav(false));
    }, [toggleSideNavbar])

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {

        setIsResolved(all_debtors.filter((e) => {
            return e.status === 'Successful' || e.status === 'Failed'
        }))

        setIsPending(all_debtors.filter((e) => {
            return e.status === 'Logged' || e.status === 'None'
        }))

    }, [])


    return (
        <div>
            <SideNavbar />
            <main className="debt-summary-page">
                <SearchBar />
                <div className="debt-summary">
                    <div className="debt-summary-top">
                        <div className="toggle-summary">
                            <button className={showResolved ? ("not-active-summary") : ("active-summary")} onClick={() => setShowResolved(false)}>Pending</button>
                            <button className={!showResolved ? ("not-active-summary") : ("active-summary")} onClick={() => setShowResolved(true)}>Resolved</button>
                        </div>
                        <button className="sort-summary">
                            Sort by
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.9201 15.5501L13.4001 9.03014C12.6301 8.26014 11.3701 8.26014 10.6001 9.03014L4.08008 15.5501" stroke="#5C99D6" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="debt-summary-header">
                        <p className="header-name">Name</p>
                        <p className="header-amount">Amount</p>
                        <p className="header-date">Entry Date</p>
                        <p className="header-status">Contention Status</p>
                    </div>
                    {showResolved ? (
                        <div className="debt-summary-list">
                            {isResolved.map((debtor, index) => (
                                <div className="debt-info" key={index}>
                                    <div className={debtor.status === 'Successful' ? ("debtor-color-successful") : ("debtor-color-failed")}></div>
                                    <div className="debt-summary-info">
                                        <p className="debt-name">{debtor.ward}</p>
                                        <p className="debt-amount">{debtor.owes}</p>
                                        <p className="debt-date">{debtor.date}</p>
                                        <div className="debt-status">
                                            <p className={debtor.status === 'Successful' ? ("debtor-status-successful") : ("debtor-status-failed")}>{debtor.status}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="debt-summary-list">
                            {isPending.map((debtor, index) => (
                                <div className="debt-info" key={index}>
                                    <div className={debtor.status === 'Logged' ? ("debtor-color-logged") : ("debtor-color-none")}></div>
                                    <div className="debt-summary-info">
                                        <p className="debt-name">{debtor.ward}</p>
                                        <p className="debt-amount">{debtor.owes}</p>
                                        <p className="debt-date">{debtor.date}</p>
                                        <div className="debt-status">
                                            <p className={debtor.status === 'Logged' ? ("debtor-status-logged") : ("debtor-status-none")}>{debtor.status}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

export default DebtSummary;